import generateTextFields from "./textFieldGenerator";
import * as radioFieldGenerator from "./radioFieldGenerator"
import { Organizers } from "../../models/enums/organizer";

/* Handles form creation and display */
function renderForm(formFunction, parent) {
    formContainer.replaceChildren(formFunction());
    parent.appendChild(formContainer);
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
function addFormButtons(organizerType, actionType, parent) {
    const btnIDPrefix = actionType.toLowerCase() + "-" + organizerType.toLowerCase();

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Confirm";
    submitBtn.id =  btnIDPrefix + "-submit-btn";
    submitBtn.classList.add("form-btn", "submit-btn");

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.id =  btnIDPrefix + "-cancel-btn";
    cancelBtn.classList.add("form-btn", "cancel-btn");

    parent.appendChild(submitBtn);
    parent.appendChild(cancelBtn);
}

/* Create the form for creating a new project */
function renderCreateProjectForm() {
    // All form fields for creating a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "project-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("project-creation-form", "New Project", "creation-form");

    // Appending elements
    generateTextFields(projectTextFormFields, form);
    form.appendChild(radioFieldGenerator.generateRadioButtons(() =>radioFieldGenerator.generatePriorityRadioButtons(Organizers.PROJECT)));
    addFormButtons(Organizers.PROJECT, "Create", form);

    return form;
}

/* Create the form for creating a new task */
function renderCreateTaskForm(parent) {
    // All form fields for creating a task
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("task-creation-form", "New Task","creation-form");

    // Appending elements
    generateTextFields(taskTextFormFields, form);
    form.appendChild(radioFieldGenerator.generateRadioButtons(() => radioFieldGenerator.generatePriorityRadioButtons(Organizers.TASK)));
    addFormButtons(Organizers.TASK, "Create", form);

    return form;
}

/* Create the form for creating a new step */
function renderCreateStepForm(parent) {
    // All form fields for creating a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("step-creation-form", "New Step", "creation-form");

    // Appending elements
    generateTextFields(stepTextFormFields, form);
    addFormButtons(Organizers.STEP, "Create", form);

    return form;
}

/* Create the form for confirming organizer deletion */
function renderDeleteForm() {
    const form = generateFormBase(("confirm-delete-form"), ("Delete Item?"), "delete-form");

    // Appending elements
    addFormButtons("Organizer", "Delete", form);

    return form;
}

function renderColourPickerForm() {
    const form = generateFormBase("colour-form", "Pick A Colour", "colour-form");

    // Appending elements
    form.appendChild(radioFieldGenerator.generateRadioButtons(radioFieldGenerator.generateColourRadioButtons));

    return form;
}

const formContainer = document.createElement("div");
formContainer.classList.add("form-container");

export { renderForm, renderCreateProjectForm, renderCreateTaskForm, renderCreateStepForm, renderDeleteForm, renderColourPickerForm }