import stepFactory from "../../factories/stepFactory";
import { Status } from "../enums/status";

/* Create a new step */
function createStep(name, dueDate, status) {
    return stepFactory(name, dueDate, status);
}

/* Edit an existing step */
function editStep(step, name, dueDate, status) {
    setName(step, name);
    setDueDate(step, dueDate);
    setStatus(step, status);
}

/* Delete an exisiting step */
function deleteStep(step) {
    delete step.name;
    delete step.dueDate;
    delete step.status;
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

function setDueDate(step, dueDate) {
    step.dueDate = dueDate;
}

function setStatus(step, status) {
    step.status = status;
}

export { createStep, editStep, deleteStep, setIncomplete }