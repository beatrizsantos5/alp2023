let ano = Number(prompt("Digite um ano bissexto"))
if((ano %  4 ==0 &&  ano % 100!=0) || ano % 400 ==0){
  document.write(`O ano é bissexto`)
}
else {
    document.write(`O ano não é bissexto`)
}