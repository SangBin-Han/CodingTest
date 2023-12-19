// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
function pigIt(str){
  //Code here
  return str.split(" ")
    .map(moveLetter)
    .join(" ");

  function moveLetter(letter) {
    if (regExp.test(letter)) return letter;

    const firstChar = letter.charAt(0);
    return `${letter.substring(1)}${firstChar}ay`;
  }
}

const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

// Best Practices && Cleaver
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

// Good
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

console.log(pigIt('Pig latin is cool !'));
console.log(pigIt('This is my string'));
