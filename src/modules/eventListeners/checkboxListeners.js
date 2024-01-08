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
        function setCurrentTaskFromID(taskID) {
            getCurrentProject().getTasks().forEach(task => {
                if (String(task.getTaskID()) === taskID) {
                    getCurrentProject().setCurrentTask(task);
                    return;
                }
            })
        }

        function setCurrentStepFromID(stepID) {
            getCurrentProject().getCurrentTask().getTodoSteps().forEach(step => {
                if (String(step.getStepID()) === stepID) {
                    getCurrentProject().getCurrentTask().setCurrentStep(step);
                    return;
                }
            })
        }

        // Set current task and step from step card id values
        const stepCard = checkbox.parentElement.parentElement;
        setCurrentTaskFromID(String(stepCard.getAttribute("data-task-id")));
        setCurrentStepFromID(String(stepCard.getAttribute("data-step-id")));

        // Mark the step as completed
        getCurrentProject().getCurrentTask().getCurrentStep().setStatus(Status.COMPLETED);
        // Move the step to completed steps in task
        getCurrentProject().getCurrentTask().removeFromTodoSteps(getCurrentProject().getCurrentTask().getCurrentStep());
        // Move the step card to bottom of current task and add 'completed' class
        setStepCardCompleted(getCurrentProject().getCurrentTask().getCurrentStep());
    });
}

export { createStepCompletionListener }