nota1 = Number(prompt("Digite sua primeira nota:"))
nota2 = Number(prompt("Digiten sua segunda nota:"))
nota3 = Number(prompt("Digite sua terceira nota:"))
media = (nota1 + nota2 + nota3)/3
   if (media >=7){
    document.write(`aprovado sua nota foi ${media}`)}
   else if (media >=5){
        document.write(`recuperção sua nota foi ${media}`)}
   else {
       document.write(`reprovado sua nota foi ${media}`)}