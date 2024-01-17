import { getCurrentProject } from "../../../models/organizers/project.js";

/* Sets current task from a given taskID value */
function setCurrentTaskFromID(tasks, taskID) {
    tasks.forEach(task => {
        if (String(task.getTaskID()) === taskID) {
            getCurrentProject().setCurrentTask(task);
            return;
        }
    });
}

/* Sets current step from a given stepID value */
function setCurrentStepFromID(steps, stepID) {
    steps.forEach(step => {
        if (String(step.getStepID()) === stepID) {
            getCurrentProject().getCurrentTask().setCurrentStep(step);
            return;
        }
    });
}

export { setCurrentTaskFromID, setCurrentStepFromID }