num1 = Number(prompt("Digite um primeiro número:"))
num2 = Number(prompt("Digite um segundo número:"))
num3 = Number(prompt("Digite um terceiro número:"))
 if (num1 == num2 && num1 == num3){
      document.write(`Os três números são iguais?`)}
 else if (num1 > num2 && num1 > num3){
       document.write(`o maior número é: ${num1}`)}
 else if (num2 > num1 && num2 > num3){
       document.write(`O maior número é: ${num2}`)}
 else {
       document.write(`O maior numero é: ${num3}`)}