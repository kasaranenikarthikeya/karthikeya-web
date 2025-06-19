document.addEventListener('DOMContentLoaded', () => {
    // Console log from initial setup (can be kept or removed)
    console.log("JavaScript file loaded successfully.");

    // Intersection Observer for fade-in sections
    const sections = document.querySelectorAll('.fade-in-section');

    if (sections.length === 0) {
        console.log("No sections with .fade-in-section found."); // Log if no sections to observe
        return;
    }

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px', // no margin
        threshold: 0.1 // 10% of the item needs to be visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
                // console.log(entry.target, "is now visible and unobserved."); // For debugging
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
        // console.log("Observing:", section); // For debugging
    });

    // Active Navigation Link Styling
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname.split('/').pop(); // e.g., 'index.html', 'about.html'
    // If currentPath is empty (root path), treat it as 'index.html' for comparison
    const pageName = currentPath === '' ? 'index.html' : currentPath;

    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active from all first
        const linkPath = link.getAttribute('href').split('/').pop();

        if (linkPath === pageName) {
            link.classList.add('active');
        }
    });
});
