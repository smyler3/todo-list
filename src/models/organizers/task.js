import taskFactory from "./factories/taskFactory";
import { Status } from "../enums/status";
import { addTask } from "./project";

/* Create a new task and adds to a project */
function createTask(project, title, description, dueDate, priority) {
    const projectID = project.projectID;
    const taskID = project.getNextTaskCount();
    const newTask = taskFactory(title, description, dueDate, priority, projectID, taskID);

    addTask(project, newTask);
}

/* Edit an existing task */
function editTask(task, title, description, dueDate, priority, status) {
    setTitle(task, title);
    setDescription(task, description);
    setDueDate(task, dueDate);
    setPriority(task, priority);
    setStatus(task, status);
}

/* Delete an exisiting task */
function deleteTask(task) {
    delete task.title;
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

function setTitle(task, title) {
    task.title = title;
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