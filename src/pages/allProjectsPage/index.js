import { generateActionButtons } from "../utility/actionButtons.js";
import { createAllProjectsListeners } from "../../modules/eventListeners/index.js";
import { Actions } from "../../models/enums/actionButtons.js";
import * as forms from "../forms/formGenerator.js";
import { getCurrentProject, setCurrentProject } from "../../models/organizers/project.js";
import { DefaultColour } from "../../models/enums/colours.js";
import { createProjectButtonListener } from "../../modules/eventListeners/actionButtonListeners/allProjectsActionButtonListeners.js";

/* Create the page showing all of the current projects */
function renderAllProjectsPage(projects) {
    /* Create the content for the header section */
    function generateHeader() {
        // All projects buttons to be created
        const createProjectButton = [
            {classNames: [Actions.CREATE, "create-project-header-btn"], src: "../src/assets/icons/add.svg", alt: "", title: "Add New Project",
            event: () => {
                createProjectButtonListener();
            }},
        ]

        const headerContainer = document.createElement("div");
        headerContainer.classList.add("all-projects-header-container");

        // Title
        const heading = document.createElement("h1");
        heading.textContent = "All Projects";

        // Appending elements
        headerContainer.appendChild(heading);
        headerContainer.appendChild(generateActionButtons(createProjectButton));

        return headerContainer;
    }

    /* Create the content for the body section */
    function generateContent(projects) {
        /* Create the details section of the card */
        function generateCardDetails(project) {
            // Create project card details
            const projectCardDetails = document.createElement("div");
            projectCardDetails.classList.add("project-card-details");

            // Project name
            const projectName = document.createElement("h2");
            projectName.textContent = project.getTitle();

            // Project description
            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.getDescription();

            // Appending elements
            projectCardDetails.appendChild(projectName);
            projectCardDetails.appendChild(projectDescription);

            return projectCardDetails;
        }

        /* Creates the logic for the project card action buttons */
        function generateProjectCardButtons(project) {
            // Project buttons to be created
            const projectCardButtons = [
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

            return projectCardButtons;
        }

        const projectCardGrid = document.createElement("div");
        projectCardGrid.classList.add("project-card-grid");

        // Adding each of the projects to a card
        projects.forEach(project => {
            const projectCard = document.createElement("span");
            projectCard.classList.add("project-card");
            // Link to project
            projectCard.setAttribute("data-project-id", project.getProjectID());
            projectCard.style.backgroundColor = project.getColour();
            projectCard.style.borderColor = "#000000";

            // Appending elements
            projectCard.appendChild(generateCardDetails(project));
            projectCard.appendChild(generateActionButtons(generateProjectCardButtons(project)));
            projectCardGrid.appendChild(projectCard);
        });

        return projectCardGrid;
    }

    // Appending Header
    const header = document.querySelector(".header");
    header.appendChild(generateHeader());

    // Appending Body
    const body = document.querySelector(".content-body");
    body.appendChild(generateContent(projects));

    // Add event listeners
    createAllProjectsListeners(projects);
}

/* Updates the project card if project information is edited */
function editProjectCardInformation(project) {
    const projectCard = document.querySelector(`.project-card[data-project-id="${project.getProjectID()}"]`);
    const cardDetails = projectCard.firstChild;
    cardDetails.firstChild.textContent = project.getTitle();
    cardDetails.lastChild.textContent = project.getDescription();
}

/* Updates the project card if project colour is edited */
function editProjectCardColour(project) {
    const projectCard = document.querySelector(`.project-card[data-project-id="${project.getProjectID()}"]`);
    projectCard.style.backgroundColor = project.getColour();
}

/* Removes a deleted projects card */
function deleteProjectCard(project) {
    const projectCard = document.querySelector(`.project-card[data-project-id="${project.getProjectID()}"]`);

    projectCard.remove();
}

export { renderAllProjectsPage, editProjectCardInformation, editProjectCardColour, deleteProjectCard }