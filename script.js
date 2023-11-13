let geeks_2 = [
  { username: "Pali", password: "123456" },
  { username: "Gergo", password: "1234" },
  { username: "Soma", password: "12345" },
  { username: "Pisti", password: "123" },
];

function newPassword(user) {
  if (user.password.length < 5) {
    return true;
  }
  return false;
}

function MyFilter(arr) {
  let result = [];
  for (let i = 0; arr[i] !== undefined; i++) {
    if (filterFunction(arr[i])) {
      result = [...result, arr[i]];
    }
  }
  return result;
}
let result_1 = MyFilter(geeks_2, newPassword);
console.log(result_1);
