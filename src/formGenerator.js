import { Priority, DefaultPriority } from "./handlers/enums/priority";

/* Create a set of text form fields */
function generateTextFields(fields, parent) {
    fields.forEach(formField => {
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("field-container");

        // Label
        const fieldLabel = document.createElement("label");
        fieldLabel.textContent = formField.labelText;
        fieldLabel.classList.add("form-label");
        fieldLabel.for = formField.id;

        // Input
        const fieldInput = document.createElement("input");
        fieldInput.type = formField.inputType;
        fieldInput.id = formField.id;
        formField.classes.forEach(className => {
            fieldInput.classList.add(className);
        });
        fieldInput.name = formField.inputName;

        // Appending elements
        fieldContainer.appendChild(fieldLabel);
        fieldContainer.appendChild(fieldInput);
        parent.appendChild(fieldContainer);
    })
}

/* Create a set of radio buttons for the priority options */
function generatePriorityRadioButtons() {
    /* Add the radio button options */
    function generatePriorityOptions() {
        Object.values(Priority).forEach(priorityValue => {
            const radioContainer = document.createElement("div");
    
            // ID
            const optionID = "project-" + String.prototype.toLowerCase(priorityValue);
    
            // Input
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.id = optionID;
            radioInput.name = "priority";
            radioInput.value = priorityValue;
            // Add checked to default option
            if (priorityValue === DefaultPriority) {
                radioInput.checked = true;
            }
    
            // Label
            const radioLabel = document.createElement("label");
            radioLabel.textContent = priorityValue;
            radioLabel.for = optionID;
    
            // Append elements
            radioContainer.appendChild(radioInput);
            radioContainer.appendChild(radioLabel);
            fieldset.appendChild(radioContainer);
        })
    }
        
    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("field-container");

    // Fieldset
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("priority-field");

    // Legend
    const legend = document.createElement("legend");
    legend.textContent = "Priority:";
    legend.classList.add("form-label");

    // Appending elements
    fieldset.appendChild(legend);
    generatePriorityOptions();
    fieldContainer.appendChild(fieldset);

    return fieldContainer;

    // <div class="field-container">
    //     <fieldset class="priority-field">
    //         <legend class="form-label">Priority:</legend>
    //         <div class="">
    //             <input type="radio" id="project-none" name="priority" value="None" checked>
    //             <label for="project-none">None</label>
    //         </div>
    //         <div class="">
    //             <input type="radio" id="project-low" name="priority" value="Low">
    //             <label for="project-low">Low</label>
    //         </div>
    //         <div class="">
    //             <input type="radio" id="project-med" name="priority" value="Med">
    //             <label for="project-med">Med</label>
    //         </div>
    //         <div class="">
    //             <input type="radio" id="project-high" name="priority" value="High">
    //             <label for="project-high">High</label>
    //         </div>
    //     </fieldset>
    // </div>
}

/* Create the submit and cancel form buttons */
function addFormButtons(organizerType, parent) {
    const btnIDSuffix = String.prototype.toLowerCase(organizerType) + "-creation-btn";

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Create " + organizerType;
    submitBtn.id = "submit-" + btnIDSuffix;
    submitBtn.classList.add("form-btn", "submit-btn");

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.id = "cancel-" + btnIDSuffix;
    cancelBtn.classList.add("form-btn", "cancel-btn");

    parent.appendChild(submitBtn);
    parent.appendChild(cancelBtn);

    // <button id="submit-step-creation-btn" class="form-btn submit-btn">Create Step</button>
    // <button id="cancel-step-creation-btn" class="form-btn cancel-btn">Cancel</button>
}

/* Create the form for creating a new project */
function renderCreateProjectForm(parent) {
    // All form fields for creating a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"]},
        {labelText: "Description:", inputName: "desc", inputType: "text", id: "project-desc", classes: ["desc-input"]},
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
    addFormButtons("Project", form);
    formContainer.appendChild(form);
    parent.appendChild(formContainer);
    // return formContainer;
{/*
<div class="form-container">
    <form action="" id="project-creation-form" class="creation-form">
        <h2>New Project</h2>
        <div class="field-container">
            <label for="project-title" class="form-label">Title:</label>
            <input type="text" name="title" id="project-title" class="title-input">
        </div>
        <div class="field-container">
            <label for="project-desc" class="form-label">Description:</label>
            <input type="textarea" name="desc" id="project-desc" class="desc-input">
        </div>
        <div class="field-container">
            <label for="project-date" class="form-label">Due Date:</label>
            <input type="date" name="date" id="project-date" class="date-input">
        </div>
        <div class="field-container">
            <fieldset class="priority-field">
                <legend class="form-label">Priority:</legend>
                <div class="">
                    <input type="radio" id="project-none" name="priority" value="None" checked>
                    <label for="project-none">None</label>
                </div>
                <div class="">
                    <input type="radio" id="project-low" name="priority" value="Low">
                    <label for="project-none">Low</label>
                </div>
                <div class="">
                    <input type="radio" id="project-med" name="priority" value="Med">
                    <label for="project-none">Med</label>
                </div>
                <div class="">
                    <input type="radio" id="project-high" name="priority" value="High">
                    <label for="project-none">High</label>
                </div>
            </fieldset>
        </div>
        <button id="submit-project-creation-btn" class="form-btn submit-btn">Create Project</button>
        <button id="cancel-project-creation-btn" class="form-btn cancel-btn">Cancel</button>
    </form>
</div>
*/}
}

/* Create the form for creating a new task */
function renderCreateTaskForm(parent) {
    // All form fields for creating a task
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"]},
        {labelText: "Description:", inputName: "desc", inputType: "text", id: "task-desc", classes: ["desc-input"]},
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
    addFormButtons("Task", form);
    formContainer.appendChild(form);
    parent.appendChild(formContainer);
    // return formContainer;
{/*
<div class="form-container">
    <form action="" id="task-creation-form" class="creation-form">
        <h2>New Task</h2>
        <div class="field-container">
            <label for="task-title" class="form-label">Title:</label>
            <input type="text" name="title" id="task-title" class="title-input">
        </div>
        <div class="field-container">
            <label for="task-desc" class="form-label">Description:</label>
            <input type="textarea" name="desc" id="task-desc" class="desc-input">
        </div>
        <div class="field-container">
            <label for="task-date" class="form-label">Due Date:</label>
            <input type="date" name="date" id="task-date" class="date-input">
        </div>
        <div class="field-container">
            <fieldset class="priority-field">
                <legend class="form-label">Priority:</legend>
                <div class="">
                    <input type="radio" id="task-none" name="priority" value="None" checked>
                    <label for="task-none">None</label>
                </div>
                <div class="">
                    <input type="radio" id="task-low" name="priority" value="Low">
                    <label for="task-none">Low</label>
                </div>
                <div class="">
                    <input type="radio" id="task-med" name="priority" value="Med">
                    <label for="task-none">Med</label>
                </div>
                <div class="">
                    <input type="radio" id="task-high" name="priority" value="High">
                    <label for="task-none">High</label>
                </div>
            </fieldset>
        </div>
        <button id="submit-task-creation-btn" class="form-btn submit-btn">Create Task</button>
        <button id="cancel-project-creation-btn" class="form-btn cancel-btn">Cancel</button>
    </form>
</div>
*/}
}

/* Create the form for creating a new step */
function renderCreateStepForm(parent) {
    // All form fields for creating a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"]},
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
    addFormButtons("Step", form);
    formContainer.appendChild(form);
    parent.appendChild(formContainer);
    // return formContainer;
{/*
<div class="form-container">
    <form action="" id="step-creation-form" class="creation-form">
        <h2>New Step</h2>
        <div class="field-container">
            <label for="step-title" class="form-label">Title:</label>
            <input type="text" name="title" id="step-title" class="title-input">
        </div>
        <div class="field-container">
            <label for="step-date" class="form-label">Due Date:</label>
            <input type="date" name="date" id="step-date" class="date-input">
        </div>
        <button id="submit-step-creation-btn" class="form-btn submit-btn">Create Project</button>
        <button id="cancel-step-creation-btn" class="form-btn cancel-btn">Cancel</button>
    </form>
</div>
*/}
}

const formContainer = document.createElement("div");
formContainer.classList.add("form-container");

export { renderCreateProjectForm, renderCreateTaskForm, renderCreateStepForm }