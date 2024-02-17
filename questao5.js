const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma string para inverter: ', (answer) => {
  let stringInvertida = inverterString(answer);
  console.log('String original:', answer);
  console.log('String invertida:', stringInvertida);
  rl.close();
});

function inverterString(str) {
  let inverted = '';
  for (let i = str.length - 1; i >= 0; i--) {
    inverted += str.charAt(i);
  }
  return inverted;
}
