# fd-insert-after

[![Build Status](https://travis-ci.org/fp-dom/fd-insert-after.svg)](https://travis-ci.org/fp-dom/fd-insert-after) [![npm version](https://badge.fury.io/js/fd-insert-after.svg)](http://badge.fury.io/js/fd-insert-after)
> insert after a DOM element in a functional way.


## Installation

`npm install fd-insert-after --save`

## Usage

Let the DOM be like:

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>
```


```javascript
let insertAfter = require('fd-insert-after');

let sp1 = elem("span","meow")
,sp2 = document.getElementById("childElement")
,parentDiv = sp2.parentNode

insertAfter(sp1, sp2);

selectOne('#parentElement').children[0].innerText; // => 'foo bar'
```

## API

```
insert-after :: refNode -> newNode
```

A curried function that takes in:

* refNode  The node after which newChild is inserted.

* newChild The node to insert.




