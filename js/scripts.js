// Instrukcje warunkowe w praktyce

var a,
    b,
    value;
a = prompt("Podaj wartosc a");
b = prompt("Podaj wartosc b");

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
