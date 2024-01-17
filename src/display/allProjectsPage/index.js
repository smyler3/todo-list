import { generateActionButtons } from "../utility/actionButtons.js";
import { Actions } from "../../models/enums/actionButtons.js";
import { createProjectButtonListener } from "../../common/eventListeners/actionButtonListeners/allProjectsActionButtonListeners.js";
import { createProjectPageNavigationListeners } from "../../common/eventListeners/projectNavigationListeners.js";
import { setCurrentProject } from "../../models/organizers/project.js";
import { forms } from "../display.js";
import ColourButtonIcon from "../../assets/icons/paint.svg";
import EditButtonIcon from "../../assets/icons/edit.svg";
import DeleteButtonIcon from "../../assets/icons/delete.svg";

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
            projectDescription.classList.add("project-card-description");

            // Appending elements
            projectCardDetails.appendChild(projectName);
            projectCardDetails.appendChild(projectDescription);

            return projectCardDetails;
        }

        /* Creates the logic for the project card action buttons */
        function generateProjectCardButtons(project) {
            // Project Buttons to be created
            const projectCardButtons = [
                {classNames: [Actions.COLOUR], src: ColourButtonIcon, alt: "", title: "Colour Project",
                event: () => {
                    setCurrentProject(project);
                    forms.renderColourPickerForm(); 
                }},
                {classNames: [Actions.EDIT, "edit-project"], src: EditButtonIcon, alt: "", title: "Edit Project",
                event: () => {
                    setCurrentProject(project);
                    forms.renderEditProjectForm();
                }},
                {classNames: [Actions.DELETE], src: DeleteButtonIcon, alt: "", title: "Delete Project",
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
    createProjectPageNavigationListeners(projects, ".project-card");
}

/* Updates the project card if project information is edited */
function editProjectCardInformation(project) {
    const projectCard = document.querySelector(`.project-card[data-project-id="${project.getProjectID()}"]`);
    const cardDetails = projectCard.firstChild;
    const cardTitle = cardDetails.firstChild;
    const cardDescription = cardDetails.lastChild;

    cardTitle.textContent = project.getTitle();
    cardDescription.textContent = project.getDescription();
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