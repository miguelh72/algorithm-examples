const isPrime = require('../../mathematics/isprime.js');

test('edge cases', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
});

test('known primes', () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(3187)).toBe(true);
    expect(isPrime(7717)).toBe(true);
    expect(isPrime(1993)).toBe(true);
    expect(isPrime(104743)).toBe(true);
    expect(isPrime(1299841)).toBe(true);
});

test('not primes', () => {
    expect(isPrime(2*3)).toBe(false);
    expect(isPrime(7*7)).toBe(false);
    expect(isPrime(9*13)).toBe(false);
    expect(isPrime(97*89)).toBe(false);
    expect(isPrime(2398473*39837)).toBe(false);
});
