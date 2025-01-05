// script.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".toggle-btn");
    const navLinks = document.querySelector(".nav-links");
  
    // Toggle the visibility of the navigation links on click
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  
    // Hide the menu when a link is clicked (useful for smaller screens)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });
  });
  