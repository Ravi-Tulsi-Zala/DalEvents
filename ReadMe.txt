## **Assignment Four**

**Jonathan Elliott**  
B007964433  
CSCI 5709

## Framework

-   MEAN Stack

    -   MongoDb (Database)
        - This is the database used to store all of our data.

    -   Express (Back-end)
        - This is used to retrieve data from the database and return them in a usable format.

    -   Angular
        - This framework is used for running our web application.

    -   Node.js
        - This is used to run Express and download any dependencies.


## Feature

**Event Details Page**

-   For this page, I wanted to get the data from backend for a particular event.

-   I also wanted data for the cards that would show at the bottom of the EventDetails page

-   Clicking on a card will take you to its event


**Events Data**

-   All of the data within our database were pulled from Dalhousie Events Page [link](https://www.dal.ca/news/events.html)


## Event Model

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

src:[3]

## What is currently in Development

-   Some of the cards will not be the same size because of the different resolutions of the image. This should be corrected before the final demo of the project.

-   The date in the Event Details Page are inconsistent. As a group, we are working on how the data will be represented in the database. It is an iterative process and we should have a better version before the final demo of the project

## W3C Compliance Check
I only worked on the Event Details' component HTML. The header and footer are similar for all pages and are compliant. The Event Details's component HTML will throw errors on "*ngIf" ,"*ngFor", and service variables:{{eventdetails[0].firstname}} in terms of compliance. Any other HTML within the component is compliant. The css file is compliant.

## Setup Instructions

1.  Clone Repo from [here](https://git.cs.dal.ca/jelliott/daleventsproject) within command prompt: **git clone [https://git.cs.dal.ca/jelliott/daleventsproject.git](https://git.cs.dal.ca/jelliott/daleventsproject.git)**

2.  Checkout out feature/eventDetails : **git checkout feature/eventDetails**
3.  Make sure that you have the latest code : **git pull**
4.  Install all dependencies from the root folder: **npm install**
5.  Install Angular : **npm install -g @angular/cli**


**Connecting to Back-end Server**

6.  Go into the back-end folder : **cd backend**

7.  Install all dependencies from the back-end folder: **npm install**

8.  Within the back-end folder, run the server : **node server.js**


**Running the Front-end**

9.  Open a New File Explorer to the root of the project.

10.  The back-end server should be running from step 7; now you can run the application, from the root of the project.

11.  Open a command prompt from the root of the project and type: **ng serve -o**

12.  The browser should open up to `http://localhost:4200/`

13.  On the Nav bar, click on `Event Details`

14.  Congratulations, you have reached the feature for this assignment : `http://localhost:4200/event-details`


## References

[1]"Afrofuturism: a panel discussion", _Dalhousie University_, 2019. [Online]. Available: [https://www.dal.ca/news/events/2019/03/18/afrofuturism](https://www.dal.ca/news/events/2019/03/18/afrofuturism)__a_panel_discussion.html. [Accessed: 21- Mar- 2019]

[2]"University of King’s College Spring Open House", _Dalhousie University_, 2019. [Online]. Available: [https://www.dal.ca/news/events/2019/03/22/university_of_king_s_college_spring_open_house.html](https://www.dal.ca/news/events/2019/03/22/university_of_king_s_college_spring_open_house.html). [Accessed: 21- Mar- 2019]

[3]"One World Symposium", _Dalhousie University_, 2019. [Online]. Available: [https://www.dal.ca/news/events/2019/03/23/one_world_symposium.html](https://www.dal.ca/news/events/2019/03/23/one_world_symposium.html). [Accessed: 21- Mar- 2019]

[5]"Ask an Astronaut", _Dalhousie University_, 2019. [Online]. Available: [https://www.dal.ca/news/events/2019/03/04/ask_an_astronaut.html](https://www.dal.ca/news/events/2019/03/04/ask_an_astronaut.html). [Accessed: 21- Mar- 2019]

[6]"Angular", _Angular.io_, 2019. [Online]. Available: [https://angular.io/guide/quickstart](https://angular.io/guide/quickstart). [Accessed: 20- Mar- 2019]

[7]"Welcome to the mean stack", _mean_, 2019. [Online]. Available: [http://mean.io/](http://mean.io/). [Accessed: 20- Mar- 2019]