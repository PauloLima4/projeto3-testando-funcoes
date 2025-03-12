const usuario = require('../components/usuario');

test('usuario deve ter nome, idade e email', () => {
    const user = {
        nome: 'João',
        idade: 30,
        email: 'joao@example.com'
    };
    expect(usuario()).toEqual(user);
});

test('usuario deve ter nome, idade e email', () => {
    const user = {
        nome: 'João',
        idade: 30,
        email: 'joao@example.com'
    };
    expect(usuario()).toEqual(user);
});