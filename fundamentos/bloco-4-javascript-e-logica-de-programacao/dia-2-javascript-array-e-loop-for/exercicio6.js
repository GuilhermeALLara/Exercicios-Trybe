//6 - Descubra se há numeros impares e imprima o resultado, senão imprima "nenhuma valor impar encontrado."

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for(index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 === 1){ //Sempre lembrar de atribuir o index na busca.
        impar +=1;
     }
}

if(impar === 0){
    console.log('Não há números impares!');
} else {
    console.log('Existem ' + impar + ' número(s) impar(es)');
}