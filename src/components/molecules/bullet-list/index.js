"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BulletList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _excluded = ["items", "size", "className"],
    _excluded2 = ["item", "key"];

var StyledBulletList = _styledComponents.default.ul.withConfig({
  displayName: "bullet-list__StyledBulletList",
  componentId: "sc-1odqo0m-0"
})(["margin:", ";padding:", ";list-style:none;text-align:left;.k-BulletList__item{margin:", " ", ";display:block;", ";line-height:1.5;color:", ";&:before{margin-left:-", ";margin-right:", ";box-sizing:border-box;border-radius:50%;width:", ";height:", ";display:inline-block;vertical-align:middle;background-color:", ";content:'';}}&.k-BulletList--tiny .k-BulletList__item{font-size:", ";&:before{width:", ";height:", ";}}&.k-BulletList--regular .k-BulletList__item{font-size:", ";}&.k-BulletList--large .k-BulletList__item{font-size:", ";}&.k-BulletList--big .k-BulletList__item{font-size:", ";margin:", " 0;}&.k-BulletList--huge .k-BulletList__item{font-size:", ";margin:", " 0;}"], (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(16), _typographyConfig.default.fontStyles.light, _colorsConfig.default.font1, (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), _colorsConfig.default.font1, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.stepToRem)(-1), (0, _typography.stepToRem)(0), (0, _typography.stepToRem)(1), (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(2), (0, _typography.pxToRem)(10));

var BulletList = function BulletList(_ref) {
  var items = _ref.items,
      size = _ref.size,
      className = _ref.className,
      others = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledBulletList, (0, _extends2.default)({
    className: (0, _classnames.default)('k-BulletList', "k-BulletList--".concat(size), className)
  }, others), items.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        itemOthers = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
    return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
      key: key
    }, itemOthers, {
      className: (0, _classnames.default)('k-BulletList__item', itemOthers.className)
    }), item);
  }));
};

exports.BulletList = BulletList;
BulletList.propTypes = {
  size: _propTypes.default.oneOf(['tiny', 'regular', 'large', 'big', 'huge']),
  items: _propTypes.default.array
};
BulletList.defaultProps = {
  size: 'regular',
  items: []
};