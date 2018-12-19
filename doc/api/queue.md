## API

### Interface: queue

#### queue(concurrency)

  - `concurrency: `[`<number>`] simultaneous and asynchronously executing tasks

*Returns:* `<Queue>`

Queue instantiation


#### Queue(concurrency)

  - `concurrency: `[`<number>`] asynchronous concurrency

Queue constructor


#### Queue.prototype.constructor()



#### Queue.prototype.wait(msec)

  - `msec: `[`<number>`] wait timeout for single item

*Returns:* [`<this>`]

Set wait before processing timeout


#### Queue.prototype.throttle(count, interval)

  - `count: `[`<number>`] item count
  - `interval: `[`<number>`] per interval, optional default: 1000 msec

*Returns:* [`<this>`]

Throttle to limit throughput


#### Queue.prototype.add(item, factor, priority)

  - `item: `[`<Object>`] to be added
  - `factor: `[`<number>`]` | `[`<string>`] type, source, destination or path,
        optional
  - `priority: `[`<number>`] optional

*Returns:* [`<this>`]

Add item to queue


#### Queue.prototype.next(task)

  - `task: `[`<Array>`] next task [item, factor, priority]

*Returns:* [`<this>`]

Process next item


#### Queue.prototype.takeNext()


*Returns:* [`<this>`]

Prepare next item for processing


#### Queue.prototype.pause()


*Returns:* [`<this>`]

Pause queue

This function is not completely implemented yet


#### Queue.prototype.resume()


*Returns:* [`<this>`]

Resume queue

This function is not completely implemented yet


#### Queue.prototype.clear()


*Returns:* [`<this>`]

Clear queue


#### Queue.prototype.timeout(msec, onTimeout)

  - `msec: `[`<number>`] process timeout for single item
  - `onTimeout: `[`<Function>`]

*Returns:* [`<this>`]

Set timeout interval and listener


#### Queue.prototype.process(fn)

  - `fn: `[`<Function>`]
    - `item: `[`<Object>`]
    - `callback: `[`<Function>`]
      - `err: `[`<Error>`]` | `[`<null>`]
      - `result: <any>`

*Returns:* [`<this>`]

Set processing function


#### Queue.prototype.done(fn)

  - `fn: `[`<Function>`] done listener
    - `err: `[`<Error>`]` | `[`<null>`]
    - `result: <any>`

*Returns:* [`<this>`]

Set listener on processing done


#### Queue.prototype.success(listener)

  - `listener: `[`<Function>`] on success
    - `item: <any>`

*Returns:* [`<this>`]

Set listener on processing success


#### Queue.prototype.failure(listener)

  - `listener: `[`<Function>`] on failure
    - `err: `[`<Error>`]` | `[`<null>`]

*Returns:* [`<this>`]

Set listener on processing error


#### Queue.prototype.drain(listener)

  - `listener: `[`<Function>`] on drain

*Returns:* [`<this>`]

Set listener on drain Queue


#### Queue.prototype.fifo()


*Returns:* [`<this>`]

Switch to FIFO mode (default for Queue)


#### Queue.prototype.lifo()


*Returns:* [`<this>`]

Switch to LIFO mode


#### Queue.prototype.priority(flag)

  - `flag: `[`<boolean>`] default: true, false will disable priority mode

*Returns:* [`<this>`]

Activate or deactivate priority mode


#### Queue.prototype.roundRobin(flag)

  - `flag: `[`<boolean>`] default: true, false will disable roundRobin mode

*Returns:* [`<this>`]

Activate or deactivate round robin mode


#### Queue.prototype.pipe(dest)

  - `dest` `<Queue>` destination queue

*Returns:* [`<this>`]

Pipe processed items to different queue


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