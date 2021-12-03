let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  // 1 - Imprimir mensagem de boas vindas.
  console.log('Bem vinda, ' + info['personagem']);
  // 2 - Inserir chave recorrente  com valor "Sim"
 info['recorrente'] = 'Sim';
 // 3 - Fazer um for/in para mostrar as chaves do objeto
 for(let key in info) {
    console.log(key);
 }
// 4 - Fazer um for/in para mostrar os valores das chaves
 for(let key in info) {
    console.log(info[key]);
 }
//5 - Criar novo objeto com mesmas mesmas chaves e informações fornecidas e imprimir as chaves uma ao lado da outra acrescida de "e" e se forem recorrentes, imprimir a frase "Ambos recorrentes."

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

for(let key in info){
  if( //if necessário para gerar 'Ambos recorrentes' no final do array
    key === 'recorrente' && 
    info[key] === 'Sim' &&
    info2[key] === 'Sim'
  ){
    console.log('Ambos recorrentes');
  } else{
    console.log(info[key] + ' e ' + info2[key]);
  }
};
  

