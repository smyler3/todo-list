import { getCurrentProject } from "../../../models/organizers/project.js";
import * as forms from "../../../display/forms/formGenerator.js";
import { setCurrentTaskFromID } from "../utility/index.js";

/* Create the edit step button listener */
function stepEditButtonListener(step) {
    setCurrentTaskFromID(getCurrentProject().getIncompleteTasks(), String(step.getTaskID()));
    getCurrentProject().getCurrentTask().setCurrentStep(step);
    forms.renderEditStepForm();
}

/* Create the delete step button listener */
function stepDeleteButtonListener(step) {
    setCurrentTaskFromID(getCurrentProject().getIncompleteTasks(), String(step.getTaskID()));
    getCurrentProject().getCurrentTask().setCurrentStep(step);
    forms.renderDeleteStepForm();
}

export { stepEditButtonListener, stepDeleteButtonListener }