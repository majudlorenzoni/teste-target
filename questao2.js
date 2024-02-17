
let number;

  console.log('Digite um número para calcular a sequência de Fibonacci: ');
  process.stdin.on('data', function(data) {
    number = parseInt(data.toString());
    if(Fibonacci(number)) {
      console.log('É um número da sequência de Fibonacci');
    } else {
      console.log('Não é um número da sequência de Fibonacci');
    }
    process.exit();
  });

function Fibonacci(number) {
  let a = 0;
  let b = 1;
  let temp;
  while (a <= number) {
      if (a === number) {
          return true;
      }
      temp = a;
      a = b;
      b = temp + b;
  }
  return false;
}
