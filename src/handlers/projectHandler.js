import projectFactory from "../factories/projectFactory";

/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    return projectFactory(
        "Miscellaneous", 
        "A collection of tasks, that weren't assigned a project",
        null,
        null,
        null,
    )
}

/* Creates a new project */
function createProject(name, description, dueDate, priority, status) {
    return projectFactory(
        name,
        description,
        dueDate,
        priority,
        status,
    )
}

/* Edits an exisiting project */
function editProject(project, name, description, dueDate, priority, status) {
    project = projectFactory(
        name,
        description,
        dueDate,
        priority,
        status,
    )
}

/* Deletes an existing project */
function deleteProject(project) {
    delete project.name;
    delete project.description;
    delete project.dueDate;
    delete project.priority;
    delete project.status;
}

function setName(project, name) {
    project.name = name;
}

function setDescription(project, description) {
    project.description = description;
}

function setDueDate(project, dueDate) {
    project,dueDate = dueDate;
}

function setPriority(project, priority) {
    project.priority = priority;
}

function setStatus(project, status) {
    project.status = status;
}

return { createDefaultProject, createProject, editProject, setName, setDescription, setDueDate, setPriority, setStatus }