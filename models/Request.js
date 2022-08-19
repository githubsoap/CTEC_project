"use strict";

class Request {
    constructor( _id, user_name,request_text){
        this._id = _id;
        this.user_name = user_name;
        this.request_text = request_text;

    }

    getId(){
        return this._id;
    }
    getUsername(){
        return this.user_name;
    }
    getRequestText(){
        return this.request_text;
    }
    setUsername(){
        this.user_name = user_name;
    }
    setRequestText(){
        this.request_text = request_text;
    }
}

module.exports = Request;