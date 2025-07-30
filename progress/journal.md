# Home Tracker Progress Journal

## July 2, 2025
**How to Implement:**
The application will use web storage, specifically sessionStoage to store and retrieve items that are being kept track off.

For now, the website will act as a "playground" for users to add and remove items from different provided categories.

**Future Ideas**
- Option to add items to a "To Buy" list

## July 13, 2025 
- Started react app with express server
- Added 3 routes: HomeTrackerPage, NotesPage, NotFoundPage


## July 14, 2025
- Added another react app for express server
    - App1: Home Tracker (Current Project) => /app1
    - App2: Not Decided => /app2
- Added /projects routing to react apps
    - App1: /project/app1
    - App2: /project/app2
- Started working on home tracker layout

## July 15, 2025
- Completed basic layout of tracker table for a room
- Created Room component to create tables
- Example of basic table: 
    ![basic table](./basic_table.png)
    
## July 19, 2025
- Working on tracker table:
    - wrapped table in a form tag
    - currently passing sample data to Room component to make tracker table display sample data
    - bottom of table displays input cells to add items to tracker
    - form is submitted when save button is clicked
- Currently Looks: 
    ![basic table](./basic_table_form.png)
- Problems:
    - when save button clicked, empty row is rendered
    - when clicked a 2nd time, new row is added under empty one with form values inputted
    - when adding new values to submit form again, it just renders empty rows
    => issues with rendering properly
    
## July 21, 2025
- got rid of form to use instead state variables to track input values
- use react refs to track input values instead of using onChange
    - onChange will cause unnecessary rendering 
- table is rendering proper new item when clicked saved
- next:
    - work on edit functionally to edit row
    - need to validate input to prevent empty rows and required some information:
        - item name, quantity
    - get rid of link option
        - unsafe to add links (for now at least)
    - add option to add item to list
    - maybe change photo to emoji or just get rid of column for now

## July 22, 2025
- got rid of link and photo option
- added input validation so item name and quantity are required when adding a new item
    - alert messsage displayed when missing either one or both
- rows are editable
    - edit button click for row and it turns into editable row
    - save & cancel button appear when editing row
    - includes input validation 
- adding a row and editing row works now

## July 23, 2025
- added local storage
    - can save data object for each room
    - can retrieve data object to render room component with it
- problems:
    - when editing row => need to add delete row functionality
    - need to render table when data is not null else empty table
    - work on wireframes!!
- Example of local storage: 
    ![local storage](./local_Storage.png)
    
## July 24, 2025
- working on wireframes in Figma
    - started on mobile version
    - home page, room page, sub-room page

=> [Wireframes Link](https://www.figma.com/design/8sW1TzInPpOAzrW5jv6Jfx/Untitled?node-id=2-226&t=FrnRZQfhIYSe8Ccg-0)

## July 27, 2025
- Wireframes draft completed
- Installed bootstrap
- Added Header component
    - Navbar: responsive navigation header 
    - still need to fully customize it
    - includes app title & links to home, about app, buy list

## July 28, 2025
- finished Header component
    - navbar is responsive
    - added collapsable functionality for small screens
    - added corresponding links to navbar
- started Home page
    - added components
    - currently rendenring array of categories to test it
    
## July 29, 2025
- added local storage to Home page
- fixed category circles