import { generateTaskCards, editTaskCardInformation, setTaskCardCompleted } from "./tasksCardHandler.js";
import { editStepCardInformation, setStepCardCompleted } from "./stepsCardHandler.js";
import { generateActionButtons } from "../utility/actionButtons.js";
import { generateProjectCardButtons } from "../utility/projectCardButtons.js";

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

        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header-container");
        // Link to project
        projectHeader.setAttribute("data-project-id", project.getProjectID());
        projectHeader.style.backgroundColor = project.getColour();

        // Append Elements
        projectHeader.appendChild(generateProjectDetails(project));
        projectHeader.appendChild(generateActionButtons(generateProjectCardButtons(project)));

        return projectHeader;
    }

    /* Create the list of tasks and their steps */
    function generateContent(project) {
        const taskListContainer = document.createElement("div");
        taskListContainer.classList.add("task-list-container");

        // Incomplete tasks section header
        const taskSectionDivider = document.createElement("h2");
        taskSectionDivider.textContent = "Tasks"
        taskSectionDivider.classList.add("section-divider");

        // List of incomplete tasks
        const incompleteTasksList = document.createElement("ul");
        incompleteTasksList.classList.add("task-list", "incomplete-task-list");

        // Generate incomplete tasks
        taskListContainer.appendChild(taskSectionDivider);
        generateTaskCards(project.getIncompleteTasks(), incompleteTasksList);
        taskListContainer.appendChild(incompleteTasksList);

        // Completed tasks section header
        const completedSectionDivider = document.createElement("h2");
        completedSectionDivider.textContent = "Completed Tasks"
        completedSectionDivider.classList.add("section-divider");

        // List of completed tasks
        const completedTasksList = document.createElement("ul");
        completedTasksList.classList.add("task-list", "completed-task-list");

        // Generate completed tasks
        taskListContainer.appendChild(completedSectionDivider);
        generateTaskCards(project.getCompletedTasks(), completedTasksList);
        taskListContainer.appendChild(completedTasksList);

        return taskListContainer;
    }

    // Appending Header
    const header = document.querySelector(".header");
    header.appendChild(generateHeader(project));

    // Appending Body
    const body = document.querySelector(".content-body");
    body.appendChild(generateContent(project));

    // Update the visual status of newly added cards
    updateCompletionStatus(project);
}

/* Updates the completion status of cards on the project page */
function updateCompletionStatus(project) {
    // Visually marking the completed steps of incomplete tasks as completed
    project.getIncompleteTasks().forEach(task => {
        task.getCompletedSteps().forEach(step => {
            const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
            setStepCardCompleted(stepCard);
        })
    })

    // Visually marking the complete tasks as completed
    project.getCompletedTasks().forEach(task => {
        const taskCard = document.querySelector(`[data-task-id="${task.getTaskID()}"]`);

        setTaskCardCompleted(taskCard);

        // Visually marking their completed steps as completed
        task.getCompletedSteps().forEach(step => {
            const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
            setStepCardCompleted(stepCard);
        })
    })
}

/* Updates the project page if project information is edited */
function editProjectPageInformation(project) {
    document.querySelector(".project-header-title").textContent = project.getTitle();
    document.querySelector(".project-header-description").textContent = project.getDescription();
}

/* Updates the project page if project colour is edited */
function editProjectPageColour(project) {
    const projectHeader = document.querySelector(".project-header-container");
    projectHeader.style.backgroundColor = project.getColour();
}

export { renderProjectPage, editProjectPageInformation, editProjectPageColour, editTaskCardInformation, editStepCardInformation }