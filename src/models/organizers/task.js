import taskFactory from "./factories/taskFactory";
import { Status } from "../enums/status";
import { addTask } from "./project";

/* Create a new task and adds to a project */
function createTask(project, title, description, dueDate, priority) {
    const projectID = project.projectID;
    const taskID = project.getNextTaskCount();
    const newTask = taskFactory(title, description, dueDate, priority, projectID, taskID);

    addTask(project, newTask);
}

/* Edit an existing task */
function editTask(task, title, description, dueDate, priority, status) {
    task.setTitle(title);
    task.setDescription(task, description);
    task.setDueDate(task, dueDate);
    task.setPriority(task, priority);
    task.setStatus(task, status);
}

/* Delete an exisiting task */
function deleteTask(task) {
    delete task.title;
    delete task.description;
    delete task.dueDate;
    delete task.priority;
    delete task.status;
}

/* Complete a task and convert all steps to required status*/
function completeTask(task) {
    // Mark incomplete steps
    task.setStatus(Status.COMPLETED);
    task.getSteps().array.forEach(step => {
        step.setIncomplete();
    });
}

export { createTask, editTask, deleteTask, completeTask }