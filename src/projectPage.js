import generateTasks from "./tasksGenerator";

/* */
export default function renderProjectPage(project) {
    /* */
    function generateProjectPageHeader(project) {
        /* */
        function generateProjectDetails(project) {
            const projectHeaderInfo = document.createElement("span");
            projectHeaderInfo.classList.add("project-header-details");

            // Title
            const projectTitle = document.createElement("h2");
            projectTitle.textContent = project.title;
            projectTitle.classList.add("project-header-title");

            // Description
            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;
            projectDescription.classList.add("project-header-description");

            // Date
            const projectDate = document.createElement("p");
            projectDate.textContent = project.dueDate || "No Due Date";

            // Append Elements
            projectHeaderInfo.appendChild(projectTitle);
            projectHeaderInfo.appendChild(projectDescription);
            projectHeaderInfo.appendChild(projectDate);

            return projectHeaderInfo;
        }

        // Project Buttons to be created
        const projectButtons = [
            {src: "../src/assets/icons/add.svg", alt: "", title: "Add New Task"},
            {src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project"},
            {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project"},
            {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project"},
        ]

        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header-container");

        // Append Elements
        projectHeader.appendChild(generateProjectDetails(project));
        projectHeader.appendChild(generateActionButtons(projectButtons));

        return projectHeader;

            // <div class="project-header-container">
            //     <span class="project-header-details">
            //         <h2 class="project-header-title">Work Meetings</h2>
            //         <p class="project-header-description">All things work meeting related!</p>
            //         <p>2022-Dec-18</p>
            //     </span>
            //     <span class="action-btns">
            //         <span class="icon action-btn"><img src="../src/assets/icons/add.svg" alt="" title="Add New Task"></span>
            //         <span class="icon action-btn"><img src="../src/assets/icons/paint.svg" alt="" title="Colour Project"></span>
            //         <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Project"></span>
            //         <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Project"></span>
            //     </span>
            // </div>
    }

    /* */
    function generateProjectPageContent(project) {
        const taskListContainer = document.createElement("div");
        taskListContainer.classList.add("task-list-container");

        taskListContainer.appendChild(generateTasks(project.tasks, generateActionButtons));

        return taskListContainer;
    }

    // Appending Header
    const header = document.querySelector(".header");
    header.appendChild(generateProjectPageHeader(project));

    // Appending Body
    const body = document.querySelector(".content-body");
    body.appendChild(generateProjectPageContent(project));
        
        {/* <div class="task-list-container">
            <!-- List of tasks for the project -->
            <ul class="task-list">
                <!-- Meetings -->
                <li class="project-task-item">
                    <div class="project-list-item">
                        <span class="project-list-item-info">
                            <input type="checkbox" name="" id="" class="task-checkbox">
                            <div class="project-list-task-description">
                                <h3>Meetings</h3>
                                <p>All monday work meetings</p>
                                <p>2022-Dec-12</p>
                            </div>
                        </span>
                        <span class="action-btns">
                            <span class="icon action-btn"><img src="../src/assets/icons/add.svg" alt="" title="Add New Step"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/paint.svg" alt="" title="Colour Task"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Task"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Task"></span>
                        </span>
                    </div>
                    <!-- List of steps for the task -->
                    <ul class="step-list">
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="" class="task-checkbox">
                                <span class="project-list-step-info">
                                    <h4>Morning Meeting</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="action-btns">
                                <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="" class="task-checkbox">
                                <span class="project-list-step-info">
                                    <h4>Afternoon Meeting</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="action-btns">
                                <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                    </ul>
                </li>

                <!-- Reports -->
                <li class="project-task-item">
                    <div class="project-list-item">
                        <span class="project-list-item-info">
                            <input type="checkbox" name="" id="" class="task-checkbox">
                            <div class="project-list-task-description">
                                <h3>Reports</h3>
                                <p>Finance Report 22-23 (Week 14)</p>
                                <p>2022-Dec-12</p>
                            </div>
                        </span>
                        <span class="action-btns">
                            <span class="icon action-btn"><img src="../src/assets/icons/add.svg" alt="" title="Add New Step"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/paint.svg" alt="" title="Colour Task"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Task"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Task"></span>
                        </span>
                    </div>
                    <!-- List of steps for the task -->
                    <ul class="step-list">
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="" class="task-checkbox">
                                <span class="project-list-step-info">
                                    <h4>Create Financial Figures</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="action-btns">
                                <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="" class="task-checkbox">
                                <span class="project-list-step-info">
                                    <h4>Check for Typos</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="action-btns">
                                <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div> */}
}

function generateActionButtons(buttons) {
    const actionBtns = document.createElement("span");
    actionBtns.classList.add("action-btns");

    // Project Buttons
    buttons.forEach(btn => {
        // Button Container
        const actionButtonContainer = document.createElement("span");
        actionButtonContainer.classList.add("icon", "action-btn");

        // Button
        const actionBtn = document.createElement("img");
        actionBtn.src = btn.src;
        actionBtn.alt = btn.alt;
        actionBtn.title = btn.title;

        // Append Elements
        actionButtonContainer.appendChild(actionBtn);

        actionBtns.appendChild(actionButtonContainer);
    })

    return actionBtns;
}