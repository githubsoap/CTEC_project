var express = require("express"); //using the express web framework
const port = 3000;

var equipmentController = require('./controllers/equipmentController');
var reviewController = require('./controllers/reviewController');
var userController = require('./controllers/userController');
var requestController = require('./controllers/requestController');


var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

app.route('/equipment').get(equipmentController.getAllEquipments);
app.route('/review').get(reviewController.getAllReviews);
app.route('/review').post(reviewController.addReview);
app.route('/review/:id').put(reviewController.editReview);
app.route('/review/:id').delete(reviewController.deleteReview);
app.route('/register').post(userController.newAccount);
app.route('/user/:username').put(userController.updateAccount);
app.route('/user/:username').delete(userController.deleteAccount);
app.route('/user/:username').get(userController.loginUser);
app.route('/request').post(requestController.addRequest);
app.route('/weather').get(userController.getWeather);

app.listen(port, () => console.log('Running!'))
//console.log("web server running @ http://127.0.0.1:8080"); // output to console 

