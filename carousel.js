class Carousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.images = document.querySelectorAll('.carousel-track img');
        this.prevBtn = document.querySelector('.carousel-btn--prev');
        this.nextBtn = document.querySelector('.carousel-btn--next');
        this.dots = document.querySelectorAll('.carousel-dot');
        
        this.currentIndex = 0;
        this.autoSlideInterval = null;
        this.autoSlideDelay = 4000; // 4 seconds
        
        this.init();
    }
    
    init() {
        if (!this.track || this.images.length === 0) return;
        
        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Start auto-slide
        this.startAutoSlide();
        
        // Pause auto-slide on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.track.addEventListener('mouseleave', () => this.startAutoSlide());
        
        // Handle keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Handle touch events for mobile
        this.handleTouchEvents();
        
        // Pause auto-slide when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAutoSlide();
            } else {
                this.startAutoSlide();
            }
        });
    }
    
    updateCarousel() {
        const translateX = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('carousel-dot--active', index === this.currentIndex);
        });
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateCarousel();
        this.resetAutoSlide();
    }
    
    prevSlide() {
        this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
        this.updateCarousel();
        this.resetAutoSlide();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
        this.resetAutoSlide();
    }
    
    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoSlideDelay);
    }
    
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
    
    handleKeydown(e) {
        if (e.key === 'ArrowLeft') {
            this.prevSlide();
        } else if (e.key === 'ArrowRight') {
            this.nextSlide();
        }
    }
    
    handleTouchEvents() {
        let startX = 0;
        let endX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            // Minimum swipe distance
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});