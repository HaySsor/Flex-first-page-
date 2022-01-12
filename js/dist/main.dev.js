"use strict";

var nav = document.querySelector(".nav");
var burgerBtn = document.querySelector(".burger-btn");
var navItems = document.querySelectorAll(".nav__item");
var navBtnBars = document.querySelector(".burger-btn__bars");
var allSections = document.querySelectorAll(".section");
var footerYear = document.querySelector(".footer__year");

var handleNavAnimation = function handleNavAnimation() {
  var delayTime = 0;
  navItems.forEach(function (e) {
    e.classList.toggle("nav-items-animation");
    e.style.animationDelay = "." + delayTime + "s";
    delayTime++;
  });
};

var navclick = function navclick() {
  nav.classList.toggle("nav--active");
  navBtnBars.classList.remove("black-bars-color");
  navItems.forEach(function (e) {
    e.addEventListener("click", function () {
      nav.classList.remove("nav--active");
    });
  });
  handleNavAnimation();
};

var handleCurrentYear = function handleCurrentYear() {
  var year = new Date().getFullYear();
  footerYear.innerText = year;
};

var hendleobserver = function hendleobserver() {
  var currentSection = window.scrollY;
  allSections.forEach(function (section) {
    if (section.classList.contains("white-section") && section.offsetTop <= currentSection + 60) {
      navBtnBars.classList.add("black-bars-color");
    } else if (!section.classList.contains("white-section") && section.offsetTop <= currentSection + 60) {
      navBtnBars.classList.remove("black-bars-color");
    }
  });
};

handleCurrentYear();
burgerBtn.addEventListener("click", navclick);
window.addEventListener("scroll", hendleobserver);