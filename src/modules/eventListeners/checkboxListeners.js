import { Status } from "../../models/enums/status";
import { getCurrentProject } from "../../models/organizers/project";
import { setStepCardCompleted } from "../../pages/projectPage/stepsCardHandler";

// function createCompletionListener(checkbox, event) {
//     checkbox.addEventListener("click", () => {

//     });
// }

/* Handles marking a step as completed after the box on a step card is checked */
function createStepCompletionListener(checkbox) {
    checkbox.addEventListener("click", () => {
        // Mark the step as completed (Needed? Probably yes for visual distinction)
        // Move the step to completed steps in task
        // Move the step card to bottom of current task and add 'completed' class
        alert("clicked");
        getCurrentProject().getCurrentTask().getCurrentStep().setStatus(Status.COMPLETED);
        getCurrentProject().getCurrentTask().removeFromTodoSteps(getCurrentProject().getCurrentTask().getCurrentStep());
        setStepCardCompleted(getCurrentProject().getCurrentTask().getCurrentStep());
    });
}

export { createStepCompletionListener }