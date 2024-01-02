// Get reference to the "goTopBtn", "menuToggle", and "navLinks" elements
var goTopBtn = document.getElementById("goTopBtn");
var menuToggle = document.querySelector(".menu-toggle");
var navLinks = document.querySelector(".nav-links");

// Add click event listener to each navigation link
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent the default link behavior
        e.preventDefault();

        // Scroll smoothly to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // If the window width is less than or equal to 768 pixels, hide the navigation links
        if (window.innerWidth <= 768) {
            navLinks.classList.remove("show");
        }
    });
});

// Add scroll event listener to the window
window.onscroll = function() {
    // Show or hide the "goTopBtn" based on the scroll position
    showGoTopButton();
};

// Function to show or hide the "goTopBtn" based on the scroll position
function showGoTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
}

// Function to scroll smoothly to the top of the page
function goToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollStep = -currentPosition / 20;
    var scrollInterval = setInterval(function() {
        // If the scroll position is at the top, stop the scrolling
        if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
            clearInterval(scrollInterval);
        } else {
            // Scroll the page up
            document.body.scrollTop += scrollStep;
            document.documentElement.scrollTop += scrollStep;
        }
    }, 15);
}

