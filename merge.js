const { interval, merge } = require('rxjs');
const { map, take } = require('rxjs/operators');

console.log('--- Running merge example ---');

// Emits A1, A2... every 150ms
const streamA$ = interval(150).pipe(
  map(i => `A${i + 1}`),
  take(3)
);

// Emits B1, B2... every 100ms
const streamB$ = interval(100).pipe(
  map(i => `B${i + 1}`),
  take(4)
);

// Subscribes to both at the same time, emits values as they arrive
merge(streamA$, streamB$)
  .subscribe({
    next: val => console.log('Output:', val),
    complete: () => console.log('--- Complete ---')
  });
