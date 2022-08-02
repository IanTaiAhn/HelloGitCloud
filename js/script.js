// tl.fromTo(".header", 2, {height: "0%"}, {height: "100%"}, {ease: "power2"} )
// .fromTo(".header a", 2, {opacity: 0}, {opacity: 1}, "-=1.5");

// both pretty much do the same thing

gsap.fromTo(".header", 2, {width: "0%"}, {width: "100%"});
gsap.fromTo(".header a", 2, {opacity: 0}, {opacity: 1}, "-=1.5");

gsap.fromTo(".contact-form", 2, {width: "0%"}, {width: "30vw"});
