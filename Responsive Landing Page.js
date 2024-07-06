// JavaScript code to add interactivity
const nav = document.getElementById('nav');
const navLinks = nav.querySelectorAll('a');

// add event listener to window scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// add event listener to navigation menu links
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
});

// add event listener to window resize event
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    nav.classList.add('mobile');
  } else {
    nav.classList.remove('mobile');
  }
});