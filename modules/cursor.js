function customCursor() {
  // Replacing the standard cursor with the custom one

  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    // let cursorM = document.body.firstElementChild;
    // cursorM.classList.remove("no-cursor");
    cursor.setAttribute(
      "style",
      `transform: translate(${e.clientX}px, ${e.clientY}px)`
    );
  });

  window.addEventListener("wheel", (e) => {
    cursor.setAttribute(
      "style",
      `transform: translate(${e.clientX}px, ${e.clientY}px)`
    );
  });

  //  Display the right cursor with add/remove class

  // drag cursor

  let tc_Drag = Array.from(document.querySelectorAll(".trigger-cursor-drag"));

  tc_Drag.forEach(function (item) {
    item.addEventListener("mouseover", () => {
      cursor.classList.add("cursor-drag");

      document
        .querySelector(".container-cursor-drag")
        .classList.replace("cursor-none", "cursor-yes");
    });

    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-drag");

      document
        .querySelector(".container-cursor-drag")
        .classList.replace("cursor-yes", "cursor-none");
    });
  });

  // Adding link to the portfolio's item.
  document.querySelectorAll(".logos-eyelink").forEach((item) => {
    item.classList.add("trigger-cursor-link");
  });

  document.querySelectorAll(".logos-eyelink-wp").forEach((item) => {
    item.classList.add("trigger-cursor-link");
  });

  // link cursor

  let tc_Link = Array.from(document.querySelectorAll(".trigger-cursor-link"));

  tc_Link.forEach(function (item) {
    item.addEventListener("mouseover", (e) => {
      cursor.classList.add("cursor-drag");

      e.stopPropagation();

      document
        .querySelector(".container-cursor-go")
        .classList.replace("cursor-none", "cursor-yes");

      document
        .querySelector(".container-cursor-drag")
        .classList.replace("cursor-yes", "cursor-none");
    });

    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-drag");

      document
        .querySelector(".container-cursor-go")
        .classList.replace("cursor-yes", "cursor-none");
    });
  });
}

customCursor();
