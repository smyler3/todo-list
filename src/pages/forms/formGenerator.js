import generateTextFields from "./textFieldGenerator.js";
import * as radioFieldGenerator from "./radioFieldGenerator.js";
import { Organizers } from "../../models/enums/organizer.js";
import { createProjectFromForm, deleteProject, editProjectColourFromForm, editProjectFromForm, getCurrentProject, getProjects, setCurrentProject } from "../../models/organizers/project.js";
import { createTaskFromForm, editTaskFromForm } from "../../models/organizers/task.js";
import { createStepFromForm, editStepFromForm } from "../../models/organizers/step.js";
import { editSidebarProjectColour, editSidebarProjectTitle, editProjectPageColour, editProjectCardColour, clearPage } from "../display.js";
import { editProjectPageInformation, editStepCardInformation, editTaskCardInformation, renderProjectPage } from "../projectPage/index.js";
import { deleteProjectCard, editProjectCardInformation, renderAllProjectsPage } from "../allProjectsPage/index.js";
import { removeFromSidebarProjects } from "../sidebar/sidebarProjectsGenerator.js";
import { deleteTaskCard } from "../projectPage/tasksCardHandler.js";
import { deleteStepCard } from "../projectPage/stepsCardHandler.js";
import { DefaultPriority } from "../../models/enums/priority.js";
import { createFormCancelButtonListener, createFormSubmitButtonListener } from "../../modules/eventListeners/formButtonListeners.js";

/* Create the modal which will store all forms */
function generateFormModal(parent) {
    const formModal = document.createElement("div");
    formModal.classList.add("modal");
    parent.appendChild(formModal);
}

/* Handles form creation and display */
function renderForm(form) {
    const modal = document.querySelector(".modal");
    modal.style.display = "flex";
    formContainer.replaceChildren(form);
    modal.replaceChildren(formContainer);
}

/* Create the form container and title */
function generateFormBase(id, title, formClass) {
    const form = document.createElement("form");
    form.id = id;
    form.classList.add(formClass);

    // Title
    const formTitle = document.createElement("h2");
    formTitle.textContent = title;

    form.appendChild(formTitle);

    return form;
}

/* Create the submit and cancel form buttons */
function addFormButtons(organizerType, actionType, parent, submitFunction) {
    const modal = document.querySelector(".modal");
    const btnIDPrefix = actionType.toLowerCase() + "-" + organizerType.toLowerCase();

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Confirm";
    submitBtn.id =  btnIDPrefix + "-submit-btn";
    submitBtn.classList.add("form-btn", "submit-btn");

    // Submit event
    createFormSubmitButtonListener(submitBtn, submitFunction, modal);

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.id =  btnIDPrefix + "-cancel-btn";
    cancelBtn.classList.add("form-btn", "cancel-btn");

    // Cancel event
    createFormCancelButtonListener(cancelBtn, modal)

    // Append elements
    parent.appendChild(submitBtn);
    parent.appendChild(cancelBtn);
}

/* Create the form for creating a new project */
function renderCreateProjectForm() {
    // All form fields for creating a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 20},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
    ]

    const form = generateFormBase("project-form-body", "New Project", "form-body");

    // Appending elements
    generateTextFields(projectTextFormFields, form);
    addFormButtons(Organizers.PROJECT, "Create", form, createProjectFromForm);

    renderForm(form);
}

/* Create the form for editing a project */
function renderEditProjectForm() {
    // All form fields for a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 20},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
    ]

    const form = generateFormBase("project-edit-form", "Edit Project", "form-body");

    // Appending elements
    generateTextFields(projectTextFormFields, form);
    addFormButtons(Organizers.PROJECT, "Edit", form, () => {
        editProjectFromForm(getCurrentProject());
        editSidebarProjectTitle(getCurrentProject());
        // Checking which page is currently displayed
        if (document.querySelector(".project-header-container") !== null) {
            editProjectPageInformation(getCurrentProject());
        }
        else {
            editProjectCardInformation(getCurrentProject());
        }
    });

    renderForm(form);

    // Fill the form fields with current information
    document.querySelector("#project-title").placeholder = document.querySelector("#project-title").value = getCurrentProject().getTitle();
    document.querySelector("#project-desc").placeholder = document.querySelector("#project-desc").value = getCurrentProject().getDescription();
}

/* Create the form for creating a new task */
function renderCreateTaskForm() {
    // All form fields for creating a task
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("task-form-body", "New Task", "form-body");

    // Appending elements
    generateTextFields(taskTextFormFields, form);
    form.appendChild(radioFieldGenerator.generatePriorityRadioButtons(Organizers.TASK));
    addFormButtons(Organizers.TASK, "Edit", form, () => {
        createTaskFromForm();
        clearPage();
        renderProjectPage(getCurrentProject());
    });

    renderForm(form);

    // Highlight the default priority
    const priorityBtn = document.querySelector(`input[name='priority'][value='${DefaultPriority}']`);
    priorityBtn.checked = true;
}

/* Create the form for editing a task */
function renderEditTaskForm() {
    // All form fields for a task
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const currentTask = getCurrentProject().getCurrentTask();
    const form = generateFormBase("task-edit-form", "Edit Task", "form-body");

    // Appending elements
    generateTextFields(taskTextFormFields, form);
    form.appendChild(radioFieldGenerator.generatePriorityRadioButtons(Organizers.TASK));
    addFormButtons(Organizers.TASK, "Edit", form, () => {
        editTaskFromForm(currentTask);
        editTaskCardInformation(currentTask);
        getCurrentProject().sortIncompleteTasks();
        clearPage();
        renderProjectPage(getCurrentProject());
    });

    renderForm(form);

    // Fill the form fields with current information
    document.querySelector("#task-title").placeholder = document.querySelector("#task-title").value = currentTask.getTitle();
    document.querySelector("#task-desc").placeholder = document.querySelector("#task-desc").value = currentTask.getDescription();
    document.querySelector("#task-date").value = currentTask.getDueDate();

    // Highlight the currently selected priority
    const priorityBtn = document.querySelector(`input[name='priority'][value='${currentTask.getPriority()}']`);
    priorityBtn.checked = true;
}

/* Create the form for creating a new step */
function renderCreateStepForm() {
    // All form fields for creating a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "step-title", classes: ["title-input"], maxLength: 40},
    ]

    const form = generateFormBase("step-form-body", "New Step", "form-body");

    // Appending elements
    generateTextFields(stepTextFormFields, form);
    addFormButtons(Organizers.STEP, "Create", form, createStepFromForm);

    renderForm(form);
}

/* Create the form for editing a step */
function renderEditStepForm() {
    // All form fields for editing a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "step-title", classes: ["title-input"], maxLength: 40},
    ]

    const currentStep = getCurrentProject().getCurrentTask().getCurrentStep();
    const form = generateFormBase("step-edit-form", "Edit Step", "form-body");

    // Appending elements
    generateTextFields(stepTextFormFields, form);
    addFormButtons(Organizers.STEP, "Edit", form, () => {
        editStepFromForm(currentStep);
        editStepCardInformation(currentStep);
    });

    renderForm(form);

    // Fill the form fields with current information
    document.querySelector("#step-title").placeholder = document.querySelector("#step-title").value = currentStep.getTitle();
}

/* Create the form for confirming organizer deletion */
function renderDeleteForm(deleteFunction, organizerType) {
    const form = generateFormBase(("confirm-delete-form"), ("Delete " + organizerType + "?"), "delete-form");

    // Appending elements
    addFormButtons("Organizer", "Delete", form, deleteFunction);

    renderForm(form);
}

/* Create the form for deleting a project */
function renderDeleteProjectForm() {
    const deleteFunction = () => {
        deleteProject(getCurrentProject());
        removeFromSidebarProjects(getCurrentProject());
        if (document.querySelector(".project-header-container") !== null) {
            clearPage();
            renderAllProjectsPage(getProjects());
        }
        else {
            deleteProjectCard(getCurrentProject());
        }
        setCurrentProject(null);
    }

    renderDeleteForm(deleteFunction, Organizers.PROJECT);
}

/* Create the form for deleting a task */
function renderDeleteTaskForm() {
    const currentTask = getCurrentProject().getCurrentTask();
    const deleteFunction = () => {
        getCurrentProject().removeFromIncompleteTasks(currentTask);
        getCurrentProject().removeFromCompletedTasks(currentTask);
        deleteTaskCard(currentTask);
        getCurrentProject().setCurrentTask(null);
    }

    renderDeleteForm(deleteFunction, Organizers.TASK);
}

/* Create the form for deleting a step */
function renderDeleteStepForm() {
    const deleteFunction = () => {
        const currentTask = getCurrentProject().getCurrentTask();
        const currentStep = currentTask.getCurrentStep();
        currentTask.removeFromIncompleteSteps(currentStep);
        deleteStepCard(currentStep);
        currentTask.setCurrentStep(null);
    }

    renderDeleteForm(deleteFunction, Organizers.STEP);
}

/* Create the form for changing project colour */
function renderColourPickerForm() {
    const form = generateFormBase("colour-form", "Pick A Colour", "colour-form");

    // Appending elements
    form.appendChild(radioFieldGenerator.generateColourRadioButtons());
    addFormButtons(Organizers.PROJECT, "Colour", form, () => {
        editProjectColourFromForm(getCurrentProject());
        editSidebarProjectColour(getCurrentProject());
        if (document.querySelector(".project-header-container") !== null) {
            editProjectPageColour(getCurrentProject());
        }
        else {
            editProjectCardColour(getCurrentProject());
        }
    });

    renderForm(form);

    // Highlight the currently selected colour
    const colourBtn = document.querySelector(`.colour-radio-btn[id^="colour-"][id$="${getCurrentProject().getColour().toLowerCase()}"]`);
    colourBtn.checked = true;
}

const formContainer = document.createElement("div");
formContainer.classList.add("form-container");

export { generateFormModal, renderCreateProjectForm, renderEditProjectForm, renderCreateTaskForm, renderEditTaskForm, renderCreateStepForm, renderEditStepForm, renderDeleteProjectForm, renderDeleteTaskForm, renderDeleteStepForm, renderColourPickerForm }