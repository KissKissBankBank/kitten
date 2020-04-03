"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalStepper = exports.LINK_CLASSNAME = exports.STEP_CLASSNAME = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _step = require("./components/step");

var _title = require("./components/title");

var _link = require("./components/link");

var _list = require("./components/list");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var STEP_CLASSNAME = 'VerticalStepper__step';
exports.STEP_CLASSNAME = STEP_CLASSNAME;
var LINK_CLASSNAME = 'VerticalStepper__link';
exports.LINK_CLASSNAME = LINK_CLASSNAME;

var VerticalStepper = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(VerticalStepper, _Component);

  var _super = _createSuper(VerticalStepper);

  function VerticalStepper() {
    (0, _classCallCheck2.default)(this, VerticalStepper);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(VerticalStepper, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement(StyledNav, null, _react.default.createElement(StyledList, {
        role: "tablist"
      }, children));
    }
  }]);
  return VerticalStepper;
}(_react.Component);

exports.VerticalStepper = VerticalStepper;
VerticalStepper.Step = _step.Step;
VerticalStepper.Title = _title.Title;
VerticalStepper.List = _list.List;
VerticalStepper.Link = _link.Link;

var StyledNav = _styledComponents.default.nav.withConfig({
  displayName: "vertical-stepper__StyledNav",
  componentId: "sc-1uso67w-0"
})(["position:relative;padding:1px 0;"]);

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "vertical-stepper__StyledList",
  componentId: "sc-1uso67w-1"
})(["margin:0;padding:0;list-style:none;:before{position:absolute;top:0;bottom:0;left:", ";z-index:-1;content:'';border-left:2px dashed ", ";}"], (0, _typography.pxToRem)(14), _colorsConfig.default.line1);