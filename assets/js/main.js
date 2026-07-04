const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

window.addEventListener("pointermove", (event) => {
  const x = `${Math.round((event.clientX / window.innerWidth) * 100)}%`;
  const y = `${Math.round((event.clientY / window.innerHeight) * 100)}%`;
  document.documentElement.style.setProperty("--mx", x);
  document.documentElement.style.setProperty("--my", y);
}, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    revealObserver.unobserve(entry.target);
  });
}, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelectorAll("[data-light-level]").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    const level = Number(button.dataset.lightLevel || 1);
    const stage = button.closest(".visual-panel")?.querySelector(".lighting-stage");
    if (!stage) return;
    stage.style.setProperty("--light-x", `${46 + level * 34}%`);
    stage.style.setProperty("--light-y", `${54 - level * 30}%`);
  });
});

document.querySelectorAll(".gaussian-field").forEach((field) => {
  if (field.children.length) return;
  const points = [
    [10, 62], [16, 40], [22, 75], [29, 52], [34, 28], [39, 66],
    [46, 42], [50, 80], [56, 30], [61, 58], [67, 44], [72, 72],
    [78, 34], [84, 55], [90, 68], [48, 18], [58, 90], [36, 86]
  ];
  points.forEach(([left, top], index) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.left = `${left}%`;
    dot.style.top = `${top}%`;
    dot.style.opacity = String(0.5 + (index % 5) * 0.1);
    field.appendChild(dot);
  });
});
