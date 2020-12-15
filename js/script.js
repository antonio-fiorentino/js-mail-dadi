// Banner
var email = prompt("Benvenuto in Ludopatia, inserire l'email");
var btn = (document. getElementById('btn');
var dadopc = document.getElementById('dado-pc')
var dadoutente = document.getElementById('dado-utente')
var emailValide =['nonnolibero80@gmail.com' , 'maroon7@gmail.com' , 'pippo@gmail.com'];
var checkEmail;
var numeroUtente = Math.floor(Math.random() * (max + 1 - min) + min);
var numeroPc = Math.floor(Math.random() * (max + 1 - min) + min);
var min = 1;
var max = 6;

// Verifica email
for (var i = 0; i <= email.length; i++) {
  if (emailValide[i] === email) {
    checkEmail = true;
  }
}
if (checkEmail) {
  btn.addEventListener('click',
    function(){
      dadopc.innertext = numeroPc;
      dadoutente.innertext = nemeroUtente; 
    })
}
