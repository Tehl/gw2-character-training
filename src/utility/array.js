function distinct(arr) {
  return arr.filter((item, idx) => arr.indexOf(item) === idx);
}

function except(arr, exclude) {
  return arr.filter(item => exclude.indexOf(item) === -1);
}

function flatten(arr) {
  return arr.reduce(
    (sum, local) =>
      local instanceof Array ? [...sum, ...local] : [...sum, local],
    []
  );
}

/* intersperse: Return an array with the separator interspersed between
 * each element of the input array.
 *
 * > _([1,2,3]).intersperse(0)
 * [1,0,2,0,3]
 */
function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(
    function(xs, x, i) {
      return xs.concat([sep, x]);
    },
    [arr[0]]
  );
}

export { distinct, except, flatten, intersperse };
