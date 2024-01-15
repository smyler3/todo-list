import { Status } from "../../models/enums/status";
import { getCurrentProject } from "../../models/organizers/project";
import { completeTask } from "../../models/organizers/task";
import { clearPage, renderProjectPage } from "../../pages/display";
import { setStepCardCompleted, setStepCardIncomplete } from "../../pages/projectPage/stepsCardHandler";
import { setTaskCardCompleted, setTaskCardIncomplete } from "../../pages/projectPage/tasksCardHandler";

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

function taskStatusToggleListener(checkbox) {
    const taskCard = checkbox.parentElement.parentElement;
    // Searches both lists the current task
    setCurrentTaskFromID(getCurrentProject().getIncompleteTasks(), String(taskCard.getAttribute("data-task-id")));
    setCurrentTaskFromID(getCurrentProject().getCompletedTasks(), String(taskCard.getAttribute("data-task-id")));

    const task = getCurrentProject().getCurrentTask();

    // Toggle the tasks complete status
    task.swapStatus();

    // Introduce a slight visual delay
    setTimeout(() => {
        // Call the template function based on the completion status
        if (task.getStatus() === Status.COMPLETED) {
            setTaskStatusCompleteHandler(task);
        } else {
            setTaskStatusIncompleteHandler(task);
        }
    }, 100);
}

function setTaskStatusCompleteHandler(task) {
    getCurrentProject().removeFromIncompleteTasks(task);
    // const taskCard = document.querySelector(`[data-task-id="${task.getTaskID()}"]`);
    // setTaskCardCompleted(taskCard);
    // Moves the card wrapper to the completed tasks section 
    console.log("yo", getCurrentProject().getCompletedTasks());
    clearPage();
    renderProjectPage(getCurrentProject());
}

function setTaskStatusIncompleteHandler(task) {
    getCurrentProject().removeFromCompletedTasks(task);
    // const taskCard = document.querySelector(`[data-task-id="${task.getTaskID()}"]`);
    // setTaskCardIncomplete(taskCard);
    // Moves the card wrapper to the incomplete tasks section 
    console.log("yo", getCurrentProject().getCompletedTasks());
    clearPage();
    renderProjectPage(getCurrentProject());
}

/* Handles initialization of the event listener for marking the completion status of tasks */
function createTaskStatusListener(checkbox) {
    checkbox.addEventListener("change", () => taskStatusToggleListener(checkbox));
}

function stepStatusToggleListener(checkbox) {
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
    }, 100);
}

function setStepStatusCompleteHandler(step) {
    getCurrentProject().getCurrentTask().removeFromIncompleteSteps(step);
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    setStepCardCompleted(stepCard);

    // Moves the card to the completed steps list
    const parent = stepCard.parentElement;
    parent.nextSibling.appendChild(stepCard);
}

function setStepStatusIncompleteHandler(step) {
    getCurrentProject().getCurrentTask().removeFromCompletedSteps(step);
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    setStepCardIncomplete(stepCard);

    // Moves the card to the incomplete steps list
    const parent = stepCard.parentElement;
    parent.previousSibling.appendChild(stepCard);
}

/* Handles initialization of the event listener for marking the completion status of steps */
function createStepStatusListener(checkbox) {
    checkbox.addEventListener("change", () => stepStatusToggleListener(checkbox));
}

export { createTaskStatusListener, createStepStatusListener }