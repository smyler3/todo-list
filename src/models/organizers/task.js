import taskFactory from "./factories/taskFactory";
import { Status } from "../enums/status";
import { getCurrentProject, getProjects, getSerializedProjects } from "./project";
import { renderProjectPage, clearPage } from "../../pages/display.js";
import { saveProjectsToLocalStorage } from "../../modules/localStorage/index.js";

/* Create a new task and adds to a project */
function createTask(project, title, description, dueDate, priority) {
    const projectID = project.getProjectID();
    const taskID = project.getNextTaskCount();
    const newTask = taskFactory(title, description, dueDate, priority, projectID, taskID);

    project.addToIncompleteTasks(newTask);

    // Save change locally
    saveProjectsToLocalStorage(getSerializedProjects());
}

/* Edit an existing task */
function editTask(task, title, description, dueDate, priority, status) {
    task.setTitle(title);
    task.setDescription(task, description);
    task.setDueDate(task, dueDate);
    task.setPriority(task, priority);
    task.setStatus(task, status);
}

/* Creates a task from creation form */
function createTaskFromForm() {
    const title = document.querySelector("#task-title").value;
    const desc = document.querySelector("#task-desc").value;
    const date = document.querySelector("#task-date").value;
    const priority = document.querySelector('input[name="priority"]:checked').value;

    createTask(getCurrentProject(), title, desc, date, priority);
}

/* Edits a task based on information in edit form */
function editTaskFromForm(task) {
    const newTitle = document.querySelector("#task-title").value;
    const newDesc = document.querySelector("#task-desc").value;
    const newDate = document.querySelector("#task-date").value;
    const newPriority = document.querySelector("input[name='priority']:checked").value;

    task.setTitle(newTitle);
    task.setDescription(newDesc);
    task.setDueDate(newDate);
    task.setPriority(newPriority);
}

/* Complete a task and convert all steps to required status*/
function completeTask(task) {
    task.setStatus(Status.COMPLETED);
    // Mark incomplete steps
    task.getIncompleteSteps().forEach(step => {
        step.setStatus(Status.COMPLETED);
    });
}

/* Convert the task to a JSON-friendly format */
function serializeTask(task) {
    const title = task.getTitle();
    const desc = task.getDescription();
    const dueDate = task.getDueDate();
    const priority = task.getPriority();
    const status = task.getStatus();
    const incompleteSteps = task.getSerializedIncompleteSteps();
    const completedSteps = task.getSerializedCompletedSteps();
    const projectID = task.getProjectID();
    const taskID = task.getTaskID();

    return {
        title,
        desc,
        dueDate,
        priority,
        status,
        incompleteSteps,
        completedSteps,
        projectID,
        taskID,
    }
}

export { createTask, editTask, completeTask, createTaskFromForm, editTaskFromForm, serializeTask }