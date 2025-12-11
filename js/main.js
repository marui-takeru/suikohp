document.addEventListener('DOMContentLoaded', () => {

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const cards = document.querySelectorAll('.card');
    const sections = document.querySelectorAll('.section-title');
    const newsItems = document.querySelectorAll('.news-item');

    // Apply initial styles and observe
    [...cards, ...sections, ...newsItems].forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        // Add slight delay for grid items
        if (el.classList.contains('card')) {
            el.style.transitionDelay = `${index % 3 * 0.1}s`;
        }

        observer.observe(el);
    });
});
