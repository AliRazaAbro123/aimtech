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

// FAQ script here ----
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");

    // Update the icon
    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});
// FAQ script here ----

// Initial page load animations
const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power3.out" } });

tl.from(".homeContent h3", { x: -100, opacity: 0 })
  .from(".homeContent h1", { y: 100, opacity: 0 })
  .from(".homeContent .links", { y: 100, opacity: 0 });

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

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const tl = gsap.timeline({
    defaults: { duration: 0.5, ease: "power2.out" },
  });

  tl.from(".homeContent h3", { x: -110, opacity: 0 })
    .from(".homeContent h1", { y: 100, opacity: 0 })
    .from(".homeContent .links", { y: 100, opacity: 0 })
    .from(".about .bottom", {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".about .bottom",
        start: "top 70%",
      },
    })
    .from(".services .serviceCards .topCards .card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".services .serviceCards .topCards",
        start: "top 70%",
      },
    })
    .from(".services .serviceCards .bottomCards .card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".services .serviceCards .bottomCards",
        start: "top 70%",
      },
    })
    .from(".services .Sustainability .leftSection", {
      x: 150,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".services .Sustainability .leftSection",
        start: "top 75%",
      },
    });
});
