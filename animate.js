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