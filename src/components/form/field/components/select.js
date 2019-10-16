"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldSelect = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _marger = require("../../../layout/marger");

var _selectWithState = require("../../../form/select-with-state");

var FieldSelect =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FieldSelect, _Component);

  function FieldSelect() {
    (0, _classCallCheck2.default)(this, FieldSelect);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FieldSelect).apply(this, arguments));
  }

  (0, _createClass2.default)(FieldSelect, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_marger.Marger, {
        top: "1"
      }, _react.default.createElement(_selectWithState.SelectWithState, this.props));
    }
  }]);
  return FieldSelect;
}(_react.Component);

exports.FieldSelect = FieldSelect;