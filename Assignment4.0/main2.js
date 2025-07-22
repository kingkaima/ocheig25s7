const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

const altText ={
    'pic1.jpg':'Close-up of a big human-eye',
    'pic2.jpg':'Macaw closeup',
    'pic3.jpg':'Orange and black butterfly',
    'pic4.jpg':'purple pansy',
    'pic5.jpg':'pineapple',

};

//Get's references for elements I will use
const thumbBar = document.querySelector('.thumb bar');
const displaying = document.querySelector('.displayed-img')

//Loop's through the thumbnails and creates filenames with click listeners
for(let i=0;i< imahes.length;i++) {
const newImage = document.createElement('img');
newImage.src = 'images/' + images[i];
newImage.alt = altText[images[i]];

// Add Click event listener to display updated image
newImage.addEventListener('click', function() {
    displayedImg.src = this.src;  // Set main image src to thumbnail src
    displayedImg.alt = this.alt;  // Set main image alt to thumbnail alt
  });

  // Add the new thumbnail to the thumbBar div
  thumbBar.appendChild(newImage);
}