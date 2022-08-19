"use strict";

const User = require('../models/User');
const UsersDB = require('../models/UsersDB');
const axios = require('axios');
var usersDB = new UsersDB();

function loginUser(request, respond){
    var username = request.params.username;
    usersDB.loginAccount(username, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function newAccount(request, respond){
    var user = new User(request.body.username, request.body.first_name, request.body.last_name, request.body.date_of_birth, request.body.email, request.body.password);
    usersDB.newAccount(user, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function updateAccount(request, respond){
    var user = new User(request.params.username, request.body.first_name, request.body.last_name, request.body.date_of_birth, request.body.email, request.body.password);
    usersDB.updateAccount(user, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function deleteAccount(request, respond) {
    var username = request.params.username;
    usersDB.deleteAccount(username, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getWeather(request, respond) {

    axios
      .get('https://2claev2x41.execute-api.ap-southeast-1.amazonaws.com/stage/')
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.weather);
        respond.json(res.data.weather);
      })
      .catch(error => {
        console.error(error);
        respond.json(error);
      });

}


module.exports = {loginUser, newAccount, updateAccount, deleteAccount, getWeather};