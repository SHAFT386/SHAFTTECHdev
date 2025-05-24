document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu ul li a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Portfolio Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelector('.portfolio-grid');
    
    // Portfolio data
    const portfolioData = [
        {
            title: "MiniBar Delivery",
            category: "business",
            image: "2.jpg",
            link: "https://minibardelivery.com/"
        },
        {
            title: "Beyond Limits Travels",
            category: "business",
            image:" 3.jpg",
            link: "https://beyondlimitstravelsandtours.com/"
        },
        {
            title: "SSENONO Furniture Center",
            category: "ecommerce",
            image: "4.jpg",
            link: "https://www.ssenonofurniturecenter.store/"
        },
        {
            title: "Brivud Aluminium Works",
            category: "business",
            image: "br.jpg",
            link: "https://www.brivud-aluminium-works.store/"
        },
        {
            title: "Perfect Plumbing",
            category: "business",
            image: "5.jpg",
            link: "https://www.perfectplumbingug.com/"
        },
        {
            title: "Almar Furniture",
            category: "ecommerce",
            image: "6.jpg",
            link: "https://www.almarfurniture.store/"
        },
        {
            title: "Kent shoe store",
            category: "other",
            image: "hero-bg.jpg",
            link: "https://mockup-1.github.io/fashion/"
        },
        {
            title: "Cake bakery",
            category: "business",
            image: "8.jpg",
            link: "https://shaft386.github.io/CAKE-CLINIC/"
        },
        {
            title: "Italian Restaurant",
            category: "restaurant",
            image: "7.jpg",
            link: "https://websitedemos.net/italian-restaurant-02/"
        },
        /*{
            title: "Hotel Website",
            category: "business",
            image: "https://via.placeholder.com/600x400/4b6cb7/ffffff?text=Hotel+Website",
            link: "https://shaft386.github.io/hotel/"
        },*/
        {
            title: "JEMA Electronics",
            category: "business",
            image: "jema.jpg",
            link: "https://shaft386.github.io/JEMA-ELECTRONICS/"
        },
        /**  {
            title: "Kent Online Store",
            category: "business",
            image: "hero-bg.jpg",
            link: "https://ssenonofurniturecenter.store/"
        }*/
    ];
    
    // Display portfolio items
    function displayPortfolioItems(items) {
        portfolioItems.innerHTML = '';
        
        items.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = `portfolio-item ${item.category}`;
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="portfolio-img">
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)} Website</p>
                    <a href="${item.link}" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                </div>
            `;
            portfolioItems.appendChild(portfolioItem);
        });
    }
    
    // Initial display
    displayPortfolioItems(portfolioData);
    
    // Filter portfolio items
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            if (filter === 'all') {
                displayPortfolioItems(portfolioData);
            } else {
                const filteredItems = portfolioData.filter(item => item.category === filter);
                displayPortfolioItems(filteredItems);
            }
        });
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        currentTestimonial--;
        if (currentTestimonial < 0) {
            currentTestimonial = testimonials.length - 1;
        }
        showTestimonial(currentTestimonial);
    });
    
    nextBtn.addEventListener('click', function() {
        currentTestimonial++;
        if (currentTestimonial >= testimonials.length) {
            currentTestimonial = 0;
        }
        showTestimonial(currentTestimonial);
    });
    
    // Auto-rotate testimonials
    setInterval(function() {
        currentTestimonial++;
        if (currentTestimonial >= testimonials.length) {
            currentTestimonial = 0;
        }
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Back to Top Button
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});