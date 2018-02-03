'use strict';

const ASYNC_FUNCTION_METHODS = [concat, fmap, ap];

function asyncApply(
  // Transforms function with args arguments and callback
  // to function with args as separate values and callback
  fn // function, callback-last / err-first
  // Returns: function
) {
  return (...argsCb) => {
    const len = argsCb.length - 1;
    const callback = argsCb[len];
    const args = argsCb.slice(0, len);
    return fn(args, callback);
  };
}

function concat(
  // Hint: concat :: Monoid m => a -> a -> a
  fn1, // function
  fn2 // function
) {
  return asyncApply(
    (args1, callback) => fn1(...args1, (err, ...args2) => {
      if (err !== null) callback(err);
      else fn2(...args2, callback);
    })
  );
}

function fmap(
  // Hint: fmap :: Functor f => (a -> b) -> f a -> f b
  fn1, // function
  f // function
) {
  const fn2 = asyncApply((args, callback) => of(f(...args))(callback));
  return concat(fn1, fn2);
}

function ap(
  // Apply
  // Hint: <*> :: Applicative f => f (a -> b) -> f a -> f b
  fn, // function
  funcA // function
) {
  return concat(funcA, (f, callback) => fmap(fn, f)(callback));
}

function AsyncFunction() {}
for (const method of ASYNC_FUNCTION_METHODS) {
  AsyncFunction.prototype[method.name] = function(...args) {
    return asyncify(method(this, ...args));
  };
}

function asyncify(
  // AsyncFunction ads methods for chaining asynchronous functions
  fn, // function, asynchronous
  ...args // array, arguments given to fn
) {
  const wrapped = fn.bind(null, ...args);
  Object.setPrototypeOf(wrapped, AsyncFunction.prototype);
  return wrapped;
}

function of(
  // Hint: pure :: Applicative f => a -> f a
  ...args // array
) {
  return asyncify(callback => callback(null, ...args));
}

module.exports = {
  asyncApply,
  asyncify,
  of,
  concat,
  fmap,
  ap,
};
