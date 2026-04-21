// Intersection Observer for reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // Once revealed, no need to observe anymore
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with data-reveal attribute
document.querySelectorAll('[data-reveal]').forEach(el => {
  revealObserver.observe(el);
});

// Smooth parallax effect for videos
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  
  // Hero video parallax
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
  }

  // Video break parallax
  document.querySelectorAll('.video-break').forEach(section => {
    const video = section.querySelector('.video-break-bg');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = (window.innerHeight - rect.top) * 0.1;
      video.style.transform = `translateY(${offset}px)`;
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('Atlas Builders Industrial Site Initialized');
