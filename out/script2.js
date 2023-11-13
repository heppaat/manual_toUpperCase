"use strict";
let numbers = [1, 2, 3, 4, 5];
const numbersThreeTimes = (numbers) => {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result = [...result, numbers[i] * 3];
    }
    return result;
};
let users = [
    { username: "Pali", password: "12345" },
    { username: "Gergo", password: "234" },
    { username: "Sanyi", password: "34567" },
    { username: "Marci", password: "123" },
];
const onlyUserNames = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result = [...result, array[i].username];
    }
    return result;
};
//console.log(onlyUserNames(users));
const getUserName = (user) => {
    return user.username;
};
const getTriple = (number) => {
    return number * 3;
};
function newList(list, myFunction) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        result = [...result, myFunction(list[i])];
    }
    //result = [...result, 5]
    return result;
}
let result1 = newList(users, (x) => {
    return x.username;
});
let result2 = newList(numbers, getTriple);
// PRACTICE
let array = ["alma", "korte", "Articsoka"];
let numbers2 = [1, 2, 3, 5, 4, 6];
const containsA = (string) => {
    if (string[0] === "a" || string[0] === "A") {
        return true;
    }
    return false;
};
const containsBiggerThanFive = (number) => {
    if (number > 5) {
        return true;
    }
    return false;
};
const invalidPassword = (user) => {
    if (user.password.length < 5) {
        return true;
    }
    return false;
};
function newList2(list, myFunction2) {
    for (let i = 0; i < list.length; i++) {
        let isValid = myFunction2(list[i]);
        if (isValid) {
            return true;
        }
    }
    return false;
}
let result = newList2(array, containsA);
let result_2 = newList2(numbers2, containsBiggerThanFive);
let result3 = newList2(users, invalidPassword);
console.log(result);
console.log(result_2);
console.log(result3);
