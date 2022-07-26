"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BulletList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

const StyledBulletList = _styledComponents.default.ul.withConfig({
  displayName: "bullet-list__StyledBulletList",
  componentId: "sc-t43o49-0"
})(["margin:", ";padding:", ";list-style:none;text-align:left;.k-BulletList__item{margin:", " ", ";display:block;", ";line-height:1.5;color:", ";&:before{margin-left:-", ";margin-right:", ";box-sizing:border-box;border-radius:var(--border-radius-rounded);width:", ";height:", ";display:inline-block;vertical-align:middle;background-color:", ";content:'';}}&.k-BulletList--micro .k-BulletList__item{font-size:", ";&:before{width:", ";height:", ";}}&.k-BulletList--small .k-BulletList__item{font-size:", ";}&.k-BulletList--medium .k-BulletList__item{font-size:", ";}&.k-BulletList--large .k-BulletList__item{font-size:", ";margin:", " 0;}&.k-BulletList--huge .k-BulletList__item{font-size:", ";margin:", " 0;}"], (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(16), _typographyConfig.default.fontStyles['400'], _colorsConfig.default.font1, (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), _colorsConfig.default.font1, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.stepToRem)(-1), (0, _typography.stepToRem)(0), (0, _typography.stepToRem)(1), (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(2), (0, _typography.pxToRem)(10));

const BulletList = _ref => {
  let {
    items,
    size,
    className,
    ...others
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledBulletList, (0, _extends2.default)({
    className: (0, _classnames.default)('k-BulletList', "k-BulletList--" + size, className)
  }, others), items.map(_ref2 => {
    let {
      item,
      key,
      ...itemOthers
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
      key: key
    }, itemOthers, {
      className: (0, _classnames.default)('k-BulletList__item', itemOthers.className)
    }), item);
  }));
};

exports.BulletList = BulletList;
BulletList.propTypes = {
  size: _propTypes.default.oneOf(['micro', 'small', 'medium', 'large', 'huge']),
  items: _propTypes.default.array
};
BulletList.defaultProps = {
  size: 'small',
  items: []
};