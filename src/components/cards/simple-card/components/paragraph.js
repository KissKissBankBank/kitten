"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

var _marger = require("../../../../components/layout/marger");

var _horizontalStroke = require("../../../../components/layout/horizontal-stroke");

var _parser = require("../../../../helpers/utils/parser");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Paragraph = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Paragraph, _PureComponent);

  var _super = _createSuper(Paragraph);

  function Paragraph() {
    (0, _classCallCheck2.default)(this, Paragraph);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Paragraph, [{
    key: "render",
    value: function render() {
      var paragraph = this.props.paragraph;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: ".3",
        bottom: "1.5"
      }, /*#__PURE__*/_react.default.createElement(_text.Text, {
        lineHeight: "normal",
        size: "micro",
        weight: "light"
      }, (0, _parser.parseHtml)(paragraph))), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1.5"
      }, /*#__PURE__*/_react.default.createElement(_horizontalStroke.HorizontalStroke, {
        size: "tiny"
      })));
    }
  }]);
  return Paragraph;
}(_react.PureComponent);

exports.Paragraph = Paragraph;
Paragraph.propTypes = {
  paragraph: _propTypes.default.string
};
Paragraph.defaultProps = {
  paragraph: null
};