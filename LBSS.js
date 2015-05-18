/*jslint browser: true*/
/*global $, jQuery, alert, CryptoJS*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

function display() { //shows map
    'use strict';
    var jsonFile = $.get("data.json.php");
    var obj = JSON.parse(jsonFile);
    document.getElementById("data").innerHTML = obj;
}

function sendInput() { //send the input data to sheet
    'use strict';
    var instreet, incity, instate, inzip;
    event.preventDefault();
    instreet = document.getElementById("istreet").value;
    incity = document.getElementById("icity").value;
    instate = document.getElementById("istate").value;
    inzip = document.getElementById("izip").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://script.google.com/macros/s/1rctbH3LEpumJ8ZOEjWz1F-K4-BAGm3hY9L9CM8I4rTw/exec?create&name=' + instreet + '&pass=' + inzip, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //Data successfully submitted!
                alert("Input Successful!");
            } else {
                //Error
                //alert("Error! Registration Unsuccessful");
                alert("Error");
            }
        }
    };
    xhr.send();
}

$(document).ready(function () { //READY
    'use strict';
    
    window.onload = function () { //onclick functions
        document.getElementById("displayMap").onclick = display;
        document.getElementById("sendIt").onclick = sendInput;
    };
    
});