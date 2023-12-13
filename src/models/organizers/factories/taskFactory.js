import { Status } from "../../enums/status";

/* Creates a single instance of a task object */
export default function taskFactory(title, description, dueDate, priority, projectID, taskID) {
    let stepCount = 0;
    const steps = [];
    const completedSteps = [];
    let status = Status.TODO;

    /* Returns step count and increments it */
    function getNextStepCount() {
        const count = stepCount;
        stepCount++;

        return count;
    }

    return { title, description, dueDate, priority, status, steps, completedSteps, projectID, taskID, getNextStepCount };
}