import projectFactory from "./factories/projectFactory";
import { renderAllProjectsPage, clearPage } from "../../pages/display.js";

/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    const projectID = getNextProjectCount();

    console.log("yip");

    const defaultProject = projectFactory(
        "Miscellaneous", 
        "Default project",
        projectID,
    )

    projects.push(defaultProject);

    console.log("here", projects[0].getProjectID());
}

/* Create a new project */
function createProject(title, description) {
    const projectID = getNextProjectCount();

    const newProject = projectFactory(
        title,
        description,
        projectID,
    )

    projects.push(newProject);
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

/* Creates a project from creation form */
function createProjectFromForm() {
    const title = document.querySelector("#project-title").value;
    const desc = document.querySelector("#project-desc").value;

    createProject(title, desc);
    clearPage();
    renderAllProjectsPage(projects);
}

function getProjects() {
    return projects;
}

let projectCount = 0;
const projects = [];

export { createDefaultProject, createProject, editProject, createProjectFromForm, getProjects }