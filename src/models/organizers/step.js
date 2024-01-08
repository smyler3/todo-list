import stepFactory from "./factories/stepFactory";
import { clearPage, renderProjectPage } from "../../pages/display";
import { getCurrentProject } from "./project";

/* Create a new step and adds to a task */
function createStep(task, title) {
    const projectID = task.getProjectID();
    const taskID = task.getTaskID();
    const stepID = task.getNextStepCount();
    const newStep = stepFactory(title, projectID, taskID, stepID);

    task.addToIncompleteSteps(newStep);
}

/* Edit an existing step */
function editStep(step, title) {
    step.setTitle(title);
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
}

export { createStep, editStep, createStepFromForm, editStepFromForm }