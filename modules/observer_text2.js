// svg for say-hi function
let svgHi = `<svg 
class="animation-hi"
id="Layer_1" 
enable-background="new 0 0 499.859 499.859" 
height="50%" 
viewBox="0 0 
499.859 499.859" 
width="50%" 
xmlns="http://www.w3.org/2000/svg">
<g>
<path d="m469.223 270.371c9.237-9.218 14.329-21.48 14.335-34.53.007-13.05-5.071-25.318-14.298-34.546-4.7-4.7-10.137-8.235-15.946-10.611l20.045-19.969c9.258-9.214 14.365-21.481 14.38-34.543s-5.062-25.342-14.298-34.578l-.519-.519c-7.127-7.127-15.937-11.584-25.169-13.37.56-2.968.857-6.007.86-9.094.015-13.06-5.063-25.339-14.298-34.573l-.637-.637c-9.221-9.221-21.48-14.299-34.52-14.299-8.804 0-17.248 2.323-24.645 6.665-2.409-6.522-6.211-12.503-11.268-17.559l-.42-.422c-19.033-19.03-50.004-19.033-69.039.001l-130.455 130.457 16.204-66.917c6.402-26.44-8.045-53.401-33.605-62.715-14.384-5.242-30.346-4.048-43.792 3.271s-23.112 20.077-26.52 35.003l-2.222 9.736c-10.628 46.555-28.196 93.338-52.216 139.046-17.999 34.25-24.854 74.305-19.302 112.787 5.744 39.816 23.855 75.938 52.376 104.458 35.01 35.011 81.542 54.286 131.049 54.284h.126c49.552-.032 96.113-19.373 131.105-54.458l37.349-37.448zm-173.93 131.182c-29.328 29.406-68.353 45.616-109.883 45.644h-.106c-41.491 0-80.495-16.155-109.837-45.497-23.906-23.905-39.085-54.173-43.897-87.528-4.656-32.273 1.086-65.852 16.167-94.549 25.228-48.006 43.702-97.237 54.907-146.325l2.222-9.735c1.514-6.633 5.639-12.077 11.615-15.33s12.789-3.761 19.18-1.433c11.194 4.079 17.522 15.887 14.718 27.467l-28.77 118.803c-3.413 12.246 12.364 25.887 25.185 14.137l168.206-168.206c7.337-7.339 19.276-7.337 26.601-.014l.42.421c3.554 3.555 5.511 8.279 5.511 13.306s-1.958 9.752-5.511 13.307c-27.379 27.378-76.487 76.486-103.362 103.361-5.858 5.857-5.858 15.355 0 21.213s15.356 5.858 21.213 0c16.605-16.605 112.003-112.002 125.982-125.98 3.554-3.555 8.279-5.512 13.306-5.512s9.752 1.957 13.307 5.512l.637.637c3.56 3.56 5.517 8.293 5.512 13.327-.006 5.034-1.974 9.763-5.544 13.317-37.611 37.461-89.049 88.677-126.281 125.783-5.87 5.847-5.888 15.344-.042 21.214 2.931 2.942 6.778 4.414 10.627 4.414 3.829 0 7.659-1.457 10.585-4.372 25.028-24.931 93.218-92.857 117.168-116.678 7.337-7.301 19.261-7.287 26.581.031l.518.519c3.561 3.561 5.518 8.294 5.512 13.329s-1.975 9.764-5.548 13.32c-36.483 36.339-94.262 93.883-130.424 129.934-5.869 5.848-5.887 15.345-.04 21.214 2.931 2.941 6.778 4.413 10.626 4.413 3.829 0 7.66-1.458 10.586-4.373l68.783-68.524 9.78-9.68c7.337-7.262 19.245-7.229 26.544.068 3.557 3.557 5.514 8.286 5.511 13.316-.002 5.03-1.965 9.758-5.518 13.303l-115.365 114.945z"/><path d="m451.123 374.497c3.26-7.615-.271-16.433-7.886-19.692-7.616-3.262-16.433.27-19.693 7.886-5.032 11.754-12.214 22.345-21.346 31.477-11.157 11.156-24.34 19.323-39.184 24.274-7.859 2.621-12.105 11.116-9.484 18.976 2.096 6.284 7.948 10.258 14.228 10.258 1.573 0 3.173-.249 4.748-.774 19.3-6.438 36.428-17.042 50.906-31.521 11.845-11.847 21.169-25.602 27.711-40.884z"/>
<path d="m490.765 382.77c-7.615-3.264-16.433.261-19.697 7.876-7.009 16.349-17.003 31.079-29.704 43.78-14.772 14.772-32.148 25.807-51.644 32.796-7.798 2.796-11.854 11.384-9.058 19.183 2.196 6.126 7.967 9.941 14.121 9.941`;

// Targets here
let targets = Array.from(document.querySelectorAll("#trigger"));

// Options for the Observer
let options = {
  root: null,
  rootMargin: "-50% 0% -40% 0%",
  threshold: 0.5,
};

// Observer here
const observer = new IntersectionObserver(callback, options);

// This is the callback for the observer
function callback(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && entry.target.classList.contains("target-1")) {
      movingText("#text-1"); // Do this when the observer see the target
      document.getElementById("text-1").insertAdjacentHTML(`afterend`, svgHi);
      observer.unobserve(entry.target); // Stop observing this target
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("target-2")
    ) {
      movingText("#text-2"); // Do this when the observer see the target
      observer.unobserve(entry.target); // Stop observing this target
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("target-3")
    ) {
      movingText("#text-3", "-"); // Do this when the observer see the target
      observer.unobserve(entry.target); // Stop observing this target
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("target-4")
    ) {
      movingText("#text-4"); // Do this when the observer see the target
      observer.unobserve(entry.target); // Stop observing this target
    }
  }); // forEach ENDpoint
} // Callback ENDpoint

// Connecting the Observer with multiple targets
targets.forEach(function (item) {
  observer.observe(item);
});

function anima() {
  anime.timeline({ loop: false }).add({
    targets: ".iniziale",
    // translateY: ["1.1em", 0],
    // translateX: ["0.55em", 0],
    color: ["rgba(255, 255, 255,0)", "rgba(255, 255, 255,1)"],
    opacity: 1,
    //   translateZ: 0,
    // keyframes: [
    //   { color: "rgba(79, 72, 197, 1)" },
    //   { color: "rgba(255, 0, 0, 1)" },
    //   { color: "rgba(79, 72, 197, 1)" },
    //   { color: "rgb(255,255,255)" },
    // ],
    //   color: ["rgba(79, 72, 197, 1)", "rgba(255, 0, 0, 1)"],
    //   opacity: 1,
    //   rotateZ: [0, 0],
    duration: 1000,
    easing: "easeOutExpo",
    delay: (el, i) => 20 * i,
  });
}

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml13");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml13 .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: ".ml13 .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1000,
    delay: (el, i) => 100 + 30 * i,
  });

function movingText(text, direction) {
  anime.timeline({ loop: false }).add({
    targets: `${text}`,
    translateY: [`40%`, 0],

    opacity: [0, 1],

    duration: 3000,

    // easing: "spring(1, 80, 10, 10)",
    // delay: (el, i) => 10 + 30 * i,
  });
}
