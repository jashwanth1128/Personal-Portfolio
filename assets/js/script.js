'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebar && sidebarBtn) { // Added checks to ensure elements exist before adding listeners
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}


// testimonials variables (removed as per your HTML)
// The modal and related functionalities are removed as you've removed the testimonials section.


// custom select variables (Removed as it was likely related to portfolio filtering)
// If you add a portfolio or other filterable sections later, this logic might be needed.


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
if (form && formInputs.length > 0 && formBtn) { // Added checks to ensure elements exist
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
if (navigationLinks.length > 0 && pages.length > 0) { // Ensure navigation elements exist
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {

      // Remove 'active' from ALL navigation links
      for (let j = 0; j < navigationLinks.length; j++) {
        navigationLinks[j].classList.remove("active");
      }
      // Remove 'active' from ALL content pages
      for (let k = 0; k < pages.length; k++) {
        pages[k].classList.remove("active");
      }

      // Get the name of the page to activate from the clicked navigation link's data-nav-item
      const targetPageName = this.dataset.navItem;

      // Add 'active' class to the clicked navigation link
      this.classList.add("active");

      // Find the page that matches the target name and add 'active' to it
      const targetPage = document.querySelector(`[data-page="${targetPageName}"]`);
      if (targetPage) { // Make sure the target page actually exists
        targetPage.classList.add("active");
      }

      window.scrollTo(0, 0); // Scroll to top of the page after switching

      // If sidebar is open on mobile, close it after navigating
      if (sidebar && sidebar.classList.contains('active')) {
        elementToggleFunc(sidebar);
      }
    });
  }
}