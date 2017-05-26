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
