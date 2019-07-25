"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardEdition = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _header = require("./components/header");

var _content = require("./components/content");

var _footer = require("./components/footer");

var borderWidth = (0, _typography.pxToRem)(2);
var borderColor = _colorsConfig.default.line1;

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "reward-edition__StyledContainer",
  componentId: "hyhbiq-0"
})(["width:100%;height:100%;border-width:", ";border-style:solid;border-color:", ";"], borderWidth, borderColor);

var RewardEdition =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(RewardEdition, _PureComponent);

  function RewardEdition() {
    (0, _classCallCheck2.default)(this, RewardEdition);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RewardEdition).apply(this, arguments));
  }

  (0, _createClass2.default)(RewardEdition, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(StyledContainer, null, this.props.children);
    }
  }]);
  return RewardEdition;
}(_react.PureComponent);

exports.RewardEdition = RewardEdition;
RewardEdition.Header = _header.Header;
RewardEdition.Content = _content.Content;
RewardEdition.Footer = _footer.Footer;