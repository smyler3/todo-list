import { Status } from "../../enums/status";

/* Creates a single instance of a step object */
export default function stepFactory(title, projectID, taskID, stepID) {
    let status = Status.TODO;

    return { title, status, projectID, taskID, stepID }
}