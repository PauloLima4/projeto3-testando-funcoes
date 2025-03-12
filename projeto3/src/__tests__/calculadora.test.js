const { subtrai, ehPar, contarCaracteres } = require('../components/calculadora');

test('subtrai deve retornar a subtração correta de dois números', () => {
  expect(subtrai(10, 4)).toBe(6);
});

test('ehPar deve retornar true para números pares', () => {
  expect(ehPar(4)).toBe(true);
  expect(ehPar(7)).toBe(false);
});

test('contarCaracteres deve retornar o número correto de caracteres em uma string', () => {
  expect(contarCaracteres('Olá')).toBe(3);
  expect(contarCaracteres('')).toBe(0);
});
