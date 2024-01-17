import { generateStepCards } from "./stepsCardHandler.js";
import { disableActionButtons, enableActionButtons, generateActionButtons } from "../utility/actionButtons.js";
import { Actions } from "../../models/enums/actionButtons.js";
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
            completedCheckbox.classList.add("completion-checkbox");
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
            {classNames: [Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "Create Step Button", title: "Add New Step",
            event: () => {
                taskCreateStepButtonListener(task)
            }},
            {classNames: [Actions.EDIT, "edit-task"], src: "../src/assets/icons/edit.svg", alt: "Edit Task Button", title: "Edit Task",
            event: () => {
                taskEditButtonListener(task);
            }},
            {classNames: [Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "Delete Task Button", title: "Delete Task",
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

/* Updates the task card if task information is edited */
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
function setTaskCardCompleted(taskCard) {
    // Visually marking as complete
    taskCard.classList.add("completed");
    const taskCheckbox = taskCard.firstChild.firstChild;
    taskCheckbox.checked = true;

    // Disabling action buttons
    const createButton = taskCard.lastChild.firstChild;
    const editButton = createButton.nextSibling;
    disableActionButtons([createButton, editButton]);

    // Visually marking all incomplete steps as completed
    const incompleteSteps = taskCard.nextSibling;
    for (let stepCard of incompleteSteps.children) {
        stepCard.classList.add("completed");
        const checkbox = stepCard.firstChild.firstChild;
        checkbox.checked = true;
        checkbox.disabled = true;

        // Disabling action buttons
        const editButton = stepCard.lastChild.firstChild;
        disableActionButtons([editButton]);
    }

    // Disabling the checkbox of completed steps
    const completedSteps = taskCard.nextSibling.nextSibling;
    for (let stepCard of completedSteps.children) {
        const checkbox = stepCard.firstChild.firstChild;
        checkbox.disabled = true;
    }
}

/* Modifies a task card once it has been marked as completed */
function setTaskCardIncomplete(taskCard) {
    // Visually marking as incomplete
    taskCard.classList.remove("completed");
    const checkbox = taskCard.firstChild.firstChild;
    checkbox.checked = false;

    // Re-enabling action buttons
    const createButton = taskCard.lastChild.firstChild;
    const editButton = createButton.nextSibling;
    enableActionButtons([createButton, editButton]);

    // Visually remarking all incomplete steps as incomplete
    const incompleteSteps = taskCard.nextSibling;
    for (let stepCard of incompleteSteps.children) {
        stepCard.classList.remove("completed");
        const checkbox = stepCard.firstChild.firstChild;
        checkbox.checked = false;
        checkbox.disabled = false;

        // Re-enabling action buttons
        const editButton = stepCard.lastChild.firstChild;
        enableActionButtons([editButton]);
    }

    // Enabling the checkbox of completed steps
    const completedSteps = taskCard.nextSibling.nextSibling;
    for (let stepCard of completedSteps.children) {
        const checkbox = stepCard.firstChild.firstChild;
        checkbox.disabled = false;
    }
}

/* Removes a deleted tasks card */
function deleteTaskCard(task) {
    const taskCard = document.querySelector(`.task-card[data-task-id="${task.getTaskID()}"]`);

    taskCard.parentElement.remove();
}

export { generateTaskCards, editTaskCardInformation, setTaskCardCompleted, setTaskCardIncomplete, deleteTaskCard }