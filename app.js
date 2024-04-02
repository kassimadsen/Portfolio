const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  // make buttons active on click
  sectBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      e.currentTarget.className += " active-btn";
    });
  });

  // make sections active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide the other sections
      // sections.forEach((section) => {
      //   section.classList.remove("active");
      // });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

function myFunction(sectionId) {
  let sec = document.querySelectorAll(".section");
  sec.forEach((itm) => {
    if (itm.id !== sectionId) itm.style.display = "none";
  });
  var x = document.getElementById(sectionId);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// let sec = document.querySelectorAll(".section");
// sec.forEach((itm) => {
//   itm.style.display = "none";
// });

PageTransitions();
