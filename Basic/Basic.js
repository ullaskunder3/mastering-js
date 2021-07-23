// Usage of break statement

//The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log('Break statement in while loop:', i);
// expected output: 3

console.log('*********************************');
console.log('Break using switch statement');

const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}