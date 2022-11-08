let nome = prompt("Inserisci qui il tuo nome");
let cognome = prompt("Inserisci qui il tuo cognome");
let colore = prompt("Inserisci qui il tuo colore preferito, ci siamo quasi!")
let numero1 = prompt("Inserisci un numero");
let numero2 = prompt("Inserisci un secondo numero");

let quoziente = numero1 / numero2;
quoziente = Math.round(quoziente);
let password = (nome + cognome + colore + quoziente);
console.log(password);
document.getElementById("p-password").innerHTML = password;

