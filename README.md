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

    -
    Use the isValidColour, isValidStatus, isValidPriority as much as possible
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
    Completed subheader to "Completed Tasks"?
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TODO:
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
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
POTENTIAL FUTURE FEATURES:
    -
    Allow different sorting of tasks

    -
    Sort tasks by date second

    -
    Sort projects by colours

    -
    Drag and drop ordering

    -
    Make action buttons clear so card background can show project colour

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