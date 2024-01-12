import { setCurrentProject } from "../../../models/organizers/project.js";
import * as forms from "../../../pages/forms/formGenerator.js";

function projectCreateTaskButtonListener(project) {
    forms.renderCreateTaskForm(project);
}

function projectColourButtonListener(project) {
    setCurrentProject(project);
    forms.renderColourPickerForm(); 
}

function projectEditButtonListener(project) {
    setCurrentProject(project);
    forms.renderEditProjectForm();
}

function projectDeleteButtonListener(project) {
    setCurrentProject(project);
    forms.renderDeleteProjectForm();
}

export { projectCreateTaskButtonListener, projectColourButtonListener, projectEditButtonListener, projectDeleteButtonListener }