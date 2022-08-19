function getEquipmentData() {    
	var request = new XMLHttpRequest();    
	request.open('GET', equipment_url, true);   
	request.onload = function() { 
	equipment_array = JSON.parse(request.responseText);       
	fetchReviews();
	console.log(equipment_array)
    displayEquipments(category);    
};
request.send();}

function displayEquipments(category) {
    var table = document.getElementById("equipmentsTable");
    var equipmentCount = 0;
    var message = "";

    table.innerHTML = "";
    totalEquipments = equipment_array.length;
    for (var count = 0; count < totalEquipments; count++) {
            var thumbnail = equipment_array[count].image;
            var name = equipment_array[count].name;
	        var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' + count + '" onClick="showEquipmentReviews(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer;" data-toggle="modal" data-target="#equipmentModal" class="card-title" item="' + count + '" onClick="showEquipmentDetails(this)">' + name + '</h5></div>\
                        </div>'
            table.insertAdjacentHTML('beforeend', cell);
            equipmentCount++;
        }
        message= category + " " +equipmentCount + " Trending Equipments";
        document.getElementById("summary").textContent=message;
        document.getElementById("parent").textContent="";
    }


function listAllEquipments() {
    category = "Top";
    displayEquipments(category);
    document.getElementById("home").classList.add("active");
    document.getElementById("favourites").classList.remove("active");
    document.getElementById("login").classList.remove("active");
    document.getElementById("signup").classList.remove("active");
}

function showEquipmentDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("name").textContent = equipment_array[item].name;
    document.getElementById("thumbnail").src = equipment_array[item].image;
    document.getElementById("category").textContent = equipment_array[item].category;
    document.getElementById("price").textContent = equipment_array[item].price;
    document.getElementById("description").textContent = equipment_array[item].description;
    document.getElementById("brand").textContent = equipment_array[item].brand;
    document.getElementById("link").href= equipment_array[item].link;;
    console.log(equipment_array[item].link)
}



