const { from, timer } = require('rxjs');
const { concatMap, map } = require('rxjs/operators');

console.log('--- Running concatMap example ---');

const items$ = from([
  { id: 1, delay: 300 },
  { id: 2, delay: 100 }, // This will wait for item 1
  { id: 3, delay: 200 }  // This will wait for item 2
]);

items$.pipe(
  // Maps each item to a new stream (a timer)
  // Runs each inner stream sequentially, one after the other
  concatMap(item => 
    timer(item.delay).pipe(
      map(() => `Item ${item.id} (from ${item.delay}ms delay)`)
    )
  )
).subscribe({
  next: val => console.log('Output:', val),
  complete: () => console.log('--- Complete ---')
});
