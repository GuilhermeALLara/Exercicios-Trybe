let n = 5;
let simbolo = '*';
let line = '';

//No primeiro momento temos que observar que precisamos gerar um asterisco para o valor de N.
for(let index = 0; index < n; index += 1){
    line = line + simbolo;
}
//
for(index = 0; index < n; index += 1){
    console.log(line);
}