console.clear();

gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray(".animate-right");
const content = gsap.utils.toArray(".animate-left");

// gsap.set(panels, {
//   yPercent: (i) => (i ? 100 : 0)
// });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sections",
    start: "top top",
    end: () => "+=" + 100 * panels.length + "%",
    pin: true,
    scrub: true,
  }
});

panels.forEach((panel, index) => {
  tl.from(
    panel,
    {
      yPercent: 100,
      ease: "none",
    },
    "+=0.25"
  );
  tl.from(
    content[index],
    {
      xPercent: -100,
      ease: "none",
    },
    "<"
  );
});

	