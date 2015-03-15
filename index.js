"use strict";

var curry2 = require("fj-curry").curry2;


var _insertBefore = function (refNode, newNode) {
  return refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
};

module.exports = curry2(_insertBefore);