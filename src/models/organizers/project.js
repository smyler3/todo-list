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

/* Edit an exisiting project */
function editProject(project, title, description) {
    project.setTitle(title);
    project.setDescription(description);
}

// /* Delete an existing project */
// function deleteProject(project) {
//     delete project.getTitle();
//     delete project.getDescription();
// }

/* Returns project count and increments it */
function getNextProjectCount() {
    const count = projectCount;
    projectCount++;
    return count;
}

let projectCount = 0;

export { createDefaultProject, createProject, editProject }