/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-11-29
 * @fileoverview This program calculates the average of three numbers.
 */

// initialize numbers
const NUMBER1: number = 56.9;
const NUMBER2: number = 89.7;
const NUMBER3: number = 90.2;

// INPUT - none

// PROCESS
// calculate the average
let average: number = (NUMBER1 + NUMBER2 + NUMBER3) / 3;

// OUTPUT
// display the result
console.log(
  "The average of " +
  NUMBER1 +
  ", " +
  NUMBER2 +
  ", and " +
  NUMBER3 +
  " is " +
  average.toFixed(2) +
  "."
);

("\nDone.");