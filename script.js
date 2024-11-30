// Select all the sections you want to fade in/out
const sections = document.querySelectorAll('.fade-section');

// Options for the IntersectionObserver
const options = {
  root: null, // default is the viewport
  rootMargin: '0px', // no margin around the root
  threshold: 0.5 // trigger when 50% of the section is visible
};

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the section is in view, add the 'fade-in' class to it
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    } else {
      // If the section is out of view, remove the 'fade-in' class
      entry.target.classList.remove('fade-in');
    }
  });
}, options);


// Observe each section
sections.forEach(section => {
  observer.observe(section);
});
