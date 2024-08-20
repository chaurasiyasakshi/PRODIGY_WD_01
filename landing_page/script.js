// Change header background on scroll
window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#222";
    } else {
        header.style.backgroundColor = "#333";
    }
});

// Change section background on hover over menu items
const menuItems = document.querySelectorAll('#menu a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const sectionId = item.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        section.style.backgroundColor = "#2c3e50";
    });
    item.addEventListener('mouseout', () => {
        const sectionId = item.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        section.style.backgroundColor = "";
    });
});
