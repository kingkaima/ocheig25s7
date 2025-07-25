// Images and alt text
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altText = {
  'pic1.jpg': 'Close-up of a human eye',
  'pic2.jpg': 'Colorful macaw',
  'pic3.jpg': 'Orange and black butterfly',
  'pic4.jpg': 'Purple pansy flower',
  'pic5.jpg': 'Sliced pineapple'
};

// DOM elements
const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Create thumbnails
images.forEach(filename => {
  const thumb = document.createElement('img');
  thumb.src = `images/${filename}`;
  thumb.alt = altText[filename];
  thumbBar.appendChild(thumb);

  // Click handler for thumbnail
  thumb.addEventListener('click', () => {
    displayedImg.src = `images/${filename}`;
    displayedImg.alt = altText[filename];
  });
});

// Darken/Lighten button functionality
btn.addEventListener('click', () => {
  if (btn.classList.contains('dark')) {
    btn.classList.remove('dark');
    btn.classList.add('light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.classList.remove('light');
    btn.classList.add('dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});

