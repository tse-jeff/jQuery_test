$("body").prepend(
    `<div id="navbar">
      <a href="index.html">home</a>
      <a href="interact.html">interactive</a>
    </div>`
    );

var leftOffset = -500;

var moveHeading = function () {
  $("#heading").offset({left: leftOffset});

  // speed
  leftOffset += 2;

  if (leftOffset > 2000) {
    leftOffset = -500;
  }
}

// calls moveHeading function every 1 millisecond
setInterval(moveHeading, 1);