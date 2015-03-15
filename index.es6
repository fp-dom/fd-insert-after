import {curry2} from 'fj-curry';

let _insertBefore = (refNode, newNode) =>
  refNode.parentNode.insertBefore(newNode, refNode.nextSibling);

export default curry2(_insertBefore);