import { generateTaskCards, editTaskCardInformation } from "./tasksCardHandler.js";
import { editStepCardInformation } from "./stepsCardHandler.js";
import generateActionButtons from "../utility/actionButtons";
import { Actions } from "../../models/enums/actionButtons";
import * as forms from "../forms/formGenerator.js";
import { getCurrentProject, setCurrentProject } from "../../models/organizers/project.js";

/* Create the page showing all info for a selected project */
function renderProjectPage(project) {
    /* Create the header displaying project info and actions */
    function generateHeader(project) {
        /* Display project details */
        function generateProjectDetails(project) {
            const projectHeaderInfo = document.createElement("span");
            projectHeaderInfo.classList.add("project-header-details");

            // Title
            const projectTitle = document.createElement("h2");
            projectTitle.textContent = project.getTitle();
            projectTitle.classList.add("project-header-title");

            // Description
            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.getDescription();
            projectDescription.classList.add("project-header-description");

            // Append Elements
            projectHeaderInfo.appendChild(projectTitle);
            projectHeaderInfo.appendChild(projectDescription);

            return projectHeaderInfo;
        }

        // Project Buttons to be created
        const projectButtons = [
            {classNames: [Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "", title: "Add New Task",
            event: () => {
                forms.renderCreateTaskForm(project);
            }},
            {classNames: [Actions.COLOUR], src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project",
            event: () => {
                setCurrentProject(project);
                forms.renderColourPickerForm(); 
            }},
            {classNames: [Actions.EDIT, "edit-project"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project",
            event: () => {
                setCurrentProject(project);
                forms.renderEditProjectForm();
            }},
            {classNames: [Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project",
            event: () => {
                setCurrentProject(project);
                forms.renderDeleteProjectForm();
            }},
        ]

        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header-container");
        // Link to project
        projectHeader.setAttribute("data-project-id", project.getProjectID());
        projectHeader.style.borderColor = project.getColour();

        // Append Elements
        projectHeader.appendChild(generateProjectDetails(project));
        projectHeader.appendChild(generateActionButtons(projectButtons));

        return projectHeader;
    }

    /* Create the list of tasks and their steps */
    function generateContent(project) {
        const taskListContainer = document.createElement("div");
        taskListContainer.classList.add("task-list-container");

        // Incomplete tasks section header
        const todoSectionDivider = document.createElement("h2");
        todoSectionDivider.textContent = "Tasks"
        todoSectionDivider.classList.add("section-divider");

        // Generate incomplete tasks
        taskListContainer.appendChild(todoSectionDivider);
        taskListContainer.appendChild(generateTaskCards(project.getTasks()));

        // Completed tasks section header
        const completedSectionDivider = document.createElement("h2");
        completedSectionDivider.textContent = "Completed"
        completedSectionDivider.classList.add("section-divider");

        // Generate completed tasks
        taskListContainer.appendChild(completedSectionDivider);
        taskListContainer.appendChild(generateTaskCards(project.getCompletedTasks()));

        return taskListContainer;
    }

    // Appending Header
    const header = document.querySelector(".header");
    header.appendChild(generateHeader(project));

    // Appending Body
    const body = document.querySelector(".content-body");
    body.appendChild(generateContent(project));
}

/* Updates the project page if project information is edited */
function editProjectPageInformation(project) {
    document.querySelector(".project-header-title").textContent = project.getTitle();
    document.querySelector(".project-header-description").textContent = project.getDescription();
}

/* Updates the project page if project colour is edited */
function editProjectPageColour(project) {
    const projectHeader = document.querySelector(".project-header-container");
    if (projectHeader !== null) {
        projectHeader.style.borderColor = project.getColour();
    }
}

export { renderProjectPage, editProjectPageInformation, editProjectPageColour, editTaskCardInformation, editStepCardInformation }