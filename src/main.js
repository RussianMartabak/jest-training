function capitalize(string) {
  //get the first letter
  let firstLetter = string.charAt(0);
  let convertedLetter = firstLetter.toUpperCase();
  string = string.slice(1, string.length);
  return convertedLetter + string;
}

function reverseString(string) {
  let stringArray = string.split("");
  //reverse the array
  let arrayMidPoint =
    stringArray.length % 2 === 0
      ? stringArray.length / 2 - 1
      : (stringArray.length + 1) / 2 - 1;
  for (let i = stringArray.length - 1; i > arrayMidPoint; i--) {
    let temp = stringArray[i];
    stringArray[i] = stringArray[stringArray.length - (i + 1)];
    stringArray[stringArray.length - (i + 1)] = temp;
  }
  const result = stringArray.join("");
  return result;
}

const calculator = (() => {
  function add(x, y) {
    return x + y;
  }
  function substract(x, y) {
    return x - y;
  }
  function divide(x, y) {
    return x / y;
  }
  function multiply(x, y) {
    return x * y;
  }
  return { add, substract, divide, multiply };
})();

function caesarCipher(string, shift) {
    //make an array of all 26 letters
    const letters = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ]
    let shiftedStringArray = [];
    //split 
    let stringArray = string.split('');
    stringArray.forEach(e => {
      process(e);
    })
    //to do for each element 
    function process(letter) {
        //if uppercase uppercase it after processing
        let isUpper = UppercaseCheck(letter);
        let letterIndex = letters.findIndex((element) => element === letter.toLowerCase());
        // -1 if not found otherwise others
        if (letterIndex === -1) {
          shiftedStringArray.push(letter)
        } else {
          let finalIndex = processIndex(letterIndex + shift);
          let shiftedLetter = letters[finalIndex];
          if (isUpper) shiftedLetter = shiftedLetter.toUpperCase();
          shiftedStringArray.push(shiftedLetter);
        }

    };
    function UppercaseCheck(letter) {
      //will check if its uppercase letter or lowercase/non-letter  
      if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
            return true;
        }
        return false;
    };
    function processIndex(index) {
        if (index > 25) {
            return (index - 25) - 1;
        }
        return index;
    };
    return shiftedStringArray.join('');
}
export { capitalize, reverseString, calculator, caesarCipher };
