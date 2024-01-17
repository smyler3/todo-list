import { setCurrentProject } from "../../../models/organizers/project.js";
import * as forms from "../../../display/forms/formGenerator.js";

/* Create the project create task button listener */
function projectCreateTaskButtonListener(project) {
    forms.renderCreateTaskForm(project);
}

/* Create the edit project colour button listener */
function projectColourButtonListener(project) {
    setCurrentProject(project);
    forms.renderColourPickerForm(); 
}

/* Create the edit projetc button listener */
function projectEditButtonListener(project) {
    setCurrentProject(project);
    forms.renderEditProjectForm();
}

/* Create the delete project button listener */
function projectDeleteButtonListener(project) {
    setCurrentProject(project);
    forms.renderDeleteProjectForm();
}

export { projectCreateTaskButtonListener, projectColourButtonListener, projectEditButtonListener, projectDeleteButtonListener }