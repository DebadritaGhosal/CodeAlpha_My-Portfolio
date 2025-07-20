const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 0.8s ease-out';
  observer.observe(section);
});
function showModal() {
      document.getElementById('offerModal').style.display = 'flex';
    }

function closeModal() {
      document.getElementById('offerModal').style.display = 'none';
}
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links'); 
if (menuToggle && navLinks) { 
        menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
}