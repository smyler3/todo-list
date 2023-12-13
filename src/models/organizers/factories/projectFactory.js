/* Creates a single instance of a project object */
export default function projectFactory(title, description, projectID) {
    const taskCount = 0;
    const tasks = [];
    const completedTasks = [];

    return { title, description, projectID, taskCount, tasks, completedTasks };
}