import { Status } from "../../enums/status";

/* Creates a single instance of a task object */
export default function taskFactory(title, description, dueDate, priority, projectID, taskID) {
    let stepCount = 0;
    const steps = [];
    const completedSteps = [];
    let status = Status.INCOMPLETE;

    return { title, description, dueDate, priority, status, stepCount, steps, completedSteps, projectID, taskID };
}