import { DefaultColour, isValidColour } from "../../enums/colours.js";

/* Creates a single instance of a project object */
export default function projectFactory(title, description, projectID) {
    let colour = DefaultColour;
    let taskCount = 0;
    const tasks = [];
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
    }

    function getTasks() {
        return tasks;
    }

    /* Add a task to the project */
    function addTask(task) {
        tasks.push(task);
    }

    /* Remove a task from the project */
    function removeTask(task) {
        tasks.forEach((taskElement, index) => {
            console.log(taskElement);
        });
        tasks.forEach((taskElement, index) => {
            if (task.getTaskID() === taskElement.getTaskID()) {
                tasks.splice(index, 1);
            }
        });
    }

    function getCompletedTasks() {
        return completedTasks;
    }

    /* Add a completed task to the project */
    function addCompletedTask(task) {
        completedTasks.push(task);
    }

    /* Remove a task from the project */
    function removeCompletedTask(task) {
        completedTasks.array.forEach(taskElement => {
            if (task === taskElement) {
                completedTasks.push(taskElement);
            }
        });
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
        getTasks, addTask, removeTask,
        getCompletedTasks, addCompletedTask, removeCompletedTask, 
        getProjectID,
        getNextTaskCount,
        getCurrentTask, setCurrentTask, 
    };
}