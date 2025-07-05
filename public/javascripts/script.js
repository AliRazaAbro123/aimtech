// Navbar script------------------------------
const humberger = document.getElementById("humberger");
const closebtn = document.getElementById("close");
const subNav = document.querySelector(".subNav");
 
humberger.addEventListener("click", () => {
  subNav.classList.add("active");
  humberger.style.display = "none";
  closebtn.style.display = "block";
});

closebtn.addEventListener("click", () => {
  subNav.classList.remove("active");
  humberger.style.display = "block";
  closebtn.style.display = "none";
});

if (window.innerWidth >= 1024) {
  // For larger screens, hide the close button and humberger icon
  closebtn.style.display = "none";
  humberger.style.display = "none";
}
// Navbar script------------------------------

// FAQ script here ----------------------------
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");

    // Update the icon
    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});
// FAQ script here ----------------------------
// GSAP and ScrollTrigger setup---------------

document.addEventListener("DOMContentLoaded", () => {
  // Only run GSAP animations on screens wider than 1024px
  if (window.innerWidth >= 1024) {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Initialize ScrollSmoother
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: ".container",
      smooth: 1,
      effects: true,
    });

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.out" },
    });

    // Intro animations
    tl.from(".homeContent h3", { x: -110, opacity: 0 })
      .from(".homeContent h1", { y: 100, opacity: 0 }, "-=0.3")
      .from(".homeContent .links", { y: 100, opacity: 0 }, "-=0.3");

    // Scroll-triggered animations
    gsap.from(".about .bottom", {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".about .bottom",
        start: "top 70%",
      },
    });

    gsap.from(".services .serviceCards .topCards .card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".services .serviceCards .topCards",
        start: "top 70%",
      },
    });

    gsap.from(".services .serviceCards .bottomCards .card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".services .serviceCards .bottomCards",
        start: "top 70%",
      },
    });

    gsap.from(".services .Sustainability .leftSection", {
      x: 150,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".services .Sustainability .leftSection",
        start: "top 75%",
      },
    });
  }
});
