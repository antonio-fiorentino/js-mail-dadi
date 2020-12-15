// Banner
var email = prompt("Benvenuto in Ludopatia, inserire l'email");
var errore = document.getElementById('errore');
var btn = document.getElementById('btn');
var dadopc = document.getElementById('dado-pc');
var dadoutente = document.getElementById('dado-utente');
var risultato = document.getElementById('risultato');
var emailValide =['nonnolibero80@gmail.com' , 'maroon7@gmail.com' , 'pippo@gmail.com'];
var checkEmail;
var min = 1;
var max = 6;
var numeroUtente = Math.floor(Math.random() * (max + 1 - min) + min);
var numeroPc = Math.floor(Math.random() * (max + 1 - min) + min);
console.log(numeroUtente);
console.log(numeroPc);


var checkEmail = false;
// Verifica email
for (var i = 0; i <= emailValide.length; i++) {
  if (email === emailValide[i]) {
    checkEmail = true;
  }
}
if (checkEmail) {
  btn.innertext ='Clicca qui per incominciare la partita';
  btn.addEventListener('click',
    function(){

      dadopc.innertext = 'PC' + numeroPc;
      dadoutente.innertext = 'user' + nemeroUtente;

      if (numeroUtente > numeroPc) {
        risultato.innertext = 'Bravo hai vinto, la fortuna ti sorride';
      }else if (numeroPc > numeroUtente) {
        risultato.innertext = 'Peccato hai perso, ritenta sarai più fortunanto';
      }else {
        risultato.innertext = 'Pareggio, nessuno di noi guadagna';
      }
    })

}else{
  errore.innertext = 'E-mail non corretta';
}
