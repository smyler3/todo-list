/* Creates a single instance of a project object */
export default function projectFactory(title, description, projectID) {
    let taskCount = 0;
    const tasks = [];
    const completedTasks = [];

    /* Returns task count and increments it */
    function getNextTaskCount() {
        const count = taskCount;
        taskCount++;
        return count;
    }

    return { title, description, projectID, taskCount, tasks, completedTasks, getNextTaskCount };
}