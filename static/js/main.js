document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    const menu = document.getElementById('menu');

    if (menuIcon && menu) { // ✅ Prevents errors if elements don't exist
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('-translate-y-full'); // Toggle the class
        });
        closeIcon.addEventListener('click', () => {
            menu.classList.toggle('-translate-y-full');
        });

        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
                menu.classList.add('-translate-y-full');
            }
        });
    }

    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (dropdownButton && dropdownMenu) { // ✅ Prevents errors if elements don't exist
        dropdownButton.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden'); // Show/hide menu
        });

        document.addEventListener('click', (event) => {
            if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });
    }
});


flatpickr("#checkin-date", {
    enableTime: false,
    dateFormat: "Y-m-d",
});

flatpickr("#checkout-date", {
    enableTime: false,
    dateFormat: "Y-m-d",
});


document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("testimonialContainer");
    let index = 0;
    
    function nextSlide() {
        index = (index + 1) % 3; // Change 3 to the number of testimonials
        container.style.transform = `translateX(-${index * 100}%)`;
    }
    
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("keralaCarousal");
    let index = 0;
    
    function nextSlide() {
        index = (index + 1) % 3; // Change 3 to the number of testimonials
        container.style.transform = `translateX(-${index * 100}%)`;
    }
    
    setInterval(nextSlide, 5000); // Change slide every 3 seconds
});


// let index = 0;
// const slideContainer = document.getElementById("carousel");
// const slides = document.querySelectorAll("#carousel > div");
// const totalSlides = slides.length;
// const visibleSlides = 3; // Always show 3 slides

// function nextSlide() {
//     index++;
//     if (index > totalSlides - visibleSlides) {
//         index = 0; // Loop back
//     }
//     slideContainer.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`; 
// }

// // Auto-slide every 3 seconds
// let autoSlide = setInterval(nextSlide, 3000);

// // Pause on hover
// slideContainer.addEventListener("mouseenter", () => clearInterval(autoSlide));
// slideContainer.addEventListener("mouseleave", () => autoSlide = setInterval(nextSlide, 3000));

window.addEventListener('scroll', function () {
    const logo = document.getElementById('logo');
    const scrollTrigger = window.innerHeight;
    const navLinks = document.querySelectorAll('.nav-links')
    const menuIcon = document.getElementById('menuIcon');
    const defaultSrc = logo.getAttribute('data-src-default');
    const scrolledSrc = logo.getAttribute('data-src-scrolled');
    const nav = this.document.getElementById('nav');

    if (window.scrollY >= scrollTrigger) {
        navLinks.forEach(link => {
            link.classList.remove('hover:text-white');
            link.classList.add('text-black', 'hover:text-green/80');
        })
        menuIcon.classList.remove('text-white');
        menuIcon.classList.add('text-black');
        nav.classList.add('bg-white');
        logo.src = scrolledSrc;
    } else {
        navLinks.forEach(link => {
            link.classList.remove('text-black', 'hover:text-green/80');
            link.classList.add('hover:text-white')
        })
        menuIcon.classList.remove('text-black');
        menuIcon.classList.add('text-white');
        nav.classList.remove('bg-white');
        logo.src = defaultSrc;
    }
});