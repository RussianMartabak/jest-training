import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./main";

//capitalize tests

test('Correctly capitalize a string', () => {
    expect(capitalize('ganyuu')).toBe('Ganyuu');
});

test('Capitalize one letter string', () => {
    expect(capitalize('a')).toBe('A');
});

test('Not capitalize non-string', () => {
    expect(capitalize('908')).toBe('908');
});

//reverse test
test('Correctly reverse an even length string', () => {
    expect(reverseString('tank')).toBe('knat');
});

test('Correctly process one letter string', () => {
    expect(reverseString('c')).toBe('c');
});

test('Correctly reverse a string with spaces', () => {
    expect(reverseString('john cena')).toBe('anec nhoj');
});

//calculator test
test('Correctly add numbers', () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test('Correctly substract numbers', () => {
    expect(calculator.substract(1, 5)).toBe(-4);
});

test('Correctly divide numbers', () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
});

test('Correctly multiply numbers', () => {
    expect(calculator.multiply(3, 5)).toBe(15);
});

//caesar tests
test('Correcty shift a string by 2', () => {
    expect(caesarCipher('beethoven', 2)).toBe('dggvjqxgp');
});

test('Correctly cipher a string with spaces and cases', () => {
    expect(caesarCipher('I hate covid', 1)).toBe('J ibuf dpwje');
});

test('Correctly cipher a string with Z', () => {
    expect(caesarCipher('I\'m zaky', 2)).toBe('K\'o bcma');
});

//analyze array
test('Analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})