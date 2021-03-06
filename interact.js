$("body").prepend(
  `<div id="navbar">
      <a href="index.html">home</a>
      <a href="interact.html">interactive</a>
      <a href="cssgrid.html">grid</a>
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
    left: event.pageX - 100,
    top: event.pageY + 25
  });

  /* one implementation of following
  problems:
    - the following only occurs if the mouse moves
    - the follow moves only in 8 directions instead of 
      directly towards the mouse.
  */
  var follow_offset = $("#slow_follow").offset();
  var newLeft = follow_offset.left;
  var newTop = follow_offset.top;
  if (follow_offset.left < event.pageX)
    newLeft++;
  else
    newLeft--;
  if (follow_offset.top < event.pageY)
    newTop++;
  else
    newTop--;
  $("#slow_follow").offset({
    left: newLeft,
    top: newTop
  });
});

$(document).on('mousemove', (event) => {
  $('.follower').css({
    left: event.clientX,
    top: event.clientY
  })
})


