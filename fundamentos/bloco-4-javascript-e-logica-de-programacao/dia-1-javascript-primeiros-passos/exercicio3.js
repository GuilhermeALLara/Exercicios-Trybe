//const x = 3;
//const y = 4;
//const z = 5;
//
//if(x > y && x > z){
//    console.log('"x" é maior que "y" e "z"!');
//} else if(y > x && y > z){
//    console.log('"y" é maior que "x" e "z"!');
//} else{
//    console.log('"z" é maior que "x" e "y"!');
//}

function returnBig (a, b, c){
    if(a > b && a >c){
        return a + ' é maior que ' + b + ' e ' + c;
    } else if (b > a && b >c){
        return b + ' é maior que ' + a + ' e ' + c;
    } else{
        return c + ' é maior que ' + a + ' e ' + b;
    }
}
    console.log(returnBig(11, 12, 3));