import generateActionButtons from "../utility/actionButtons";
import { Actions } from "../../models/enums/actionButtons";
import * as forms from "../forms/formGenerator.js";
import { getCurrentProject } from "../../models/organizers/project.js";

/* Create a list of steps for a task */
export default function generateSteps(steps) {
    /* Create a step item */
    function generateStep(step) {

        /* Gets the current task from current step ids */
        function setCurrentTaskFromID() {
            getCurrentProject().getTasks().forEach(task => {
                console.log(String(task.getTaskID()) === String(step.getTaskID()));
                if (String(task.getTaskID()) === String(step.getTaskID())) {
                    console.log(task.getTitle());
                    console.log(task);
                    getCurrentProject().setCurrentTask(task);
                    return;
                }
            })
        }

        // Step Buttons to be created
        const stepButtons = [
            {classNames: [Actions.EDIT, "edit-step"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task", event: () => {
                setCurrentTaskFromID();
                getCurrentProject().getCurrentTask().setCurrentStep(step);
                forms.renderEditStepForm();
            }},
            {classNames: [Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task", event: () => {
                setCurrentTaskFromID();
                getCurrentProject().getCurrentTask().setCurrentStep(step);
                forms.renderDeleteForm();
            }},
        ]

        const stepItem = document.createElement("li");
        stepItem.classList.add("project-list-item");
        // Link to task
        stepItem.setAttribute("data-project-id", step.getProjectID());
        stepItem.setAttribute("data-task-id", step.getTaskID());
        stepItem.setAttribute("data-step-id", step.getStepID());

        // Step Information
        const stepInfo = document.createElement("span");
        stepInfo.classList.add("project-list-item-info");

        // Completion Checkbox
        const completedCheckbox = document.createElement("input");
        completedCheckbox.classList.add("task-checkbox");
        completedCheckbox.type = "checkbox";
        completedCheckbox.name = "";
        completedCheckbox.id = "";

        stepInfo.appendChild(completedCheckbox);

        // Step Details
        const stepDetails = document.createElement("span");
        stepDetails.classList.add("step-details");

        // Title
        const stepTitle = document.createElement("h4");
        stepTitle.textContent = step.getTitle();

        // Action Buttons for Steps
        const stepActionButtons = generateActionButtons(stepButtons);

        // Append Elements
        stepDetails.appendChild(stepTitle);

        stepInfo.appendChild(stepDetails);

        stepItem.appendChild(stepInfo);
        stepItem.appendChild(stepActionButtons);

        return stepItem;
    }

    const stepList = document.createElement("ul");
    stepList.classList.add("step-list");

    // Add all steps to the list
    steps.forEach(step => {
        stepList.appendChild(generateStep(step));
    });

    return stepList;
}