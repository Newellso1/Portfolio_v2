// Function that rounds the corners of container on page load
const content = document.querySelector('.content')
window.onload = function () {
    content.classList.add('roundCorners');
}

// Intersection Observer that shows and hides content if it's out/in view


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Function that adds slide-left animation to the h1 elements within the odd sections

