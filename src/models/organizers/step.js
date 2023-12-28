import stepFactory from "./factories/stepFactory";
import { Status } from "../enums/status";
import { clearPage, renderProjectPage } from "../../pages/display";

/* Create a new step and adds to a task */
function createStep(task, title) {
    const projectID = task.getProjectID();
    const taskID = task.getTaskID();
    const stepID = task.getNextStepCount();
    const newStep = stepFactory(title, projectID, taskID, stepID);

    task.addStep(newStep);
}

/* Edit an existing step */
function editStep(step, title) {
    step.setTitle(title);
}

// /* Delete an exisiting step */
// function deleteStep(step) {
//     delete step.title;
// }

function createStepFromForm() {
    const title = document.querySelector("#step-title").value;
    const project = getCurrentProject();
    const task = project.getCurrentTask();

    createStep(task, title);
    clearPage();
    renderProjectPage(project);
}

/* Set a step to incomplete status */
function setIncomplete() {
    if (this.status === Status.TODO) {
        setStatus(Status.INCOMPLETE);
    }
}

export { createStep, editStep, createStepFromForm, setIncomplete }