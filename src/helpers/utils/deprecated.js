"use strict";

exports.__esModule = true;
exports.checkDeprecatedSizes = void 0;

var checkDeprecatedSizes = function checkDeprecatedSizes(size) {
  var deprecatedSizes = ['tiny', 'regular', 'default', 'normal', 'big'];

  if (deprecatedSizes.includes(size)) {
    console.warn("The value " + size + " for prop size is deprecated. Please use 'small', 'medium' or 'large' instead.");
  }
};

exports.checkDeprecatedSizes = checkDeprecatedSizes;