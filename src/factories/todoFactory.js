/* Creates a single instance of a todo object */
export default function todoFactory(title, description, dueDate, priority, status) {
    const steps = [];

    return { title, description, dueDate, priority, status, steps };
}