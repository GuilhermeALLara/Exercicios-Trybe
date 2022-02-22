import React from "react";

class Form extends React.Component {
  
  constructor() {
    super();

    this.state = {
      email: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
  
  render() {
    return (
<div>
  <h1> Formulário 11.2 - Aprendendo Componentes Controlados </h1>
  <form>
    <label> Qual seu esporte favorito?!
      <select name="EsportePreferido">
        <option value="Futebol"> Futebol </option>
        <option value="Volei"> Volei </option>
        <option value="Basquete"> Basquete </option>
        <option value="Natação"> Natação </option>
        <option value="Outro"> Outro </option>
      </select>
    </label> <br></br> <br></br>
    <label> Como se chama e qual a sua idade?
      <input name="name" type="text" placeholder="Nome" />
      <input name="age" type="number" placeholder="Idade" />
    </label> <br></br> <br></br>
    <label> Agora um e-mail para contato
      <input 
        name="email" 
        type="email" 
        placeholder="E-mail"
        value={this.state.handleChange}
        onChange={this.handleChange}
      />
    </label> <br></br> <br></br>
    <label> Nos conte sobre você
      <textarea name="about" placeholder="Conte-nos sobre você"/>
    </label>
  </form>
</div>
    );
  }
}

export default Form;
