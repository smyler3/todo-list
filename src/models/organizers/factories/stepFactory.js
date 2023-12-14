import { Status } from "../../enums/status";

/* Creates a single instance of a step object */
export default function stepFactory(title, projectID, taskID, stepID) {
    let status = Status.TODO;

    function getTitle() {
        return title;
    }

    function setTitle(title) {
        this.title = title;
    }

    function getStatus() {
        return status;
    }
    
    function setStatus(status) {
        this.status = status;
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
        getStatus, setStatus, 
        getProjectID, getTaskID, 
    }
}