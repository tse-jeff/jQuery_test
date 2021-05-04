$("body").prepend(
  `<div id="navbar">
      <a href="index.html">home</a>
      <a href="interact.html">interactive</a>
    </div>`
);

var leftOffset = -500;

var moveHeading = function () {
  $("#heading").offset({ left: leftOffset });

  // speed
  leftOffset += 2;

  if (leftOffset > 2000) {
    leftOffset = -500;
  }
}

// calls moveHeading function every 1 millisecond
setInterval(moveHeading, 1);

// responding to clicks
// This simply prints to console when the text is clicked.
function clickHandler(event) {
  console.log("Click! " + event.pageX + " " + event.pageY);
}

$("h1").click(clickHandler);

// the mousemove event. 
// this functions makes something follow the mouse
$("html").mousemove(function (event) {
  $("#mousemove").offset({
    left: event.pageX,
    top: event.pageY
  });
});


