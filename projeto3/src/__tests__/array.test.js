const { filtrarPares } = require('../components/array');

test('filtrarPares deve retornar apenas os números pares de um array', () => {
  expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  expect(filtrarPares([7, 11, 13])).toEqual([]);
  expect(filtrarPares([2, 4, 6])).toEqual([2, 4, 6]);
});
