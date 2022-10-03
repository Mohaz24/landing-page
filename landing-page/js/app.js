/*
 * Created list with js
 * Added eventLisener 
 * Located viewport with getBoundingClientRect()
 * Added active class
 * Created loop
 * Added setTimeout 
 */
// Dyanmic li list
const sections = document.querySelectorAll("section");
const navLi = document.getElementById("nav-hero");

function createElement() {

	for (section of sections) {
		// Looping through all sections
		const el = `<li><a href="#${section.id}" data-nav="${section.id}" class="smooth">${section.dataset.nav}</a></li>`;
		// Creating all the elements with attributes, classes and data nav to in store all anchors tags
		navLi.insertAdjacentHTML("beforeend", el);
		// Bascially it Inserts the element into the nav and beforeend its first child of the element

	}

}

createElement();

// Active class and Viwport

function activeClass() {

	// Selecting all sections on the page
	const sectionSum = document.querySelectorAll('section');
	
	// looping through each section
	sectionSum.forEach(section => {
		let activeLink = document.querySelector(`[data-nav=${section.id}]`);
		const distanceT = section.getBoundingClientRect().top;

		// Returns one true statement
		if (distanceT > -10 && distanceT < 100) {
			section.classList.add('active');
			activeLink.classList.add("active-link");

			// Adds the class
		} else {
			section.classList.remove('active');
			activeLink.classList.remove("active-link");

			// Removes the class
		}

	});

	
}

document.addEventListener("scroll", activeClass);

activeClass();


// Smooth scrolling
const list = document.querySelectorAll("a").forEach((anchor) => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		// The event continues to propagate as usual, unless one of its event listeners calls
		const link = document.getElementById(this.getAttribute("data-nav"));
		link.scrollIntoView({
			behavior: "smooth",
		});
		setTimeout(() => {}, 300);
	});
  
});


// SetTime out
const header = document.getElementById("hero-header");
const scrollTop = document.querySelector("scrolling");
let scrolling;
document.onscroll = () => {
	// Hidden navabar and reappearing when user scrolls
	header.style.display = "block";
	clearTimeout(scrolling);
	scrolling = setTimeout(() => {
		header.style.display = "none";
		//  Header disappears when user stops scrolling
	}, 5000);

	window.scrollY > 800;

};

