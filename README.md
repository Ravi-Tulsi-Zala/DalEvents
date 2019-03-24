## **Assignment Four**

**Jonathan Elliott**
B007964433
CSCI 5709

## Framework

- MEAN Stack
  - MongoDb
  - Express
  - Angular
  - Node.js

## Feature

**Event Deatails Page**

- For this page, I wanted to get the data from backend for a particular event.
- I also wanted data for the cards that would show at the bottom of the EventDetails page
- Clicking on a card will take you to its event

**Events Data**

- All of the data within our database were pulled from Dalhousie Events Page [link](https://www.dal.ca/news/events.html)

## Event Model

src:[3]

```
{
"eventId": 114,
"imageUrl": "unknown",
"title": "ONE WORLD SYMPOSIUMtest",
"description": "This FREE symposium is an opportunity for people to learn about how local actions can make an impact on a global scale. Centered around refugee stories and experiences, attendees will learn from a keynote speaker, story tellers from our human library, and participate in a forced migration simulation. Everything will take place on March 23rd from 12-5PM in the Kenneth Rowe Building at Dalhousie University. Coffee, tea, and snacks will be provided. Come to learn new experiences and expand your perspectives of the world! #OneWorld4Change /n An evening social with music will be held afterwards at 7PM (location TBA). ",
"date": "Saturday March 23, 2019 - 12:00 PM ",
"host": "faiza.nauman@dal.ca",
"price": 0,
"category": "Conferences",
"location": "Potter Auditorium, The Kenneth C. Rowe Management Building 6100 University Ave, Halifax, Nova Scotia B3H 3J5",
"interested": 156,
"disinterested": 1,
"__v": 0
}
```

## What is currently in Development

- Some of the cards will not be the same size because of the different resolutions of the image. This should be corrected before the final demo of the project.
- The date in the Event Details Page are inconsistent. As a group, we are working on how the data will be represented in the database. It is an iterative process and we should have a better version before the final demo of the project

## Installation Instructions

1. Clone Repo from [here](https://git.cs.dal.ca/jelliott/daleventsproject) within command prompt: **git clone https://git.cs.dal.ca/jelliott/daleventsproject.git**
2. Checkout out feature/eventDetails : **git  checkout feature/eventDetails**
3. Make sure that you have the latest code : **git pull**
4. Install all dependecies from the root folder: **npm install**

**Connecting to Backend Server**

5. Go into the backend folder : **cd backend**
6. Install all dependencies from the backend folder: **npm install**
7. Within the backend folder, run the server : **node server.js**

**Runnig the Frontend**

8. Open a New File Explorer to the root of the project.
9. The backend server should be running from step 7; now you can run the application, from the root of the project.
10. Open a command prompt from the root of the project and type: **ng serve -o** 
11. The browser should open up to `http://localhost:4200/`
12. On the Nav bar, click on `Event Details`
13. Congratulations, you have reached the feature for this assignment : `http://localhost:4200/event-details`



## References

[1]"Afrofuturism: a panel discussion", _Dalhousie University_, 2019. [Online]. Available: https://www.dal.ca/news/events/2019/03/18/afrofuturism__a_panel_discussion.html. [Accessed: 21- Mar- 2019]

[2]"University of King’s College Spring Open House", _Dalhousie University_, 2019. [Online]. Available: https://www.dal.ca/news/events/2019/03/22/university_of_king_s_college_spring_open_house.html. [Accessed: 21- Mar- 2019]

[3]"One World Symposium", _Dalhousie University_, 2019. [Online]. Available: https://www.dal.ca/news/events/2019/03/23/one_world_symposium.html. [Accessed: 21- Mar- 2019]

[5]"Ask an Astronaut", _Dalhousie University_, 2019. [Online]. Available: https://www.dal.ca/news/events/2019/03/04/ask_an_astronaut.html. [Accessed: 21- Mar- 2019]

[6]"Angular", _Angular.io_, 2019. [Online]. Available: https://angular.io/guide/quickstart. [Accessed: 20- Mar- 2019]

[7]"Welcome to the mean stack", _mean_, 2019. [Online]. Available: http://mean.io/. [Accessed: 20- Mar- 2019]





**Angular Information. Not My Information past this point**

# DalEvents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
