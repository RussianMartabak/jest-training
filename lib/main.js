"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;

function capitalize(string) {
  //get the first letter
  var firstLetter = string.charAt(0);
  var convertedLetter = firstLetter.toUpperCase();
  string = string.slice(1, string.length);
  return convertedLetter + string;
}
//# sourceMappingURL=main.js.map