"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areImageDimensionsValid = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

// https://stackoverflow.com/a/47786555
var getImageSize = function getImageSize(url) {
  var image = new Image();
  var promise = new Promise(function (resolve) {
    image.onload = function () {
      var naturalWidth = image.naturalWidth,
          naturalHeight = image.naturalHeight;
      resolve({
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight
      });
    };
  });
  image.src = url;
  return promise;
};

var getImageDataURL = function getImageDataURL(file) {
  var reader = new FileReader();
  var promise = new Promise(function (resolve) {
    reader.onload = function (readerLoadEvent) {
      resolve(readerLoadEvent.target.result);
    };
  });
  reader.readAsDataURL(file);
  return promise;
};

var areImageDimensionsValid = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(file, acceptedDimensions) {
    var imageDataUrl, imageSize;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getImageDataURL(file);

          case 2:
            imageDataUrl = _context.sent;
            _context.next = 5;
            return getImageSize(imageDataUrl);

          case 5:
            imageSize = _context.sent;

            if (!(imageSize.naturalHeight > acceptedDimensions.height)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", false);

          case 8:
            if (!(imageSize.naturalWidth > acceptedDimensions.width)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", false);

          case 10:
            return _context.abrupt("return", true);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function areImageDimensionsValid(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.areImageDimensionsValid = areImageDimensionsValid;