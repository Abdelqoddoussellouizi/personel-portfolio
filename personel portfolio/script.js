// === Eye Tracker ===
document.addEventListener('mousemove', (e) => {
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach(eye => {
    const rect = eye.parentElement.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    const x = Math.cos(angle) * 15;
    const y = Math.sin(angle) * 15;
    eye.style.transform = `translate(${x}px, ${y}px)`;
  });
});




// Update the loadOverlayContent function
function loadOverlayContent(buttonId, overlayId, htmlFile) {
  const button = document.getElementById(buttonId);
  const overlay = document.getElementById(overlayId);

  if (button && overlay) {
    button.addEventListener('click', () => {
      fetch(htmlFile)
        .then(response => response.text())
        .then(data => {
          overlay.innerHTML = data;
          overlay.style.display = 'block';
          document.body.style.overflow = 'hidden';
        });
    });
  }
}

// Add this to handle closing overlays
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.parentElement.parentElement.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});
// Apply to each section
loadOverlayContent('about-btn', 'about-overlay', 'about.html');
loadOverlayContent('projects-btn', 'projects-overlay', 'projects.html');
loadOverlayContent('contact-btn', 'contact-overlay', 'contact.html');

// === Click outside to close overlays ===
document.querySelectorAll('.overlay').forEach(overlay => {
  overlay.addEventListener('click', function (e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });
});
