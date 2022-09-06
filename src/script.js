document.getElementById("hamIcon").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("hidden");
  if (!document.getElementById("mobileMenu").classList.contains("hidden")) {
    gsap.to("#mobileMenu", { duration: 0.4, opacity: 1 });
  } else {
    gsap.to("#mobileMenu", { opacity: 0 });
  }
});

const arrow = document.querySelector("#arrowDown");

let mm = gsap.matchMedia();
mm.add("(max-width: 760px)", () => {
  gsap.to("#arrowDown", {
    scrollTrigger: { scrub: 1 },
    y: 600,
  });
  gsap.to("#creatives", {
    scrollTrigger: { scrub: 1 },
    y: 800,
  });
});
