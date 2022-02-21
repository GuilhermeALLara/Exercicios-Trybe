import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Arrumar o filho', 'Trocar de roupa', 'Levar o filho para sogra', 'Trabalhar'];

class App extends React.Component {
  render() {
    return (
      <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
    );
  }
}
export default App;
