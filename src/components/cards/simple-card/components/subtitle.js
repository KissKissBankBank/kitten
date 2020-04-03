"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subtitle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

var _marger = require("../../../../components/layout/marger");

var _parser = require("../../../../helpers/utils/parser");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Subtitle = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Subtitle, _PureComponent);

  var _super = _createSuper(Subtitle);

  function Subtitle() {
    (0, _classCallCheck2.default)(this, Subtitle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Subtitle, [{
    key: "render",
    value: function render() {
      var subtitle = this.props.subtitle;
      return _react.default.createElement(_marger.Marger, {
        top: ".3",
        bottom: "1.5"
      }, _react.default.createElement(_text.Text, {
        size: "micro",
        weight: "regular"
      }, (0, _parser.parseHtml)(subtitle)));
    }
  }]);
  return Subtitle;
}(_react.PureComponent);

exports.Subtitle = Subtitle;
Subtitle.propTypes = {
  subtitle: _propTypes.default.string
};
Subtitle.defaultProps = {
  subtitle: null
};