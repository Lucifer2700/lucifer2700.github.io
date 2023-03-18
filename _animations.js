// Animate heading on load
const heading = document.querySelector('h1');
heading.classList.add('animated', 'bounceInDown');

// Add hover effect to navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('animated', 'pulse');
  });
  link.addEventListener('mouseleave', () => {
    link.classList.remove('animated', 'pulse');
  });
});

// Load dynamic content with fetch API
const dynamicContent = document.querySelector('#dynamic-content');
fetch('https://example.com/data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      const image = document.createElement('img');
      image.src = item.image;
      const title = document.createElement('h2');
      title.textContent = item.title;
      const description = document.createElement('p');
      description.textContent = item.description;
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(description);
      dynamicContent.appendChild(card);
    });
  });
