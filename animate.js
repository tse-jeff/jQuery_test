// original function
$(function () {
    var img = $("#orca"),
        width = img.get(0).width,
        screenWidth = $(window).width(),
        duration = 5000;

    function animateImg() {
        img.css("left", -width).animate({
            "left": screenWidth
        }, duration, animateImg);
    }

    animateImg();
});

// trying to use the same structure for another picture
$(function () {
    var img = $("#dango"),
        width = img.get(0).width,
        screenWidth = $(window).width(),
        duration = 7000;

    function animateImg() {
        img.css("left", -width).animate({
            "left": screenWidth
        }, duration, animateImg);
    }
    
    animateImg();
});

// change the heading using jQuery
// var newHeading = prompt("What's the new heading?");
// $("#heading").text(newHeading);

// try adding a navbar
$("#navbar").append(
    `<div id="navbar">
      <a href="index.html">home</a>
      <a href="interact.html">interactive</a>
    </div>`
    );

// fading out an element
// $("#orca").fadeOut(10000).fadeIn(1000);
// $("#dango").fadeOut(5000).fadeIn(1000);
var fading = () => $("h1").fadeOut(3000).fadeIn(2000);

// slideup and down
// $("h1").slideUp(3000).slideDown(2000);

// settimeout
function timeUp() {
    alert("Time is up!");
}
var timeoutID = setTimeout(timeUp, 5000);

// clearTimeout can stop the timeout function with specific ID
clearTimeout(timeoutID);

// setInterval can call a function with a given time
setInterval(fading, 5000);