'use strict';

calculateValidationNumber(23478998);

function calculateValidationNumber(input) {
  var formatter = '';
  var sum = 0;
  var arr = [];

  if (typeof input != 'number') {
    console.log('Not a number');
    return false;
  }

  console.log(input);
  formatter = formatterfunc(input);
  console.log(formatter.formater);

  if (formatter.sum.toString().length != 1) {
    formatter = formatterfunc(formatter.sum);

    console.log(formatter.formater);
    console.log('= ' + formatter.sum);
  }

  return true;
}

function summationfunc(inputStr) {
  if (typeof Math.trunc(c) == 'number') {
    sum += Math.trunc(c);
  }

  return format;
}

function formatterfunc(inputStr) {
  var toStr = inputStr.toString();
  var format = '';
  var counter = 0;
  var sum = 0;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = toStr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _c = _step.value;

      counter++;
      if (counter != toStr.length) {
        format = format + _c + ' + ';
      } else {
        format = format + _c;
      }

      if (typeof Math.trunc(_c) == 'number') {
        sum += Math.trunc(_c);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var obj = {};
  Object.assign(obj, { formater: format });
  Object.assign(obj, { sum: sum });

  return obj;
}