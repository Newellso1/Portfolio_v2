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


// Intersection Observer slides titles in from left;


const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-left');

        } else {
            entry.target.classList.remove('slide-left');
        }
    })
})

const slideLeft = document.querySelectorAll('.title-left')
slideLeft.forEach((el) => leftObserver.observe(el));

// // Intersection Observer that slides titles in from right;

const rightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-right');
        } else {
            entry.target.classList.remove('slide-right');
        }
    })
})

const slideRight = document.querySelectorAll('.title-right');
slideRight.forEach((el) => rightObserver.observe(el));
