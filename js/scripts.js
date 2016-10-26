// Choinka

function rysujChoinke(wysokosc){
  for(var k=1; k<=wysokosc; k++){
    var star = "";
    for (var i = 0; i < k*2-1; i++) {
      star += '*';
    }
    console.log(star);
  }
}


rysujChoinke(5);
