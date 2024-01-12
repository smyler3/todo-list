import generateActionButtons from "../utility/actionButtons.js";
import { Actions } from "../../models/enums/actionButtons.js";
import * as forms from "../forms/formGenerator.js";
import { getCurrentProject } from "../../models/organizers/project.js";
import { createStepCompletionListener, createStepStatusListener } from "../../modules/eventListeners/checkboxListeners.js";
import { Status } from "../../models/enums/status.js";
import { stepDeleteButtonListener, stepEditButtonListener } from "../../modules/eventListeners/actionButtonListeners/stepActionButtonListeners.js";

/* Create a list of steps for a task */
function generateStepCards(steps, parent) {
    /* Create a step item */
    function generateStepCard(step) {

        // Step Buttons to be created
        const stepButtons = [
            {classNames: [Actions.EDIT, "edit-step"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task",
            event: () => {
                stepEditButtonListener(step);
            }},
            {classNames: [Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task",
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

        // Step Information
        const stepInfo = document.createElement("span");
        stepInfo.classList.add("project-list-item-info");

        // Completion Checkbox
        const completedCheckbox = document.createElement("input");
        completedCheckbox.classList.add("task-checkbox");
        completedCheckbox.type = "checkbox";
        completedCheckbox.name = "";
        completedCheckbox.id = "";

        createStepStatusListener(completedCheckbox);

        stepInfo.appendChild(completedCheckbox);

        // Title
        const stepTitle = document.createElement("h4");
        stepTitle.textContent = step.getTitle();

        // Action Buttons for Steps
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

function editStepCardInformation(step) {
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    
    // Editing information
    stepCard.firstChild.lastChild.textContent = step.getTitle();
}

/* Modifies a step card once it has been marked as completed */
function setStepCardCompleted(step) {
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

    // Visually marking as complete
    stepCard.classList.add("completed");
    const parent = stepCard.parentElement;
    // Moves the card to the end of the list
    parent.nextSibling.appendChild(stepCard);
}

/* Modifies a step card once it has been marked as incomplete */
function setStepCardIncomplete(step) {
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

    // Visually marking as incomplete
    stepCard.classList.remove("completed");
    const parent = stepCard.parentElement;
    console.log(parent);
    console.log(parent.previousSibling);
    // Moves the card to the end of the list
    parent.previousSibling.appendChild(stepCard);
}

/* Removes a deleted steps card */
function deleteStepCard(step) {
    const stepCard = document.querySelector(`.step-card[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

    stepCard.remove();
}

export { generateStepCards, editStepCardInformation, setStepCardCompleted, setStepCardIncomplete, deleteStepCard }