import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moveCar } from './redux/actions';
import blueCarImg from './images/carBlue.jpeg';
import redCarImg from './images/carRed.jpeg';
import yellowCarImg from './images/carYellow.jpeg';

class Cars extends React.Component {
  render() {
    const { redCar, blueCar, yellowCar, dispatch } = this.props;
    return (
      <main>
        <section>
          <img
            className={ redCar ? 'car-right' : 'car-left' }
            src={ blueCarImg }
            alt="red car"
          />
          <button
            onClick={ () => dispatch(moveCar('red', !redCar)) }
            type="button"
          >
            move
          </button>
        </section>
        <section>
          <img
            className={ blueCar ? 'car-right' : 'car-left' }
            src={ redCarImg }
            alt="blue car"
          />
          <button
            onClick={ () => dispatch(moveCar('blue', !blueCar)) }
            type="button"
          >
            move
          </button>
        </section>
        <section>
          <img
            className={ yellowCar ? 'car-right' : 'car-left' }
            src={ yellowCarImg }
            alt="yellow car"
          />
          <button
            onClick={ () => dispatch(moveCar('yellow', !yellowCar)) }
            type="button"
          >
            move
          </button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  redCar: state.carsReducer.cars.red,
  blueCar: state.carsReducer.cars.blue,
  yellowCar: state.carsReducer.cars.yellow,
});

Cars.propTypes = {
  redCar: PropTypes.bool.isRequired,
  blueCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Cars);
