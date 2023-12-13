/* Creates a single instance of a step object */
export default function stepFactory(title, status) {
    return { title, status }
}