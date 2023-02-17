"use strict";

/*
    File:   bomexamples.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   2/12/2019
    Purpose: 
*/

window.onload = function() {
    let timeoutID;
    let count = 0;

    document.getElementById("newWindow").onclick = function() {
        window.open("http://saskpolytech.ca");
    };

    document.getElementById("goBack").onclick = function() {
        history.back(); // or window.history.back()
    };

    document.getElementById("experiment").onclick = function() {
        timeoutID = window.setInterval(function() {
            count++;
            debugger;
            alert(count);
        }, 2000);
    };

    document.getElementById("experiment2").onclick = function() {
        clearInterval(timeoutID);
    };

    document.getElementById("displayLocation").onclick = function() {
        window.alert(window.location);
    };

    document.getElementById("assignLocation").onclick = function() {
        window.location = "http://saskpolytech.ca";
    };

    document.getElementById("callReplace").onclick = function() {
        window.location.replace("https://sportsnet.ca");
    };

    // Test the following in Internet Explorer or Edge
    document.getElementById("resize").onclick = function() {
        let winWidth = 500;
        let winHeight = 400;
        let screenWidth = screen.availWidth;
        let screenHeight = screen.availHeight;

        window.resizeTo(winWidth, winHeight);

        let hPosition = (screenWidth - winWidth) / 2;
        let vPosition = (screenHeight - winHeight) / 2;

        window.moveTo(hPosition, vPosition);
    };
};
