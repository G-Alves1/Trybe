import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  // Outra forma de mock do fetch:
  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(joke),
  // }));

  // Outra forma de mock do fetch:
  // global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

// 1
it('fetches a new joke when button is clicked', async () => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const joke2 = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke1),
  });
  
  render(<App />);
  const newJokeButton = screen.getByRole('button', { name: 'New joke' });
  
  expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke2),
  });
  userEvent.click(newJokeButton);
  
  expect(await screen.findByText(joke2.joke)).toBeInTheDocument()
  expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);
});