import taskFactory from "../../factories/taskFactory";
import { Status } from "../enums/status";

/* Create a new task */
function createTask(name, description, dueDate, priority, status) {
    return taskFactory(name, description, dueDate, priority, status);
}

/* Edit an existing task */
function editTask(task, name, description, dueDate, priority, status) {
    setName(task, name);
    setDescription(task, description);
    setDueDate(task, dueDate);
    setPriority(task, priority);
    setStatus(task, status);
}

/* Delete an exisiting task */
function deleteTask(task) {
    delete task.name;
    delete task.description;
    delete task.dueDate;
    delete task.priority;
    delete task.status;
}

/* Add a step to a task */
function addStep(task, step) {
    task.steps.push(step);
}

/* Complete a task and convert all steps to required status*/
function completeTask(task) {
    // Mark incomplete steps
    task.setStatus(Status.COMPLETED);
    task.steps.array.forEach(step => {
        step.setIncomplete();
    });
}

function setName(task, name) {
    task.name = name;
}

function setDescription(task, description) {
    task.description = description;
}

function setDueDate(task, dueDate) {
    task.dueDate = dueDate;
}

function setPriority(task, priority) {
    task.priority = priority;
}

function setStatus(task, status) {
    task.status = status;
}

export { createTask, editTask, deleteTask, addStep, completeTask }