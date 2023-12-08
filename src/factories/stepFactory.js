/* Creates a single instance of a step object */
export default function stepFactory(title, dueDate, status) {
    return { title, dueDate, status }
}