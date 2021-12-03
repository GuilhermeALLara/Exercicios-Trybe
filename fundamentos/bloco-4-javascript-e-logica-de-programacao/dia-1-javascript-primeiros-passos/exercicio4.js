//const x = 0;
//
//if(x > 0){
//    console.log('Positive');
//} else if(x < 0){
//    console.log('Negative');
//} else{
//    console.log('O numero é igual a "0"')
//}


function typeNumber (x){
    if(x > 0){
    return x + ' é positivo!';
    } else if (x < 0) {
        return x + ' é negativo!';
    } else {
        return x + ' é zero!'
    }
}
    console.log(typeNumber(0));