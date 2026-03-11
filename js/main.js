document.addEventListener('DOMContentLoaded', () => {

    // ── Header scroll ──────────────────────────────────
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    // ── Mobile hamburger menu ──────────────────────────
    const toggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');

    if (toggle && navList) {
        toggle.addEventListener('click', () => {
            const open = navList.classList.toggle('open');
            toggle.classList.toggle('open', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });

        // Close on nav link click
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('open');
                toggle.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ── Reveal on scroll ───────────────────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach((el, i) => {
        // Stagger cards in grids
        if (el.closest('.research-grid') || el.closest('.blog-grid') || el.closest('.member-grid')) {
            const siblings = el.parentElement.querySelectorAll('.reveal');
            const idx = Array.from(siblings).indexOf(el);
            el.style.transitionDelay = `${(idx % 4) * 0.08}s`;
        }
        observer.observe(el);
    });

    // Also animate section-title elements
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

});
