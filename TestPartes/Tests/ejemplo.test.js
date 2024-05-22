const ejemplo = require('../ejemplo');

test('debería retornar "El número es positivo e impar. Caso 1. Contador: 0 Contador: 1 Contador: 2" cuando el número es 1', () => {
    expect(ejemplo(1)).toBe("El número es positivo e impar. Caso 1. Contador: 0 Contador: 1 Contador: 2");
});

test('debería retornar "El número es positivo y par. Caso 2. Contador: 0 Contador: 1 Contador: 2" cuando el número es 2', () => {
    expect(ejemplo(2)).toBe("El número es positivo y par. Caso 2. Contador: 0 Contador: 1 Contador: 2");
});

test('debería retornar "El número es negativo. Caso por defecto. Contador: 0 Contador: 1 Contador: 2" cuando el número es -1', () => {
    expect(ejemplo(-1)).toBe("El número es negativo. Caso por defecto. Contador: 0 Contador: 1 Contador: 2");
});

test('debería retornar "El número es cero. Caso por defecto. Contador: 0 Contador: 1 Contador: 2" cuando el número es 0', () => {
    expect(ejemplo(0)).toBe("El número es cero. Caso por defecto. Contador: 0 Contador: 1 Contador: 2");
});

test('debería retornar "El número es positivo e impar. Caso por defecto. Contador: 0 Contador: 1 Contador: 2" cuando el número es 3', () => {
    expect(ejemplo(3)).toBe("El número es positivo e impar. Caso por defecto. Contador: 0 Contador: 1 Contador: 2");
});
