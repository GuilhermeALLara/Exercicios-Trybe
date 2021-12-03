/// const x = 90;
/// const y = -5;
/// const z = 65;
/// 
/// //Necessário criar uma nova variável para calcular a soma dos angulos.
/// 
/// const somaDosAng = x + y + z;
/// 
/// //Necessário criar uma variável para verificar se existe algum angulo negativo
/// 
/// const todosPositivos = x > 0 && y > 0 && z > 0;
/// 
/// if(todosPositivos){
///     if(somaDosAng === 180 ){
///         console.log('true');
///     }else{
///         console.log('false');
///     }
/// }else{
///     console.log('Erro: ângulo inválido');
/// }

function triangulo (a, b, c){
    let soma = a + b + c;
    let positive = a > 0 && b > 0 && c > 0;

    if (positive) {
        if (soma === 180) {
          return true;
        } else {
          return false;
        }
      } else {
        return 'Erro: ângulo inválido';
      }
}
    console.log(triangulo(10, 150, -20));
