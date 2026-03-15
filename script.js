document.addEventListener('DOMContentLoaded', () => {

    // --- Sticky Navbar ---
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('hero');
    const navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroSection.offsetHeight - navbarHeight) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // --- Mobile Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Active Nav Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav .nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - navbarHeight) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') == `#${current}`) {
                a.classList.add('active');
            }
        });
    });

    // --- Animate Sections on Scroll ---
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Skill Bar Animation ---
    const skillsSection = document.querySelector('#skills');
    const skillLevels = document.querySelectorAll('.skill-level');

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillLevels.forEach(skillLevel => {
                    const level = skillLevel.getAttribute('data-level');
                    skillLevel.style.width = level;
                });
                observer.unobserve(skillsSection);
            }
        });
    }, { threshold: 0.4 });

    skillObserver.observe(skillsSection);

});
