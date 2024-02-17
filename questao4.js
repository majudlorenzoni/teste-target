let estados = ['SP', 'RJ', 'MG', 'ES', 'Outros'];
let valores = [67863.43, 36678.66, 29229.88, 27165.48, 19849.53];

let soma = 0;
for (let i = 0; i < valores.length; i++) {
  soma += valores[i];
}

for (let i = 0; i < estados.length; i++) {
  let percentual = (valores[i] / soma) * 100;
  console.log(`Percentual de representação de ${estados[i]}: ${percentual.toFixed(2)}%`);
}
