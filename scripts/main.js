// Main JavaScript functionality

// Typing animation for the blue text
const typingTexts = ["New Scripter", "Gamer", "New Designer"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 2000;

function typeText() {
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;
    
    const currentText = typingTexts[currentTextIndex];
    
    if (isDeleting) {
        // Deleting text
        typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            setTimeout(typeText, 500);
            return;
        }
        
        setTimeout(typeText, deletingSpeed);
    } else {
        // Typing text
        typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        if (currentCharIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, pauseTime);
            return;
        }
        
        setTimeout(typeText, typingSpeed);
    }
}

// Navigation scroll effect
function handleNavScroll() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = mobileMenuBtn?.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn?.querySelector('.close-icon');
    
    if (!mobileMenuBtn || !mobileNav || !menuIcon || !closeIcon) return;
    
    let isOpen = false;
    
    mobileMenuBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        
        if (isOpen) {
            mobileNav.style.display = 'block';
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            mobileNav.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileNav.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            isOpen = false;
            mobileNav.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        });
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animate progress bars when they come into view
function setupProgressAnimations() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Animate elements when they come into view
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.skill-card, .contact-card, .info-card, .interest-tag');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.classList.add('scroll-fade-in');
        observer.observe(element);
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.hero-nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Add hover effects to cards
function setupCardHoverEffects() {
    const cards = document.querySelectorAll('.skill-card, .contact-card, .info-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover-lift');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover-lift');
        });
    });
}

// Email link functionality
function setupEmailLinks() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add a small animation to show the click was registered
            const originalText = link.textContent;
            link.textContent = 'Opening email...';
            
            setTimeout(() => {
                link.textContent = originalText;
            }, 1000);
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start typing animation
    typeText();
    
    // Setup all event listeners and observers
    setupMobileMenu();
    setupSmoothScrolling();
    setupProgressAnimations();
    setupScrollAnimations();
    setupCardHoverEffects();
    setupEmailLinks();
    setupResumeEasterEgg();
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        handleNavScroll();
        updateActiveNavLink();
    });
    
    // Initialize nav state
    handleNavScroll();
    updateActiveNavLink();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth >= 768) {
        const mobileNav = document.getElementById('mobileNav');
        const menuIcon = document.querySelector('.menu-icon');
        const closeIcon = document.querySelector('.close-icon');
        
        if (mobileNav && menuIcon && closeIcon) {
            mobileNav.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    }
});

// Resume button easter egg (15 clicks)
function setupResumeEasterEgg() {
    const resumeButtons = document.querySelectorAll('.btn:has(svg)');
    let clickCount = 0;
    
    resumeButtons.forEach(button => {
        if (button.textContent.trim().includes('Resume')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                clickCount++;
                
                if (clickCount === 15) {
                    showSoggyCatModal();
                    clickCount = 0; // Reset counter
                }
            });
        }
    });
}

function showSoggyCatModal() {
    // Create modal backdrop
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 20px;
        text-align: center;
        max-width: 90%;
        max-height: 90%;
        box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
        animation: scaleIn 0.3s ease-out;
    `;
    
    modalContent.innerHTML = `
        <h1 style="color: #3b82f6; font-size: 3rem; margin: 0 0 1rem 0; font-weight: bold;">CONGRATS!</h1>
        <img src="public/soggy-cat.png" alt="Soggy Cat" style="max-width: 100%; height: auto; border-radius: 10px; margin: 1rem 0;">
        <h2 style="color: #1f2937; font-size: 1.5rem; margin: 1rem 0 0 0;">YOU FOUND SOGGY CAT!</h2>
        <button id="closeModal" style="
            margin-top: 2rem;
            padding: 0.75rem 2rem;
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        ">Close</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('#closeModal');
    const closeModal = () => {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => modal.remove(), 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Add close animation keyframes if not already present
    if (!document.querySelector('#soggy-animations')) {
        const style = document.createElement('style');
        style.id = 'soggy-animations';
        style.textContent = `
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Console message for developers
console.log('%c🎮 Hello fellow developer!', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%cThanks for checking out the console. This portfolio was converted from React to vanilla HTML/CSS/JS.', 'color: #6b7280; font-size: 12px;');
console.log('%cIf you have any questions or want to connect, feel free to reach out at twabgaming31@gmail.com', 'color: #6b7280; font-size: 12px;');