const { from } = require('rxjs');
const { reduce } = require('rxjs/operators');

console.log('--- Running reduce example ---');

const numbers$ = from([1, 2, 3, 4, 5]);

numbers$.pipe(
  // Accumulates all values into one, emits only on completion
  // (accumulator, current_value) => new_accumulator, initial_value
  reduce((acc, current) => acc + current, 0)
).subscribe({
  next: val => console.log('Final Sum:', val),
  complete: () => console.log('--- Complete ---')
});