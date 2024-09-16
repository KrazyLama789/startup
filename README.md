# Startup
Start up for BYU CS 260

## Elevator pitch
Have you ever tried to schedule a time to meet up with multiple friends or colleagues, only to run into the logistical nightmare of trying to find when everyone's schedules line up? Many adults find it incredibly difficult to keep and maintain healthy friendships because most people have infinitely complex lives and schedules. "TimeFrame" is a group calendaring platform where people can join a group, block out times they aren't available, and even highlight times when they would prefer to "TimeFrame", allowing everyone in the group to visually see when their schedules align.

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