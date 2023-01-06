import React from 'react';
import PersonalForm from './PersonalForm';
import DisplayForm from './DisplayForm';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: 'Acre',
  addressType: 'Casa',
  resume: '',
  role: '',
  roleDescription: '',
  alertWasDisplayed: false,
  displayForm: false,
};

class Form extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    let newValue = value;

    if (name === 'name') {
      newValue = value.toUpperCase();
    }

    this.setState((previousState) => ({
      ...previousState,
      [name]: newValue,
    }));
  }

  handleBlur = (event) => {
    const { name, value } = event.target;

    if (name === 'city' && /^\d/.test(value)) {
      this.setState({
        [name]: '',
      });
    }
  }

  onMouseEnterHandler = () => {
    const { alertWasDisplayed } = this.state;

    if (!alertWasDisplayed) {
      global.alert('Preencha com cuidado esta informação.');
      this.setState({ alertWasDisplayed: true });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ displayForm: true });
  }

  handleClear = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <PersonalForm
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }
          onMouseEnter={ this.onMouseEnterHandler }
          formState={ this.state }
        />,
        <button type="submit">Enviar</button>
        <button type="reset" onClick={ this.handleClear }>Limpar</button>
        { this.state.displayForm && <DisplayForm formState={ this.state } /> }
      </form>
    );
  }
}

export default Form;
