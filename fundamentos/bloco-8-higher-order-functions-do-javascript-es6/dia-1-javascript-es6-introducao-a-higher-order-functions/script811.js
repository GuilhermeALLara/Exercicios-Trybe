const emailGenerator = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_'); // toLowerCase transforma tudo em minusculo, split onde tem espaço separa em strings e join uni as strings com _.
  return {nomeCompleto, email: `${email}@betrybe.com`};
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(emailGenerator));