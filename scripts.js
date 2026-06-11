
const adj = [ "Praise Be", "Hail to", "Joyous is the", "Please", "Smother", "Cover", "Scatter", "Chunk", "All The Way", "Amen", "Offer Up", "Consume","Drink Of", "Sleep upon", "Pray thine", "Wish Upon", "Oh Holy", "Holy", "Help Me", "Goddess", "Voice Of", "Spirit", "Joyful", "Sign of the"];

const noun = [ "Hashbrowns", "Biscuit", "Gravy", "Waffle", "City Ham", "Bacon", "Burger", "Melt", "Toast", "Syrup", "Coffee", "Grits", "Sandwich", "BLT", "EGGS"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
`${adj [getRandomNumber(adj.length)]} ${noun [getRandomNumber(noun.length)]}`;

const setRandomName = () => {
document.getElementById('random-name').innerText = getRandomName ();
}

document.getElementById('generate').addEventListener ('click', setRandomName);

//console.log(getRandomName());

setRandomName();