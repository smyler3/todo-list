import { Status } from "../../models/enums/status";
import { getCurrentProject } from "../../models/organizers/project";
import { completeTask } from "../../models/organizers/task";
import { setStepCardCompleted } from "../../pages/projectPage/stepsCardHandler";
import { setTaskCardCompleted } from "../../pages/projectPage/tasksCardHandler";

/* Handles marking a task and associated steps as completed after the box on a task card is checked */
function createTaskCompletionListener(checkbox) {
    checkbox.addEventListener("click", () => {
        function setCurrentTaskFromID(taskID) {
            getCurrentProject().getIncompleteTasks().forEach(task => {
                if (String(task.getTaskID()) === taskID) {
                    getCurrentProject().setCurrentTask(task);
                    return;
                }
            })
        }

        function setCurrentStepFromID(stepID) {
            getCurrentProject().getCurrentTask().getIncompleteSteps().forEach(step => {
                if (String(step.getStepID()) === stepID) {
                    getCurrentProject().getCurrentTask().setCurrentStep(step);
                    return;
                }
            })
        }

        // Set current task from task card id value
        const stepCard = checkbox.parentElement.parentElement;
        setCurrentTaskFromID(String(stepCard.getAttribute("data-task-id")));

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

/* Handles marking a step as completed after the box on a step card is checked */
function createStepCompletionListener(checkbox) {
    checkbox.addEventListener("click", () => {
        function setCurrentTaskFromID(taskID) {
            getCurrentProject().getIncompleteTasks().forEach(task => {
                if (String(task.getTaskID()) === taskID) {
                    getCurrentProject().setCurrentTask(task);
                    return;
                }
            })
        }

        function setCurrentStepFromID(stepID) {
            getCurrentProject().getCurrentTask().getIncompleteSteps().forEach(step => {
                if (String(step.getStepID()) === stepID) {
                    getCurrentProject().getCurrentTask().setCurrentStep(step);
                    return;
                }
            })
        }

        // Set current task and step from step card id values
        const stepCard = checkbox.parentElement.parentElement;
        setCurrentTaskFromID(String(stepCard.getAttribute("data-task-id")));
        setCurrentStepFromID(String(stepCard.getAttribute("data-step-id")));

        // Mark the step as completed
        getCurrentProject().getCurrentTask().getCurrentStep().setStatus(Status.COMPLETED);
        // Move the step to completed steps in task
        getCurrentProject().getCurrentTask().removeFromIncompleteSteps(getCurrentProject().getCurrentTask().getCurrentStep());
        // Move the step card to bottom of current task and add 'completed' class
        setStepCardCompleted(getCurrentProject().getCurrentTask().getCurrentStep());
    });
}

export { createTaskCompletionListener, createStepCompletionListener }