// Papugi i słonie

var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var slonie = "Zielone słonie";
slonie = slonie.toUpperCase();
text = text.replace('Papugi', slonie);

console.log(text.substr(0, text.length/2));
