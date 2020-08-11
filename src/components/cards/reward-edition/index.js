"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardEdition = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _header = require("./components/header");

var _content = require("./components/content");

var _footer = require("./components/footer");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var borderWidth = (0, _typography.pxToRem)(2);
var borderColor = _colorsConfig.default.line1;

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "reward-edition__StyledContainer",
  componentId: "hyhbiq-0"
})(["width:100%;height:100%;border-width:", ";border-style:solid;border-color:", ";"], borderWidth, borderColor);

var RewardEdition = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(RewardEdition, _PureComponent);

  var _super = _createSuper(RewardEdition);

  function RewardEdition() {
    (0, _classCallCheck2.default)(this, RewardEdition);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(RewardEdition, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(StyledContainer, null, this.props.children);
    }
  }]);
  return RewardEdition;
}(_react.PureComponent);

exports.RewardEdition = RewardEdition;
RewardEdition.Header = _header.Header;
RewardEdition.Content = _content.Content;
RewardEdition.Footer = _footer.Footer;