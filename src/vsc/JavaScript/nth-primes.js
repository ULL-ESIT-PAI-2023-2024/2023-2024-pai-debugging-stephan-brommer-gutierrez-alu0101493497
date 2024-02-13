/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Stephan Brommer Gutiérrez 
 * @author alu0101493497
 * @author Tania Évora Vargas Martínez 
 * @author alu0101219622
 * @since Feb 8 2024 
 * @desc Nth Prime
 *  Calculates and returns the nth prime number
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-debugging-stephanBG-taniaVM/blob/master/src/vsc/JavaScript/nth-primes.js}
 */


/**
 * @desc Checks if a number is prime
 * @param {number} possiblePrime Number to check if it is prime
 * @returns True if prime, false if not prime
 */
function isPrime(possiblePrime) {
  const SQUARE_ROOT = Math.sqrt(possiblePrime);
  for (let divisor = 2; divisor <= SQUARE_ROOT; divisor++) {
    if (possiblePrime % divisor === 0) {
      return false;
    }
  }
  return true;
}

/**
 * @desc Calculate the prime number at the given position 
 * @param {number} primeNumberPosicion The position of the prime we are interested in
 * @returns {number} Prime number at the requested position
 */
function calculatePrimeNumber(primeNumberPosicion) {
  let currentPrime = 2; 
  let currentPrimePosition = 1;
  let possiblePrimeNumber = currentPrime;
  while (currentPrimePosition != primeNumberPosicion) {
    possiblePrimeNumber = currentPrime + 1; 
    if (isPrime(possiblePrimeNumber)) {
      currentPrime = possiblePrimeNumber;
      currentPrimePosition++;
    }
  }
  return currentPrime;
}

/**
 * @desc Returns the prime number corresponding to the requested position
 * @param {number} primeNumberPosicion Position of the nth wanted prime
 * @returns {number} Prime corresponding to the requested position
 * error: Parameter is not valid or if the "zero" prime number is requested.
 */
function nthPrime(primeNumberPosicion) {
  if (primeNumberPosicion > 0) {
    const PRIME_NUMBER = calculatePrimeNumber(primeNumberPosicion);
    return PRIME_NUMBER;
  } else {
    console.error('the paramenter is not valid');
  } 
};

/**
 * Principal function
 */
function main() {
  const VALUE = process.argv.slice(2);
  const PRIME_NUMBER = nthPrime(Number(VALUE));
  console.log(`The ${VALUE} prime is: ${PRIME_NUMBER}`);
}

// Check if main is executed directly or in browser
if (require.main === module) {
  main();
}