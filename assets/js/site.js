/*
 * Site behaviour: theme toggle, sticky header, mobile menu, scroll-spy,
 * publication filters, external links. Written in ES5 for broad support
 * (incl. in-app browsers); everything degrades gracefully without JS.
 */
(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;
  var toArray = function (list) { return Array.prototype.slice.call(list); };

  /* External links open in a new tab ------------------------------------ */
  toArray(doc.querySelectorAll('a[href^="http"]')).forEach(function (a) {
    if (a.hostname && a.hostname !== window.location.hostname) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    }
  });

  /* Theme toggle --------------------------------------------------------- */
  var themeBtn = doc.querySelector("[data-theme-toggle]");
  var darkQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var themeColors = { light: "#FAFAF7", dark: "#0F1214" };

  function currentTheme() {
    return root.getAttribute("data-theme") || (darkQuery && darkQuery.matches ? "dark" : "light");
  }

  function syncTheme() {
    if (!themeBtn) return;
    var dark = currentTheme() === "dark";
    themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
    themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    themeBtn.setAttribute("title", dark ? "Light theme" : "Dark theme");
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* private mode */ }
      toArray(doc.querySelectorAll('meta[name="theme-color"]')).forEach(function (m) {
        m.setAttribute("content", themeColors[next]);
      });
      syncTheme();
    });
    if (darkQuery && darkQuery.addEventListener) darkQuery.addEventListener("change", syncTheme);
    syncTheme();
  }

  /* Header: border on scroll + mobile menu -------------------------------- */
  var header = doc.querySelector("[data-header]");
  var menuBtn = doc.querySelector("[data-menu-toggle]");

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", (window.pageYOffset || root.scrollTop) > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setMenu(open) {
    if (!header || !menuBtn) return;
    header.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(!header.classList.contains("is-open"));
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("is-open")) {
        setMenu(false);
        menuBtn.focus();
      }
    });
    doc.addEventListener("click", function (e) {
      if (header.classList.contains("is-open") && !header.contains(e.target)) setMenu(false);
    });
  }

  /* Scroll-spy for the primary navigation -------------------------------- */
  var navLinks = toArray(doc.querySelectorAll("[data-nav]"));

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () { setMenu(false); });
  });

  var sections = navLinks
    .map(function (l) { return doc.getElementById(l.getAttribute("data-nav")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var visible = {};
    var setActive = function (id) {
      navLinks.forEach(function (l) {
        if (l.getAttribute("data-nav") === id) l.setAttribute("aria-current", "true");
        else l.removeAttribute("aria-current");
      });
    };
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      for (var i = 0; i < sections.length; i++) {
        if (visible[sections[i].id]) { setActive(sections[i].id); return; }
      }
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* Publication filters --------------------------------------------------- */
  var pubList = doc.getElementById("pub-list");

  if (pubList) {
    var filterBtns = toArray(doc.querySelectorAll(".filters [data-filter]"));
    var showAllBtn = doc.querySelector("[data-show-all]");
    var status = doc.querySelector("[data-pub-status]");
    var pubs = toArray(pubList.querySelectorAll(".pub"));
    var groups = toArray(pubList.querySelectorAll(".pub-year"));

    var matches = function (item, filter) {
      if (filter === "all") return true;
      if (filter === "selected") return item.classList.contains("is-selected");
      return (" " + item.getAttribute("data-topics") + " ").indexOf(" " + filter + " ") > -1;
    };

    var applyFilter = function (filter, announce) {
      var count = 0;
      pubs.forEach(function (item) {
        var ok = matches(item, filter);
        item.hidden = !ok;
        item.classList.remove("is-first-visible");
        if (ok) count++;
      });
      groups.forEach(function (g) {
        var first = g.querySelector(".pub:not([hidden])");
        g.hidden = !first;
        if (first) first.classList.add("is-first-visible");
      });
      pubList.setAttribute("data-view", filter === "selected" ? "selected" : "list");
      filterBtns.forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-filter") === filter ? "true" : "false");
      });
      if (showAllBtn) showAllBtn.hidden = filter === "all";
      if (status && announce) status.textContent = "Showing " + count + " publication" + (count === 1 ? "" : "s") + ".";
    };

    filterBtns.forEach(function (b) {
      b.addEventListener("click", function () { applyFilter(b.getAttribute("data-filter"), true); });
    });
    if (showAllBtn) {
      showAllBtn.addEventListener("click", function () { applyFilter("all", true); });
    }
    applyFilter("selected", false);
  }
})();
