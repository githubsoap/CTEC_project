function loginAccount() {
    var username = document.getElementById("username-signin").value;
    var password = document.getElementById("password-signin").value;
    var getAccount = new XMLHttpRequest(); 
    user_login_url = user_url + "/" + username;
    getAccount.open("GET", user_login_url, true);
    getAccount.onload = function () {
        user_array = JSON.parse(getAccount.responseText);
        console.log(user_array);
        if (password == user_array[0]["password"]) {
            alert("Welcome back " + username);
        }
        else {
            alert("Invalid username or password!");
        }
    }
    getAccount.send();

}