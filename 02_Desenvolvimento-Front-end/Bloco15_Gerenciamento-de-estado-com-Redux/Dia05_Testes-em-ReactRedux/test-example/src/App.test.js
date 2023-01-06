import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './redux/reducers/counterReducer';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(
      combineReducers({ counterReducer }),
      initialState,
      applyMiddleware(thunk)
    ),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

test('A página deve renderizar dois botões e o número "0"', () => {
  renderWithRedux(<App />);
  const buttonAdicionar = screen.queryAllByRole('button');

  expect(buttonAdicionar.length).toBe(2);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
  const initialState = {
    counterReducer: {
      count: 10,
    }
  }
  renderWithRedux(<App />, { initialState });

  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
});

test('Incrementa o valor da store ao clicar no botão', () => {
  const { store } = renderWithRedux(<App />);
  expect(screen.getByText('0')).toBeInTheDocument();
  expect(store.getState().counterReducer.count).toBe(0);
  const button = screen.getByText('Incrementa 1');
  userEvent.click(button);
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(store.getState().counterReducer.count).toBe(1);
});

describe('Testa o clique dos botões', () => {
  test('Com o valor padrão do reducer, os botões devem incrementar os valores corretamente', () => {
    renderWithRedux(<App />);

    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(2);

    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.click(buttons[0]);
    expect(screen.getByText('1')).toBeInTheDocument();

    userEvent.click(buttons[1]);
    expect(screen.getByText('6')).toBeInTheDocument();
  })

  test('Iniciando o estado global com um valor personalizado, os botões devem incrementar os valores corretamente', () => {
    const initialState = {
      counterReducer: {
        count: 5,
      }
    }
    renderWithRedux(<App />, { initialState });

    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(2);

    expect(screen.getByText('5')).toBeInTheDocument();

    userEvent.click(buttons[0]);
    expect(screen.getByText('6')).toBeInTheDocument();

    userEvent.click(buttons[1]);
    expect(screen.getByText('11')).toBeInTheDocument();
  })
})
