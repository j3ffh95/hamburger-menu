// $(window).scroll(function () {
//   if ($(window).scrollTop() >= 50) {
//     $("body").css("background", "red");
//   } else {
//     $("body").css("background", "transparent");
//   }
// });

let showcaseSection = document.querySelector(".showcase"),
  navElement = document.querySelector(".main-nav");

let scrolled = false;
const options = {
  rootMargin: "-300px 0px 0px 0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navElement.classList.remove("nav-scrolled");
      scrolled = false;
    } else {
      navElement.classList.add("nav-scrolled");
      if (!scrolled) {
        navElement.style.transform = "translateY(-70px)";
      }
      setTimeout(() => {
        navElement.style.transform = "translateY(0)";
        scrolled = true;
      }, 200);
    }
  });
}, options);

observer.observe(showcaseSection);
// console.log(showcaseSection);
