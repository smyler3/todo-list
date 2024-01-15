import { saveProjectsToLocalStorage } from "../../../modules/localStorage";
import { isValidPriority } from "../../enums/priority";
import { Status, isValidStatus } from "../../enums/status";
import { getSerializedProjects } from "../project";
import { serializeStep } from "../step";

/* Creates a single instance of a task object */
export default function taskFactory(title, description, dueDate, priority, projectID, taskID) {
    let stepCount = 0;
    const incompleteSteps = [];
    const completedSteps = [];
    let status = Status.INCOMPLETE;
    let currentStep = null;

    /* Returns step count and increments it */
    function getNextStepCount() {
        const count = stepCount;
        stepCount++;

        return count;
    }

    function getTitle() {
        return title;
    }

    function setTitle(newTitle) {
        title = newTitle;
    }

    function getDescription() {
        return description;
    }
    
    function setDescription(newDescription) {
        description = newDescription;
    }

    function getDueDate() {
        return dueDate;
    }
    
    function setDueDate(newDueDate) {
        dueDate = newDueDate;
    }

    function getPriority() {
        return priority;
    }
    
    function setPriority(newPriority) {
        if (isValidPriority(newPriority)) {
            priority = newPriority;
        }
    }

    function getStatus() {
        return status;
    }
    
    function setStatus(newStatus) {
        if (isValidStatus(newStatus)) {
            status = newStatus;
        }
    }

    function swapStatus() {
        if (status === Status.COMPLETED) {
            status = Status.INCOMPLETE;
        }
        else {
            status = Status.COMPLETED;
        }
    }

    function getIncompleteSteps() {
        return incompleteSteps;
    }

    /* Add a step to the task */
    function addToIncompleteSteps(step) {
        incompleteSteps.push(step);
    }

    /* Remove a step from incompleteSteps (and add to completedSteps if valid) */
    function removeFromIncompleteSteps(step) {
        incompleteSteps.forEach((stepElement, index) => {
            if (step.getStepID() === stepElement.getStepID()) {
                incompleteSteps.splice(index, 1);

                // Conditionally add to completedSteps
                if (step.getStatus() === Status.COMPLETED) {
                    addToCompletedSteps(step);
                }

                // Save change locally
                saveProjectsToLocalStorage(getSerializedProjects());

                return;
            }
        });
    }

    /* Converts all incomplete steps to a JSON-friendly format */
    function getSerializedIncompleteSteps() {
        const serializedSteps = [];
        incompleteSteps.forEach(step => {
            serializedSteps.push(serializeStep(step));
        });

        return serializedSteps;
    }

    function getCompletedSteps() {
        return completedSteps;
    }

    /* Add a completed step to the task */
    function addToCompletedSteps(step) {
        completedSteps.push(step);
    }

    /* Remove a completed step from the task (and add to incompleteSteps if valid) */
    function removeFromCompletedSteps(step) {
        completedSteps.forEach((stepElement, index) => {
            if (step.getStepID() === stepElement.getStepID()) {
                completedSteps.splice(index, 1);

                // Conditionally add to incompleteSteps
                if (step.getStatus() === Status.INCOMPLETE) {
                    addToIncompleteSteps(step);
                }

                // Save change locally
                saveProjectsToLocalStorage(getSerializedProjects());

                return;
            }
        });
    }

    /* Converts all completed steps to a JSON-friendly format */
    function getSerializedCompletedSteps() {
        const serializedSteps = [];
        completedSteps.forEach(step => {
            serializedSteps.push(serializeStep(step));
        });

        return serializedSteps;
    }

    function getProjectID() {
        return projectID;
    }

    function getTaskID() {
        return taskID;
    }

    function getCurrentStep() {
        return currentStep;
    }

    function setCurrentStep(newStep) {
        currentStep = newStep;
    }

    return { 
        getTitle, setTitle, 
        getDescription, setDescription, 
        getDueDate, setDueDate, 
        getPriority, setPriority, 
        getStatus, setStatus, swapStatus, 
        getIncompleteSteps, addToIncompleteSteps, removeFromIncompleteSteps, getSerializedIncompleteSteps,
        getCompletedSteps, addToCompletedSteps, removeFromCompletedSteps, getSerializedCompletedSteps,
        getProjectID, getTaskID, 
        getNextStepCount,
        getCurrentStep, setCurrentStep, 
    };
}