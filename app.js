import { sum, difference, quotent, product } from './utils.js';

const numX = document.getElementById('num-X');
const numY = document.getElementById('num-Y');

const addButton = document.getElementById('add-btn');
const subButton = document.getElementById('sub-btn');
const multButton = document.getElementById('mult-btn');
const divideButton = document.getElementById('divide-btn');

const calcResult = document.getElementById('calc-result');

// const siteUses = document.getElementById('site-uses')

addButton.addEventListener('click', () => {
  const addResult = sum (Number(numX.value), Number(numY.value));
  calcResult.textContent = addResult;
});

// addButton.addEventListener('click', () => {
//   const potato = Number(numX.value);
//   const cabbage = Number(numY.value);

//   const addResult = sum(potato, cabbage);

//   calcResult.textContent = addResult;
// });

subButton.addEventListener('click', () => {
  const tuna = Number(numX.value);
  const carrots = Number(numY.value);

  const subtractResult = difference(tuna, carrots);

  calcResult.textContent = subtractResult;
});

divideButton.addEventListener('click', () => {
  const trees = Number(numX.value);
  const weeds = Number(numY.value);

  const divideResult = quotent(trees, weeds);

  calcResult.textContent = divideResult;
});

multButton.addEventListener('click', () => {
  const ducks = Number(numX.value);
  const chipmunks = Number(numY.value);

  const multResult = product(ducks, chipmunks);

  calcResult.textContent = multResult;
});

// function incrementValue() {
//   return (siteUses.value + 1)

//   siteUses.value = incrementValue
// }