import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      button1: 0,
      button2: 0,
      button3: 0,
    }
  }

  clickButton1 = () => {
    this.setState((prevState) => ({
      button1: prevState.button1 + 1,
    }), () => {
      console.log(`Cor do botão 1: ${this.changeButtonColor(this.state.button1)}`);
    });
  }

  clickButton2 = () => {
    this.setState((prevState) => ({
      button2: prevState.button2 + 1,
    }), () => {
      console.log(`Cor do botão 2: ${this.changeButtonColor(this.state.button2)}`);
    });
  }

  clickButton3 = () => {
    this.setState((prevState) => ({
      button3: prevState.button3 + 1,
    }), () => {
      console.log(`Cor do botão 3: ${this.changeButtonColor(this.state.button3)}`);
    });
  }

  changeButtonColor = (num) => num % 2 === 0 ? 'green' : 'white';

  render() {
    const { 
      state: { button1, button2, button3 },
      clickButton1,
      clickButton2,
      clickButton3,
      changeButtonColor  } = this;
    return (
      <>
        <button
          onClick={clickButton1}
          style={{ backgroundColor: changeButtonColor(button1) }}
        >
          { button1 }
        </button>
        <button
          onClick={clickButton2}
          style={{ backgroundColor: changeButtonColor(button2) }}
        >
          { button2 }
        </button>
        <button
          onClick={clickButton3}
          style={{ backgroundColor: changeButtonColor(button3) }}
        >
          { button3 }
        </button>
      </>
    );
  }
}

export default App;
