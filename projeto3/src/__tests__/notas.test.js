const { calcularMedia, verificaAprovacao, adicionarNota } = require('../components/notas');

describe('Função calcularMedia', () => {
  test('deve calcular a média das notas corretamente', () => {
    const notas = [7, 8, 9];
    const media = calcularMedia(notas);
    expect(media).toBe(8);
  });

  test('deve lançar um erro se a lista de notas estiver vazia', () => {
    expect(() => calcularMedia([])).toThrow('Lista de notas vazia');
  });
});

describe('Função verificaAprovacao', () => {
  test('deve retornar "Aprovado" se a média for maior ou igual a 6', () => {
    const media = 6;
    expect(verificaAprovacao(media)).toBe('Aprovado');
  });

  test('deve retornar "Reprovado" se a média for menor que 6', () => {
    const media = 5.9;
    expect(verificaAprovacao(media)).toBe('Reprovado');
  });
});

describe('Função adicionarNota', () => {
  test('deve adicionar uma nova nota ao array', () => {
    const notas = [7, 8, 9];
    const novaNota = 10;
    const novoArray = adicionarNota(notas, novaNota);
    expect(novoArray).toEqual([7, 8, 9, 10]);
  });

  test('deve lançar um erro se a nota for inválida (menor que 0 ou maior que 10)', () => {
    expect(() => adicionarNota([7, 8, 9], -1)).toThrow('Nota inválida');
    expect(() => adicionarNota([7, 8, 9], 11)).toThrow('Nota inválida');
  });
});