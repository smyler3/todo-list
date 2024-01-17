import { Status, isValidStatus } from "../../enums/status.js";

/* Creates a single instance of a step object */
export default function stepFactory(title, projectID, taskID, stepID) {
    let status = Status.INCOMPLETE;

    function getTitle() {
        return title;
    }

    function setTitle(newTitle) {
        title = newTitle;
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

    function getProjectID() {
        return projectID;
    }

    function getTaskID() {
        return taskID;
    }

    function getStepID() {
        return stepID;
    }

    return { 
        getTitle, setTitle, 
        getStatus, setStatus, swapStatus, 
        getProjectID, getTaskID, getStepID,
    }
}