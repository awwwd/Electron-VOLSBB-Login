function login() {
    var uname = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var success = document.getElementById("msgBoxSuccess");
    var error = document.getElementById("msgBoxSuccess");

    if (uname.length <= 0 || password.length <= 0) {
        error.style.display = "block";
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://phc.prontonetworks.com/cgi-bin/authlogin", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("userId=" + uname + "&password=" + password + "&serviceName=ProntoAuthentication&Submit22=Login");
        success.style.display = "block";
    }
    console.log(xmlhttp.responseText);
}

function logout() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://phc.prontonetworks.com/cgi-bin/authlogout", true);
    xmlhttp.send();
    console.log(xmlhttp.responseText);
}