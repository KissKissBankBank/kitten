"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BulletList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var StyledBulletList = _styledComponents.default.ul.withConfig({
  displayName: "bullet-list__StyledBulletList",
  componentId: "rdyx84-0"
})(["margin:", ";padding:", ";list-style:none;text-align:left;"], (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(0));

var StyledItem = _styledComponents.default.li.withConfig({
  displayName: "bullet-list__StyledItem",
  componentId: "rdyx84-1"
})(["margin:", " ", ";display:block;", ";font-size:", ";line-height:1.5;color:", ";&:before{margin-left:-", ";margin-right:", ";box-sizing:border-box;border-radius:50%;width:", ";height:", ";display:inline-block;vertical-align:middle;background-color:", ";content:'';}", " ", " ", " ", ""], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(16), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), _colorsConfig.default.font1, function (_ref) {
  var small = _ref.small;
  return small && (0, _styledComponents.css)(["font-size:", ";&:before{width:", ";height:", ";}"], (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4));
}, function (_ref2) {
  var large = _ref2.large;
  return large && (0, _styledComponents.css)(["font-size:", ";"], (0, _typography.stepToRem)(0));
}, function (_ref3) {
  var big = _ref3.big;
  return big && (0, _styledComponents.css)(["font-size:", ";margin:", " 0;"], (0, _typography.stepToRem)(1), (0, _typography.pxToRem)(10));
}, function (_ref4) {
  var huge = _ref4.huge;
  return huge && (0, _styledComponents.css)(["font-size:", ";margin:", " 0;"], (0, _typography.stepToRem)(2), (0, _typography.pxToRem)(10));
});

var BulletList = function BulletList(_ref5) {
  var items = _ref5.items,
      small = _ref5.small,
      large = _ref5.large,
      big = _ref5.big,
      huge = _ref5.huge,
      others = (0, _objectWithoutProperties2.default)(_ref5, ["items", "small", "large", "big", "huge"]);
  return /*#__PURE__*/_react.default.createElement(StyledBulletList, others, items.map(function (_ref6) {
    var item = _ref6.item,
        key = _ref6.key,
        itemOthers = (0, _objectWithoutProperties2.default)(_ref6, ["item", "key"]);
    return /*#__PURE__*/_react.default.createElement(StyledItem, (0, _extends2.default)({
      key: key,
      small: small,
      large: large,
      big: big,
      huge: huge
    }, itemOthers), item);
  }));
};

exports.BulletList = BulletList;
BulletList.propTypes = {
  small: _propTypes.default.bool,
  large: _propTypes.default.bool,
  big: _propTypes.default.bool,
  huge: _propTypes.default.bool,
  items: _propTypes.default.array
};
BulletList.defaultProps = {
  small: false,
  large: false,
  big: false,
  huge: false,
  items: []
};