"use strict";

class User {
    constructor(username, first_name, last_name, date_of_birth, email, password) {
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.email = email;
        this.password = password;
    }

    getUsername(){
        return this.username;
    }
    getFirstName(){
        return this.first_name;
    }
    getLastName(){
        return this.last_name;
    }
    getBirthday(){
        return this.date_of_birth;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }

    setUsername(user_name){
        this.user_name =user_name;
    }
    setFirstName(first_name){
        this.first_name = first_name;
    }
    setLastName(last_name){
        this.last_name = last_name;
    }
    setBirthday(date_of_birth){
        this.date_of_birth = date_of_birth;
    }
    setEmail(email){
        this.email = email;
    }
    setPassword(password){
        this.password = password;
    }
}

module.exports = User;