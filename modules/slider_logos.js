//id's elements as a parameters
function slider(sli, sur) {
  let sliders = document.getElementById(`${sli}`);
  let oldPosition = 0;
  let newPosition = 0;
  let surface = document.getElementById(`${sur}`);
  let cursor = document.getElementById("drag-text");

  surface.addEventListener("mousedown", findPosition);
  surface.addEventListener("mouseup", resetPosition);
  surface.addEventListener("mouseleave", resetPosition);

  function resetPosition(e) {
    oldPosition = 0;
    newPosition = 0;

    // cursor-aspect-rules
    cursor.style.transform = "scale(1)";

    surface.removeEventListener("mousemove", moveSlider);
  }

  function moveSlider(e) {
    e.preventDefault();
    newPosition = e.pageX;

    if (newPosition < oldPosition) {
      sliders.scrollLeft += oldPosition - newPosition;
      oldPosition = e.pageX;
    } else if (newPosition > oldPosition) {
      sliders.scrollLeft -= newPosition - oldPosition;
      oldPosition = e.pageX;
    } else {
      sliders.scrollLeft += 0;
    }
  }

  function findPosition(e) {
    oldPosition = e.pageX;
    surface.addEventListener("mousemove", moveSlider);

    // cursor-aspect-rules
    cursor.style.transform = "scale(0)";
  }
}

// sliders
slider("sli-logos", "sur-logos");
slider("sli-reviews", "sur-reviews");
slider("sli-website", "sur-website");

// This code move the page to the top when the user call the refresh

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

history.scrollRestoration = "manual";
