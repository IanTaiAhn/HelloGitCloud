// tl.fromTo(".header", 2, {height: "0%"}, {height: "100%"}, {ease: "power2"} )
// .fromTo(".header a", 2, {opacity: 0}, {opacity: 1}, "-=1.5");

// both pretty much do the same thing

gsap.fromTo(".header", 2, {width: "0%"}, {width: "100%"});
gsap.fromTo(".header a", 2, {opacity: 0}, {opacity: 1}, "-=1.5");

gsap.fromTo(".contact-form", 2, {width: "0%"}, {width: "30vw"});


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})