// Banner
var email = prompt("Benvenuto in Ludopatia, inserire l'email");
// Verifica email
if (email != ('ludopatico1@gmail.com')) {
  alert("E-mail non valida")
}

// Se il bottone viene schiacciato inizia il gioco
if(document. getElementById('bottone'). clicked == true) {
  var min = 1;
  var max = 6;

  var numeroUtente = Math.floor(Math.random() * (max + 1 - min) + min);
  var numeroPc = Math.floor(Math.random() * (max + 1 - min) + min);

  


  console.log(numeroUtente);
  console.log(numeroPc);
}
