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

    - 
    Assign names to variables like .firstChild.xxx so what they are is clear
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
    Duplicate setCurrentTaskFromID and setCurrentStepFromID functions
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
VISUALS:
    -
    Colour scheme is trash

    - 
    Add new project button is inconsistent

    -
    Make checkboxes bigger?

    -
    When all steps are in the completed/incompleted list the size is different from otherwise
    (maybe remove the padding?)

    -
    Completed subheader to "Completed Tasks"?
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TODO:
    -
    completed steps can still have their buttons clicked to move them between complete and incomplete
    -
    Save completion status of organizers
    Save deletions of organizers
    -
    Add local storage

    count is not increasing when a task etc is created so there are multiple tasks etc with the same id values making buttons not work

    // Maybe also pass steps/tasks in, instead of collecting via ID

    - Fix spacing of cards (remove margin from lists/cards and just use gaps)

    - 
    Apply visual overhaul
        - Make colour picker better
        - Change project colour visuals
        - Change colour scheme
        - Change add project button
        - Add TODO logo?

    -
    Apply clean coding practices

    -
    Add code for adding default data?


    right now the problem is that when you mark a task as incomplete, the page re-renders, but the logic for visually marking cards as complete on refresh is broken
    so things that should stay marked as complete are instead marked as incomplete
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
POTENTIAL FUTURE FEATURES:
    -
    Allow different sorting of tasks

    - 
    Add delay to clicking on project navigation cards
    Add delay to clicking on action buttons cards

    -
    Add different date formats

    -
    Move individual edited/added/marked incomplete task cards to correct place rather than refresh page
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