//7 - Utilizando for, descubra o menor numero do array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0]; //inicia o array na posição 0

for (var index = 0; index < numbers.length; index += 1) {
   if ( numbers[index] < menor ) {
      menor = numbers[index];
   }
}
    console.log('O menor número é: ' + menor);