import generateTextFields from "./textFieldGenerator";
import * as radioFieldGenerator from "./radioFieldGenerator";
import { Organizers } from "../../models/enums/organizer";
import { createProjectFromForm, editProjectColour, getCurrentProject, getProjects } from "../../models/organizers/project.js";
import { createTaskFromForm } from "../../models/organizers/task.js";
import { createStepFromForm } from "../../models/organizers/step.js";
import { editSidebarProjectColour, editProjectPageColour, editProjectCardColour } from "../display.js";

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
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        submitFunction();
        modal.style.display = "none";
    });

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.id =  btnIDPrefix + "-cancel-btn";
    cancelBtn.classList.add("form-btn", "cancel-btn");

    // Cancel event
    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "none";
    });

    // Append elements
    parent.appendChild(submitBtn);
    parent.appendChild(cancelBtn);
}

/* Create the form for creating a new project */
function renderCreateProjectForm() {
    // All form fields for creating a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
    ]

    const form = generateFormBase("project-creation-form", "New Project", "creation-form");

    // Appending elements
    generateTextFields(projectTextFormFields, form);
    form.appendChild(radioFieldGenerator.generateColourRadioButtons());
    addFormButtons(Organizers.PROJECT, "Create", form, createProjectFromForm);

    renderForm(form);
}

/* Create the form for editing a project */
function renderEditProjectForm() {
    // All form fields for a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
    ]

    const form = generateFormBase("project-edit-form", "Edit Project", "creation-form");

    // Appending elements
    generateTextFields(projectTextFormFields, form);
    form.appendChild(radioFieldGenerator.generateColourRadioButtons());
    addFormButtons(Organizers.PROJECT, "Edit", form, createProjectFromForm);

    renderForm(form);

    // Fill the form fields with current information
    document.querySelector("#project-title").placeholder = getCurrentProject().getTitle();
    document.querySelector("#project-title").value = getCurrentProject().getTitle();
    document.querySelector("#project-desc").placeholder = getCurrentProject().getDescription();
    document.querySelector("#project-desc").value = getCurrentProject().getDescription();
    // Highlight the currently selected colour
    document.querySelectorAll(".colour-radio-btn").forEach(colourBtn => {
        const btnColour = colourBtn.id.replace("colour-", "");
        if (btnColour.toLowerCase() === getCurrentProject().getColour().toLowerCase()) {
            colourBtn.checked = true;
        }
        else {
            colourBtn.checked = false;
        }
    })
}

/* Create the form for creating a new task */
function renderCreateTaskForm() {
    // All form fields for creating a task
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("task-creation-form", "New Task", "creation-form");

    // Appending elements
    generateTextFields(taskTextFormFields, form);
    form.appendChild(radioFieldGenerator.generatePriorityRadioButtons(Organizers.TASK));
    addFormButtons(Organizers.TASK, "Create", form, createTaskFromForm);

    renderForm(form);
}

/* Create the form for editing a task */
function renderEditTaskForm() {
    // All form fields for a task
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("task-edit-form", "Edit Task", "creation-form");

    // Appending elements
    generateTextFields(taskTextFormFields, form);
    form.appendChild(radioFieldGenerator.generatePriorityRadioButtons(Organizers.TASK));
    addFormButtons(Organizers.TASK, "Edit", form, createTaskFromForm);

    renderForm(form);

    // Fill the form fields with current information
    const currentTask = getCurrentProject().getCurrentTask();
    document.querySelector("#task-title").placeholder = currentTask.getTitle();
    document.querySelector("#task-title").value = currentTask.getTitle();
    document.querySelector("#task-desc").placeholder = currentTask.getDescription();
    document.querySelector("#task-desc").value = currentTask.getDescription();
    document.querySelector("#task-date").value = currentTask.getDueDate();
    // Highlight the currently selected colour
    document.querySelectorAll(".colour-radio-btn").forEach(colourBtn => {
        const btnColour = colourBtn.id.replace("colour-", "");
        if (btnColour.toLowerCase() === currentTask.getColour().toLowerCase()) {
            colourBtn.checked = true;
        }
        else {
            colourBtn.checked = false;
        }
    })
}

/* Create the form for creating a new step */
function renderCreateStepForm() {
    // All form fields for creating a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "step-title", classes: ["title-input"], maxLength: 40},
    ]

    const form = generateFormBase("step-creation-form", "New Step", "creation-form");

    // Appending elements
    generateTextFields(stepTextFormFields, form);
    addFormButtons(Organizers.STEP, "Create", form, createStepFromForm);

    renderForm(form);
}

/* Create the form for confirming organizer deletion */
function renderDeleteForm() {
    const form = generateFormBase(("confirm-delete-form"), ("Delete Item?"), "delete-form");

    // Appending elements
    addFormButtons("Organizer", "Delete", form);

    renderForm(form);
}

function renderColourPickerForm() {
    const form = generateFormBase("colour-form", "Pick A Colour", "colour-form");

    // Appending elements
    form.appendChild(radioFieldGenerator.generateColourRadioButtons());
    addFormButtons(Organizers.PROJECT, "Colour", form, () => {
        editProjectColour();
        editSidebarProjectColour();
        if (document.querySelector(".project-header-container") !== null) {
            console.log("Yipee");
            editProjectPageColour();
        }
        else {
            editProjectCardColour();
        }
    });

    renderForm(form);
}

const formContainer = document.createElement("div");
formContainer.classList.add("form-container");

export { generateFormModal, renderCreateProjectForm, renderEditProjectForm, renderCreateTaskForm, renderEditTaskForm, renderCreateStepForm, renderDeleteForm, renderColourPickerForm }