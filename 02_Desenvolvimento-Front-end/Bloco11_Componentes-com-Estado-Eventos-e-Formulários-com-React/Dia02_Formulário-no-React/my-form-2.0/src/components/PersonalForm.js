import React from 'react';
import states from '../data';
import PropTypes from 'prop-types';

class PersonalForm extends React.Component {
  render() {
    const { formState, onChange, onBlur, onMouseEnter } = this.props;
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
        <fieldset>
          <legend>Dados pessoais</legend>
          <label htmlFor="name">
            Nome:
            <input
              id="name"
              type="text"
              name="name"
              maxLength="40"
              required
              value={ name }
              onChange={ onChange }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              maxLength="50"
              required
              value={ email }
              onChange={ onChange }
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              id="cpf"
              type="text"
              name="cpf"
              maxLength="11"
              required
              value={ cpf }
              onChange={ onChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="address">
            Endereço:
            <input
              id="address"
              type="text"
              name="address"
              maxLength="200"
              required
              value={ address }
              onChange={ onChange }
            />
          </label>
          <label htmlFor="city">
            Cidade:
            <input
              id="city"
              type="text"
              name="city"
              maxLength="28"
              required
              value={ city }
              onChange={ onChange }
              onBlur={ onBlur }
            />
          </label>
          <label htmlFor="state">
            Estado
            <select
              id="state"
              name="state"
              maxLength="200"
              required
              value={ state }
              onChange={ onChange }
            >
              <option value="">Selecione</option>
              {
                states.map((value) => (
                  <option key={ value.acronyms }>{ value.state }</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="house">
            <input
              id="house"
              type="radio"
              name="addressType"
              value="Casa"
              checked={ addressType === 'Casa' }
              onChange={ onChange }
            />
            Casa
          </label>
          <label htmlFor="apart">
            <input
              id="apart"
              type="radio"
              name="addressType"
              value="Apartamento"
              checked={ addressType === 'Apartamento' }
              onChange={ onChange }
            />
            Apartamento
          </label>
        </fieldset>
        <fieldset>
          <legend>Dados profissionais:</legend>
          <label htmlFor="resume">
          Resumo do currículo
          <textarea
            id="resume"
            name="resume"
            maxLength="1000"
            required
            value={ resume }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="role">
          Cargo
          <input
            id="role"
            type="text"
            name="role"
            maxLength="40"
            required
            value={ role }
            onChange={ onChange }
            onMouseEnter={ onMouseEnter }
          />
        </label>
        <label htmlFor="roleDescription">
          Descrição do cargo
          <textarea
            id="roleDescription"
            name="roleDescription"
            maxLength="500"
            required
            value={ roleDescription }
            onChange={ onChange }
          />
        </label>
        </fieldset>
      </div>
    );
  }
}

PersonalForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    addressType: PropTypes.string,
  }).isRequired,
};
 
export default PersonalForm;