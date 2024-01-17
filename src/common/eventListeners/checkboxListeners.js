import { Status } from "../../models/enums/status.js";
import { getCurrentProject } from "../../models/organizers/project.js";
import { completeTask } from "../../models/organizers/task.js";
import { clearPage, renderProjectPage } from "../../display/display.js";
import { setStepCardCompleted, setStepCardIncomplete } from "../../display/projectPage/stepsCardHandler.js";
import { setCurrentTaskFromID, setCurrentStepFromID } from "./utility";

/* Handles toggling the completion status logic for a task */
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

/* Handles marking a task as completed */
function setTaskStatusCompleteHandler(task) {
    getCurrentProject().removeFromIncompleteTasks(task);
    // Moves the card wrapper to the completed tasks section 
    clearPage();
    renderProjectPage(getCurrentProject());
}

/* Handles marking a task as incomplete */
function setTaskStatusIncompleteHandler(task) {
    getCurrentProject().removeFromCompletedTasks(task);
    // Moves the card wrapper to the incomplete tasks section 
    clearPage();
    renderProjectPage(getCurrentProject());
}

/* Handles initialization of the event listener for marking the completion status of tasks */
function createTaskStatusListener(checkbox) {
    checkbox.addEventListener("change", () => taskStatusToggleListener(checkbox));
}

/* Handles toggling the completion status logic for a step */
function stepStatusToggleListener(checkbox) {
    const stepCard = checkbox.parentElement.parentElement;
    setCurrentTaskFromID(getCurrentProject().getIncompleteTasks(), String(stepCard.getAttribute("data-task-id")));
    // Searches both lists the current step
    const currentTask = getCurrentProject().getCurrentTask();
    setCurrentStepFromID(currentTask.getIncompleteSteps(), String(stepCard.getAttribute("data-step-id")));
    setCurrentStepFromID(currentTask.getCompletedSteps(), String(stepCard.getAttribute("data-step-id")));

    const step = currentTask.getCurrentStep();

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

/* Handles marking a step as completed */
function setStepStatusCompleteHandler(step) {
    getCurrentProject().getCurrentTask().removeFromIncompleteSteps(step);
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    setStepCardCompleted(stepCard);

    // Moves the card to the completed steps list
    const parent = stepCard.parentElement;
    parent.nextSibling.appendChild(stepCard);
}

/* Handles marking a step as incomplete */
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