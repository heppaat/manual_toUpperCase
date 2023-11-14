/* let array = [11, 2, 32, 4, 5, 12, 47, 8];

function biggerThanTwenty(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 11) {
      return true;
    }
  }
  return false;
}

console.log(biggerThanTwenty(array)); */

let numbers = [1, 2, 3, 4, 5];

const containsBiggerThanFive = (number) => {
  if (number > 5) {
    return true;
  }
  return false;
};

function newList2(list, myFunction2) {
  for (let i = 0; i < list.length; i++) {
    if (myFunction2(list[i])) {
      return true;
    }
  }
  return false;
}

console.log(newList2(numbers, containsBiggerThanFive));
