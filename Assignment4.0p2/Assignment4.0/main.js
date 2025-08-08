// Log to console that the first part of the script has loaded
console.log("part1");

// Get references to DOM elements
const customName = document.getElementById('customname');  // Input field for custom name
const randomize = document.querySelector('.randomize');    // Button that triggers story generation
const story = document.querySelector('.story');            // Paragraph element where story is displayed

// Template for the story with placeholders for random values and name
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day"

// Arrays containing possible random values for the placeholders
let insertx = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
];

let inserty = [
    "the soup kitchen",
    "Disneyland",
    "the White House",

];

let insertz = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
     "turned into a slug and crawled away",
];

// Function to return a random item from any given array
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Add an event listener to the randomize button
randomize.addEventListener('click', result);

// Function to build and display the story
function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);

     // Replace placeholders with the random values
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);//Replace second occurence
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);

     // If the user entered a custom name, replace "Bob" with that name
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);

  }
 // If the UK checkbox is checked, convert units and replace them in the story
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+ 'stone';  // Convert 300 pounds to stone
    const temperature =  Math.round((94-32)* 5/9)+ 'centigrade'; // Convert Fahrenheit to Celsius

    newStory= newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds', weight);

  }

   // Display the final story in the page
  story.textContent =newStory ;
  story.style.visibility = 'visible';
}