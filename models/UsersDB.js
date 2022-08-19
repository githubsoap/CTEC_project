"use strict";

var db = require('../db-connections');

class UsersDB{
    loginAccount(username, callback){
        var sql = "SELECT username, password FROM gaming_review.user WHERE username = ? ;"
        return db.query(sql,[username], callback);
    }
    newAccount(user, callback){
        var sql = "INSERT INTO user (username, first_name, last_name, date_of_birth, email, password) VALUES (?,?,?,?,?,?)";
        db.query(sql, [user.getUsername(), user.getFirstName(), user.getLastName(), user.getBirthday(), user.getEmail(), user.getPassword()], callback);
    }
    updateAccount(user, callback){
        var sql = "UPDATE user SET first_name = ?, last_name = ?, date_of_birth = ?, email=? , password=? WHERE username = ?";
        db.query(sql, [user.getFirstName(), user.getLastName(), user.getBirthday(), user.getEmail(), user.getPassword(), user.getUsername()], callback);
    }
    deleteAccount(username, callback){
        var sql = "DELETE FROM user WHERE username = ?;";
        return db.query(sql, [username], callback);
    }
}

module.exports = UsersDB;