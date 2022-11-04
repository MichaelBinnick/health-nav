const graph = {
  a: { b: 5, c: 2 },
  b: { a: 5, c: 7, d: 8 },
  c: { a: 2, b: 7, d: 4, e: 8 },
  d: { b: 8, c: 4, e: 6, f: 4 },
  e: { c: 8, d: 6, f: 3 },
  f: { e: 3, d: 4 },
};

module.exports = { graph }