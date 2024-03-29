import projectFactory from "./factories/projectFactory.js";
import { renderAllProjectsPage, clearPage } from "../../display/display.js";
import { addToSidebarProjects } from "../../display/sidebar/sidebarProjectsGenerator.js";
import { saveProjectsToLocalStorage } from "../../common/localStorage/index.js";
import { deserializeTask } from "./task.js";

/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    const projectID = getNextProjectCount();

    const defaultProject = projectFactory(
        "Miscellaneous", 
        "Default project",
        projectID,
    )

    projects.push(defaultProject);

    // Save change locally
    saveProjectsToLocalStorage(getSerializedProjects());
}

/* Create a new project */
function createProject(title, description) {
    const projectID = getNextProjectCount();

    const newProject = projectFactory(
        title,
        description,
        projectID,
    )

    addToProjects(newProject);
    setCurrentProject(newProject);

    // Save change locally
    saveProjectsToLocalStorage(getSerializedProjects());
}

/* Delete an existing project */
function deleteProject(project) {
    projects.forEach((projectItem, index) => {
        if (projectItem.getProjectID() === project.getProjectID()) {
            projects.splice(index, 1);
            
            return;
        }
    })

    // Save change locally
    saveProjectsToLocalStorage(getSerializedProjects());
}

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
    addToSidebarProjects(getCurrentProject());
}

/* Edits a project based on information in edit form */
function editProjectFromForm(project) {
    const newTitle = document.querySelector("#project-title").value;
    const newDesc = document.querySelector("#project-desc").value;

    project.setTitle(newTitle);
    project.setDescription(newDesc);

    // Save change locally
    saveProjectsToLocalStorage(getSerializedProjects());
}

/* Edits the colour of a project based on colour picker form */
function editProjectColourFromForm(project) {
    const newColour = document.querySelector("input[type='radio']:checked").value;

    project.setColour(newColour);
}

function getProjects() {
    return projects;
}

function addToProjects(newProject) {
    projects.push(newProject);
}

function setProjects(newProjects) {
    projects = newProjects;
}

function getCurrentProject() {
    return currentProject;
}

function setCurrentProject(newProject) {
    currentProject = newProject;
}

/* Convert the project to a JSON-friendly format */
function serializeProject(project) {
    const title = project.getTitle();
    const desc = project.getDescription();
    const colour = project.getColour();
    const incompleteTasks = project.getSerializedIncompleteTasks();
    const completedTasks = project.getSerializedCompletedTasks();

    return {
        title,
        desc,
        incompleteTasks,
        completedTasks,
        colour,
    }
}

/* Create a project from JSON format data */
function deserializeProject(project) {
    // Creating project from data
    createProject(project.title, project.desc);
    const newProject = getCurrentProject();

    // Adding all tasks
    project.incompleteTasks.forEach(task => {
        deserializeTask(newProject, task);
    })
    project.completedTasks.forEach(task => {
        deserializeTask(newProject, task);
    })

    // Adding colour
    newProject.setColour(project.colour);
}

/* Convert the project to a JSON-friendly format */
function getSerializedProjects() {
    const serializedProjects = [];
    projects.forEach(project => {
        serializedProjects.push(serializeProject(project));
    })

    return serializedProjects;
}

let projectCount = 0;
let projects = [];
let currentProject = null;

export { 
    createDefaultProject, createProject, createProjectFromForm,  
    editProjectFromForm, editProjectColourFromForm,
    getProjects, setProjects, deleteProject,
    getCurrentProject, setCurrentProject,
    getSerializedProjects, deserializeProject
}