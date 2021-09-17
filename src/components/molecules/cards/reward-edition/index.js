"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RewardEdition = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _header = require("./components/header");

var _content = require("./components/content");

var _footer = require("./components/footer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var borderWidth = (0, _typography.pxToRem)(2);
var borderColor = _colorsConfig.default.line1;

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "reward-edition__StyledContainer",
  componentId: "sc-1qdy2br-0"
})(["width:100%;height:100%;border-width:", ";border-style:solid;border-color:", ";"], borderWidth, borderColor);

var RewardEdition = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(RewardEdition, _PureComponent);

  function RewardEdition() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = RewardEdition.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_react.default.createElement(StyledContainer, null, this.props.children);
  };

  return RewardEdition;
}(_react.PureComponent);

exports.RewardEdition = RewardEdition;
RewardEdition.Header = _header.Header;
RewardEdition.Content = _content.Content;
RewardEdition.Footer = _footer.Footer;