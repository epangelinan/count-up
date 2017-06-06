$(document).ready(function() {
  var countTo = parseInt(prompt("Enter a number that you want to count up to:"));
  var countBy = parseInt(prompt("Enter another number that you want to count by:"));

if ((countTo >= 0) && (countBy >= 0) && (typeof countTo === "number") && (typeof countBy === "number")) {
  for (var index = 0; index <= countTo; index += countBy) {
    alert(index);
  }
}
});
