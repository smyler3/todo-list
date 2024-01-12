Notes:
--------------------------------------------------------------------------
CODE SYNTAX:
    -
    Check for double capitalised comments
    e.g. 
    // Appending Elements 
    (instead of) 
    // Appending elements 

    -
    Check all imports for missing ; and .js

    -
    Check forEach loops to see if you can return after success for efficiency

    -
    Use consistent index.js layout or switch to something else
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
DUPLICATE CODE:
    -
    The action buttons can have duplicate code removed into another function

    -
    Radio field generator has heaps of duplicate code

    -
    Should be a way to reduce duplicate project action button code

    -
    Code reuse for edit and creation forms
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
CODE LOGIC:
    -
    Can use a function to call all action buttons on loading

    - 
    Add form sanatisation to creation forms
    Add form sanatisation to edit forms
    Add max and min values to form fields (or just required)

    -
    Font in textarea is weird

    -
    Make a function to grab current project from a given id?

    -
    Rename creation-form to something else as used by edit forms too

    -
    Instead of re-rendering whole page just render new project? (Could be reverted when sorting implemented)
    Or maybe instead of adding project sorting we just allow click dragging to rearrange?

    -
    Change task-checkbox to something else as it is used by steps aswell

    -
    Duplicate setCurrentTaskFromID functions
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
VISUALS:
    -
    Colour scheme is trash

    - 
    Add new project is inconsistent

    -
    When all steps are in the completed/incompleted list the size is different from otherwise
    (maybe remove the padding?)
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TODO:
    -
    When deleting a step, check it is removed from currentStep
    When deleting a task, check it is removed from currentTask
.
--------------------------------------------------------------------------

todo-list
|
├─ .gitignore
├─ dist
│  ├─ index.html
│  └─ main.bundle.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ assets
│  │  └─ icons
│  │     ├─ add.svg
│  │     ├─ completed.svg
│  │     ├─ delete.svg
│  │     ├─ edit.svg
│  │     ├─ paint.svg
│  │     ├─ projects.svg
│  │     ├─ today.svg
│  │     └─ upcoming.svg
│  ├─ index.js
│  ├─ models
│  │  ├─ enums
│  │  │  ├─ colours.js
│  │  │  ├─ organizer.js
│  │  │  ├─ priority.js
│  │  │  └─ status.js
│  │  └─ organizers
│  │     ├─ factories
│  │     │  ├─ projectFactory.js
│  │     │  ├─ stepFactory.js
│  │     │  └─ taskFactory.js
│  │     ├─ project.js
│  │     ├─ step.js
│  │     └─ task.js
│  ├─ modules
│  │  ├─ domInteraction
│  │  └─ eventListeners
│  ├─ pages
│  │  ├─ allProjectsPage
│  │  │  └─ index.js
│  │  ├─ display.js
│  │  ├─ forms
│  │  │  ├─ formGenerator.js
│  │  │  ├─ radioFieldGenerator.js
│  │  │  └─ textFieldGenerator.js
│  │  ├─ projectPage
│  │  │  ├─ actionButtons.js
│  │  │  ├─ index.js
│  │  │  ├─ stepsGenerator.js
│  │  │  └─ tasksGenerator.js
│  │  └─ sidebar
│  │     ├─ index.js
│  │     └─ sidebarProjectsGenerator.js
│  ├─ style.css
│  └─ template.html
├─ webpack.common.js
├─ webpack.dev.js
└─ webpack.prod.js

```