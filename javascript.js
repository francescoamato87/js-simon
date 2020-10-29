// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


var numeriRandom = [];

while (numeriRandom.length < 5) {

var numeriRandomComputer = getRandom(1, 100);

  if(numeriRandom.includes(numeriRandomComputer) == false) {
    numeriRandom.push(numeriRandomComputer);
  }
}
console.log(numeriRandom);
// alert MEMORIZZA NUMERI
alert('memorizza questi 5 numeri' + ' ' + numeriRandom);


//funzione numeri random
function getRandom (min, max) {
  var random = Math.floor(Math.random() * (max - min + min) + 1);
  return random;
}

var numeriTrovati = [];

setTimeout(function(){
var numeriGiusti = [];
  for(var i = 0; i < 5; i++){
    numeriSceltaUtente = parseInt(prompt('scrivi il numero che ricordi!'+ (i + 1) ) );

    if (numeriRandom.includes(numeriSceltaUtente)){
      numeriTrovati.push(numeriSceltaUtente);
    }
  }
  console.log(numeriTrovati);

});
