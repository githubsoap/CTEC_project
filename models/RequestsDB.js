"use strict";

var db = require('../db-connections');

class RequestsDB{
    addRequest(username, request_text, callback){
        var sql = "INSERT INTO request (user_name, request_text, date_posted) VALUES (?,?,now())";
        db.query(sql, [username, request_text], callback);
    }
}

module.exports = RequestsDB;