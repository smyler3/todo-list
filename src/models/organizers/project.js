import projectFactory from "./factories/projectFactory";
import { createTask } from "./task";

/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    const projectID = getNextProjectCount();

    return projectFactory(
        "Miscellaneous", 
        "A collection of tasks, that weren't assigned a project",
        projectID,
    )
}

/* Create a new project */
function createProject(title, description) {
    const projectID = getNextProjectCount();

    return projectFactory(
        title,
        description,
        projectID,
    )
}

/* Add a task to a project */
function addTask(project, task) {
    project.tasks.push(task);
}

/* Edit an exisiting project */
function editProject(project, title, description) {
    setTitle(project, title);
    setDescription(project, description);
}

/* Delete an existing project */
function deleteProject(project) {
    delete project.title;
    delete project.description;
}

/* Returns project count and increments it */
function getNextProjectCount() {
    const count = projectCount;
    projectCount++;
    return count;
}

function setTitle(project, title) {
    project.title = title;
}

function setDescription(project, description) {
    project.description = description;
}

function getProjectCount() {
    return projectCount;
}

let projectCount = 0;

export { createDefaultProject, createProject, addTask, editProject, deleteProject }