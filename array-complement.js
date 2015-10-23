(function(root) {
  'use strict';

  function arrayComplement(/* arrays */) {
    var arrays = [].slice.call(arguments);
    var complement = [];

    for (var i = 0; i < arrays.length; i++) {
      var array = arrays[i];

      if (Array.isArray(array)) {
        for (var j = 0; j < array.length; j++) {
          var value = array[j];
          var atIndex = complement.indexOf(value);

          if (atIndex === -1) {
            complement.push(value);
          } else {
            complement.splice(atIndex, 1);
          }
        }
      }
    }

    return complement;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = arrayComplement;
    }
    exports.arrayComplement = arrayComplement;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return arrayComplement;
    });
  } else {
    root.arrayComplement = arrayComplement;
  }

})(this);
