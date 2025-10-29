const { from } = require('rxjs');
const { zip } = require('rxjs/operators');

console.log('--- Running zip example ---');

const strings$ = from(['a', 'b', 'c']);
const numbers$ = from([1, 2, 3, 4, 5]); // Has more items

// Combines streams in lock-step, pairing items by index
// Emits an array [valueFromStream1, valueFromStream2]
// Stops when the *shortest* stream completes
zip(strings$, numbers$)
  .subscribe({
    next: val => console.log('Output:', val),
    complete: () => console.log('--- Complete ---')
  });