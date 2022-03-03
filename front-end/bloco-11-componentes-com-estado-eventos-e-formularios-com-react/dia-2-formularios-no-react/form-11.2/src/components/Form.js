import React from "react";

class Form extends React.Component {
  
  constructor() {
    super();

    this.state = {
      favoriteSport: '',
      name: '',
      age: 0,
      email: '',
      about: '',
      yesOrNo: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }
  
  render() {
    return (
<div>
  <h1> Formulário 11.2 - Aprendendo Componentes Controlados </h1>
  <form>
    <label> Qual seu esporte favorito?!
      <select name="favoriteSport"
        value={this.state.favoriteSport}
        onChange={this.handleChange}
      >
        <option value="Futebol"> Futebol </option>
        <option value="Volei"> Volei </option>
        <option value="Basquete"> Basquete </option>
        <option value="Natação"> Natação </option>
        <option value="Outro"> Outro </option>
      </select>
    </label> <br></br> <br></br>
    <label> Como se chama e qual a sua idade?
      <input 
      name="name" 
      type="text" 
      placeholder="Nome" 
      value={this.state.name}
      onChange={this.handleChange}
      />
      <input name="age" 
      type="number" 
      placeholder="Idade" 
      value={this.state.age}
      onChange={this.handleChange}
      />
    </label> <br></br> <br></br>
    <label> Agora um e-mail para contato
      <input 
        name="email" 
        type="email" 
        placeholder="E-mail"
        value={this.state.email}
        onChange={this.handleChange}
      />
    </label> <br></br> <br></br>
    <label> Nos conte sobre você
      <textarea 
        name="about" 
        placeholder="Conte-nos sobre você"
        value={this.state.about}
        onChange={this.handleChange}
      />
    </label> <br></br> <br></br> 
    <label>
    Você acompanha jogos do seu esporte favorito?
      <input type="checkbox" 
      name="yesOrNo"
      value={this.state.yesOrNo}
      onChange={this.handleChange}
      />
    </label> <br></br> <br></br>

    <input type="file" />

  </form>
</div>
    );
  }
}

export default Form;
