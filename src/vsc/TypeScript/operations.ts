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
 * @since Feb 13 2024 
 * @desc Arithmetic operations, calculate the sum of the elements,
 *       the maximum, and the mean. Calculates and returns the nth prime number
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-debugging-stephanBG-taniaVM/blob/master/src/vsc/JavaScript/nth-primes.js}
 */

/**
 * Calculate the maximum value in an array
 * 
 * @param numbers The array of numbers
 * @returns The maximum value in the array
 */
const calculateMaxValue = function(numbers: number[]): number {
  let maxValue: number = numbers[0];
  const SIZE_NUMBERS: number = numbers.length;
  for (let i: number = 1; i < SIZE_NUMBERS; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
  }
  return maxValue;
}

/**
 * Calculate the sum of all elements in an array
 * 
 * @param numbers The array of numbers
 * @returns The sum of all elements in the array
 */
const calculateSum = function(numbers: number[]): number {
  let sum: number = 0;
  for (const EACH_NUMBER of numbers as number[]) {
    sum += EACH_NUMBER;
  }
  return sum;
};

/**
 * Calculate the average value of an array
 * 
 * @param numbers The array of numbers
 * @returns The average value of the array
 */
const calculateAverage = function(numbers: number[]): number {
  const SUM: number = calculateSum(numbers);
  const AVERAGE: number = SUM / numbers.length;
  return AVERAGE;
};

/**
 * Principal function
 */
function main(): void {
  const VALORES: string[] = process.argv.slice(2);
  const NUMBERS: number[] = VALORES.map(elemento => Number(elemento));
  const MAX_VALUE: number = calculateMaxValue(NUMBERS);
  const AVERAGE_VALUE: number = calculateAverage(NUMBERS);
  console.log(`Max value: ${MAX_VALUE}`);
  console.log(`Average value: ${AVERAGE_VALUE}`);
}

main();