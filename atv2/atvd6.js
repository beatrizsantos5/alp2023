let centrox = Number(prompt("Digite a coordenada x do centro do círculo:"))
let centroy = Number(prompt("Digite a coordenada y do centro do círculo:"))
raio = Number("Digite o raio do círculo:")
let ponto1 = Number(prompt("Digite a coordenada ponto do x:"))
let ponto2 = Number(prompt("Digite a coordenada ponto do y:"))
distancia = Math.sqrt((ponto1-centrox) ** 2 + (ponto2-centroy) **2)
if (distancia <=raio){
    document.write(`O ponto está dentro do círculo.`)
}
else{
    document.write(`O ponto está fora do círculo.`)
}