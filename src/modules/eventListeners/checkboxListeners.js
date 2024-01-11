import { Status } from "../../models/enums/status";
import { getCurrentProject } from "../../models/organizers/project";
import { completeTask } from "../../models/organizers/task";
import { setStepCardCompleted, setStepCardIncomplete } from "../../pages/projectPage/stepsCardHandler";
import { setTaskCardCompleted } from "../../pages/projectPage/tasksCardHandler";

function setCurrentTaskFromID(tasks, taskID) {
    tasks.forEach(task => {
        if (String(task.getTaskID()) === taskID) {
            getCurrentProject().setCurrentTask(task);
            return;
        }
    });
}

function setCurrentStepFromID(steps, stepID) {
    steps.forEach(step => {
        if (String(step.getStepID()) === stepID) {
            getCurrentProject().getCurrentTask().setCurrentStep(step);
            return;
        }
    });
}

/* Handles marking a task and associated steps as completed after the box on a task card is checked */
function createTaskCompletionListener(checkbox) {
    checkbox.addEventListener("click", () => {
        // Set current task from task card id value
        const stepCard = checkbox.parentElement.parentElement;
        setCurrentTaskFromID(getCurrentProject().getIncompleteTasks(), String(stepCard.getAttribute("data-task-id")));

        // Mark the task and all steps as completed
        completeTask(getCurrentProject().getCurrentTask());
        // Add 'completed' class to each child step card and tick checkbox
        getCurrentProject().getCurrentTask().getIncompleteSteps().forEach(step => {
            const stepCard = document.querySelector(`.step-card[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

            stepCard.classList.add("completed");
            stepCard.firstChild.firstChild.checked = true;
        })
        // Move the task to completed tasks in project
        getCurrentProject().removeFromIncompleteTasks(getCurrentProject().getCurrentTask());
        // Move the task card to completed tasks section of project and add 'completed' class
        setTaskCardCompleted(getCurrentProject().getCurrentTask());
    });
}

function stepStatusToggleListener(checkbox) {
    // console.log(checkbox);
    // console.log(checkbox.parentElement);
    // console.log(checkbox.parentElement.parentElement);
    // alert('break');
    const stepCard = checkbox.parentElement.parentElement;
    setCurrentTaskFromID(getCurrentProject().getIncompleteTasks(), String(stepCard.getAttribute("data-task-id")));
    // Searches both lists the current step
    setCurrentStepFromID(getCurrentProject().getCurrentTask().getIncompleteSteps(), String(stepCard.getAttribute("data-step-id")));
    setCurrentStepFromID(getCurrentProject().getCurrentTask().getCompletedSteps(), String(stepCard.getAttribute("data-step-id")));

    const step = getCurrentProject().getCurrentTask().getCurrentStep();

    // Toggle the steps complete status
    step.swapStatus();

    // Introduce a slight visual delay
    setTimeout(() => {
        // Call the template function based on the completion status
        if (step.getStatus() === Status.COMPLETED) {
            setStepStatusCompleteHandler(step);
        } else {
            setStepStatusIncompleteHandler(step);
        }
    }, 300);
}

function setStepStatusCompleteHandler(step) {
    getCurrentProject().getCurrentTask().removeFromIncompleteSteps(step);
    setStepCardCompleted(step);
}

function setStepStatusIncompleteHandler(step) {
    getCurrentProject().getCurrentTask().removeFromCompletedSteps(step);
    setStepCardIncomplete(step);
}

/* Handles initialization of the event listener for marking the completion status of steps */
function createStepStatusListener(checkbox) {
    checkbox.addEventListener("change", () => stepStatusToggleListener(checkbox));
}

export { createTaskCompletionListener, createStepStatusListener }