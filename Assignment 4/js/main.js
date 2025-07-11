const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

  let storyText = "It was 94 fahrenheit outside, so  went for a walk. When they got to , they stared in horror for a few moments, then . Bob saw the whole thing, but was not surprised —  weighs 300 pounds, and it was a hot day...";
  let insertX = ["Willy the Goblin", "Big Daddy" ,"Father Christmas"];
  let inxertY = ["the soup kitchen","Disneyland","the white house"];
  let insertZ  = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];
randomize.addEventListener('click', result);

function result() {
    let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insert: weighs 300 pounds, and it was a hot day.";

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight =  weight = Math.round(300/14) + 'stone';
    const temperature =  Math.round((94-32) * (5/9)) + 'centigrade';

  }
  
   let weight = Math.round(300 / 14) + ' stone';
    let temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade';


  story.textContent =('94 fahrenheit',temperature) ;
  story.style.visibility = ('300 pounds',weight);

  let newStory =document.querySelector('storyText').value;
  let insertX = randomValueFromArray(insertX);
  let insertY = randomValueFromArray(insertY);
  let insertZ = randomValueFromArray(insertZ);
  
  storyText = storyText.replace(":insertx:", xItem);
  storyText = storyText.replace(":inserty:", yItem);
  newStory = storyText.replace(":insertz:", zItem);
   if(customName.value !== '') {
    const name = customName.value;
    storyText = storyText.replace("Bob", name);
  }
}

