> ###Assignment 4
**Karan Sukhija B00809782**



**Application Details**

- The application displays the events happening at the university. It is still on the process of completion as some modification in the front end is to be done and the back end functionality of some features need to be done as well.

**Framework on which application is based on:**

- It is a mean stack application . It means it uses **angular 6 **for the front end framework, **mongo db** as the database, **nodejs** for the backend server and express for the back end framework.

**Features covered in this assignment**

- User profile page was taken into consideration for this assignment. 
- The other feature is based on the filtering stuff which applies on two of the pages (home page and the preferences tab in the user profile page) which will be covered in the final project.
- For the user profile page,  after the user logs in to the application (you can use the credentials :- anurag@dal.ca and anurag123; for the username and password respectively), user can hit the top right corner button of the small picture button and upon which a pop up will open up which will contain the profile option. On clicking it, it will redirect the user to the profile page. 
- As anurag data is stored in the database, it will fetch the anurag user information along with his display picture. The particular user is being fetched based upon the banner Id.

**Front - end functionality and integration**
- The user profile page contains the user information such as banner id, email id, phone number,display picture, change password, names, preferences, and about section which obviously contains the above mentioned user entries. Password change and preferences [categories field] are considered as a second feature and will be covered in the final project.
- The user profile page was intergrated with the whole application while defining the proper navigation routes with the use of the angular framework.

**Back end functionality of the user profile page**

######  User_profile Model
 {
        "_id": ObjectId("5c89aa5ec6e13f4f8442bff5")
        username: "anusri",
        password: "$2a$10$A.IdhzJ0Lyx254Ug2CIi7.jvcgaK0ZeLHIMizBdIIAkv81F18Vw4q",
        firstname: "anurag",
        lastname: "sreeku",
        email: "anu@gmail.com",
		vbanner_id :"B00805019
        "__v": 0
    },

###### Important code working

- Various components file and the interface files were created in the user-profile folder
- The first step was to create the service for the userinformation which fetches the user detials form the database. The URL used in that case is : "http://localhost:3000/test/".  This service file is created by the name userinfor.service.ts . 
- Now if for example, the user 1 (whose object id is 1 in the database) login the application, the user id matches with the one in the backend and hence the data get's displayed in the user profile page. For eg:- The code mentioned in the user-profile.component.html to extract any feature of the user is:** {userone[1]?.firstname}} ** which is the typescript. 

**Connect to back end**
- Open the daleventsproject folder and the open cmd and write the command: - **npm install** .After that, click the backend folder and On reaching the
- folder, open cmd and write the command: - **npm install**. Then Install Angular by writing the following command on the 
- command prompt :  npm install -g @angular/cli . Now,  within the backend folder, time to run the server by writing the command:- **node server.js **.
- This command will let you get connected to the database. 

**Connect to front-end**
- Make sure the backend is working and after that , go to the root of the project and write on the  command prompt  **ng serve -o**
- The browser is opened at http://localhost:4200/
- Congratulations, you have reached the home page of the application. kindly log in and proceed to the profile page to check for the feature.

Git

Clone the repo using : git clone https://git.cs.dal.ca/jelliott/daleventsproject.git

Checkout to branch - feature branch - user_profile 

**References**

[1]"One World Symposium", Dalhousie University, 2019. [Online]. Available: https://www.dal.ca/news/events/2019/03/23/one_world_symposium.html. [Accessed: 21- Mar- 2019]
[2]"Ask an Astronaut", Dalhousie University, 2019. [Online]. Available: https://www.dal.ca/news/events/2019/03/04/ask_an_astronaut.html. [Accessed: 21- Mar- 2019]
[3]"Angular", Angular.io, 2019. [Online]. Available: https://angular.io/guide/quickstart. [Accessed: 20- Mar- 2019]
[4]"Welcome to the mean stack", mean, 2019. [Online]. Available: http://mean.io/. [Accessed: 20- Mar- 2019]
[5]"Afrofuturism: a panel discussion", Dalhousie University, 2019. [Online]. Available: https://www.dal.ca/news/events/2019/03/18/afrofuturism__a_panel_discussion.html. [Accessed: 21- Mar- 2019]
[6]"University of King’s College Spring Open House", Dalhousie University, 2019. [Online]. Available: https://www.dal.ca/news/events/2019/03/22/university_of_king_s_college_spring_open_house.html. [Accessed: 21- Mar- 2019]


