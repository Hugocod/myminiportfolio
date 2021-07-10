// Targets here
let targets = Array.from(document.querySelectorAll(".td"));

// Options for the Observer
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

// Observer here
const observer = new IntersectionObserver(callback, options);

// variables for changing the direction
let arrowDirection_Logo = "";
let arrowDirection_Website = "";
let arrowDirection_Reviews = "";

function callback(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && entry.target.classList.contains("start-logo")) {
      arrowDirection_Logo = "right";
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("start-website")
    ) {
      arrowDirection_Website = "right";
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("start-reviews")
    ) {
      arrowDirection_Reviews = "right";
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("end-logo")
    ) {
      arrowDirection_Logo = "left";
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("end-website")
    ) {
      arrowDirection_Website = "left";
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("end-reviews")
    ) {
      arrowDirection_Reviews = "left";
    }
  }); // forEach ENDpoint
} // Callback ENDpoint

// Connecting the Observer with multiple targets
targets.forEach(function (item) {
  observer.observe(item);
});

// Function "turn on" the element
function displayElement(element) {
  element.style.opacity = "100";
}

// sliders here
let slider_logo = document.getElementById("sli-logos");
let slider_website = document.getElementById("sli-website");
let slider_reviews = document.getElementById("sli-reviews");

// function for changing the direction of the arrow within the drag cursor

// logos
slider_logo.addEventListener("mouseover", () => {
  if (arrowDirection_Logo == "left") {
    let arrow = document.getElementById("total-arrow"); // Do this when the observer see the target
    arrow.style.transform = "rotate(0deg)";

    // for mobile
    document.getElementById("di-logo").style.transform = "rotate(180deg)";
  } else if (arrowDirection_Logo == "right") {
    let arrow = document.getElementById("total-arrow"); // Do this when the observer see the target
    arrow.style.transform = "rotate(180deg)";

    // for mobile
    document.getElementById("di-logo").style.transform = "rotate(0deg)";
  }
});

slider_logo.addEventListener("touchend", () => {
  if (arrowDirection_Logo == "left") {
    // for mobile
    document.getElementById("di-logo").style.transform = "rotate(180deg)";
  } else if (arrowDirection_Logo == "right") {
    // for mobile
    document.getElementById("di-logo").style.transform = "rotate(0deg)";
  }
});

// websites
slider_website.addEventListener("mouseover", () => {
  if (arrowDirection_Website == "left") {
    let arrow = document.getElementById("total-arrow"); // Do this when the observer see the target
    arrow.style.transform = "rotate(0deg)";

    // for mobile
    document.getElementById("di-website").style.transform = "rotate(180deg)";
  } else if (arrowDirection_Website == "right") {
    let arrow = document.getElementById("total-arrow"); // Do this when the observer see the target
    arrow.style.transform = "rotate(180deg)";

    // for mobile
    document.getElementById("di-website").style.transform = "rotate(0deg)";
  }
});

slider_website.addEventListener("touchend", () => {
  if (arrowDirection_Website == "left") {
    // for mobile
    document.getElementById("di-website").style.transform = "rotate(180deg)";
  } else if (arrowDirection_Website == "right") {
    // for mobile
    document.getElementById("di-website").style.transform = "rotate(0deg)";
  }
});

// reviews
slider_reviews.addEventListener("mouseover", () => {
  if (arrowDirection_Reviews == "left") {
    let arrow = document.getElementById("total-arrow"); // Do this when the observer see the target
    arrow.style.transform = "rotate(0deg)";

    // for mobile
    document.getElementById("di-reviews").style.transform = "rotate(180deg)";
  } else if (arrowDirection_Reviews == "right") {
    let arrow = document.getElementById("total-arrow"); // Do this when the observer see the target
    arrow.style.transform = "rotate(180deg)";

    // for mobile
    document.getElementById("di-reviews").style.transform = "rotate(0deg)";
  }
});

slider_reviews.addEventListener("touchend", () => {
  if (arrowDirection_Reviews == "left") {
    // for mobile
    document.getElementById("di-reviews").style.transform = "rotate(180deg)";
  } else if (arrowDirection_Reviews == "right") {
    // for mobile
    document.getElementById("di-reviews").style.transform = "rotate(0deg)";
  }
});
