#### Assignment 2 (Event Meet )

The purpose of this assignment was to integrate the UI and come up with the final version. Moreover, one feature needs to be implemented.

#### Application Features


|  S.No |Feature  | Page including that feature |
| :------------ | :------------ | :------------ |
|  1 | Event Creation  |  Event Creation Page |
|  2 |   Login|Homepage  |
| 3  |  User Profile |  UserProfile page |
| 4  |  Event Page |  Event page |
| 5 |  Filter by category|  Homepage |
| 6 |  Social media integration|  Event Description page |
| 7 |  Interested or not interested|   Event Description page  |
| 8 |  Checkout|   Checkout page  |
| 9 |  Search|   Homepage  |
| 10 | Google Autocomplete Search |   Event Creation page  |


#### Features Selected

######1.** Event Creation (Fetching data from and importing to MongoDB)  -- Completed**
######2. Google Autocomplete API -- Working with standalone HTML page. Needs to add script in Angular format
######3. Social Media Inegration (Incomplete)

#### Features Showing in this Assignment

######1.** Event Creation (Fetching data from and importing to MongoDB)  -- Completely showing**
######2. Google Autocomplete API -- Working with standalone HTML page. Needs to add script in Angular format (Partially showing)






####Technology Used

######MEAN stack
-  MongoDB
-  Express
-  Node.js
-  Angular


####Instructions to run

-  Git clone repo using command prompt using command -- **git clone** https://git.cs.dal.ca/jelliott/daleventsproject.git
- Checkout to branch feature/createEvent using command -- **git  checkout** **feature/createEvent**
- Check whether you are in correct branch using  --** git branch**

######Connecting to Backend (Express)Server
- Navigate to backend folder and run **npm install** in comand promt being in that folder to install the dependecy.
- Now run **node server.js** to start the server.
- Now enter **http://localhost:3000/test** in the browser to test the connection.


######Connecting to frontend (Angular) Server
- Run **npm install** in the root or main folder to install the dependency.
- Now run **ng serve** to start the server listening on 4200 port
- Now enter **http://localhost:4200** in the browser to fire the index page of the application.

######Navigating to selected feature

- Click on Login in the navbar of Homepage.
- Enter Credentials
*Email - anurag@dal.ca
Password - anurag123*
- Click on Create Event on the navbar of loged in user.
- Enter the required details and click publish.

######Validating Feature backend Working

- Press F12 to enter into inpect tool in chrome
- Move to console and perform the event creation activity.
- An JSON object will be created with values in properties which is then added to DB using HTTP client POST request.

####Model for Events


     {
            "_id": "5c93aa02a2f677271c22aafe",
            "eventId": 4,
            "imageUrl": "../../assets/images/talkShow.jpg",
            "title": "ONE WORLD SYMPOSIUM",
            "description": "asdasd",
            "date": "Wed Dec 31 1969 20:39:02 GMT-0400 (Atlantic Standard Time)",
            "price": 30,
            "category": "Music",
            "location": "Halifax",
            "interested": 156,
            "disinterested": 1,
            "__v": 0
        },

##### Code of some important functions (refered source for the fuction)


######- Google Autocomplete Location Service (to fetch location when start typing on text box)

Google places library for autocomplete address  https://developers.google.com/places/web-service/autocomplete 
https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform

```javascript
  <script>
            var placeSearch, autocomplete;
            function initAutocomplete() {
                autocomplete = new google.maps.places.Autocomplete(
                    document.getElementById('autocomplete'), {types: ['geocode']});
                autocomplete.setFields('address_components');
                autocomplete.addListener('place_changed', fillInAddress);
            }
        </script>
		
       <script src="https://maps.googleapis.com/maps/api/js?  key=AIzaSyBNdiyMN5FyK1S7ANcS7Ae39r5CIJcfX3Q&libraries=places&callback=initAutocomplete"
                async defer>
				</script>
        
```

######- HTTP Client Post request method



    EventRegister(form) {
	   const req = this.http.post('http://localhost:3000/events', {
       eventId: Math.floor(Math.random() * (999999 - 100000)) + 100000,
       imageUrl: "../../assets/images/talkShow.jpg",
       title: form.value.event_name,
       description: form.value.event_description,
       date: form.value.event_date,
       price: form.value.price,
       category: form.value.category,
      location: form.value.location
        })
          .subscribe(
            res => {
              console.log(res);
              alert("Event Registered Successfully");
            },
            err => {
              console.log("Error occured");
              }
        }
         

######Author

Name - Shubham Narang
Banner No - B00810159

######References

•	Atanasov, Bootstrap DatePicker. [Online]. Available: https://gijgo.com/datepicker/example/bootstrap. [Accessed: 10-Feb-2019].
•	“HTML,” Browser Statistics. [Online]. Available: https://www.w3schools.com/. [Accessed: 10-Feb-2019].
•	"Place Autocomplete  |  Places API  |  Google Developers,” Google. [Online]. Available: https://developers.google.com/places/web-service/autocomplete. [Accessed: 10-Feb-2019].
•"University of King’s College Spring Open House", Dalhousie University, 2019. [Online]. Available: https://www.dal.ca/news/events/2019/03/22/university_of_king_s_college_spring_open_house.html. [Accessed: 21- Mar- 2019]
•	"One World Symposium", Dalhousie University, 2019. [Online]. Available: https://www.dal.ca/news/events/2019/03/23/one_world_symposium.html. [Accessed: 21- Mar- 2019]
•	“Markup Validation Service,” Ready to check - Nu Html Checker. [Online]. Available: https://validator.w3.org/. [Accessed: 10-Feb-2019].
•	(n.d.). Retrieved from https://www.techiediaries.com/angular-tutorial-forms-authentication-expressjs/
•	"Ask an Astronaut", Dalhousie University, 2019. [Online]. Available: https://www.dal.ca/news/events/2019/03/04/ask_an_astronaut.html. [Accessed: 21- Mar- 2019]
•	"Angular", Angular.io, 2019. [Online]. Available: https://angular.io/guide/quickstart. [Accessed: 20- Mar- 2019]
•	"Welcome to the mean stack", mean, 2019. [Online]. Available: http://mean.io/. [Accessed: 20- Mar- 2019]
•	Eschweiler, S., & Eschweiler, S. (2017, July 22). Angular 4.3 HttpClient (Accessing REST Web Services With Angular). Retrieved from https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
•	(n.d.). Retrieved from https://www.w3schools.com/nodejs/







