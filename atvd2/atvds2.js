nota1 = Number(prompt("Digite a primeira nota"))
nota2 = Number(prompt("Digite a segunda nota"))
media = (nota1 + nota2)/2
if (media >=7){
    document.write(`aprovado sua media foi ${media}`)
} else  {
    document.write(`reprovado sua media foi ${media}`)
}