const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Should greet properly', () => {
    const greeting = generateGreeting('Alejandro');
    expect(greeting).toBe('Hello Alejandro!');
});

test('Should greet anonymous person', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello Anonymous!');
});