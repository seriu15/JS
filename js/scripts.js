// Instrukcje warunkowe w praktyce

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(0, 15);
var triangle3Area = getTriangleArea(10, -15);

console.log("Pole pierwszego trojkata: " + triangle1Area);
console.log("Pole pierwszego trojkata: " + triangle2Area);
console.log("Pole pierwszego trojkata: " + triangle3Area);

function getTriangleArea(a, h) {
  if(a <= 0 || h <= 0) {
    alert("Nieprawidlowe dane");
    return "Nieprawidlowe dane";
  } else {
    return a*h/2;
  }
}
