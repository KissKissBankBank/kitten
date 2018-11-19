"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRangeFromZeroTo = void 0;

var _keys = _interopRequireDefault(require("core-js/library/fn/array/keys"));

var _from = _interopRequireDefault(require("core-js/library/fn/array/from"));

var _isInteger = _interopRequireDefault(require("core-js/library/fn/number/is-integer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createRangeFromZeroTo = function createRangeFromZeroTo(num) {
  return (0, _isInteger.default)(num) ? (0, _from.default)((0, _keys.default)(Array(num))) : [];
};

exports.createRangeFromZeroTo = createRangeFromZeroTo;