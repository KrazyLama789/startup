# Startup
Start up for BYU CS 260

## Elevator pitch
Have you ever tried to schedule a time to meet up with multiple friends or colleagues, only to run into the logistical nightmare of trying to find when everyone's schedules line up? Many adults find it incredibly difficult to keep and maintain healthy friendships because most people have infinitely complex lives and schedules. "TimeFrame" is a group calendaring platform where people can join a group, block out times they aren't available, and even highlight times when they would prefer to "TimeFrame", allowing everyone in the group to visually see when their schedules align.

## End Goal
* * index.html is the landing page of the website. It's purposes are to welcome new users, prompt them to get started with immediately, or to log in (needed to save future data or access previously saved data).
* * calendar.html is the main application and focus of the website. A fully interactive calendar, that can be updated and adjusted by multiple users, allowing them to block out the calendar times when they are unavailable.
Optional: the ability to highlight optimal windows.
* * profile.html is where the users can access their saved calendars
optional: customizable patterns for their specific time blocks. friends lists. events lists.
* * login.html is a basic form page, for the purposes of creating/accessing a personal profile, allowing access to user's saved group calendars. 

## Current Status
* ### HTML
* * index.html - basic html framework, working nav, placeholder main
* * calendar.html - basic html framework, working nav, placeholder main
* * profile.html - basic html framework, working nav, placeholder main
* * login.html - basic html framework, working nav, placeholder main

## Key Features
* Group calender
  * Block out busy times
  * Highlight best available times

* Chat window
  * Discuss available windows of time
  * Coordinate meetup
  * Plan events

* Google calender
  * Optional feature
  * Block out event windows set in google

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