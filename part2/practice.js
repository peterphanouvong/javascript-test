function dummy() {
  return 1;
}
/**
 * Reverse an array
 *
 * @example
 *
 * reverse([1,2,3]) returns [3,2,1]
 *
 * @param {array} array
 * @returns {array}
 */
function reverse(array) {
  return array.reverse();
}

/**
 * Reverse a string
 *
 * @example
 *
 * stringReverse('hello') returns 'olleh'
 *
 * @param {string} text
 * @returns {string}
 *
 */
function stringReverse(text) {
  return text.split("").reverse().join("");
}

/**
 * return a fixed length fibonacci list
 *
 * @example
 *
 * fibonacci(5) returns [1,1,2,3,5]
 *
 * @param {number} length
 * @returns {array}
 */
function fibonacci(length) {
  if (length <= 0) {
    return [];
  }
  if (length === 1) {
    return [1];
  }
  if (length === 2) {
    return [1, 1];
  }
  let res = [1, 1];
  for (let i = 0; i < length - 2; i++) {
    res[i + 2] = res[i] + res[i + 1];
  }

  return res;
}

/**
 * return the biggest number in the array
 *
 * @example
 *
 * biggest([1,3,5,7,9]) returns 9
 *
 * @param {array} array
 * @returns {number}
 */
function biggest(array) {
  return Math.max(...array);
}

/**
 * Creates an array of numbers progressing from
 * start up to, but not including, end
 *
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 *
 * @example
 *
 * range(0,4) returns [0,1,2,3]
 *
 * @param {number} start
 * @param {number} end
 * @returns {array}
 */
function range(start, end) {
  let res = [];
  for (let i = start; i < end; i++) {
    res.push(i);
  }
  return res;
}

/**
 * Recursively flattens array.
 *
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 *
 * @example
 *
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 *
 * @param {array} array
 * @returns {array}
 */
function flatten(array) {
  return array.flat(Infinity);
}

module.exports = {
  dummy,
  fibonacci,
  reverse,
  flatten,
  biggest,
  flatten,
  stringReverse,
  range,
};
