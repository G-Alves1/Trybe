const sum = require('./sum.js');

describe('sums', () => {
  it('sums two values', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });
  it('dispara um erro se receber uma string como parâmetro', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
});