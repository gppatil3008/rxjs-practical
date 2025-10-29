const { from, timer } = require('rxjs');
const { mergeMap, map } = require('rxjs/operators');

console.log('--- Running flatMap (mergeMap) example ---');

const items$ = from([
  { id: 1, delay: 300 },
  { id: 2, delay: 100 },
  { id: 3, delay: 200 }
]);

items$.pipe(
  // Maps each item to a new stream (a timer)
  // Subscribes to all inner streams at once and merges their output
  mergeMap(item => 
    timer(item.delay).pipe(
      map(() => `Item ${item.id} (from ${item.delay}ms delay)`)
    )
  )
).subscribe({
  next: val => console.log('Output:', val),
  complete: () => console.log('--- Complete ---')
});
