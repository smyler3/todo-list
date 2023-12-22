import { forms } from "../../../pages/display";
import { Actions } from "../../../models/enums/actionButtons";

function createDeleteButtonListeners() {
    const deleteButtons = document.querySelectorAll("." + Actions.DELETE);
    console.log(deleteButtons);

    deleteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            forms.renderDeleteForm();
            e.stopPropagation();
        })
    })
}

function createColourButtonListeners() {
    const colourButtons = document.querySelectorAll("." + Actions.COLOUR);
    console.log(colourButtons);

    colourButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            forms.renderColourPickerForm();
            e.stopPropagation();
        })
    })
}

function createEditProjectButtonListeners() {
    const editButtons = document.querySelectorAll(".edit-project");

    editButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            forms.renderCreateProjectForm();
            e.stopPropagation();
        })
    })
}

function createEditTaskButtonListeners() {
    const editButtons = document.querySelectorAll(".edit-task");

    editButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            forms.renderCreateTaskForm();
            e.stopPropagation();
        })
    })
}

function createEditStepButtonListeners() {
    const editButtons = document.querySelectorAll(".edit-step");

    editButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            forms.renderCreateStepForm();
            e.stopPropagation();
        })
    })
}

export { createDeleteButtonListeners, createEditProjectButtonListeners, createEditTaskButtonListeners, createEditStepButtonListeners, createColourButtonListeners }