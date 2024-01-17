import { generateActionButtons, disableActionButtons, enableActionButtons } from "../utility/actionButtons.js";
import { Actions } from "../../models/enums/actionButtons.js";
import { getCurrentProject } from "../../models/organizers/project.js";
import { createStepStatusListener } from "../../common/eventListeners/checkboxListeners.js";
import { stepDeleteButtonListener, stepEditButtonListener } from "../../common/eventListeners/actionButtonListeners/stepActionButtonListeners.js";
import EditButtonIcon from "../../assets/icons/edit.svg";
import DeleteButtonIcon from "../../assets/icons/delete.svg";

/* Create a list of steps for a task */
function generateStepCards(steps, parent) {
    /* Create a step item */
    function generateStepCard(step) {

        // Step buttons to be created
        const stepButtons = [
            {classNames: [Actions.EDIT, "edit-step"], src: EditButtonIcon, alt: "Edit Step Button", title: "Edit Step",
            event: () => {
                stepEditButtonListener(step);
            }},
            {classNames: [Actions.DELETE], src: DeleteButtonIcon, alt: "Delete Step Button", title: "Delete Step",
            event: () => {
                stepDeleteButtonListener(step)
            }},
        ]

        const stepItem = document.createElement("li");
        stepItem.classList.add("project-list-item", "step-card");
        // Link to task
        stepItem.setAttribute("data-project-id", step.getProjectID());
        stepItem.setAttribute("data-task-id", step.getTaskID());
        stepItem.setAttribute("data-step-id", step.getStepID());

        // Step information
        const stepInfo = document.createElement("span");
        stepInfo.classList.add("project-list-item-info");

        // Completion checkbox
        const completedCheckbox = document.createElement("input");
        completedCheckbox.classList.add("completion-checkbox");
        completedCheckbox.type = "checkbox";
        completedCheckbox.name = "";
        completedCheckbox.id = "";

        createStepStatusListener(completedCheckbox);

        stepInfo.appendChild(completedCheckbox);

        // Title
        const stepTitle = document.createElement("h4");
        stepTitle.textContent = step.getTitle();

        // Action buttons for steps
        const stepActionButtons = generateActionButtons(stepButtons);

        // Append Elements
        stepInfo.appendChild(stepTitle);
        stepItem.appendChild(stepInfo);
        stepItem.appendChild(stepActionButtons);

        return stepItem;
    }

    // Add all steps to the list
    steps.forEach(step => {
        // Mark current step
        getCurrentProject().getCurrentTask().setCurrentStep(step);

        parent.appendChild(generateStepCard(step));
    });
}

/* Updates the step card if step information is edited */
function editStepCardInformation(step) {
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    
    // Editing information
    const stepCardTitle = stepCard.firstChild.lastChild;
    stepCardTitle.textContent = step.getTitle();
}

/* Modifies a step card once it has been marked as completed */
function setStepCardCompleted(stepCard) {
    // Visually marking as complete
    stepCard.classList.add("completed");
    const checkbox = stepCard.firstChild.firstChild;
    checkbox.checked = true;

    // Disabling action buttons
    const editButton = stepCard.lastChild.firstChild;
    disableActionButtons([editButton]);
}

/* Modifies a step card once it has been marked as incomplete */
function setStepCardIncomplete(stepCard) {
    // Visually marking as incomplete
    stepCard.classList.remove("completed");
    const checkbox = stepCard.firstChild.firstChild;
    checkbox.checked = false;

    // Re-enabling action buttons
    const editButton = stepCard.lastChild.firstChild;
    enableActionButtons([editButton]);
}

/* Removes a deleted steps card */
function deleteStepCard(step) {
    const stepCard = document.querySelector(`.step-card[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

    stepCard.remove();
}

export { generateStepCards, editStepCardInformation, setStepCardCompleted, setStepCardIncomplete, deleteStepCard }