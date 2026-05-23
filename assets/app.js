/* =====================================================================
   雷电模拟器 LDPlayer — progressive enhancement only.
   No content rendering, no fetch, no router, no hydration.
   Strictly: mobile menu toggle + footer year. Light theme only.
   ===================================================================== */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    /* ---------- Mobile navigation ---------- */
    var navToggle = document.querySelector(".nav-toggle");
    var navLinks = document.getElementById("primary-nav");
    function closeNav() {
      if (!navLinks) return;
      navLinks.classList.remove("open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    }
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", function () {
        var open = navLinks.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(open));
      });
      navLinks.addEventListener("click", function (e) {
        if (e.target.closest("a")) closeNav();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeNav();
      });
      document.addEventListener("click", function (e) {
        if (!navLinks.classList.contains("open")) return;
        if (e.target.closest("#primary-nav") || e.target.closest(".nav-toggle")) return;
        closeNav();
      });
      window.addEventListener("resize", function () {
        if (window.innerWidth > 720) closeNav();
      });
    }

    /* ---------- Footer year ---------- */
    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  });
})();
