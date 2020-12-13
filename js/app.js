/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navigation = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();
const divs = document.querySelectorAll('div');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(section => {
    //Creating a list item
    const navSection = document.createElement("li");
    //Creating an anchor item
    const anchorElement = document.createElement("a");
    //Getting name of the attribute "data-nav"
    const dataNavText = section.getAttribute('data-nav');
    //Creating text node
    const linkText = document.createTextNode(dataNavText);
    //adding text to the link
    anchorElement.appendChild(linkText);
    //adding the link to list item
    navSection.appendChild(anchorElement);
    //adding list to the fragment
    fragment.appendChild(navSection);

    document.addEventListener('DOMContentLoaded', () => {
        navSection.addEventListener('click', () => {
            // handle the click event
            section.scrollIntoView({behavior: "smooth"});
        });
    });
    
});
//adding fragment to unordered list of the nav bar
navigation.appendChild(fragment);

//A function to return whether section is in view port or not

// Add class 'active' to section when near top of viewport
const options = {
    root: null,
    threshold: 0,
    rootMargin: "-200px"
};
//Adding class attribute with a value of active to section in viewport
const observer = new IntersectionObserver(function(entries, observer) {
    const links = document.querySelectorAll('a');
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            //Delete active class attribute from all sections
            entry.target.classList.remove("your-active-class");
            return;
        }
        //Make the section that's in viewport active
        entry.target.classList.add("your-active-class");
        links.forEach(link => {
            if(link.textContent !== entry.target.parentElement.getAttribute('data-nav')) {
                link.classList.remove("your-active-class");
                return;
            }
            //Make the section's link in nav bar that's in viewport active
            link.classList.add("your-active-class");
        });
    });
}, options);

divs.forEach(div => {
    observer.observe(div);
});



// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


