"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCardTitle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../typography/text");

var _marger = require("../../layout/marger");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TeamCardTitle = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(TeamCardTitle, _Component);

  var _super = _createSuper(TeamCardTitle);

  function TeamCardTitle() {
    (0, _classCallCheck2.default)(this, TeamCardTitle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TeamCardTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          subTitle = _this$props.subTitle;
      return _react.default.createElement(_marger.Marger, {
        top: "2"
      }, _react.default.createElement(_text.Text, {
        size: "default",
        weight: "bold",
        color: "font1"
      }, children), _react.default.createElement("br", null), _react.default.createElement(_text.Text, {
        size: "micro",
        color: "font1",
        weight: "light"
      }, subTitle));
    }
  }]);
  return TeamCardTitle;
}(_react.Component);

exports.TeamCardTitle = TeamCardTitle;
TeamCardTitle.propTypes = {
  children: _propTypes.default.string.isRequired,
  subTitle: _propTypes.default.string.isRequired
};