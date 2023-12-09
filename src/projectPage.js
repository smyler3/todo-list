/* */
export default function renderProjectPage(project) {
    /* */
    function generateProjectPageHeader(project) {
        /* */
        function generateProjectHeaderInfo(project) {
            const projectHeaderInfo = document.createElement("span");
            projectHeaderInfo.classList.add("project-header-info");

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

        function generateProjectOrganizerButtons() {
            // Project Buttons to be created
            const projectButtons = [
                {src: "../src/assets/icons/add.svg", alt: "", title: "Add New Task"},
                {src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project"},
                {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project"},
                {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project"},
            ]

            const organizerBtns = document.createElement("span");
            organizerBtns.classList.add("organizer-btns");

            // Project Buttons
            projectButtons.forEach(btn => {
                // Button Container
                const buttonContainer = document.createElement("span");
                buttonContainer.classList.add("icon", "organizer-btn");

                // Button
                const button = document.createElement("img");
                button.src = btn.src;
                button.alt = btn.alt;
                button.title = btn.title;

                // Append Elements
                buttonContainer.appendChild(button);

                organizerBtns.appendChild(buttonContainer);
            })

            return organizerBtns;
        }

        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header");

        // Append Elements
        projectHeader.appendChild(generateProjectHeaderInfo(project));
        projectHeader.appendChild(generateProjectOrganizerButtons());

        return projectHeader;

        // <div class="project-header">
        //     <span class="project-header-info">
        //         <h2 class="project-header-title">Work Meetings</h2>
        //         <p class="project-header-description">All things work meeting related!</p>
        //         <p>2022-Dec-18</p>
        //     </span>
        //     <span class="organizer-btns">
        //         <span class="icon organizer-btn"><img src="../src/assets/icons/add.svg" alt="" title="Add New Task"></span>
        //         <span class="icon organizer-btn"><img src="../src/assets/icons/paint.svg" alt="" title="Colour Project"></span>
        //         <span class="icon organizer-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Project"></span>
        //         <span class="icon organizer-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Project"></span>
        //     </span>
        // </div>
    }

    /* */
    function generateProjectPageContent(project) {
        /* */
        function generateTaskHeader(task) {
            /* */
            function generateTaskInfo(task) {
                const projectListTaskInfo = document.createElement("div");
                projectListTaskInfo.classList.add("project-list-task-info");

                const taskTitle = document.createElement("h3");
                taskTitle.textContent = task.title;

                const taskDescription = document.createElement("p");
                taskDescription.textContent = task.description;

                const taskDate = document.createElement("p");
                taskDate.textContent = task.dueDate || "No Due Date";;

                projectListTaskInfo.appendChild(taskTitle);
                projectListTaskInfo.appendChild(taskDescription);
                projectListTaskInfo.appendChild(taskDate);

                return projectListTaskInfo;
            }

            const projectListItemInfo = document.createElement("span");
            projectListItemInfo.classList.add("project-list-item-info");

            // Completion Checkbox
            const completedCheckbox = document.createElement("input");
            completedCheckbox.type = "checkbox";
            completedCheckbox.name = "";
            completedCheckbox.id = "";

            projectListItemInfo.appendChild(completedCheckbox);
            projectListItemInfo.appendChild(generateTaskInfo(task));

            return projectListItemInfo;
        }

        /* */
        function generateTaskOrganizerButtons() {
            // Project Buttons to be created
            const taskButtons = [
                {src: "../src/assets/icons/add.svg", alt: "", title: "Add New Step"},
                {src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Task"},
                {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task"},
                {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task"},
            ]

            const organizerBtns = document.createElement("span");
            organizerBtns.classList.add("organizer-btns");

            // Project Buttons
            taskButtons.forEach(btn => {
                // Button Container
                const buttonContainer = document.createElement("span");
                buttonContainer.classList.add("icon", "organizer-btn");

                // Button
                const button = document.createElement("img");
                button.src = btn.src;
                button.alt = btn.alt;
                button.title = btn.title;

                // Append Elements
                buttonContainer.appendChild(button);

                organizerBtns.appendChild(buttonContainer);
            })

            return organizerBtns;
        }
        const projectTasks = document.createElement("div");
        projectTasks.classList.add("project-tasks");

        const projectTasksList = document.createElement("ul");
        projectTasksList.classList.add("project-tasks-list");

        // Create Task Section
        project.tasks.forEach(task => {
            const projectTask = document.createElement("li");
            projectTask.classList.add("project-task");

            // Task Information
            const projectListItem = document.createElement("div");
            projectListItem.classList.add("project-list-item");

            // Append Task Information Elements
            projectListItem.appendChild(generateTaskHeader(task));
            projectListItem.appendChild(generateTaskOrganizerButtons());
            projectListItem.appendChild

            projectTask.appendChild(projectListItem);
            // TODODODODODOODODODODODODODODDODODODOODODODODODODOODODODODODODODODODODODODODODODODODODODODODODODODOD
            // projectTask.appendChild(THE STEPS FOR THE TASK generateSteps(task.steps));

            projectTasksList.appendChild(projectTask);
        })

        projectTasks.appendChild(projectTasksList);

        return projectTasks;
    }

    // Appending Header
    const header = document.querySelector(".header");
    header.appendChild(generateProjectPageHeader(project));

    // Appending Body
    const body = document.querySelector(".content-body");
    body.appendChild(generateProjectPageContent(project));
        
        {/* <div class="project-tasks">
            <!-- List of tasks for the project -->
            <ul class="project-tasks-list">
                <!-- Meetings -->
                <li class="project-task">
                    <div class="project-list-item">
                        <span class="project-list-item-info">
                            <input type="checkbox" name="" id="">
                            <div class="project-list-task-info">
                                <h3>Meetings</h3>
                                <p>All monday work meetings</p>
                                <p>2022-Dec-12</p>
                            </div>
                        </span>
                        <span class="organizer-btns">
                            <span class="icon organizer-btn"><img src="../src/assets/icons/add.svg" alt="" title="Add New Step"></span>
                            <span class="icon organizer-btn"><img src="../src/assets/icons/paint.svg" alt="" title="Colour Task"></span>
                            <span class="icon organizer-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Task"></span>
                            <span class="icon organizer-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Task"></span>
                        </span>
                    </div>
                    <!-- List of steps for the task -->
                    <ul class="task-steps-list">
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="">
                                <span class="project-list-step-info">
                                    <h4>Morning Meeting</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="organizer-btns">
                                <span class="icon organizer-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon organizer-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="">
                                <span class="project-list-step-info">
                                    <h4>Afternoon Meeting</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="organizer-btns">
                                <span class="icon organizer-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon organizer-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                    </ul>
                </li>

                <!-- Reports -->
                <li class="project-task">
                    <div class="project-list-item">
                        <span class="project-list-item-info">
                            <input type="checkbox" name="" id="">
                            <div class="project-list-task-info">
                                <h3>Reports</h3>
                                <p>Finance Report 22-23 (Week 14)</p>
                                <p>2022-Dec-12</p>
                            </div>
                        </span>
                        <span class="organizer-btns">
                            <span class="icon organizer-btn"><img src="../src/assets/icons/add.svg" alt="" title="Add New Step"></span>
                            <span class="icon organizer-btn"><img src="../src/assets/icons/paint.svg" alt="" title="Colour Task"></span>
                            <span class="icon organizer-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Task"></span>
                            <span class="icon organizer-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Task"></span>
                        </span>
                    </div>
                    <!-- List of steps for the task -->
                    <ul class="task-steps-list">
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="">
                                <span class="project-list-step-info">
                                    <h4>Create Financial Figures</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="organizer-btns">
                                <span class="icon organizer-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon organizer-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="">
                                <span class="project-list-step-info">
                                    <h4>Check for Typos</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="organizer-btns">
                                <span class="icon organizer-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon organizer-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div> */}
}