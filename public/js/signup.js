function addAccount() {
    var user = new Object();

    user.username = document.getElementById("username-signup").value;
    user.first_name = document.getElementById("firstname").value;
    user.last_name = document.getElementById("lastname").value;
    user.date_of_birth = document.getElementById("date").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password-signup").value;

    var addAccount = new XMLHttpRequest(); 

    addAccount.open("POST", register_url, true);

    addAccount.setRequestHeader("Content-Type", "application/json");
    addAccount.onload = function () {
        account_status = JSON.parse(addAccount.responseText);
        console.log(account_status);
        if (account_status["affectedRows"] == 1) {
            alert("Succesfully created account" + user.username);
        }
        else{
            alert("Unsuccessful creation of account");
        }
        console.log("new account sent");
    }

    addAccount.send(JSON.stringify(user));
}