let n = 5;
let simbolo = '*';
let line = '';

for(index = 0; index <= n; index += 1){
    for(index1 = n - index; index1 >= 1; index1 +=1){
        console.log('');
    }
    console.log(line);
    line = line + simbolo;
}