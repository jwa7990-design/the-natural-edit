/* ==========================================================================
   The Natural Edit — behaviour
   ========================================================================== */
 
/* ===EDIT ME===
   Drop your real Timely booking link (or a URL that opens your Timely
   widget) in here. Every "Book appointment" / "Make an appointment" button
   in the site points at BOOKING_URL — change it once, it updates everywhere.
   Leave it as "#book" for now and it'll just scroll down to the footer. */
const BOOKING_URL = "#book";
 
document.addEventListener("DOMContentLoaded", () => {
  // Wire up every booking button to BOOKING_URL
  document.querySelectorAll('a[href="#book"]').forEach(el => {
    el.setAttribute("href", BOOKING_URL);
    // If it's a real external URL (not an in-page anchor), open in a new tab
    if (!BOOKING_URL.startsWith("#")) {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });
 
  // Mobile hamburger menu
  const hamburger = document.getElementById("hamburgerBtn");
  const nav = document.getElementById("mainNav");
 
  function closeMenu(){
    nav.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }
 
  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });
 
  // Close mobile menu after tapping a nav link
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
 
  // Sticky header shadow once the page has scrolled
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();
});