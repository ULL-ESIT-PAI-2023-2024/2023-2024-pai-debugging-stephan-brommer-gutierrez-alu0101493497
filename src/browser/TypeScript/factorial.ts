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
 * @desc Factorial
 * Program that calculates the Factorial for a given number, which is 
 * requested from the user, and then displays the result of the factorial
 * valur.
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-debugging-stephanBG-taniaVM/tree/master/src/browser/TypeScript}
 */

/**
 * Requests a value from the user through a dialog box. Then call
 * the factorial function.
 */
function startProgram(): void {
  const INPUT_VALUE: string | null = prompt('Enter a number to calculate the factorial:', '0');
  if (INPUT_VALUE === null) alert('Has been canceled');
  else {
    const INPUT_NUMBER: number = Number(INPUT_VALUE);
    const FACTORIAL: number = factorial(INPUT_NUMBER);
    alert(FACTORIAL);
  }
}

/**
 * Function that calculates the factorial of a number.
 * 
 * @param initialNumber The initial number to which we will calculate the factorial.
 * @returns The factorial of the initial number
 */
function factorial(initialNumber: number): number {
  let result: number = 1;
  for (let i: number = 2; i <= initialNumber; i++) {
    result *= i;
  }
  return result;
}