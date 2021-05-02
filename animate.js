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
var newHeading = prompt("What's the new heading?");
$("#heading").text(newHeading);

// try adding a navbar
$("#navbar").append(`
    <div id="navbar">
      <a href="index.html">home</a>
      <a href="about.html">about</a>
      <a href="projects.html">projects</a>
      <a href="contact.html" class="right">contact me</a>
    </div>
    `);