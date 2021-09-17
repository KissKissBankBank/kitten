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
exports.Paragraph = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.string.italics.js");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _modifierStyles = require("./helpers/modifier-styles");

var _excluded = ["tag", "modifier", "noMargin", "normalLineHeight", "italic", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var modifierList = ['primary', 'secondary', 'tertiary', 'quaternary'];

var StyledParagraph = _styledComponents.default.p.withConfig({
  displayName: "paragraph__StyledParagraph",
  componentId: "sc-iosi48-0"
})(["", ";&.k-Paragraph--noMargin{margin-top:0;margin-bottom:0;}&.k-Paragraph--normalLineHeight{line-height:normal;}&.k-Paragraph--italic{font-style:italic;}", ""], _typographyConfig.default.fontStyles.light, function () {
  return modifierList.map(function (modifier) {
    return (0, _styledComponents.css)(["&.k-Paragraph--", "{", "}"], modifier, function () {
      return (0, _modifierStyles.modifierStyles)(modifier);
    });
  });
});

var Paragraph = function Paragraph(_ref) {
  var tag = _ref.tag,
      modifier = _ref.modifier,
      noMargin = _ref.noMargin,
      normalLineHeight = _ref.normalLineHeight,
      italic = _ref.italic,
      className = _ref.className,
      other = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledParagraph, (0, _extends2.default)({
    as: tag,
    modifier: modifier,
    className: (0, _classnames.default)('k-Paragraph', className, "k-Paragraph--" + modifier, {
      'k-Paragraph--noMargin': noMargin,
      'k-Paragraph--normalLineHeight': normalLineHeight,
      'k-Paragraph--italic': italic
    })
  }, other));
};

exports.Paragraph = Paragraph;
Paragraph.defaultProps = {
  tag: 'p',
  modifier: 'primary',
  noMargin: false,
  normalLineHeight: false,
  italic: false
};
Paragraph.propTypes = {
  tag: _propTypes.default.string,
  modifier: _propTypes.default.oneOf(modifierList),
  noMargin: _propTypes.default.bool,
  normalLineHeight: _propTypes.default.bool,
  italic: _propTypes.default.bool
};