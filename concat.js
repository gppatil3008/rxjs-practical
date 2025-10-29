const { interval, concat } = require('rxjs');
const { map, take } = require('rxjs/operators');

console.log('--- Running concat example ---');

// Emits A1, A2, A3
const streamA$ = interval(100).pipe(
  map(i => `A${i + 1}`),
  take(3)
);

// Emits B1, B2
const streamB$ = interval(100).pipe(
  map(i => `B${i + 1}`),
  take(2)
);

// Subscribes to streamA$. AFTER it completes, subscribes to streamB$.
concat(streamA$, streamB$)
  .subscribe({
    next: val => console.log('Output:', val),
    complete: () => console.log('--- Complete ---')
  });
