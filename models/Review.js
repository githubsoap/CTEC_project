"use strict";

class Review {
    constructor(_id, user_name, equipment_id, review_text, rating) {
        this._id = _id;
        this.user_name = user_name;
        this.equipment_id = equipment_id;
        this.review_text = review_text;
        this.rating = rating;
    }
    getId() {
        return this._id;
    }
    getUsername() {
        return this.user_name;
    }
    getEquipmentId() {
        return this.equipment_id;
    }
    getReviewText() {
        return this.review_text;
    }
    getRating() {
        return this.rating;
    }
    

    setUsername(user_name) {
        this.user_name = user_name;
    }
    setEquipmentId(equipment_id) {
        this.equipment_id = equipment_id;
    }
    setReviewText(review_text) {
        this.review_text = review_text;
    }
    setRating(rating) {
        this.rating = rating;
    }

}

module.exports = Review;
