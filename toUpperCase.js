const toUpperCase1 = (char) => {
  const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const abc = "abcdefghijklmnopqrstuvwxyz";

  let indexInabc = null;
  for (let i = 0; i < abc.length; i++) {
    let currentChar = abc[i];
    if (currentChar === char) {
      indexInabc = i;
    }
  }
  if (indexInabc === null) {
    return char;
  }
  return ABC[indexInabc];
};

let string = "ferencke";

const newArrayUpper = (word, filterFunction) => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    result += filterFunction(letter);
  }
  return result;
};

console.log(newArrayUpper(string, toUpperCase1));
