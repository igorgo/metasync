## API

### Interface: collector

#### collect(expected)

  - `expected: `[`<number>`]` | `[`<string[]>`][`<string>`]

*Returns:* `<Collector>`

Collector instance constructor


#### Collector(expected)

  - `expected: `[`<number>`]` | `[`<string[]>`][`<string>`] count or keys

Data collector


#### Collector.prototype.constructor()



#### Collector.prototype.collect(key, err, value)

  - `key: `[`<string>`]
  - `err: `[`<Error>`]
  - `value: <any>`

*Returns:* [`<this>`]

Pick or fail key


#### Collector.prototype.pick(key, value)

  - `key: `[`<string>`]
  - `value: <any>`

*Returns:* [`<this>`]

Pick key


#### Collector.prototype.fail(key, err)

  - `key: `[`<string>`]
  - `err: `[`<Error>`]

*Returns:* [`<this>`]

Fail key


#### Collector.prototype.take(key, fn, args)

  - `key: `[`<string>`]
  - `fn: `[`<Function>`]
  - `args: `[`<Array>`] rest arguments, to be passed in fn

*Returns:* [`<this>`]

Take method result


#### Collector.prototype.timeout()

  - `msec: `[`<number>`]

*Returns:* [`<this>`]

Set timeout


#### Collector.prototype.done(callback)

  - `callback: `[`<Function>`]
    - `err: `[`<Error>`]
    - `data: <any>`

*Returns:* [`<this>`]

Set on done listener


#### Collector.prototype.finalize()



#### Collector.prototype.distinct(value)

  - `value: `[`<boolean>`]

*Returns:* [`<this>`]

Deny or allow unlisted keys


#### Collector.prototype.cancel()



#### Collector.prototype.then()



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