document.addEventListener('DOMContentLoaded', () => {
  
  // 1. GESTION DU HEADER AU SCROLL (Effet Glassmorphism)
  const header = document.querySelector('.site-header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. FADE-IN ANIMATION (Intersection Observer)
  const fadeElements = document.querySelectorAll('.project-card, .expertise-card, .plan-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)"; // Position initiale
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // 3. LIGHTBOX POUR LES PLANS (Au lieu du plein écran brutal)
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-lightbox');
  const planItems = document.querySelectorAll('.plan-item');

  planItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src');
      lightboxImg.src = src;
      lightbox.classList.add('active'); // Ouvre la lightbox
    });
  });

  // Fermer la lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  // Fermer en cliquant en dehors de l'image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  // 4. ANIMATION DES CHIFFRES (KPI)
  const counters = document.querySelectorAll('.metric-number');
  // Simple animation quand on scroll dessus (optionnel mais stylé)
  // (Pour garder le code simple, j'ai laissé l'observer de base, mais voici la logique)
});

// 5. PARALLAX HERO (Optimisé)
const heroVideo = document.querySelector('.hero-video');
window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  if(scrollValue < 800) { // On arrête le calcul si on est loin
    heroVideo.style.transform = `translate(-50%, calc(-50% + ${scrollValue * 0.5}px))`;
  }
});
