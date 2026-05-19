/* =========================================================
   JOHN DOE – PORTFOLIO  |  main.js
   ========================================================= */

'use strict';

// ── Typed text effect ──────────────────────────────────────
const phrases = [
  'Frontend Developer',
  'UI Enthusiast',
  'JavaScript Fan',
  'Problem Solver',
  'Open to Internships',
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  const current = phrases[phraseIndex];
  if (isDeleting) {
    typedEl.textContent = current.slice(0, --charIndex);
  } else {
    typedEl.textContent = current.slice(0, ++charIndex);
  }

  let delay = isDeleting ? 55 : 100;

  if (!isDeleting && charIndex === current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 300;
  }

  setTimeout(type, delay);
}
type();

// ── Navbar scroll behaviour ───────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ── Mobile nav toggle ─────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Active nav link on scroll ─────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });

// ── Reveal on scroll (Intersection Observer) ──────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings within a grid
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let delay = 0;
        siblings.forEach((sib, idx) => {
          if (sib === entry.target) delay = idx * 80;
        });
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach(el => revealObs.observe(el));

// ── Skill bar animation ───────────────────────────────────
const skillBars = document.querySelectorAll('.skill-fill');
const barObs = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width + '%';
        barObs.unobserve(bar);
      }
    });
  },
  { threshold: 0.3 }
);
skillBars.forEach(bar => barObs.observe(bar));

// ── Back to top ───────────────────────────────────────────
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Contact form (client-side demo) ───────────────────────
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation
  const fields = ['name', 'email', 'subject', 'message'];
  let valid = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.style.borderColor = '#f87171';
      valid = false;
    } else {
      el.style.borderColor = '';
    }
  });

  const emailVal = document.getElementById('email').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailVal && !emailPattern.test(emailVal)) {
    document.getElementById('email').style.borderColor = '#f87171';
    valid = false;
  }

  if (!valid) {
    formNote.textContent = 'Please fill in all fields correctly.';
    formNote.className = 'form-note error';
    return;
  }

  // Simulate sending
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    formNote.textContent = "Message sent! I'll get back to you soon.";
    formNote.className = 'form-note';
    form.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }, 1200);
});

// Clear error border on input
['name', 'email', 'subject', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('input', function () {
    this.style.borderColor = '';
    if (formNote.classList.contains('error')) {
      formNote.textContent = '';
    }
  });
});

// ── Footer year ───────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();
