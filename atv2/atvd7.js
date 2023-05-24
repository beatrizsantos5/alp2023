peso = Number(prompt("Digite o peso em kg:"))
altura = Number(prompt("Digite a altura em metros:"))
imc = Number(peso / altura ** 2)
document.write(`O IMC é :`)
if (imc < 18.5){
 document.write(`Você está abaixo do peso.`)}
else if(imc >= 18.5 && imc <= 24.9){
 document.write(`Você está com o peso normal.`)}
else if(imc >= 25 && imc <= 29.9){
 document.write(`Você está sobrepeso.`)}
else if(imc >= 30 && imc <= 34.9){
 document,write(`Você está co Obesidade 1.`)}
else if(imc>= 35 && imc <= 39.9){
 document,write(`Você está co Obesidade 2.`)}
else if(imc >= 40){
 document,write(`Você está co Obesidade 3.`)}