/* Creates a single instance of a task object */
export default function taskFactory(title, description, dueDate, priority, status) {
    const steps = [];
    const completedSteps = [];

    return { title, description, dueDate, priority, status, steps, completedSteps };
}