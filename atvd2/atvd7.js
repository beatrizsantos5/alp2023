num  = Number(prompt("Digite um número inteiro:"))
 if (num >= 0){
      raiz_quadrada = Math.sqrt(num)
      document.write(`A raiz quadrada de ${num} é ${raiz_quadrada.toFixed(2)}`)}
 else  {
    num_quadrado = (num**2)
    document.write(`O número ${num} ao quadrado é ${num_quadrado}`)
 }