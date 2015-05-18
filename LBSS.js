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

$(document).ready(function () { //READY
    'use strict';
    
    window.onload = function () { //onclick functions
        document.getElementById("displayMap").onclick = display;
    };
    
});