let lastScrollTop = 0; // Track the last scroll position
const header = document.getElementById('header'); // Get the header element
function scrollToSection(event, sectionId) {
    event.preventDefault(); 
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down: hide the header
        header.style.display ='none'; // Move header up off the screen
        header.style.backgroundColor='red'
    } else {
        // Scrolling up: show the header
        header.style.top = '0'; // Bring header back
    }

    // Update the last scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
