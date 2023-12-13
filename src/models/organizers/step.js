import stepFactory from "./factories/stepFactory";
import { Status } from "../enums/status";
import { addStep } from "./task";

/* Create a new step and adds to a task */
function createStep(task, name) {
    const projectID = task.projectID;
    const taskID = task.taskID;
    const stepID = task.getNextStepCount();
    const newStep = stepFactory(name, projectID, taskID, stepID);

    addStep(task, newStep);
}

/* Edit an existing step */
function editStep(step, name) {
    setName(step, name);
}

/* Delete an exisiting step */
function deleteStep(step) {
    delete step.name;
}

/* Set a step to incomplete status */
function setIncomplete() {
    if (this.status === Status.TODO) {
        setStatus(Status.INCOMPLETE);
    }
}

function setName(step, name) {
    step.name = name;
}

export { createStep, editStep, deleteStep, setIncomplete }