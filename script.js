// ============================================
// My Portfolio - Interactive JavaScript
// Author: Sonam Pemo
// ============================================

// 🟢 RANDOM TIP DISPLAY
function displayRandomTip() {
  const tips = [
    "💡 Tip: Comment your code for clarity!",
    "💡 Tip: Keep your portfolio simple and user-friendly.",
    "💡 Tip: Practice responsive design for all devices.",
    "💡 Tip: Highlight your best work on top!",
    "💡 Tip: Always include a contact section."
  ];

  const randomIndex = Math.floor(Math.random() * tips.length);
  document.getElementById("tip").textContent = tips[randomIndex];
}
window.onload = displayRandomTip;

// ============================================
// 🌙 DARK MODE TOGGLE
// ============================================
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "🌙 Dark Mode";
darkModeBtn.classList.add("btn");
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "20px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.zIndex = "1000";
darkModeBtn.style.background = "#333";
darkModeBtn.style.color = "#fff";
darkModeBtn.style.border = "none";
darkModeBtn.style.padding = "10px 20px";
darkModeBtn.style.borderRadius = "25px";
darkModeBtn.style.cursor = "pointer";
darkModeBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
document.body.appendChild(darkModeBtn);

// Toggle dark mode styles
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️ Light Mode";
  } else {
    darkModeBtn.textContent = "🌙 Dark Mode";
  }
});

// Inject dark mode CSS
const darkModeStyles = document.createElement("style");
darkModeStyles.textContent = `
  body.dark-mode {
    background: #121212;
    color: #f1f1f1;
  }
  body.dark-mode section {
    background: #1f1f1f;
    color: #ddd;
  }
  body.dark-mode .navbar {
    background: linear-gradient(90deg, #222, #444);
  }
  body.dark-mode .btn {
    background: #ffdd00;
    color: #000;
  }
  body.dark-mode footer {
    background: #222;
    color: #ffdd00;
  }
`;
document.head.appendChild(darkModeStyles);

// ============================================
// 🔙 GO BACK BUTTON
// ============================================
const goBackBtn = document.createElement("button");
goBackBtn.textContent = "⬆ Go Back";
goBackBtn.classList.add("btn");
goBackBtn.style.position = "fixed";
goBackBtn.style.bottom = "70px";
goBackBtn.style.right = "20px";
goBackBtn.style.display = "none";
goBackBtn.style.zIndex = "1000";
document.body.appendChild(goBackBtn);

// Show button after scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    goBackBtn.style.display = "block";
  } else {
    goBackBtn.style.display = "none";
  }
});

// Smooth scroll to top
goBackBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================================
// 🧭 SWEPT NAVIGATION HIGHLIGHT
// ============================================

// Works when you give your sections matching IDs with navbar links
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 120;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section && section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ============================================
// 💫 SMOOTH SCROLL WHEN CLICKING NAV LINKS
// ============================================
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    const section = document.querySelector(this.getAttribute("href"));
    if (section) {
      e.preventDefault();
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});
