"use strict";

var _main = require("./main");

//capitalize tests
test('Correctly capitalize a string', function () {
  expect((0, _main.capitalize)('ganyuu')).toBe('Ganyuu');
});
test('Capitalize one letter string', function () {
  expect((0, _main.capitalize)('a')).toBe('A');
});
test('Not capitalize non-string', function () {
  expect((0, _main.capitalize)('908')).toBe('908');
});
//# sourceMappingURL=main.test.js.map