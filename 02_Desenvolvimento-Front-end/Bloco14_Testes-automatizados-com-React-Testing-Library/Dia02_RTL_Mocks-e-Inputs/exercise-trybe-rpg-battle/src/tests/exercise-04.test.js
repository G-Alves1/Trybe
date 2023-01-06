import { render, screen } from '@testing-library/react';
import App from '../App';

it('testa a requisção para a API', async () => {
  const mockedCharacters = [{
    id: 1,
    name: 'Chapolin Colorado',
    source: 'Chaves',
    defensePoints: 60,
  }];

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockedCharacters),
  });

  render(<App />);

  const enemyEl = await screen.findByRole('heading', { name: 'Chapolin Colorado' });

  expect(enemyEl).toBeInTheDocument();
});
