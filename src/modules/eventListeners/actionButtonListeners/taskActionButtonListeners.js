import { getCurrentProject } from "../../../models/organizers/project.js";
import * as forms from "../../../pages/forms/formGenerator.js";

function taskCreateStepButtonListener(task) {
    getCurrentProject().setCurrentTask(task);
    forms.renderCreateStepForm();
}

function taskEditButtonListener(task) {
    getCurrentProject().setCurrentTask(task);
    forms.renderEditTaskForm();
}

function taskDeleteButtonListener(task) {
    getCurrentProject().setCurrentTask(task);
    forms.renderDeleteTaskForm();
}

export { taskCreateStepButtonListener, taskEditButtonListener, taskDeleteButtonListener }