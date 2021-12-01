//5 - Utilizando for, descubra o maior numero do array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (var index = 0; index < numbers.length; index += 1) {
   if ( numbers[index] > maior ) { //Percorre dentro do array numbers e identifica o maior número, ao localizar ele acrescenta esse numero na variável maior: 5 > 0? s maior = 5; 9 > 5? s maior = 9; 3 > 9? n maior = 9; e assim sussecivamente até percorrer toda a array. 
      maior = numbers[index];
   }
}
    console.log('O maior número é: ' + maior);