/* Creates a single instance of a project object */
export default function projectFactory(title, description, dueDate, priority, status) {
    const tasks = [];

    return { title, description, dueDate, priority, status, tasks };
}