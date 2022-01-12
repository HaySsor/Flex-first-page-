const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".burger-btn");
const navItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const handleNavAnimation = () => {
	let delayTime = 0;

	navItems.forEach(e => {
		e.classList.toggle("nav-items-animation");
		e.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

const navclick = () => {
	nav.classList.toggle("nav--active");
	navBtnBars.classList.remove("black-bars-color");

	navItems.forEach(e => {
		e.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});
	handleNavAnimation();
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const hendleobserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach(section => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add("black-bars-color");
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove("black-bars-color");
		}
	});
};

handleCurrentYear();
burgerBtn.addEventListener("click", navclick);
window.addEventListener("scroll", hendleobserver);
