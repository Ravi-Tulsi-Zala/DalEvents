+++++++++++++++++++
 DalEvents Website
+++++++++++++++++++


============================================================================================================================================
What Is DalEvents?
============================================================================================================================================


DalEvents is a unique platform for students to explore and participate in events happening around the Dalhousie University campus.
The target audience for our project is students of Dalhousie University. Our website will keep students in-the-know about different events
such as workshops, seminars, speaker sessions, festivals and parties, networking sessions, team building events, TedTalks, and other 
miscellaneous events organized on campus. Students will know exactly when and where the event is going to take place at
the university by browsing the different categories of events. DalEvents will bring the students together to create like-minded communities.

============================================================================================================================================
Steps to install 
============================================================================================================================================

1) Git clone the project DalEventsProject using Clone with HTTPS URL : https://git.cs.dal.ca/jelliott/daleventsproject.git into local 
repository through command--> git clone <URL>
2) Feture branch for the project is "feature/eventsSearch". From the local repo, use command --> git checkout feature/eventsSearch <-- 
to switch branch from develop as it is created from develop.
3) If you are using visual code please follow the below commands

	- Install node modules in the daleventsproejct directory using command --> npm install <-- this will install and upgrade the exxisting
	  node modules. Switch the directory to backend and install the node modules using the same command.


============================================================================================================================================
Steps to run
============================================================================================================================================

1) First create the terminal from the "+" sign in terminal section. Two terminals are needed as we are using database server and localhost
2)In the first terminal use the command --> npm start <-- which will run the commnd ng serve. If it does not work, use the alternative 
command --> ng serve -o <--- for opening the website in browser. This will load the frontend. 
3)  In the second terminal, change the directory to backend in order to connect to database. Use command --> npm start <-- to connect to database. If the command doesn't work use the alternative command --> node server.js <-- to connect to database.


============================================================================================================================================
How to Interact with the feature?
============================================================================================================================================


First step is to open the home.html page which is the landing page of the website. On the navigation bar ,Search event option is given. On particular search keyword, related cards will be displayed. Tags feature is also given in order to simplify exploring events using categories.
It will show cards related to the particular tag.Both features are available for both logged in users and guests.
 
Features flow in the website is given below: 

Features Flow : 

	 1) home page(home.html) ---> Search Feature()

	 	This feature is useful for finding events with keyword. This feature is not static. It interacts with database to find the case insensitive search in database fot the specific events related to that keyword. 

	 2) home page(home.html) ---> Tags Feature()

	 	This feature is useful for exploring events using the tags like filtering elements. This feature is not static.This feature interacts with database in order to find events. 

============================================================================================================================================
Technologies Used in project
============================================================================================================================================


1 ) Bootstrap version 4.2.1

	----------------------
	Css file for Bootstrap
	----------------------

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

	------------------------------
	Javascript file for bootstrap
	------------------------------

	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>

2) JQuery
	
	----------------------------
	Javascript file for JQuery
	----------------------------	
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

3) Bootstrap Datepciker

	---------------------------------
	Css File for Bootstrap DatePicker
	---------------------------------
	
	<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker3.css" rel="stylesheet" id="bootstrap-css">
	
	----------------------------------------
	Javascript file for Bootstrap Datepicker
	----------------------------------------

	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.min.js"></script>

4) Font Awesome

	--------------------------
	CSS file for Font- Awesome
	--------------------------

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

5) Popper js for Dropdowns
	
	-----------------
	Java Script file 
	-----------------


	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

6) HTML5 and CSS3


7) MEAN (MongoDB, Express , Angular, NodeJs) stack framework
 	
 MongoDB is the datalayer of the  MEAN stack. Using Express server with node js make the application single threaded. It is single thereaded because every request satisfied by the node js single thread or send to the internal thread pool of the express web server.
 AngularJs is useful because of its capability to reduce the HTML code using the component like ngFor, ngIf etc. With AngularJS, designers can use HTML as the template language and it allows for the extension of HTML's syntax to convey the application's components effortlessly.
 Node js is useful creating HTTP requests for CRUD operations in the database.


============================================================================================================================================
References
============================================================================================================================================


--------
Websites
--------

[1]"How To Create Social Media Buttons", W3schools.com, 2019. [Online]. Available: https://www.w3schools.com/howto/howto_css_social_media_buttons.asp. [Accessed: 10- Feb- 2019].

Usage : This tutorial was used in order to gain the insights into how to create the social meadia buttons in the Footer of the Website.Code snippet is used in the footer of website page.

[2]M. Otto, "Cards", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/components/card/. [Accessed: 10- Feb- 2019].

Usage : In order to create the cards, bootstrap provide built in classes to use into the  website. I used the code snippets from this website in order to create the cards  for the events.

[3]M. Otto, "Navbar", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/components/navbar/. [Accessed: 10- Feb- 2019].

Usage : Navbar is a classic feature of Bootstrap 4. in order to create the navbar for the website, I used some classes like navbar-brand, navbar-toggler, navbar-collapse,navbar etc from the documentation provided.

[4]"HTML Snippets for Twitter Boostrap framework : Bootsnipp.com", Bootsnipp.com, 2019. [Online]. Available: https://bootsnipp.com/snippets/GzKKE. [Accessed: 10- Feb- 2019].

Usage : Bootsnip is useful for materialistic bootstrap componenets. I used the code snippets like Dropdowns, buttons, navigation bar components like user profile icons.

[5]S. Jana, "Create Bootstrap Datepicker in HTML - DataInFlow", DataInFlow, 2019. [Online]. Available: http://datainflow.com/create-bootstrap-datepicker-html/. [Accessed: 10- Feb- 2019].

Usage :  Boootstrap provide the built in facility for Datepicker using the Datepicker utility by including its css and js files. I used the datepicket utility for the Events by Date feature in the website.

[6]a. Mark Otto, "Forms", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/components/forms/#validation. [Accessed: 10- Feb- 2019].

Usage : From the bootstrap documentation, I used the code snippets for the different components of forms to make the website development faster. I used the grid system for the use profile page from this website and author is Kshiti Ghelani.

[7]"Form validation with JavaScript (on user registration form)", YouTube, 2019. [Online]. Available: https://www.youtube.com/watch?v=K1CzktZMXhY. [Accessed: 10- Feb- 2019].

Usage : I gained the knowledge about javascript validation for form components from this website.

[8]"Bootstrap Navbar Guideline - examples & tutorial. Basic & advanced usage", Material Design for Bootstrap, 2019. [Online]. Available: https://mdbootstrap.com/docs/jquery/navigation/navbar/. [Accessed: 10- Feb- 2019].

Usage : I used this website in order to develop the navbar.

[9]"Practical Uses of AngularJS: Create a Single Page Application (SPA) or a Website Menu in an Instant", Awwwards.com, 2019. [Online]. Available: https://www.awwwards.com/practical-uses-of-angularjs-create-a-single-page-application-spa-or-a-website-menu-in-an-instant.html. [Accessed: 24- Mar- 2019].




-----------------------------------------
Images used for the background and events
------------------------------------------
[1]Images.pexels.com, 2019. [Online]. Available: https://images.pexels.com/photos/16408/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940. [Accessed: 10- Feb- 2019].

[2]Brocku.ca, 2019. [Online]. Available: https://brocku.ca/brock-news/wp-content/uploads/2017/04/Mental-health-1600x1067.jpg?x68208. [Accessed: 24- Mar- 2019].

[3]Img.evbuc.com, 2019. [Online]. Available: https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F57158134%2F159856653045%2F1%2Foriginal.20190220-224541?h=230&w=460&auto=compress&rect=0%2C0%2C2160%2C1080&s=2bc3ccf9341f72030e28d7232c884747. [Accessed: 24- Mar- 2019].

[4]Robensmith.files.wordpress.com, 2019. [Online]. Available: https://robensmith.files.wordpress.com/2012/06/events.jpg. [Accessed: 24- Mar- 2019].

[5]Secondstareventservices.com, 2019. [Online]. Available: http://secondstareventservices.com/images/event-production/JCS1.jpg. [Accessed: 24- Mar- 2019].

[6]Carleton.ca, 2019. [Online]. Available: https://carleton.ca/communityfirst/wp-content/uploads/EVENTS-audience-pixabay2.jpg. [Accessed: 24- Mar- 2019].

[7]Symphonynovascotia.ca, 2019. [Online]. Available: https://symphonynovascotia.ca/wp-content/uploads/2015/02/St.-Johns-Anglican-Church-Lunenburg-e1424134954833.jpg. [Accessed: 24- Mar- 2019].

[8]Cdn.dal.ca, 2019. [Online]. Available: https://cdn.dal.ca/content/dam/dalhousie/images/academics/UG/Therapeutic%20Recreation/Leisure%20three%20in%20green.jpg.lt_638a77ba5d8356d24013284d5408210b.res/Leisure%20three%20in%20green.jpg. [Accessed: 24- Mar- 2019].

[9]Shiftkeylabs.ca, 2019. [Online]. Available: https://shiftkeylabs.ca/wp-content/uploads/2018/08/TensorFlow-Workshop-1024x576.jpg. [Accessed: 24- Mar- 2019].

[10]Billboard.com, 2019. [Online]. Available: https://www.billboard.com/files/media/silk-road-ensemble-grand-central-2017-billboard-1548.jpg. [Accessed: 24- Mar- 2019].

[11]Images.pexels.com, 2019. [Online]. Available: https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940. [Accessed: 10- Feb- 2019].


[12]"Redirect Notice", Google.com, 2019. [Online]. Available: https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjCtKXxsK7gAhULoYMKHesqDLIQjRx6BAgBEAU&url=http%3A%2F%2Fwallpaper21.com%2Fdark-android-wallpaper%2Fblurred-photos-and-desktop-backgrounds-for-mobile-up-wallpaper-wpt7602722%2F&psig=AOvVaw3YOdlK7TTjODvhiuWsYHex&ust=1549792423643363. [Accessed: 10- Feb- 2019].




