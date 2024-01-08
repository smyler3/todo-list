import { Status } from "../../enums/status";

/* Creates a single instance of a task object */
export default function taskFactory(title, description, dueDate, priority, projectID, taskID) {
    let stepCount = 0;
    const todoSteps = [];
    const completedSteps = [];
    let status = Status.TODO;
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
        priority = newPriority;
    }

    function getStatus() {
        return status;
    }
    
    function setStatus(newStatus) {
        status = newStatus;
    }

    function getTodoSteps() {
        return todoSteps;
    }

    /* Add a step to the task */
    function addToTodoSteps(step) {
        todoSteps.push(step);
    }

    /* Remove a step todoSteps (and add to completedSteps if valid) */
    function removeFromTodoSteps(step) {
        todoSteps.forEach((stepElement, index) => {
            if (step.getStepID() === stepElement.getStepID()) {
                todoSteps.splice(index, 1);
            }
            // Conditionally add to completedSteps
            if (step.getStatus() === Status.COMPLETED) {
                addToCompletedSteps(step);
            }
        });
    }

    function getCompletedSteps() {
        return completedSteps;
    }

    /* Add a completed step to the task */
    function addToCompletedSteps(step) {
        completedSteps.push(step);
    }

    /* Remove a completed step from the task */
    function removeCompletedStep(step) {
        completedSteps.forEach((stepElement, index) => {
            if (step.getStepID() === stepElement.getStepID()) {
                completedSteps.splice(index, 1);
            }
        });
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
        getStatus, setStatus, 
        getTodoSteps, addToTodoSteps, removeFromTodoSteps, 
        getCompletedSteps, removeCompletedStep, 
        getProjectID, getTaskID, 
        getNextStepCount,
        getCurrentStep, setCurrentStep, 
    };
}