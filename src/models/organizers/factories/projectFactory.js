/* Creates a single instance of a project object */
export default function projectFactory(title, description, status) {
    const tasks = [];
    const completedTasks = [];

    return { title, description, status, tasks, completedTasks };
}