// Pole trójkąta

var triangle = {
  a: 5,
  h: 2,
  triangleArea: function() {
    return this.a * this.h / 2;
  }
};

triangle.a = prompt("Enter width");
triangle.h = prompt("Enter height");
console.log('Pole trójkąta o podstawie a: ' + triangle.a + ' i wysokości h: ' + triangle.h + ' wynosi: ' + triangle.triangleArea());
alert('Pole trójkąta o podstawie a: ' + triangle.a + ' i wysokości h: ' + triangle.h + ' wynosi: ' + triangle.triangleArea());
