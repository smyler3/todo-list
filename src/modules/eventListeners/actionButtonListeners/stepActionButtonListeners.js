import { getCurrentProject } from "../../../models/organizers/project.js";
import * as forms from "../../../pages/forms/formGenerator.js";

function setCurrentTaskFromID(tasks, taskID) {
    tasks.forEach(task => {
        if (String(task.getTaskID()) === taskID) {
            getCurrentProject().setCurrentTask(task);
            return;
        }
    });
}

function stepEditButtonListener(step) {
    setCurrentTaskFromID(getCurrentProject().getIncompleteTasks(), String(step.getTaskID()));
    getCurrentProject().getCurrentTask().setCurrentStep(step);
    forms.renderEditStepForm();
}

function stepDeleteButtonListener(step) {
    setCurrentTaskFromID(getCurrentProject().getIncompleteTasks(), String(step.getTaskID()));
    getCurrentProject().getCurrentTask().setCurrentStep(step);
    forms.renderDeleteStepForm();
}

export { stepEditButtonListener, stepDeleteButtonListener }