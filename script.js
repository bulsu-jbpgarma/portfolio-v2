/**
 * Activity 4 - JavaScript Interactivity
 * Feature: Dark/Light Mode Toggle
 */

// 1. Select the theme toggle button and the body element from the DOM
const themeToggleBtn = document.getElementById("theme-toggle");
const bodyElement = document.body;

// 2. Define the function that switches the theme
function toggleTheme() {
  // Toggle the 'dark-mode' class on the body element
  bodyElement.classList.toggle("dark-mode");

  // Check if the body currently has the 'dark-mode' class
  if (bodyElement.classList.contains("dark-mode")) {
    // If it does, save 'dark' to local storage so the browser remembers
    localStorage.setItem("portfolio-theme", "dark");
  } else {
    // If it doesn't, save 'light' to local storage
    localStorage.setItem("portfolio-theme", "light");
  }
}

// 3. Add a click event listener to the button to trigger the function
themeToggleBtn.addEventListener("click", toggleTheme);

// 4. On page load, check if the user previously selected dark mode
window.addEventListener("DOMContentLoaded", () => {
  // Retrieve the saved theme from local storage
  const savedTheme = localStorage.getItem("portfolio-theme");

  // If the saved theme is 'dark', automatically apply the dark mode class
  if (savedTheme === "dark") {
    bodyElement.classList.add("dark-mode");
  }
});

// Mobile navigation hamburger toggle
const navToggleBtn = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggleBtn && navLinks) {
  navToggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggleBtn.classList.toggle("open", isOpen);
    navToggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggleBtn.classList.remove("open");
      navToggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Entrance animations via IntersectionObserver
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("visible"));
}

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
