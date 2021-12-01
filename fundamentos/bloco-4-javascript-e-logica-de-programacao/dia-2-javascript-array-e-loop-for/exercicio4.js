//Se o valor final for > 20 imprimir "Valor maior que 20", senão "Valor menor que 20"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

//3 - Calcular e imprimir a média aritimética
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    }

    let media = soma / numbers.length;
    console.log('A média dos valores é: ' + media);

    if(media > 20){
        console.log(media + ': Valor maior que 20');
    } else {
        console.log(media + ' Valor menor que 20');
    }

    