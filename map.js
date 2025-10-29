const { from } = require('rxjs');
const { map } = require('rxjs/operators');

console.log('--- Running map example ---');

const numbers$ = from([1, 2, 3, 4, 5]);

numbers$.pipe(
  // Transforms each number by multiplying it by 10
  map(num => num * 10)
).subscribe({
  next: val => console.log('Output:', val),
  complete: () => console.log('--- Complete ---')
});