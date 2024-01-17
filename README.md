Notes:
--------------------------------------------------------------------------
CODE SYNTAX:
    -
    Use consistent index.js layout or switch to something else

.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
DUPLICATE CODE:
    -
    Radio field generator has heaps of duplicate code
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
CODE LOGIC:
    -
    Can use a function to call all action buttons on loading

    - 
    Add max and min values to form fields (or just required)

    -
    Font in textarea is weird
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
VISUALS:
    -
    Wrap project desc text on too long

    -
    Make checkboxes bigger?
.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TODO:
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