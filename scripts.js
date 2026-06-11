
const adj = [ "Praise Be", "Hail to", "Joyous is the", "Please", "Smother", "Cover", "Scatter", "Chunk", "All The Way", "Amen", "Offer Up", "Consume","Drink Of", "Sleep upon", "Pray thine", "Wish Upon", "Oh Holy", "Holy", "Help Me", "Goddess", "Voice Of", "Spirit", "Joyful", "Sign of the"];

const noun = [ "Hashbrowns", "Biscuit", "Gravy", "Waffle", "City Ham", "Bacon", "Burger", "Melt", "Toast", "Syrup", "Coffee", "Grits", "Sandwich", "BLT", "EGGS"];

const food = ["hashbrowns.jpg", "melt.jpg", "big-plate.jpg", "buddha.jpeg", "country-ham.jpg", "country-hameggs-breakfast.jpg", "CountryHamDinner_DoubleHashbrowns-2.webp", "plate.jpeg", "pray-hand.jpg", "waffle.jpg", "Wafflehouse-all-star-special-2026-update.webp", "wh-meat.jpeg"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
`${adj [getRandomNumber(adj.length)]} ${noun [getRandomNumber(noun.length)]}`;

const getRandomImage = () => `${
    food [getRandomNumber(food.length)]}`;

const setRandomName = () => {
 document.getElementById('random-name').innerText = getRandomName ();
  document.getElementById('random-image').src = getRandomImage ();
}

document.getElementById('generate').addEventListener ('click', setRandomName);

console.log(getRandomName());

setRandomName();