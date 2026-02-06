const toggle = document.getElementById("themeToggle");

function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light");
    localStorage.theme = "light";
    if (toggle) toggle.textContent = "☀️"; // indicates you're in light mode
  } else {
    document.body.classList.remove("light");
    localStorage.theme = "dark";
    if (toggle) toggle.textContent = "🌙"; // indicates you're in dark mode
  }
}

const saved = localStorage.theme || "dark";
setTheme(saved);

toggle?.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});




























// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  const setExpanded = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    setExpanded(isOpen);
  });

  // Optional: close menu when clicking any nav link
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("open");
      setExpanded(false);
    });
  });
}