import { generateStepCards } from "./stepsCardHandler.js";
import { disableActionButtons, enableActionButtons, generateActionButtons } from "../utility/actionButtons.js";
import { Actions } from "../../models/enums/actionButtons.js";
import * as forms from "../forms/formGenerator.js";
import { getCurrentProject } from "../../models/organizers/project.js";
import { createTaskStatusListener } from "../../modules/eventListeners/checkboxListeners.js";
import { taskCreateStepButtonListener, taskDeleteButtonListener, taskEditButtonListener } from "../../modules/eventListeners/actionButtonListeners/taskActionButtonListeners.js";

/* Create a list of tasks for a project */
function generateTaskCards(tasks, parent) {
    /* Create a task item */
    function generateTask(task) {
        /* Create the checkbox and details of the task */
        function generateTaskHeader(task) {
            /* Display information about the task */
            function generateTaskDetails(task) {
                const taskDetails = document.createElement("div");
                taskDetails.classList.add("project-list-task-details");
                
                const titleContainer = document.createElement("div");
                titleContainer.classList.add("project-title-container");

                // Title
                const taskTitle = document.createElement("h3");
                taskTitle.textContent = task.getTitle();

                // Priority
                const taskPriority = document.createElement("p");
                taskPriority.textContent = task.getPriority();
                const priorityClass = "priority-" + task.getPriority().toLowerCase();
                taskPriority.classList.add("priority-text", priorityClass);

                // Description
                const taskDescription = document.createElement("p");
                taskDescription.textContent = task.getDescription();

                // Due date
                const taskDate = document.createElement("p");
                taskDate.textContent = task.getDueDate() || "No Due Date";;

                titleContainer.appendChild(taskTitle);
                titleContainer.appendChild(taskPriority);
                taskDetails.appendChild(titleContainer);
                taskDetails.appendChild(taskDescription);
                taskDetails.appendChild(taskDate);

                return taskDetails;
            }

            const projectListItemInfo = document.createElement("span");
            projectListItemInfo.classList.add("project-list-item-info");

            // Completion checkbox
            const completedCheckbox = document.createElement("input");
            completedCheckbox.classList.add("task-checkbox");
            completedCheckbox.type = "checkbox";
            completedCheckbox.name = "";
            completedCheckbox.id = "";

            createTaskStatusListener(completedCheckbox);

            // Append elements
            projectListItemInfo.appendChild(completedCheckbox);
            projectListItemInfo.appendChild(generateTaskDetails(task));

            return projectListItemInfo;
        }

        // Task buttons to be created
        const taskButtons = [
            {classNames: [Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "", title: "Add New Step",
            event: () => {
                taskCreateStepButtonListener(task)
            }},
            {classNames: [Actions.EDIT, "edit-task"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task",
            event: () => {
                taskEditButtonListener(task);
            }},
            {classNames: [Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task",
            event: () => {
                taskDeleteButtonListener(task);
            }},
        ]

        // Task information
        const taskItem = document.createElement("div");
        taskItem.classList.add("project-list-item", "task-card");
        // Link to task
        taskItem.setAttribute("data-project-id", task.getProjectID());
        taskItem.setAttribute("data-task-id", task.getTaskID());

        // Append task information elements
        taskItem.appendChild(generateTaskHeader(task));
        taskItem.appendChild(generateActionButtons(taskButtons));

        return taskItem;
    }

    // Add all tasks to the list
    tasks.forEach(task => {
        // Mark current task
        getCurrentProject().setCurrentTask(task);

        const projectTaskItem = document.createElement("li");
        projectTaskItem.classList.add("project-task-item");

        // List of all incomplete steps for current task
        const incompleteStepsList = document.createElement("ul");
        incompleteStepsList.classList.add("steps-list", "incomplete-steps-list");

        // List of all completed steps for current task
        const completedStepsList = document.createElement("ul");
        completedStepsList.classList.add("steps-list", "completed-steps-list");

        // Create task
        projectTaskItem.appendChild(generateTask(task));

        // Append step lists
        projectTaskItem.appendChild(incompleteStepsList);
        projectTaskItem.appendChild(completedStepsList);

        // Create steps
        generateStepCards(task.getIncompleteSteps(), incompleteStepsList);
        generateStepCards(task.getCompletedSteps(), completedStepsList);

        parent.appendChild(projectTaskItem);
    })
}

function editTaskCardInformation(task) {
    const taskCard = document.querySelector(`[data-task-id="${task.getTaskID()}"]`);
    
    // Grabbing information to edit
    const taskInformation = taskCard.firstChild.lastChild;
    const taskTitle = taskInformation.firstChild.firstChild;
    const taskPriority = taskInformation.firstChild.lastChild;
    const taskDesc = taskInformation.firstChild.nextSibling;
    const taskDueDate = taskInformation.lastChild;
    
    // Editing information
    taskTitle.textContent = task.getTitle();
    taskPriority.textContent = task.getPriority();
    taskDesc.textContent = task.getDescription();
    taskDueDate.textContent = task.getDueDate() || "No Due Date";

    // Replacing priority classlist
    taskPriority.className = "";
    const priorityClass = "priority-" + task.getPriority().toLowerCase();
    taskPriority.classList.add("priority-text", priorityClass);
}

/* Modifies a task card once it has been marked as completed */
function setTaskCardCompleted(task) {
    const taskCard = document.querySelector(`[data-task-id="${task.getTaskID()}"]`);

    // Visually marking as complete
    taskCard.classList.add("completed");
    const taskContainer = taskCard.parentElement;
    // Moves the card wrapper to the completed tasks section 
    taskContainer.parentElement.nextSibling.nextSibling.appendChild(taskContainer);

    // Disabling action buttons
    const createButton = taskCard.lastChild.firstChild;
    const editButton = createButton.nextSibling;
    disableActionButtons([createButton, editButton]);

    // Visually marking all incomplete steps as completed
    task.getIncompleteSteps().forEach(step => {
        const stepCard = document.querySelector(`.step-card[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

        stepCard.classList.add("completed");
        const checkbox = stepCard.firstChild.firstChild;
        checkbox.checked = true;

        // Disabling action buttons
        const editButton = stepCard.lastChild.firstChild;
        disableActionButtons([editButton]);
    })
}

/* Modifies a task card once it has been marked as completed */
function setTaskCardIncomplete(task) {
    const taskCard = document.querySelector(`[data-task-id="${task.getTaskID()}"]`);

    // Visually marking as incomplete
    taskCard.classList.remove("completed");
    const taskContainer = taskCard.parentElement;
    // Moves the card wrapper to the incomplete tasks section 
    taskContainer.parentElement.previousSibling.previousSibling.appendChild(taskContainer);

    // Re-enabling action buttons
    const createButton = taskCard.lastChild.firstChild;
    const editButton = createButton.nextSibling;
    enableActionButtons([createButton, editButton]);

    // Visually remarking all incomplete steps as incomplete
    task.getIncompleteSteps().forEach(step => {
        const stepCard = document.querySelector(`.step-card[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

        stepCard.classList.remove("completed");
        const checkbox = stepCard.firstChild.firstChild;
        checkbox.checked = false;

        // Re-enabling action buttons
        const editButton = stepCard.lastChild.firstChild;
        enableActionButtons([editButton]);
    })
}

/* Removes a deleted tasks card */
function deleteTaskCard(task) {
    const taskCard = document.querySelector(`.task-card[data-task-id="${task.getTaskID()}"]`);

    taskCard.parentElement.remove();
}

export { generateTaskCards, editTaskCardInformation, setTaskCardCompleted, setTaskCardIncomplete, deleteTaskCard }