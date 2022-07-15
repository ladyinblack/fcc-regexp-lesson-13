// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match Characters that Occur Zero or More Times</h1>`;

/** TODO:
 * For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes.  Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote.  Your regex does not need flags or character classes, and it should not match any of the other quotes.
 
 // Only change code below this line 
 let chewieRegex = /change/;       // Change this line 
 // Only change code above this line 
 
 let result = chewieQuote.match(chewieRegex);
 */

function chewieQuote(quote) {
  // Only change code below this line
  let chewieRegex = /Aa*/; // Change this line
  // Only change code above this line

  return quote.match(chewieRegex);
}

console.log(chewieQuote('Aaaaaaaaaaaaaaaarrgh!'));
console.log(
  chewieQuote("He made a fair move. Screaming about it can't help you.")
);
console.log(chewieQuote("Let him have it. It's not wise to upset a Wookie."));

// let soccerWord = 'gooooooooal!';
// let gPhrase = 'gut feeling';
// let oPhrase = 'over the moon';
// let goRegex = /go*/;
// console.log(soccerWord.match(goRegex));
// console.log(gPhrase.match(goRegex));
// console.log(oPhrase.match(goRegex));
