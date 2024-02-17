const fs = require('fs');
const filePath = './dados.json';
let valoresDiarios = [];
let somaFaturamento = 0;
try {
  const jsonData = fs.readFileSync(filePath, 'utf8');
  // console.log('Conteúdo do arquivo JSON:');
  // console.log(jsonData);
  const data = JSON.parse(jsonData);
  const number = data;
  if(Array.isArray(data)){
    valoresDiarios = data.filter((item) => item.valor > 0).map((item) => item.valor);
    console.log('Valores diários com faturamento: ', valoresDiarios);
  } else {
    console.log('Não é um array');
  }
} catch (err) {
  console.error('Erro ao ler o arquivo: ', err);
}


for (let i = 0; i < valoresDiarios.length; i++) {
  somaFaturamento += valoresDiarios[i];
}
const mediaFaturamento = somaFaturamento / valoresDiarios.length;
const diasAcimaDaMedia = valoresDiarios.filter((item) => item > mediaFaturamento).length;
const menorFaturamento = Math.min(...valoresDiarios);
const maiorFaturamento = Math.max(...valoresDiarios);

console.log('O menor valor de faturamento ocorrido em um dia do mês: ', menorFaturamento);
console.log('O maior valor de faturamento ocorrido em um dia do mês: ', maiorFaturamento);
console.log('Quantidade de dias com faturamento acima da média: ', diasAcimaDaMedia);