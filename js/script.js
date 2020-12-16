// Banner
var email = prompt("Benvenuto in Ludopatia, inserire l'email");
var errore = document.getElementById('errore');
var inizio = document.getElementById('inizio');
var dadopc = document.getElementById('dado-pc');
var dadoutente = document.getElementById('dado-utente');
var risultato = document.getElementById('risultato');
var emailValide =['nonnolibero80@gmail.com' , 'maroon7@gmail.com' , 'pippo@gmail.com'];
var controlloEmail;
var min = 1;
var max = 6;
var numeroUtente = Math.floor(Math.random() * (max + 1 - min) + min);
var numeroPc = Math.floor(Math.random() * (max + 1 - min) + min);

console.log(numeroUtente);
console.log(numeroPc);
console.log(email);
console.log(emailValide[i]);


var controlloEmail = false;
// Verifica email
for (var i = 0; i <= emailValide.length; i++) {
  if (email === emailValide[i]) {
    controlloEmail = true;
  }
}
// se l'email è corretta iniziarà la partita
if (controlloEmail) {
  inizio.innerText ='Clicca qui per incominciare la partita';
  inizio.addEventListener('click', function(){

      dadopc.innerText = 'PC  ' + numeroPc;
      dadoutente.innerText = 'user  ' + numeroUtente;

      if (numeroUtente > numeroPc) {
        risultato.innerText = 'Bravo hai vinto, la fortuna ti sorride';
      }else if (numeroPc > numeroUtente) {
        risultato.innerText = 'Peccato hai perso, ritenta sarai più fortunanto';
      }else {
        risultato.innerText = 'Pareggio, nessuno di noi guadagna';
      }
    })
// Email non corretta
}else{
  errore.innerText = 'E-mail non corretta';
}
