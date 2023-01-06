import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, disabled, children }) => {
  return (
    <button
      type="button"
      onClick={ onClick }
      className={ `button-text ${className}` }
      disabled={ disabled }
    >
      { children }
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
