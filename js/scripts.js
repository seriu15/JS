// Dodawanie tablicy

var womansNames = ['Asia', 'Kasia', 'Ola', 'Ania'];
var mensNames = ['Piotr', 'Tomasz', 'Jarek', 'Michal'];

var allNames = womansNames.concat(mensNames);

function addName(newName){
  if(allNames.indexOf(newName) == -1){
    allNames.push(newName);
  }
  console.log("Po dodaniu probie dodania imenia '" + newName + "' tablica zawiera nastepujace imiona: " + allNames);
}

console.log("Po polaczeniu tablica zawiera nastepujace imiona: " + allNames);
addName('Marian');
addName('Asia');
addName('Kuba');
