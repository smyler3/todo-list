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
import { createFormCancelButtonListener, createFormSubmitButtonListener } from "../../common/eventListeners/formButtonListeners.js";

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

/* Create the basic create/edit form layout */
function generateCreateEditFormBase(formFields, formID, formTitle, formType, formClass, organizerType, submitFunction, radioButtons = null) {
    const form = generateFormBase(formID, formTitle, formClass);

    // Appending elements
    generateTextFields(formFields, form);
    if (radioButtons !== null) {
        form.appendChild(radioButtons);
    }
    addFormButtons(organizerType, formType, form, submitFunction);

    renderForm(form);
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

/* Create the form base for edit and create step forms */
function generateBaseProjectForm(formID, formTitle, formType, submitFunction) {
    // All form fields for projects
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], minlength: 1, maxLength: 20},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , minlength: 1, maxLength: 80, rows: 40},
    ]
    const formClass = "create-edit-form";
    const organizerType = Organizers.PROJECT;

    generateCreateEditFormBase(projectTextFormFields, formID, formTitle, formType, formClass, organizerType, submitFunction);
}

/* Create the form for creating a new project */
function renderCreateProjectForm() {
    generateBaseProjectForm("project-creation-form", "New Project", "Create", createProjectFromForm);
}

/* Create the form for editing a project */
function renderEditProjectForm() {
    const currentProject = getCurrentProject();

    // Submit function for editing a project
    const editProjectFunction = () => {
        editProjectFromForm(currentProject);
        editSidebarProjectTitle(currentProject);
        // Checking which page is currently displayed
        if (document.querySelector(".project-header-container") !== null) {
            editProjectPageInformation(currentProject);
        }
        else {
            editProjectCardInformation(currentProject);
        }
    }

    generateBaseProjectForm("project-edit-form", "Edit Project", "Edit", editProjectFunction);

    // Fill the form fields with current information
    document.querySelector("#project-title").placeholder = document.querySelector("#project-title").value = currentProject.getTitle();
    document.querySelector("#project-desc").placeholder = document.querySelector("#project-desc").value = currentProject.getDescription();
}

/* Create the form base for edit and create step forms */
function generateBaseTaskForm(formID, formTitle, formType, submitFunction) {
    // All form fields for tasks
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], minlength: 1, maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], minlength: 1, maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]
    const formClass = "create-edit-form";
    const organizerType = Organizers.TASK;
    const radioButtons = radioFieldGenerator.generatePriorityRadioButtons(Organizers.TASK);

    generateCreateEditFormBase(taskTextFormFields, formID, formTitle, formType, formClass, organizerType, submitFunction, radioButtons);
}

/* Create the form for creating a new task */
function renderCreateTaskForm() {
    // Submit function for creating a task
    const createTaskFunction = () => {
        createTaskFromForm();
        clearPage();
        renderProjectPage(getCurrentProject());
    }

    generateBaseTaskForm("task-creation-form", "New Task", "Create", createTaskFunction);

    // Highlight the default priority
    const priorityBtn = document.querySelector(`input[name='priority'][value='${DefaultPriority}']`);
    priorityBtn.checked = true;
}

/* Create the form for editing a task */
function renderEditTaskForm() {
    const currentTask = getCurrentProject().getCurrentTask();

    // Submit function for editing a task
    const editTaskFunction = () => {
        editTaskFromForm(currentTask);
        editTaskCardInformation(currentTask);
        getCurrentProject().sortIncompleteTasks();
        clearPage();
        renderProjectPage(getCurrentProject());
    }

    generateBaseTaskForm("task-edit-form", "Edit Task", "Edit", editTaskFunction);

    // Fill the form fields with current information
    document.querySelector("#task-title").placeholder = document.querySelector("#task-title").value = currentTask.getTitle();
    document.querySelector("#task-desc").placeholder = document.querySelector("#task-desc").value = currentTask.getDescription();
    document.querySelector("#task-date").value = currentTask.getDueDate();

    // Highlight the currently selected priority
    const priorityBtn = document.querySelector(`input[name='priority'][value='${currentTask.getPriority()}']`);
    priorityBtn.checked = true;
}

/* Create the form base for edit and create step forms */
function generateBaseStepForm(formID, formTitle, formType, submitFunction) {
        // All form fields for steps
        const stepTextFormFields = [
            {labelText: "Title:", inputName: "title", inputType: "text", id: "step-title", classes: ["title-input"], minlength: 1, maxLength: 40},
        ]
        const formClass = "create-edit-form";
        const organizerType = Organizers.STEP;

        generateCreateEditFormBase(stepTextFormFields, formID, formTitle, formType, formClass, organizerType, submitFunction);
}

/* Create the form for creating a new step */
function renderCreateStepForm() {
    generateBaseStepForm("step-creation-form", "New Step", "Create", createStepFromForm);
}

/* Create the form for editing a step */
function renderEditStepForm() {
    const currentStep = getCurrentProject().getCurrentTask().getCurrentStep();

    // Submit function for editing a step
    const editStepFunction = () => {
        editStepFromForm(currentStep);
        editStepCardInformation(currentStep);
    }

    generateBaseStepForm("step-edit-form", "Edit Step", "Edit", editStepFunction);

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