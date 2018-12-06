"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InformationBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _title = require("kitten/components/typography/title");

var _marger = require("kitten/components/layout/marger");

var InformationBox =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(InformationBox, _Component);

  function InformationBox() {
    (0, _classCallCheck2.default)(this, InformationBox);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InformationBox).apply(this, arguments));
  }

  (0, _createClass2.default)(InformationBox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["title", "children"]);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: "k-InformationBox"
      }, other), _react.default.createElement("div", {
        className: "k-InformationBox__container"
      }, _react.default.createElement(_marger.Marger, {
        bottom: "1"
      }, _react.default.createElement(_title.Title, {
        tag: "p",
        margin: false,
        modifier: "quaternary"
      }, title)), _react.default.createElement(_marger.Marger, {
        top: "1"
      }, children)));
    }
  }]);
  return InformationBox;
}(_react.Component);

exports.InformationBox = InformationBox;
InformationBox.defaultProps = {
  title: null,
  children: null
};