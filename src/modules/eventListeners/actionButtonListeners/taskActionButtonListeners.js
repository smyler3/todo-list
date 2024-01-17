import { getCurrentProject } from "../../../models/organizers/project.js";
import * as forms from "../../../pages/forms/formGenerator.js";

/* Create the task create step button listener */
function taskCreateStepButtonListener(task) {
    getCurrentProject().setCurrentTask(task);
    forms.renderCreateStepForm();
}

/* Create the edit task button listener */
function taskEditButtonListener(task) {
    getCurrentProject().setCurrentTask(task);
    forms.renderEditTaskForm();
}

/* Create the delete task button listener */
function taskDeleteButtonListener(task) {
    getCurrentProject().setCurrentTask(task);
    forms.renderDeleteTaskForm();
}

export { taskCreateStepButtonListener, taskEditButtonListener, taskDeleteButtonListener }