import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    const { email } = this.state;
  
    return (
      <div>
        <h1>Forms</h1>
        <form className="form">
          <label htmlFor="name">
            Nome:
            <input
              id="name"
              name="name"
              type="text"
            />
          </label>
          <br />
          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <br />
          <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              defaultValue=""
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>
          <br />
          <label htmlFor="others">
            Outros:
            <textarea
              id="others"
              name="others"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;