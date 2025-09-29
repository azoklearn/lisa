// ==========================================
// CONFIGURATION ET VARIABLES GLOBALES
// ==========================================

const CONFIG = {
    preloaderDelay: 2000,
    heroSlideInterval: 5000,
    testimonialInterval: 6000,
    scrollThreshold: 100,
    animationDelay: 100
};

let currentHeroSlide = 0;
let currentTestimonial = 0;
let heroInterval = null;
let testimonialInterval = null;
let isScrolling = false;

// ==========================================
// UTILITAIRES
// ==========================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Animation d'observation pour les éléments
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, index * CONFIG.animationDelay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    $$('.section-header, .creation-item, .pricing-card, .testimonial-content').forEach(el => {
        observer.observe(el);
    });
};

// ==========================================
// PRELOADER
// ==========================================

const initPreloader = () => {
    const preloader = $('#preloader');
    if (!preloader) return;

    setTimeout(() => {
        preloader.classList.add('fade-out');
        
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.style.overflow = 'visible';
            
            // Démarrer les autres animations
            initHeroCarousel();
            initTestimonialsCarousel();
            observeElements();
            
        }, 800);
    }, CONFIG.preloaderDelay);
};

// ==========================================
// HEADER ET NAVIGATION
// ==========================================

const initNavigation = () => {
    const header = $('#header');
    const mobileMenuBtn = $('#mobile-menu-btn');
    const navMenu = $('#nav-menu');
    const navLinks = $$('.nav-link');
    
    // Scroll header effect
    const handleScroll = throttle(() => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active nav link
        updateActiveNavLink();
        
        // Back to top button
        updateBackToTopButton();
    }, 16);
    
    window.addEventListener('scroll', handleScroll);
    
    // Mobile menu toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible';
            }
        });
    }
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = $(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    mobileMenuBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = 'visible';
                }
                
                // Smooth scroll
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                smoothScrollTo(targetPosition);
            }
        });
    });
};

const updateActiveNavLink = () => {
    const sections = $$('section[id]');
    const navLinks = $$('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
};

const smoothScrollTo = (targetPosition) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) * 0.5, 1000);
    
    let startTime = null;
    
    const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const easeInOutCubic = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic);
        
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        } else {
            isScrolling = false;
        }
    };
    
    isScrolling = true;
    requestAnimationFrame(animateScroll);
};

// ==========================================
// HERO CAROUSEL
// ==========================================

const initHeroCarousel = () => {
    const heroImages = $$('.hero-image');
    const indicators = $$('.indicator');
    const heroSubtitle = $('#hero-subtitle');
    
    const subtitles = [
        "L'Art de la Pâtisserie Artisanale",
        "Des Créations Uniques & Savoureuses", 
        "Une Expérience Gustative Inoubliable"
    ];
    
    const nextSlide = () => {
        // Remove active class from current elements
        heroImages[currentHeroSlide].classList.remove('active');
        indicators[currentHeroSlide].classList.remove('active');
        
        // Update current slide index
        currentHeroSlide = (currentHeroSlide + 1) % heroImages.length;
        
        // Add active class to new elements
        heroImages[currentHeroSlide].classList.add('active');
        indicators[currentHeroSlide].classList.add('active');
        
        // Update subtitle
        if (heroSubtitle) {
            heroSubtitle.textContent = subtitles[currentHeroSlide];
        }
    };
    
    // Auto-play carousel
    heroInterval = setInterval(nextSlide, CONFIG.heroSlideInterval);
    
    // Manual control via indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            if (index !== currentHeroSlide) {
                // Clear auto-play temporarily
                clearInterval(heroInterval);
                
                // Update slide
                heroImages[currentHeroSlide].classList.remove('active');
                indicators[currentHeroSlide].classList.remove('active');
                
                currentHeroSlide = index;
                
                heroImages[currentHeroSlide].classList.add('active');
                indicators[currentHeroSlide].classList.add('active');
                
                if (heroSubtitle) {
                    heroSubtitle.textContent = subtitles[currentHeroSlide];
                }
                
                // Restart auto-play
                heroInterval = setInterval(nextSlide, CONFIG.heroSlideInterval);
            }
        });
    });
    
    // Pause on hover
    const hero = $('#hero');
    if (hero) {
        hero.addEventListener('mouseenter', () => {
            clearInterval(heroInterval);
        });
        
        hero.addEventListener('mouseleave', () => {
            heroInterval = setInterval(nextSlide, CONFIG.heroSlideInterval);
        });
    }
};

// ==========================================
// FILTRAGE DES CRÉATIONS
// ==========================================

const initCreationsFilter = () => {
    const filterBtns = $$('.filter-btn');
    const creationItems = $$('.creation-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter items
            creationItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');
                const shouldShow = filter === 'all' || category === filter;
                
                setTimeout(() => {
                    if (shouldShow) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }, index * 50);
            });
        });
    });
};

// ==========================================
// TÉMOIGNAGES CAROUSEL
// ==========================================

const initTestimonialsCarousel = () => {
    const testimonials = $$('.testimonial');
    const testimonialBtns = $$('.testimonial-btn');
    
    if (testimonials.length === 0) return;
    
    const showTestimonial = (index) => {
        // Hide all testimonials
        testimonials.forEach(t => t.classList.remove('active'));
        testimonialBtns.forEach(b => b.classList.remove('active'));
        
        // Show current testimonial
        testimonials[index].classList.add('active');
        testimonialBtns[index].classList.add('active');
    };
    
    const nextTestimonial = () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    };
    
    // Auto-play testimonials
    testimonialInterval = setInterval(nextTestimonial, CONFIG.testimonialInterval);
    
    // Manual control
    testimonialBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
            testimonialInterval = setInterval(nextTestimonial, CONFIG.testimonialInterval);
        });
    });
    
    // Pause on section hover
    const testimonialsSection = $('#testimonials');
    if (testimonialsSection) {
        testimonialsSection.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        
        testimonialsSection.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(nextTestimonial, CONFIG.testimonialInterval);
        });
    }
};

// ==========================================
// FORMULAIRE DE CONTACT
// ==========================================

const initContactForm = () => {
    const form = $('#contact-form');
    if (!form) return;
    
    // Animation des labels
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentNode.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentNode.classList.remove('focused');
            }
        });
        
        // Check if already has value
        if (input.value) {
            input.parentNode.classList.add('focused');
        }
    });
    
    // Validation en temps réel
    const validateField = (field) => {
        const value = field.value.trim();
        let isValid = true;
        
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
                break;
            case 'text':
                isValid = value.length >= 2;
                break;
            default:
                isValid = value.length > 0;
        }
        
        field.classList.toggle('invalid', !isValid);
        field.classList.toggle('valid', isValid);
        
        return isValid;
    };
    
    inputs.forEach(input => {
        input.addEventListener('input', () => validateField(input));
        input.addEventListener('blur', () => validateField(input));
    });
    
    // Soumission du formulaire
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Valider tous les champs
        let isFormValid = true;
        inputs.forEach(input => {
            if (input.required && !validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            // Simuler l'envoi
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.style.opacity = '0.7';
            
            setTimeout(() => {
                showNotification('Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.', 'success');
                form.reset();
                inputs.forEach(input => {
                    input.classList.remove('valid', 'invalid');
                    input.parentNode.classList.remove('focused');
                });
                
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
            }, 2000);
        } else {
            showNotification('Veuillez corriger les erreurs dans le formulaire.', 'error');
        }
    });
};

// ==========================================
// NOTIFICATIONS
// ==========================================

const showNotification = (message, type = 'info') => {
    // Remove existing notification
    const existingNotification = $('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✅' : '❌'}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Styles pour la notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        background: ${type === 'success' ? '#4CAF50' : '#F44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        transform: translateX(420px);
        transition: transform 0.3s ease;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    const closeNotification = () => {
        notification.style.transform = 'translateX(420px)';
        setTimeout(() => notification.remove(), 300);
    };
    
    closeBtn.addEventListener('click', closeNotification);
    
    // Auto close after 5 seconds
    setTimeout(closeNotification, 5000);
};

// ==========================================
// BOUTON RETOUR EN HAUT
// ==========================================

const updateBackToTopButton = () => {
    const backToTopBtn = $('#back-to-top');
    if (!backToTopBtn) return;
    
    if (window.scrollY > CONFIG.scrollThreshold) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
};

const initBackToTop = () => {
    const backToTopBtn = $('#back-to-top');
    if (!backToTopBtn) return;
    
    backToTopBtn.addEventListener('click', () => {
        smoothScrollTo(0);
    });
};

// ==========================================
// EFFETS PARALLAX
// ==========================================

const initParallax = () => {
    const parallaxElements = $$('.hero-image');
    
    const handleParallax = throttle(() => {
        const scrollY = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            if (element.classList.contains('active')) {
                const speed = 0.5;
                element.style.transform = `scale(1.1) translateY(${scrollY * speed}px)`;
            }
        });
    }, 16);
    
    window.addEventListener('scroll', handleParallax);
};

// ==========================================
// GESTION DES ERREURS
// ==========================================

const handleError = (error, context = 'General') => {
    console.error(`[${context}] Error:`, error);
    
    // En production, on pourrait envoyer l'erreur à un service de monitoring
    if (window.location.hostname !== 'localhost') {
        // sendErrorToMonitoring(error, context);
    }
};

// ==========================================
// PERFORMANCE ET OPTIMISATION
// ==========================================

const optimizePerformance = () => {
    // Lazy loading pour les images
    const images = $$('img[src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = 'images/plateaudessert.jpg';
    preloadLink.as = 'image';
    document.head.appendChild(preloadLink);
};

// ==========================================
// ACCESSIBILITÉ
// ==========================================

const initAccessibility = () => {
    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        // Échapper pour fermer les menus
        if (e.key === 'Escape') {
            const navMenu = $('#nav-menu');
            const mobileMenuBtn = $('#mobile-menu-btn');
            
            if (navMenu && navMenu.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'visible';
            }
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Focus management
    const focusableElements = $$('a, button, input, select, textarea, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--gold)';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
};

// ==========================================
// INITIALISATION PRINCIPALE
// ==========================================

const init = () => {
    try {
        // Initialiser tous les modules
        initPreloader();
        initNavigation();
        initCreationsFilter();
        initContactForm();
        initBackToTop();
        initParallax();
        optimizePerformance();
        initAccessibility();
        
        console.log('🎉 Site Lisa Délices initialisé avec succès !');
        
    } catch (error) {
        handleError(error, 'Initialization');
    }
};

// ==========================================
// POINT D'ENTRÉE
// ==========================================

// Attendre que le DOM soit prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Gestion des erreurs globales
window.addEventListener('error', (e) => {
    handleError(e.error, 'Global');
});

// Cleanup avant le déchargement de la page
window.addEventListener('beforeunload', () => {
    if (heroInterval) clearInterval(heroInterval);
    if (testimonialInterval) clearInterval(testimonialInterval);
});

// Exposer certaines fonctions pour le débogage (en développement)
if (window.location.hostname === 'localhost') {
    window.LisaDelices = {
        showNotification,
        smoothScrollTo,
        CONFIG
    };
}
