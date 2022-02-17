/* 1 - O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

Um código executado em modo assíncrono não depende de uma ordem de execução, pois ela acontece simultaneamente com outras execuções

2 - Quando você tem que enfileirar várias callbacks , que problema surge?

Callback Hells, pode dificultar o entendimento do código dificultando assim sua interpretação e organização.

3 - Por que as Promises são uma forma de resolver esse problema?

Pois elas facilitam o controle do fluxo assíncrono

4 - Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

Será assíncrono e garantirá um retorno em tempo real das informações, evitando assim informações incorretas e/ou desatualizadas

5 - Dada a resposta anterior, o que é fetch e para que ele serve?

O fetch serve para solicitar e receber as informações desejadas e esse retorno é dado no formato o qual se desejada trabalhar. */

// const fetch = require('node-fetch');
// 
// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';
// 
//   console.log(fetch(url));
// }
// 
// fetchJoke();

// const fetch = require('node-fetch');
// 
// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';
// 
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// }
// 
// fetchJoke();

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported