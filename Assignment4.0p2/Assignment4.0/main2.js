// Array of image filenames
const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

// Alt text for each image
const altText = {
  'pic1.jpg': 'Close-up of a big human-eye',
  'pic2.jpg': 'Macaw closeup',
  'pic3.jpg': 'Orange and black butterfly',
  'pic4.jpg': 'Purple pansy',
  'pic5.jpg': 'Pineapple'
};

// DOM elements
const thumbBar = document.querySelector('.thumb-bar');  //  Make sure class name is correct in HTML
const displayedImg = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//  Loop through each image
images.forEach(filename => { 
  const newImage = document.createElement('img');
  newImage.src = `images/${filename}`;
  newImage.alt = altText[filename];
  thumbBar.appendChild(newImage);

  // Add click event to update main image
  newImage.addEventListener('click', () => {
    displayedImg.src = `images/${filename}`;
    displayedImg.alt = altText[filename];
  });
});
