let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  leitor['fullName'] = leitor.nome + ' ' + leitor.sobrenome;

  console.log('O livro favorito de ' + leitor.fullName + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"'); // [0] pois o objeto livrosFavoritos está declarado como string.

  leitor.livrosFavoritos.push( //não precisa declrar como string, pois irá entrar dentro da string já existente
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    },
  );
      console.log(leitor.fullName + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos!');