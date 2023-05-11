nota1 = Number(prompt("Digite sua primeira nota:"))
nota2 = Number(prompt("Digite sua segunda nota:"))
nota3 = Number(prompt("Digite sua terceira nota:"))
media = (nota1 + nota2 + nota3)/3
if (media >=7){
  document.write(`Aprovado sua media foi ${media.toFixed(2)}`)
}
else if (media >=5){
  alert(`Sua media foi ${media.toFixed(2)} voce ficou de recuperação.`)
  nota_final = Number(prompt("Digite a nota da prova final:"))
    if (nota_final>=5){
      document.write(`Sua media final foi ${nota_final.toFixed(2)} e voce foi aprovado!`)
    }
    else {
    document.write(`Sua media final foi ${nota_final.toFixed(2)} e voce foi reprovado!`)
  }
}
else{
   document.write(`Sua media foi ${media}e voce foi reprovado`)
}