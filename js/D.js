document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      this.classList.toggle('fa-times');
      this.classList.toggle('fa-bars');
    });
  
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 992) {
          mainNav.classList.remove('active');
          mobileMenuBtn.classList.remove('fa-times');
          mobileMenuBtn.classList.add('fa-bars');
        }
      });
    });
  
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Set active navigation link based on current page
    const currentPage = location.pathname.split('/').pop().replace('.html', '') || 'index';
    const navItems = document.querySelectorAll('.main-nav a');
    
    navItems.forEach(item => {
      const itemPage = item.getAttribute('href').replace('.html', '');
      if (currentPage === itemPage || (currentPage === 'index' && itemPage === '')) {
        item.classList.add('active');
      }
    });
  
    // Portfolio filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterBtns.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          // Remove active class from all buttons
          filterBtns.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          this.classList.add('active');
          
          const filterValue = this.getAttribute('data-filter');
          
          portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }
  
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
          alert('Please fill in all required fields.');
          return;
        }
        
        // Here you would typically send the form data to your server
        // For this example, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        
        // In a real implementation, you would use fetch or AJAX to send the data
        /*
        fetch('send-email.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
          }),
        })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          if (data.success) {
            contactForm.reset();
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was an error sending your message. Please try again later.');
        });
        */
      });
    }
  
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-level');
    
    if (skillBars.length > 0) {
      const animateSkillBars = () => {
        skillBars.forEach(bar => {
          const barPosition = bar.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.2;
          
          if (barPosition < screenPosition) {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
              bar.style.width = width;
            }, 100);
          }
        });
      };
      
      window.addEventListener('scroll', animateSkillBars);
      // Trigger once on page load in case skills are already visible
      animateSkillBars();
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
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
  
  // Initialize animations when page loads
  window.addEventListener('load', function() {
    // Add any on-load animations here
  });