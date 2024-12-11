# Startup
Start up for BYU CS 260

## Elevator pitch
Have you ever tried to schedule a time to meet up with multiple friends or colleagues, only to run into the logistical nightmare of trying to find when everyone's schedules line up? Many adults find it incredibly difficult to keep and maintain healthy friendships because most people have infinitely complex lives and schedules. "BlockOut-Cal" is a group calendaring platform where people can join a group, block out times they aren't available, and even highlight times that work best for them, allowing everyone in the group to visually see when their schedules align.

## End Goal
* * index.html is the landing page of the website. It's purposes are to welcome new users, prompt them to get started with immediately, or to log in (needed to save future data or access previously saved data).
* * calendar.html is the main application and focus of the website. A fully interactive calendar, that can be updated and adjusted by multiple users, allowing them to block out the calendar times when they are unavailable.
Optional: the ability to highlight optimal windows.
* * profile.html is where the users can access their saved calendars
optional: customizable patterns for their specific time blocks. friends lists. events lists.
* * login.html is a basic form page, for the purposes of creating/accessing a personal profile, allowing access to user's saved group calendars. 

## Current Status
* ### HTML
    * every page:
        * basic html framework
        * working navigation bar
        * background image
        * page title
        * github repo link in the footer
    * index.html:
        * introductory paragraph
        * a button to get started (links to calendar page)
        * a login button (links to login page)
    * calendar.html:
        * buttons to switch the display between daily (comparison view), weekly overlay view, and monthly overlay view. (Discontinued)
        * buttons to block out available/unavailable times (switched to toggle)
        * a button to pull up the date and time picker card (to block out or highlight time blocks) (discontinued)
        * a button to add data from google calendar to the user's personal calendar
        * a button to add data from the user's personal calendar to the group calendar
        * a button to leave the group calendar
        * a section for the weekday names, with a span for adaptive monthly dates (fixed top of grid) (updated: table)
        * a section for the hours of the day (left grid) (updated: table)
        * seven sections with 24 buttons each, allowing interaction with every hour of the day, for the calendar functionality.(updated: table)
        * a save button to save personal changes to database
        * a reset button to reset personal calendar
        * a section form for adding new time blocks to the calendar instead of clicking on the time or importing info from a google calendar. (discontinued -> click to toggle)

    * profile.html (Discontinued -> Integrated functionality into calendar page)
        * username display
        * section with link to personal calendar
        * section to be turned into a dropdown accordion with the list of group calendars in it. (all buttons linked to the calendar page)

    * login.html:
        * username display
        * login form

* ### CSS
    * every page:
        * Consistent, functional, and dynamic navigation bar and footer
        * Flex body
        * Styled background image
        * Github repo link in the footer
        * Uses stylesheets and bootstrap
        * Consistent styling
    * index.html:
        * Aesthetic introductory paragraph
        * Styled buttons
        * Dynamic content box
    * calendar.html:
        * Updated buttons
        * Dropdown for list of calendars
        * Dropdown for list of options
          * Link Google Calendar
          * Link Personal Calendar
          * Create New Calendar
          * Join Calendar
          * Invite To Calendar
          * Leave Calendar
        * Table with:
          * Clickable cells for every half-hour interval in a whole week's time (to be toggleable)
          * Week days as headers with the date below
          * Hours of the day as a side header
        * Buttons to navigate between weeks (month view discontinued for simplicity)

    * profile.html (Discontinued -> Integrated functionality into calendar page)

    * login.html:
        * Well designed form

## Key Features
* Personal calendar
    * A personal calendar that can be overlaid onto any group calendar

* Group calendar
    * Block out busy times
    * Highlight best available times

* Google calender
  * The option to block out busy windows with data from google calendars

### Optional

* Chat window
  * Discuss available windows of time
  * Coordinate meetup
  * Plan events

## Technologies
* HTML:
    * Structure consistency across pages
    * Atomic design (so "like things" are consistent across pages and easier to design)
    * Basic structuring of sections, headers, footers, buttons, and forms.

* CSS:
    * Consistent dynamic design across all pages
        * Typography
        * Padding and alignment (good design practice)
        * Border styling (slightly rounded edges, for a more friendly appearing U.I.)
        * Color scheme (use color variables for easy updating)

* JavaScript:
     * Basic interactivity (button functionality, navigation, loging in, toggling calender display)
     * Complex functionality (interacting with the calender)
        * Block out busy times
        * Highlight preferred times

* React:
    * Assist JS with the complexities of the calender functionality.

* Web service:
    * Google Calender API (dynamically block out google calendered events)

* Authentication: 
    * Creates User login.

* Database data: 
    * Store user login, calender I.D.s and calender data.

* WebSocket data:
    * Shares calender updates with whole group.



## Sketches
![Screenshot of startup landing page wireframe.](images\startup-home.png)
![Screenshot of startup login page wireframe.](images\startup-login.png)
![Screenshot of startup main application (calender) wireframe.](images\startup-calander.png)

## Attributions
Background Image: 'clock' by Mat Brown (open source advocate)