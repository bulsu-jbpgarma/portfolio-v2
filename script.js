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
