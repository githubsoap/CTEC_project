"use strict";
//const { DATETIME } = require('mysql/lib/protocol/constants/types');
const Review = require('../models/Review');
const ReviewsDB = require('../models/ReviewsDB');

var reviewsDB = new ReviewsDB();

function getAllReviews(request,respond){
    reviewsDB.getAllReviews(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addReview(request, respond) {
    var review = new Review(request.body.id, request.body.user_name,request.body.equipment_id, request.body.review_text, request.body.rating);
    reviewsDB.addReview(review, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
};

function editReview(request, respond) {
    var review = new Review(parseInt(request.params.id), request.body.user_name,request.body.restaurant_id, request.body.review_text, request.body.rating);
    reviewsDB.editReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteReview(request, respond) {
    var reviewID = request.params.id;
    reviewsDB.deleteReview(reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


module.exports = {getAllReviews, addReview, editReview, deleteReview};

