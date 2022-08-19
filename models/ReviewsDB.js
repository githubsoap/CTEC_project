"use strict";

var db = require('../db-connections');
class ReviewsDB{
    getAllReviews(callback){
        var sql = "SELECT * FROM gaming_review.review";
        db.query(sql,callback);
    }
    addReview(review, callback){
        var sql = "INSERT INTO review (user_name, equipment_id, review_text, rating, date_posted) VALUES (?, ?, ?, ?,now())";
        db.query(sql, [review.getUsername(), review.getEquipmentId(), review.getReviewText(),review.getRating()], callback);
    }    
    editReview(review, callback){
        var sql = "UPDATE review SET user_name = ?, review_text = ?, rating = ?, date_posted = now() WHERE _id = ?";
        db.query(sql, [review.getUsername(), review.getReviewText(), review.getRating(), review.getId()], callback);
    }
    deleteReview(reviewID, callback){
        var sql = "DELETE from review WHERE _id = ?";
        return db.query(sql, [reviewID], callback);
    }
}

module.exports = ReviewsDB;

