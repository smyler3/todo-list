import { saveProjectsToLocalStorage } from "../../../common/localStorage/index.js";
import { DefaultColour, isValidColour } from "../../enums/colours.js";
import { prioritySort } from "../../enums/priority.js";
import { Status } from "../../enums/status.js";
import { getSerializedProjects } from "../project.js";
import { serializeTask } from "../task.js";

/* Creates a single instance of a project object */
export default function projectFactory(title, description, projectID) {
    let colour = DefaultColour;
    let taskCount = 0;
    const incompleteTasks = [];
    const completedTasks = [];
    let currentTask = null;

    /* Returns task count and increments it */
    function getNextTaskCount() {
        const count = taskCount;
        taskCount++;
        
        return count;
    }

    function getTitle() {
        return title;
    }

    function setTitle(newTitle) {
        title = newTitle;
    }

    function getDescription() {
        return description;
    }
    
    function setDescription(newDescription) {
        description = newDescription;
    }

    function getColour() {
        return colour;
    }

    function setColour(newColour) {
        if (isValidColour(newColour)) {
            colour = newColour;
        }

        // Save change locally
        saveProjectsToLocalStorage(getSerializedProjects());
    }

    function getIncompleteTasks() {
        return incompleteTasks;
    }

    /* Add a task to the project */
    function addToIncompleteTasks(task) {
        incompleteTasks.push(task);
        sortIncompleteTasks();
    }

    /* Remove an incomplete task from the project (and add to completeTasks if valid) */
    function removeFromIncompleteTasks(task) {
        incompleteTasks.forEach((taskElement, index) => {
            if (task.getTaskID() === taskElement.getTaskID()) {
                incompleteTasks.splice(index, 1);

                // Conditionally add to completedTasks
                if (task.getStatus() === Status.COMPLETED) {
                    addToCompletedTasks(task);
                }

                // Save change locally
                saveProjectsToLocalStorage(getSerializedProjects());

                return;
            }
        });
    }

    /* Converts all incomplete tasks to a JSON-friendly format */
    function getSerializedIncompleteTasks() {
        const serializedTasks = [];
        incompleteTasks.forEach(task => {
            serializedTasks.push(serializeTask(task));
        });

        return serializedTasks;
    }

    function sortIncompleteTasks() {
        incompleteTasks.sort(prioritySort);
    }

    function getCompletedTasks() {
        return completedTasks;
    }

    /* Add a completed task to the project */
    function addToCompletedTasks(task) {
        completedTasks.push(task);
        sortCompletedTasks();
    }

    /* Remove a completed task from the project (and add to incompletedTasks if valid) */
    function removeFromCompletedTasks(task) {
        completedTasks.forEach((taskElement, index) => {
            if (task.getTaskID() === taskElement.getTaskID()) {
                completedTasks.splice(index, 1);

                // Conditionally add to incompleteTasks
                if (task.getStatus() === Status.INCOMPLETE) {
                    addToIncompleteTasks(task);
                }

                // Save change locally
                saveProjectsToLocalStorage(getSerializedProjects());

                return;
            }
        });
    }

    /* Converts all completed tasks to a JSON-friendly format */
    function getSerializedCompletedTasks() {
        const serializedTasks = [];
        completedTasks.forEach(task => {
            serializedTasks.push(serializeTask(task));
        });

        return serializedTasks;
    }

    function sortCompletedTasks() {
        completedTasks.sort(prioritySort);
    }

    function getProjectID() {
        return projectID;
    }

    function getCurrentTask() {
        return currentTask;
    }

    function setCurrentTask(newTask) {
        currentTask = newTask;
    }

    return { 
        getTitle, setTitle, 
        getDescription, setDescription, 
        getColour, setColour,
        getIncompleteTasks, addToIncompleteTasks, removeFromIncompleteTasks, sortIncompleteTasks, getSerializedIncompleteTasks,
        getCompletedTasks, addToCompletedTasks, removeFromCompletedTasks, sortCompletedTasks, getSerializedCompletedTasks,
        getProjectID,
        getNextTaskCount,
        getCurrentTask, setCurrentTask, 
    };
}