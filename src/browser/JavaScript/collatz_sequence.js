/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 * 
 * @autor Stephan Brommer Gutiérrez (alu0101493497@ull.edu.es)
 * @autor Tania Évora Vargas Martínez (alu0101219622@ull.edu.es)
 * @since Feb 11 2024
 * @desc Collatz Sequence
 *  Program that calculates the Collatz sequence for a given number, which is 
 *  requested from the user, and then displays the sequence obtained for that 
 *  value.
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-debugging-stephanBG-taniaVM/blob/master/src/browser/JavaScript/collatz_sequence.js}
 */

/**
 * @desc Requests a value from the user through a dialog box. If the value is valid, 
 *  (greater than or equal to 0), call the collatzSequence function. If the value
 *  is invalid or the entry is cancelled, displays an allert
 */
function startProgram() {
  let inputValue = prompt('Enter the value for the collatz sequence, higher than or equal to 0:', '0');
  if (inputValue && Number(inputValue) >= 0) {
    collatzSequence(Number(inputValue));
  } else {
    alert('Has been canceled or the value is wrong');
  }
}

/**
 * @desc Calculate and displays the Collatz sequence for a given number. Follow 
 *  the sequence's rules until currentValue reaches number 1. 
 * @param {Number} currentValue Number with which we are calculating
 */
function collatzSequence(currentValue) {
  // Stores each number in the sequence
  let collatzSequence = [currentValue];
  while (currentValue !== 1) {
    if (currentValue % 2 === 0) {
      currentValue = currentValue / 2;
    } else {
      currentValue = (currentValue * 3) + 1;
    }
    collatzSequence.push(currentValue);
  }
  alert(collatzSequence);
}