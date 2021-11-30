let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

//1 - Percorrer o array e imprimir os valores contidos
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);}

//2 - Somar todos os valores contidos no array
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    }
    console.log('A soma dos valores é: ' + soma);

//3 - Calcular e imprimir a média aritimética
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    }

    let media = soma / numbers.length;

    console.log('A média dos valores é: ' + media);