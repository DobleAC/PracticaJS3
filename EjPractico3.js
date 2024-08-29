const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una cadena: ', (input) => {
  const isPalindrome = (str) => {
    const cleaned = str.replace(/\s+/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  };

  if (isPalindrome(input)) {
    console.log('La cadena es un palíndromo.');
  } else {
    console.log('La cadena no es un palíndromo.');
  }
  
  rl.close();
});
