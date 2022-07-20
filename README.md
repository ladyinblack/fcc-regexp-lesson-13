# js-qmuutt

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-qmuutt)

## PROBLEM EXPLANATION
Any letter in a regex expression that is followed by a `*` does not have to occur in the string tested whereas any letter in a regex expression followed by a `+` must occur in a string at least once, as shown below,
```js
let phrase = "ba humbug";

let regexpPlus = /bah+/;
let regexStar = /bah*/;

regexPlus.test(phrase);     // returns false
regexStar.test(phrase);     // returns true
```
Both allow for any number of occurrences of the same letter in a row, for example,
```js
let phrase = "wooooow look at that!";

let regexPlus = /wo+w/;
let regexStar = /wo*w/;

regexPlus.test(phrase);     // returns true 
regexStar.test(phrase);     // returns true
```
