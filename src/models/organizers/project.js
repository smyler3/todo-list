import projectFactory from "./factories/projectFactory";

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
    setName(project, title);
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
    incrementProjectCount();
    return count;
}

function setName(project, title) {
    project.title = title;
}

function setDescription(project, description) {
    project.description = description;
}

function getProjectCount() {
    return projectCount;
}

function incrementProjectCount() {
    projectCount++;
}

let projectCount = 0;

export { createDefaultProject, createProject, addTask, editProject, deleteProject }