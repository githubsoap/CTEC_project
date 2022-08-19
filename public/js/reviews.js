function fetchReviews() {
    var request = new XMLHttpRequest();

    request.open('GET', review_url, true);
    request.onload = function () {
        review_array = JSON.parse(request.responseText);
        console.log(review_array);
    };

    request.send();
}

function showEquipmentReviews(element) {
    document.getElementById("emptyReview").innerHTML = "No review yet. Create one now.";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + equipment_array[item].name;
    document.getElementById("reviewBody").textContent = "";

    for (var i = 0; i < review_array.length; i++) {
        if (review_array[i].equipment_id === equipment_array[item]._id) {
            document.getElementById("emptyReview").innerHTML = "";
            selectedEquipmentId = equipment_array[item]._id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + review_array[i].review_text + "</p>               \
                                    <small>by " + review_array[i].user_name + " at " + review_array[i].date_posted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("reviewBody").insertAdjacentHTML('beforeend', html);
console.log(equipment_array[i]);
            var star = "";
            for (var j = 0; j < review_array[i].rating; j++) {
                console.log(i);
                star += "<img src='images/rating.png' style='width:50px' />";
            }
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteReview(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editReviewModal' data-dismiss='modal' item='" + i + "' onClick='editReview(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}

function newReview() {
    rating = 0;
    document.getElementById("userReviews-new").value = "";
    document.getElementById("username-new").value = "";
}

function addReview() {
    var review = new Object();

    review.equipment_id = equipment_array[currentIndex]._id;
    review.user_name = document.getElementById("username-new").value;
    review.review_text = document.getElementById("userReviews-new").value;
    review.date_posted = null;
    review.rating = rating;

    var addReview = new XMLHttpRequest();

    addReview.open("POST", review_url, true);

    addReview.setRequestHeader("Content-Type", "application/json");
    addReview.onload = function () {
        review_status = JSON.parse(addReview.responseText);
        console.log("new review sent");
        console.log(review_url, review_status);
        fetchReviews();
    };
    addReview.send(JSON.stringify(review));
}

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var ratingImgs = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    for (let ratingImg of ratingImgs) {
        ratingImg.setAttribute("src", ratingBnwImage);
    }
    changeRatingImg(num, classTarget);
}

function changeRatingImg(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", ratingImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", ratingImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", ratingImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", ratingImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", ratingImage);
            rating = 5;
            break;
    }
}

function editReview(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("editusername").value = review_array[item].user_name;
    document.getElementById("edituserReviews").value = review_array[item].review_text;
    console.log(review_array[item].rating);
    displayColorRating('editpop', review_array[item].rating);
}

function displayColorRating(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", ratingBnwImage);
    }
    changeRatingImg(num, classTarget);
}

function updateReview() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        var edit_review_url = review_url + "/" + review_array[currentIndex]._id;
        var updateReview = new XMLHttpRequest();
        updateReview.open("PUT", edit_review_url, true);
        updateReview.setRequestHeader("Content-Type", "application/json");
        review_array[currentIndex].user_name = document.getElementById("editusername").value;
        review_array[currentIndex].review_text = document.getElementById("edituserReviews").value;
        review_array[currentIndex].rating = rating;
        updateReview.onload = function () {
            fetchReviews();
        };
        updateReview.send(JSON.stringify(review_array[currentIndex]));
    }
}

function deleteReview(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item");
        var delete_review_url = review_url + "/" + review_array[item]._id;
        var eraseReview = new XMLHttpRequest();
        eraseReview.open("DELETE", delete_review_url, true);
        eraseReview.onload = function () {
            fetchReviews();
        };
        eraseReview.send();
    }
}
