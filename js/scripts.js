// Instrukcje warunkowe w praktyce

var a,
    b,
    value;

value = (a*a) + (2 * a * b) - (b*b);

if(value < 0) {
  console.log("Wynik ujemy")
}
else if(value > 0) {
  console.log("Wynik dodatni");
}
else {
  console.log("Wynik rowny zero");
}
