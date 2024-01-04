import projectFactory from "./factories/projectFactory";
import { renderAllProjectsPage, clearPage, renderSidebar } from "../../pages/display.js";
import { addSidebarProject } from "../../pages/sidebar/sidebarProjectsGenerator.js";

/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    const projectID = getNextProjectCount();

    const defaultProject = projectFactory(
        "Miscellaneous", 
        "Default project",
        projectID,
    )

    projects.push(defaultProject);
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
    setCurrentProject(newProject);
}

/* Edit an exisiting project */
function editProject(project, title, description) {
    project.setTitle(title);
    project.setDescription(description);
}

// /* Replace an existing project with a new one */
// function replaceProject(project) {
//     projects.forEach(element => {
//         if (element.getProjectID() === project.getProjectID()) {
//             element = project;
//             setCurrentProject(project);
//         }
//     })
// }

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
    addSidebarProject(getCurrentProject());
}

function editProjectColour() {
    const newColour = document.querySelector("input[type='radio']:checked").value;

    getCurrentProject().setColour(newColour);
}

function getProjects() {
    return projects;
}

function getCurrentProject() {
    return currentProject;
}

function setCurrentProject(newProject) {
    currentProject = newProject;
}

let projectCount = 0;
const projects = [];
let currentProject = null;

export { createDefaultProject, createProject, editProject, createProjectFromForm, editProjectColour, getProjects, getCurrentProject, setCurrentProject }