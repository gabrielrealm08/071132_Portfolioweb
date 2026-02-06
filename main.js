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