import stepFactory from "./factories/stepFactory.js";
import { clearPage, renderProjectPage } from "../../pages/display.js";
import { getCurrentProject, getSerializedProjects } from "./project.js";
import { saveProjectsToLocalStorage } from "../../modules/localStorage/index.js";
import { Status } from "../enums/status.js";

/* Create a new step and adds to a task */
function createStep(task, title) {
    const projectID = task.getProjectID();
    const taskID = task.getTaskID();
    const stepID = task.getNextStepCount();
    const newStep = stepFactory(title, projectID, taskID, stepID);

    task.addToIncompleteSteps(newStep);
    task.setCurrentStep(newStep);

    // Save change locally
    saveProjectsToLocalStorage(getSerializedProjects());
}

/* Creates a step from creation form */
function createStepFromForm() {
    const title = document.querySelector("#step-title").value;

    createStep(getCurrentProject().getCurrentTask(), title);
    clearPage();
    renderProjectPage(getCurrentProject());
}

/* Edits a step based on information in edit form */
function editStepFromForm(step) {
    const newTitle = document.querySelector("#step-title").value;

    step.setTitle(newTitle);

    // Save change locally
    saveProjectsToLocalStorage(getSerializedProjects());
}

/* Convert the step to a JSON-friendly format */
function serializeStep(step) {
    const title = step.getTitle();
    const status = step.getStatus();

    return {
        title,
        status,
    }
}

/* Create a step from JSON format data */
function deserializeStep(task, step) {
    // Creating step from data
    createStep(task, step.title);
    const newStep = task.getCurrentStep();

    // Adding to appropriate location
    if (step.status === Status.COMPLETED) {
        newStep.setStatus(Status.COMPLETED);
        task.removeFromIncompleteSteps();
    }
}

export { 
    createStep, 
    createStepFromForm, editStepFromForm, 
    serializeStep, deserializeStep
}