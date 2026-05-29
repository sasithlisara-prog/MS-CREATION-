    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    let isDark = true;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        isDark = false;
    }

    themeToggle.addEventListener('click', () => {
        if (isDark) {
            body.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            body.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'dark');
        }
        isDark = !isDark;
    });

    // Typed.js
    var typed = new Typed('#typed', {
    strings: ['SULTHAN GRAPHIC STUDIO'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
    });

    // Sticky Navigation
    const stickyNav = document.getElementById('stickyNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            stickyNav.classList.add('visible');
        } else {
            stickyNav.classList.remove('visible');
        }
    });

    // Scroll Down Button
    const scrollDown = document.getElementById('scrollDown');
    scrollDown.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

const pricingHeaders = document.querySelectorAll('.pricing-header');
pricingHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const pricingItem = header.parentElement; 
        const isActive = pricingItem.classList.contains('active');
        
        document.querySelectorAll('.pricing-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.pricing-content').style.maxHeight = null;
        });
        
        if (!isActive) {
            pricingItem.classList.add('active');
            const content = header.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

if (pricingHeaders.length > 0) {
    pricingHeaders[0].click();
}

    // Portfolio Card Lighting Effect
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // Open first pricing item by default
    if (pricingHeaders.length > 0) {
        pricingHeaders[0].click();
    }