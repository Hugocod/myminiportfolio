// Targets here
let targets = Array.from(document.querySelectorAll(".dock-trigger"));

// Options for the Observer
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

// Observer here
const observer = new IntersectionObserver(callback, options);

// This is the callback for the observer
function callback(entries, observer) {
  entries.forEach(function (entry) {
    if (
      entry.isIntersecting &&
      entry.target.classList.contains("dock-trigger-intro")
    ) {
      youAreHere(p_intro);
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("dock-trigger-contact")
    ) {
      youAreHere(p_contact);
    }
  }); //forEach ENDpoint
} //Callback ENDpoint

// Connecting the Observer with multiple targets
targets.forEach(function (item) {
  observer.observe(item);
});

// Position Value
let p_intro = Array.from("intro");
let p_contact = Array.from("contact");

// Dock here
let dock = document.getElementById("dock");

// function for writing the position in the dock

function youAreHere(position) {
  dock.innerHTML = `<div class="box-position"><h1 class="indicatore"></h1></div>`;
  let indicatore = Array.from(document.querySelectorAll(".indicatore"));

  position.forEach((item, i) => {
    indicatore[0].insertAdjacentHTML(
      "beforeend",
      `<span class="finale-dock">${item}</span>`
    );

    here();
  });
} //YouAreHere ENDpoint

function here() {
  if (document.getElementById("mobile-spy").offsetWidth == "0") {
    anime({
      targets: ".finale-dock",
      // translateX: [100, 0],
      opacity: [0, 100],
      // scale: [0, 1],
      // easing: "spring(1, 80, 10, 0)",

      delay: (el, i) => 50 * (i + 1),
    });
  } else if (document.getElementById("mobile-spy").offsetWidth == "1") {
    anime({
      targets: ".finale-dock",
      translateY: [100, 0],
      scale: [0, 1],
      easing: "spring(1, 80, 10, 0)",

      delay: (el, i) => 50 * (i + 1),
    });
  }
}

anime({
  targets: "#smile",
  loop: true,
  // rotate: [40, 0],
  scale: [1.3, 1],
  duration: 2000,
  direction: "alternate reverse",
});
