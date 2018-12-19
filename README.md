# Asynchronous Programming Library

[![TravisCI](https://travis-ci.org/metarhia/metasync.svg?branch=master)](https://travis-ci.org/metarhia/metasync)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/60fe108b31614b4191cd557d49112169)](https://www.codacy.com/app/metarhia/metasync)
[![NPM Version](https://badge.fury.io/js/metasync.svg)](https://badge.fury.io/js/metasync)
[![NPM Downloads/Month](https://img.shields.io/npm/dm/metasync.svg)](https://www.npmjs.com/package/metasync)
[![NPM Downloads](https://img.shields.io/npm/dt/metasync.svg)](https://www.npmjs.com/package/metasync)

## Installation

```bash
$ npm install metasync
```

## API

### Interface: metasync

#### compose(flow)

  - `flow: `[`<Function[]>`][`<Function>`] callback-last / err-first

*Returns:* [`<Function>`] composed callback-last / err-first

Asynchronous functions composition

Array of functions gives sequential execution: `[f1, f2, f3]`
Double brackets array of functions gives parallel execution: `[[f1, f2, f3]]`

*Example:* 
```js

const composed = metasync(
  [f1, f2, f3, [[f4, f5, [f6, f7], f8]], f9]
);
```


![composition](https://cloud.githubusercontent.com/assets/4405297/16968374/1b81f160-4e17-11e6-96fa-9d7e2b422396.png)


### Composed methods:
- `composed([data], callback)` - async composed, callback-last and err-first contracts
- `composed.timeout(msec)` - set timeout
- `composed.cancel()` - calcel execution where possible
- `composed.clone()` - clone composed
- `composed.pause()` - pause execution
- `composed.resume()` - resume execution


#### firstOf(fns, callback)

  - `fns: `[`<Function[]>`][`<Function>`] callback-last / err-first
  - `callback: `[`<Function>`] on done, err-first

Executes all asynchronous functions and pass first result to callback


#### parallel(fns, context, callback)

  - `fns: `[`<Function[]>`][`<Function>`] callback-last / err-first
  - `context: `[`<Object>`] incoming data, optional
  - `callback: `[`<Function>`] on done, err-first

Parallel execution

*Example:* 
```js

metasync.parallel([f1, f2, f3], (err, data) => {});
```


#### sequential(fns, context, callback)

  - `fns: `[`<Function[]>`][`<Function>`] callback-last with err-first contract
  - `context: `[`<Object>`] incoming data, optional
  - `callback: `[`<Function>`] err-first on done

Sequential execution

*Example:* 
```js

metasync.sequential([f1, f2, f3], (err, data) => {});
```


#### toAsync(fn)

  - `fn: `[`<Function>`] callback-last / err-first

*Returns:* [`<Function>`]

Convert synchronous function to asynchronous

Transform function with args arguments and callback
to function with args as separate values and callback


#### asAsync(fn, args)

  - `fn: `[`<Function>`] asynchronous
  - `args: `[`<Array>`] its arguments

Wrap function adding async chain methods


#### of(args)

  - `args: `[`<Array>`]

Applicative f => a -> f a


#### concat(fn1, fn2)

  - `fn1: `[`<Function>`]
  - `fn2: `[`<Function>`]

Monoid m => a -> a -> a


#### fmap(fn1, f)

  - `fn1: `[`<Function>`]
  - `f: `[`<Function>`]

Functor f => (a -> b) -> f a -> f b


#### ap(fn, funcA)

  - `fn: `[`<Function>`]
  - `funcA: `[`<Function>`]

Applicative f => f (a -> b) -> f a -> f b


#### callbackify(fn)

  - `fn: `[`<Function>`] promise-returning function

*Returns:* [`<Function>`]

Convert Promise-returning to callback-last / error-first contract


#### asyncify(fn)

  - `fn: `[`<Function>`] regular synchronous function

*Returns:* [`<Function>`] with contract: callback-last / error-first

Convert sync function to callback-last / error-first contract


#### promiseToCallbackLast(promise, callback)

  - `promise` `<Promise>` 
  - `callback: `[`<Function>`]

Convert Promise to callback-last


#### promisify(fn)

  - `fn: `[`<Function>`] callback-last function

*Returns:* [`<Function>`] Promise-returning function

Convert async function to Promise-returning function


#### promisifySync(fn)

  - `fn: `[`<Function>`] regular synchronous function

*Returns:* [`<Function>`] Promise-returning function

Convert sync function to Promise object


#### throttle(timeout, fn, args)

  - `timeout: `[`<number>`] msec interval
  - `fn: `[`<Function>`] to be throttled
  - `args: `[`<Array>`] arguments for fn, optional

*Returns:* [`<Function>`]

Get throttling function, executed once per interval


#### debounce(timeout, fn, args)

  - `timeout: `[`<number>`] msec
  - `fn: `[`<Function>`] to be debounced
  - `args: `[`<Array>`] arguments for fn, optional

Debounce function, delayed execution


#### timeout(timeout, fn, callback)

  - `timeout: `[`<number>`] time interval
  - `fn: `[`<Function>`] to be executed
  - `callback: `[`<Function>`] callback(...args), on done
    - `args: `[`<Array>`]

Set timeout for asynchronous function execution


#### map(items, fn, done)

  - `items: `[`<Array>`] incoming
  - `fn: `[`<Function>`] to be executed for each value in the array
    - `current: <any>` current element being processed in the array
    - `callback: `[`<Function>`]
      - `err: `[`<Error>`]` | `[`<null>`]
      - `value: <any>`
  - `done: `[`<Function>`] on done, optional
    - `err: `[`<Error>`]` | `[`<null>`]
    - `result: `[`<Array>`]

Asynchronous map (iterate parallel)


#### filter(items, fn, done)

  - `items: `[`<Array>`] incoming
  - `fn: `[`<Function>`] to be executed for each value in the array
    - `value: <any>` item from items array
    - `callback: `[`<Function>`]
      - `err: `[`<Error>`]` | `[`<null>`]
      - `accepted: `[`<boolean>`]
  - `done: `[`<Function>`] on done, optional
    - `err: `[`<Error>`]` | `[`<null>`]
    - `result: `[`<Array>`]

Asynchrous filter (iterate parallel)

*Example:* 
```js

metasync.filter(
  ['data', 'to', 'filter'],
  (item, callback) => callback(item.length > 2),
  (err, result) => console.dir(result)
);
```


#### reduce(items, fn, done, initial)

  - `items: `[`<Array>`] incoming
  - `fn: `[`<Function>`] to be executed for each value in array
    - `previous: <any>` value previously returned in the last iteration
    - `current: <any>` current element being processed in the array
    - `callback: `[`<Function>`] callback for returning value back to reduce
          function
    - `counter: `[`<number>`] index of the current element being processed in
          array
    - `items: `[`<Array>`] the array reduce was called upon
  - `done: `[`<Function>`] on done, optional
    - `err: `[`<Error>`]` | `[`<null>`]
    - `result: `[`<Array>`]
  - `initial: <any>` optional value to be used as first argument in first
        iteration

Asynchronous reduce


#### each(items, fn, done)

  - `items: `[`<Array>`] incoming
  - `fn: `[`<Function>`]
    - `value: <any>` item from items array
    - `callback: `[`<Function>`]
      - `err: `[`<Error>`]` | `[`<null>`]
  - `done: `[`<Function>`] on done, optional
    - `err: `[`<Error>`]` | `[`<null>`]
    - `items: `[`<Array>`]

Asynchronous each (iterate in parallel)

*Example:* 
```js

metasync.each(
  ['a', 'b', 'c'],
  (item, callback) => {
    console.dir({ each: item });
    callback();
  },
  (err, data) => console.dir('each done')
);
```


#### series(items, fn, done)

  - `items: `[`<Array>`] incoming
  - `fn: `[`<Function>`]
    - `value: <any>` item from items array
    - `callback: `[`<Function>`]
      - `err: `[`<Error>`]` | `[`<null>`]
  - `done: `[`<Function>`] on done, optional
    - `err: `[`<Error>`]` | `[`<null>`]
    - `items: `[`<Array>`]

Asynchronous series

*Example:* 
```js

metasync.series(
  ['a', 'b', 'c'],
  (item, callback) => {
    console.dir({ series: item });
    callback();
  },
  (err, data) => {
    console.dir('series done');
  }
);
```


#### find(items, fn, done)

  - `items: `[`<Array>`] incoming
  - `fn: `[`<Function>`]
    - `value: <any>` item from items array
    - `callback: `[`<Function>`]
      - `err: `[`<Error>`]` | `[`<null>`]
      - `accepted: `[`<boolean>`]
  - `done: `[`<Function>`] on done, optional
    - `err: `[`<Error>`]` | `[`<null>`]
    - `result: <any>`

Asynchronous find (iterate in series)

*Example:* 
```js

metasync.find(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  (item, callback) => (
    callback(null, item % 3 === 0 && item % 5 === 0)
  ),
  (err, result) => {
    console.dir(result);
  }
);
```


#### every(items, fn, done)

  - `items: `[`<Array>`] incoming
  - `fn: `[`<Function>`]
    - `value: <any>` item from items array
    - `callback: `[`<Function>`]
      - `err: `[`<Error>`]` | `[`<null>`]
      - `accepted: `[`<boolean>`]
  - `done: `[`<Function>`] on done, optional
    - `err: `[`<Error>`]` | `[`<null>`]
    - `result: `[`<boolean>`]

Asynchronous every


#### some(items, fn, done)

  - `items: `[`<Array>`] incoming
  - `fn: `[`<Function>`]
    - `value: <any>` item from items array
    - `callback: `[`<Function>`]
      - `err: `[`<Error>`]` | `[`<null>`]
      - `accepted: `[`<boolean>`]
  - `done: `[`<Function>`] on done
    - `err: `[`<Error>`]` | `[`<null>`]
    - `result: `[`<boolean>`]

Asynchronous some (iterate in series)


#### asyncMap(items, fn, options, done)

  - `items: `[`<Array>`] incoming dataset
  - `fn: `[`<Function>`]
    - `item: <any>`
    - `index: `[`<number>`]
  - `options: `[`<Object>`] map params { min, percent }
    - `min: `[`<number>`] min number of items in one next call
    - `percent: `[`<number>`] ratio of map time to all time
  - `done: `[`<Function>`] call on done
    - `err: `[`<Error>`]` | `[`<null>`]
    - `result: `[`<Array>`]

Non-blocking synchronous map


#### for(array)

  - `array: `[`<Array>`] start mutations from this data

*Returns:* `<ArrayChain>`

Create an ArrayChain instance


#### collect(expected)

  - `expected: `[`<number>`]` | `[`<string[]>`][`<string>`]

*Returns:* `<Collector>`

Collector instance constructor


Collector instance constructor


### Collector methods:
- `collector.collect(key, error, value)` - pick or fail
- `collector.pick(key, value)` - pick a key
- `collector.fail(key, error)` - fail a key
- `collector.take(key, method, ...arguments)` - take method result
- `collector.timeout(msec)` - set timeout
- `collector.done(callback)` - set done listener with err-first contract
- `collector.distinct(true/false)` - deny unlisted keys

*Example:*
```js
const metasync = require('metasync');
const fs = require('fs');

// Data collector (collect keys by count)
const dc = metasync.collect(4);

dc.pick('user', { name: 'Marcus Aurelius' });
fs.readFile('HISTORY.md',
  (err, data) => dc.collect('history', err, data)
);
dc.take('readme', fs.readFile, 'README.md');
setTimeout(() => dc.pick('timer', { date: new Date() }), 1000);

// Key collector (collect certain keys by names)
const kc = metasync
  .collect(['user', 'history', 'readme', 'timer'])
  .timeout(2000)
  .distinct()
  .done((err, data) => console.log(data));

kc.pick('user', { name: 'Marcus Aurelius' });
kc.take('history', fs.readFile, 'HISTORY.md');
kc.take('readme', fs.readFile, 'README.md');
setTimeout(() => kc.pick('timer', { date: new Date() }), 1000);
```


#### queue(concurrency)

  - `concurrency: `[`<number>`] simultaneous and asynchronously executing tasks

*Returns:* `<Queue>`

Queue instantiation


#### memoize(fn)

  - `fn: `[`<Function>`] sync or async

*Returns:* [`<Function>`] memoized

Create memoized function


#### do()



#### do.prototype.constructor()



#### poolify()



## Contributors

  - Timur Shemsedinov (marcusaurelius)
  - See github for full [contributors list](https://github.com/metarhia/metasync/graphs/contributors)


[`<Object>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[`<Date>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[`<Function>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[`<RegExp>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[`<DataView>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
[`<Map>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[`<WeakMap>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
[`<Set>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[`<WeakSet>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
[`<Array>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[`<ArrayBuffer>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[`<Int8Array>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array
[`<Uint8Array>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
[`<Uint8ClampedArray>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
[`<Int16Array>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array
[`<Uint16Array>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array
[`<Int32Array>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array
[`<Uint32Array>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array
[`<Float32Array>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
[`<Float64Array>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array
[`<Error>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[`<EvalError>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError
[`<TypeError>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
[`<RangeError>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[`<SyntaxError>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
[`<ReferenceError>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[`<boolean>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[`<null>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type
[`<undefined>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type
[`<number>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[`<string>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[`<symbol>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type
[`<Primitive>`]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[`<Iterable>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[`<this>`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this