// Targets here
let targets = Array.from(document.querySelectorAll(".trigger-intro"));

// Options for the Observer
let options = {
  root: null,
  rootMargin: "-80% 0% 0% 0%",
  threshold: 0.1,
};

// Observer here
const observer = new IntersectionObserver(callback, options);

// This is the callback for the observer
function callback(entries, observer) {
  entries.forEach(function (entry) {
    if (
      entry.isIntersecting &&
      entry.target.classList.contains("trigger-intro-expanded")
    ) {
      document
        .querySelector("#hugo-logo")
        .classList.replace("logo", "intro-logo");
      hideDock();
      moveLogoIntro();
      // youAreHere();
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("trigger-intro-closed")
    ) {
      document
        .querySelector("#hugo-logo")
        .classList.replace("intro-logo", "logo");
      showDock();
      // moveLogoIntro();
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
    function mostra() {
      indicatore[0].insertAdjacentHTML(
        "beforeend",
        `<span class="finale-dock">${item}</span>`
      );
    }

    setTimeout(mostra, i * 80);
  });
} //YouAreHere ENDpoint

// anime.js

function moveLogoIntro() {
  anime({
    targets: ["#h", "#u", "#g", "#o"],
    easing: "spring(1, 80, 10, 0)",
    fill: "rgb(255,255,255",
    rotate: [50, 0],
    duration: 1000,
    scale: [0, 1],
    delay: 300,
    direction: "forward",
    loop: false,
  });

  anime({
    targets: ["#right", "#left"],
    translateX: ["10000", "0"],
    direction: "forward",
    loop: false,
    duration: 1,
    easing: "spring(1, 80, 10, 0)",
  });
}

function closeLogoIntro() {
  anime({
    targets: ["#h", "#u", "#g", "#o"],
    easing: "spring(1, 80, 10, 0)",
    fill: "rgb(255,255,255",
    rotate: [50, 0],
    duration: 1000,
    scale: [1, 0],
    delay: 300,
    direction: "forward",
    loop: false,
  });

  anime({
    targets: ["#right", "#left"],
    translateX: ["10000", "0"],
    direction: "forward",
    loop: false,
    duration: 1,
    easing: "spring(1, 80, 10, 0)",
  });
}

function showDock() {
  if (document.getElementById("mobile-spy").offsetWidth == "0") {
    anime({
      targets: ".dock-2",
      translateY: ["-100%", 0],
    });
  } else if (document.getElementById("mobile-spy").offsetWidth == "1") {
    anime({
      targets: ".dock-2",
      translateX: [-100, 0],
    });
  }
}

function hideDock() {
  if (document.getElementById("mobile-spy").offsetWidth == "0") {
    anime({
      targets: ".dock-2",
      translateY: [0, "-100%"],
    });
  } else if (document.getElementById("mobile-spy").offsetWidth == "1") {
    anime({
      targets: ".dock-2",
      translateX: [0, -100],
    });
  }
}
