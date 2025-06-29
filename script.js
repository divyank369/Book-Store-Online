// Mode Toggle Functionality
const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Optional: Saving the user's theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

modeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});

// Scroll Animation
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
    if (element.offsetTop < window.innerHeight + scrollPosition) {
      element.classList.add('visible');
    }
  });
});

// Search Bar Focus Animation
const searchInput = document.querySelector('.navbar-search input');
searchInput.addEventListener('focus', () => {
  searchInput.style.borderColor = '#ff8c00'; // Change border on focus
  searchInput.style.width = '250px'; // Expand search bar
});

searchInput.addEventListener('blur', () => {
  searchInput.style.borderColor = '#ccc'; // Reset border when out of focus
  searchInput.style.width = '200px'; // Shrink search bar
});

// Active Tab Effect (Change color on click)
const navLinks = document.querySelectorAll('.navbar-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active'); // Add active class to clicked link
  });
});
