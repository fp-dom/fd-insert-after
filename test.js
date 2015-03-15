"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var elem = _interopRequire(require("fd-elem"));

var domify = _interopRequire(require("domify"));

var append = _interopRequire(require("fd-append"));

var insertAfter = _interopRequire(require("./"));

var selectOne = require("fd-select").selectOne;


var testDom = "<div id=\"parentElement\">\n  <span id=\"childElement\">foo bar</span>\n</div>";
append(document.body, domify(testDom));

var sp1 = elem("span", "meow"),
    sp2 = document.getElementById("childElement"),
    parentDiv = sp2.parentNode;


it("fd-insert-after", function () {
  insertAfter(parentDiv, sp1, sp2);
  assert.equal(selectOne("#parentElement").children[0].innerText, "foo bar");
});