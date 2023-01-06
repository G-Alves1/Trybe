import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayForm extends Component {
  render() {
    const { formState } = this.props;
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      addressType,
      resume,
      role,
      roleDescription,
    } = formState;

    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div>
          Name:
          {' '}
          <span>
            { name }
          </span>
        </div>
        <div>
          Email:
          { ' ' }
          <span>
            { email }
          </span>
        </div>
        <div>
          CPF:
          { ' ' }
          <span>
            { cpf }
          </span>
        </div>
        <div>
          Endereço:
          { ' ' }
          <span>
            { address }
          </span>
        </div>
        <div>
          Cidade:
          { ' ' }
          <span>
            { city }
          </span>
        </div>
        <div>
          Estado:
          { ' ' }
          <span>
            { state }
          </span>
        </div>
        <div>
          Tipo de residência:
          { ' ' }
          <span>
            { addressType }
          </span>
        </div>
        <h3>Profissional</h3>
        <div>
          Currículo:
          { ' ' }
          <span>
            { resume }
          </span>
        </div>
        <div>
          Cargo:
          { ' ' }
          <span>
            { role }
          </span>
        </div>
        <div>
          Descrição do cargo:
          { ' ' }
          <span>
            { roleDescription }
          </span>
        </div>
      </div>
    );
  }
}

DisplayForm.propTypes = {
  formState: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    countryState: PropTypes.string,
    addressType: PropTypes.string,
    resume: PropTypes.string,
    role: PropTypes.string,
    roleDescription: PropTypes.string,
  }).isRequired,
};

export default DisplayForm;