const palavra = prompt("Informe uma palavra");
let palavrainvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavrainvertida += palavra[i];
}
if (palavra === palavrainvertida) {
  alert(palavra + " é um palíndromo!");
} else {
  alert(
    palavra + " Não é um Palindromo!\n\n" + palavra + "!==" + palavrainvertida
  );
}

//const palavra = prompt("Informe uma palavra:")
//let palavraInvertida = ""
//for (let i = palavra.length - 1; i >= 0; i--) {
//palavraInvertida += palavra[i]}
//if (palavra === palavraInvertida) {
//alert(palavra + " é um palíndromo!")
//} else {
//alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)}
