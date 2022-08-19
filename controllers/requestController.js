"use strict";

const Request = require('../models/Request');
const RequestsDB = require('../models/RequestsDB');

var requestsDB = new RequestsDB();

function addRequest(request, respond){
    var requestText = request.body.request_text ;
    var username = request.body.user_name
    requestsDB.addRequest(username, requestText, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

module.exports = {addRequest};