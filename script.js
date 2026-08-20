/* ZOVA — lightweight interactions: mobile nav + scroll reveal */
(function () {
  "use strict";

  window.googleTranslateElementInit = function () {
    if (window.google && google.translate && document.getElementById("google_translate_element")) {
      new google.translate.TranslateElement({pageLanguage: "en", autoDisplay: false}, "google_translate_element");
    }
  };

  var themeToggle = document.querySelector(".theme-toggle");
  var savedTheme = localStorage.getItem("zova-theme");
  if (savedTheme === "dark") document.body.classList.add("dark-mode");
  if (themeToggle) {
    var setThemeLabel = function () { themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀ Light" : "☾ Dark"; };
    setThemeLabel();
    themeToggle.addEventListener("click", function () { var dark = document.body.classList.toggle("dark-mode"); localStorage.setItem("zova-theme", dark ? "dark" : "light"); setThemeLabel(); });
  }

  // Mobile navigation
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".site-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.textContent = open ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
      });
    });
  }

  // Disabled "Coming Soon" store buttons should not jump to top
  document.querySelectorAll('.btn.store[aria-disabled="true"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });

  // Gentle scroll reveal for elements marked .reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }
})();
