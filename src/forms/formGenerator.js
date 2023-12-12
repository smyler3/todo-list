import generateTextFields from "./textFieldGenerator";
import generatePriorityRadioButtons from "./radioFieldGenerator";

/* Empties the contents of the form modal */
function clearForm() {
    formContainer.replaceChildren();
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
function renderCreateProjectForm(parent) {
    clearForm();

    // All form fields for creating a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "project-date", classes: ["date-input"]},
    ]

    const form = document.createElement("form");
    form.id = "project-creation-form";
    form.classList.add("creation-form");

    // Title
    const formTitle = document.createElement("h2");
    formTitle.textContent = "New Project";

    // Appending elements
    form.appendChild(formTitle);
    generateTextFields(projectTextFormFields, form);
    form.appendChild(generatePriorityRadioButtons());
    addFormButtons("Project", "Create", form);
    formContainer.appendChild(form);
    parent.appendChild(formContainer);
}

/* Create the form for creating a new task */
function renderCreateTaskForm(parent) {
    clearForm();

    // All form fields for creating a task
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = document.createElement("form");
    form.id = "title-creation-form";
    form.classList.add("creation-form");

    // Title
    const formTitle = document.createElement("h2");
    formTitle.textContent = "New Task";

    // Appending elements
    form.appendChild(formTitle);
    generateTextFields(taskTextFormFields, form);
    form.appendChild(generatePriorityRadioButtons());
    addFormButtons("Task", "Create", form);
    formContainer.appendChild(form);
    parent.appendChild(formContainer);
}

/* Create the form for creating a new step */
function renderCreateStepForm(parent) {
    clearForm();

    // All form fields for creating a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = document.createElement("form");
    form.id = "title-creation-form";
    form.classList.add("creation-form");

    // Title
    const formTitle = document.createElement("h2");
    formTitle.textContent = "New Step";

    // Appending elements
    form.appendChild(formTitle);
    generateTextFields(stepTextFormFields, form);
    addFormButtons("Step", "Create", form);
    formContainer.appendChild(form);
    parent.appendChild(formContainer);
}

/* Create the form for confirming organizer deletion */
function renderDeleteForm(organizerType, parent) {
    clearForm();

    const form = document.createElement("form");
    form.id = organizerType + "-delete-form";
    form.classList.add("delete-form");

    // Title
    const formTitle = document.createElement("h2");
    formTitle.textContent = "Delete " + organizerType + "?";

    // Appending elements
    form.appendChild(formTitle);
    addFormButtons(organizerType, "Delete", form);
    formContainer.append(form);
    parent.appendChild(formContainer);
}

const formContainer = document.createElement("div");
formContainer.classList.add("form-container");

export { renderCreateProjectForm, renderCreateTaskForm, renderCreateStepForm, renderDeleteForm }