import rollDice from '../service/rollDice';
import rollMultipleDice from '../service/rollMultipleDice';

jest.mock('../service/rollDice');

it('testa a função `rollMultipleDice`', () => {
  rollDice.mockReturnValueOnce(6).mockReturnValueOnce(4);

  expect(rollMultipleDice(2, 20)).toBe(10);
  expect(rollDice).toHaveBeenCalledTimes(2);
});
