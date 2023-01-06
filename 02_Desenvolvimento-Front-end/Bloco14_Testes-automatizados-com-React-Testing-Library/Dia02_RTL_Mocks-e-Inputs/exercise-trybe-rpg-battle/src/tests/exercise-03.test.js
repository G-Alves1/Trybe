import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

jest.mock('../service/rollMultipleDice');

const enemy = {
  name: 'Chapolin Colorado',
  defensePoints: 30,
};

it('testa uma vitória na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValueOnce(40);

  const resultObject = attackEnemy(2, 20, enemy);

  expect(resultObject.success).toBe(true);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});

it('testa uma derrota na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValueOnce(20);

  const resultObject = attackEnemy(2, 20, enemy);

  expect(resultObject.success).toBe(false);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});

it('testa um empate nos dados', () => {
  rollMultipleDice.mockReturnValueOnce(30);

  const resultObject = attackEnemy(2, 20, enemy);

  expect(resultObject.success).toBe(false);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});
