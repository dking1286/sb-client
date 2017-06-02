/**
 * Transforms the values of an object according to a mapper function
 * @param {object} obj - The object whose values are to be transformed
 * @param {function} f - The mapper function. Called with (val, key)
 * for each key-value pair in the object
 * @return {object}
 */
export const mapValues = (obj, f) => {
  if (!obj) return obj;

  return Object.keys(obj).reduce((result, key) => {
    result[key] = f(obj[key], key);
    return result;
  }, {});
};

/**
 * Takes an object, and transforms the "id" property from a string to a number.
 * If any of the object's properties have arrays as values,
 * the function is called recursively on each array. If the object is itself
 * an array, the function is called recursively on each of its elements. 
 * @param {object[]} array - The array of objects
 * @return {object[]} The transformed array
 */
export const idsToNumber = (object) => {
  if (!object) return object;

  if (Array.isArray(object)) {
    return object.map((item) => idsToNumber(item));
  }

  return mapValues(object, (val, key) => {
    if (key === 'id') return Number(val);
    if (Array.isArray(val)) return idsToNumber(val);
    return val;
  });
};

/**
 * Transforms an array of objects into an object whose keys are the "id"
 * properties of the objects in the individual array, and the values
 * are the obejcts themselves with the "id" property converted to a number.
 * @param {object[]} array
 * @return {object}
 */
export const byId = (array) => array.reduce((acc, next) => {
  acc[next.id] = { ...next, id: parseInt(next.id, 10) };
  return acc;
}, {});

/**
 * Takes an initial value, and pipes that value through a list of functions,
 * passing the return value from each as the argument to the next.
 * @param {any} initial
 * @param {...function} fns
 * @return {any}
 */
export const pipeThrough = (initial, ...fns) =>
  fns.reduce((acc, f) => f(acc), initial);

/**
 * Curried data-last map function
 * @param {function} fn
 * @param {any[]} array
 * @return {any[]}
 */
export const map = (fn) => (array) => array.map(fn);

export const filter = (fn) => (array) => array.filter(fn);

/**
 * Flattens an array by one level of nesting
 * @param {any[]} array 
 * @return {any[]}
 */
export const flatten = (array) => array.reduce((acc, next) => {
  if (Array.isArray(next)) {
    next.forEach(item => acc.push(item));
  } else {
    acc.push(next);
  }

  return acc;
}, []);

export const logThrough = (x) => {
  console.log(x);
  return x;
};