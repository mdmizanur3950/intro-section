const navBtn1 = document.getElementById("nav-btn1");
const navBtn1Menu = document.getElementById("nav-btn-menu1");

navBtn1.addEventListener("click", () => {
  navBtn1Menu.classList.toggle("hidden");
});

const navBtn2 = document.getElementById("nav-btn2");
const navBtn2Menu = document.getElementById("nav-btn-menu2");

navBtn2.addEventListener("click", () => {
  navBtn2Menu.classList.toggle("hidden");
});

const mobileMenuBtn = document.getElementById("hamburger-menu");

const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
});

// Mobile Menu
const mobileNavBtn1 = document.getElementById("mobileNav-btn1");
const mobileNavBtn1Menu = document.getElementById("mobile-nav-btn-menu1");

mobileNavBtn1.addEventListener("click", () => {
  mobileNavBtn1Menu.classList.toggle("hidden");
});

// Mobile Menu
const mobileNavBtn2 = document.getElementById("mobileNav-btn2");
const mobileNavBtn2Menu = document.getElementById("mobile-nav-btn-menu2");

mobileNavBtn2.addEventListener("click", () => {
  mobileNavBtn2Menu.classList.toggle("hidden");
});
