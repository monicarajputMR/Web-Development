// a = 20;
// b = 40;
// c = 60;
// d = a + b + c;
// if (d == 180) {
//   console.log(`triangle is valid`);
// } else {
//   console.log(`triangle is invalid`);
// }
let password = "1234567891045";
console.log(`${password.length}`);
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log(`valid password`);
  } else {
    console.log(`password is long enough,but cannot contain space`);
  }
} else {
  console.log(`password must be longer`);
}
