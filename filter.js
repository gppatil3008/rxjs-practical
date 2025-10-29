const { from } = require('rxjs');
const { filter } = require('rxjs/operators');

console.log('--- Running filter example ---');

const numbers$ = from([1, 2, 3, 4, 5]);

numbers$.pipe(
  // Only allows values that pass the test (even numbers)
  filter(num => num % 2 === 0)
).subscribe({
  next: val => console.log('Output:', val),
  complete: () => console.log('--- Complete ---')
});