"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LinkList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _deprecated = require("../../../helpers/utils/deprecated");

const StyledLinkList = _styledComponents.default.ul.withConfig({
  displayName: "link-list__StyledLinkList",
  componentId: "sc-yasa1m-0"
})(["text-align:center;list-style-type:none;padding:0;@media (min-width:", "px){text-align:left;}&.k-LinkList--withoutMargin{margin-top:0;margin-bottom:0;.k-LinkList__item:last-child{margin-bottom:0;}}.k-LinkList__item{margin-bottom:", ";}.k-LinkList__item--double{margin-bottom:", ";}.k-LinkList__item--triple{margin-bottom:", ";}.k-LinkList__link{", ";font-size:", ";text-decoration:none;&:active,&.k-LinkList__link--isActive{color:", ";}&:hover{color:", ";}transition:color 0.2s;}.k-LinkList__item--regular,.k-LinkList__link--regular{", ";}.k-LinkList__item--light,.k-LinkList__link--light{", ";}.k-LinkList__link--normalLineHeight{line-height:normal;}.k-LinkList__link--light{color:", ";}.k-LinkList__link--dark{color:", ";}"], _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), _typographyConfig.default.fontStyles['500'], (0, _typography.stepToRem)(-1), _colorsConfig.default.primary3, _colorsConfig.default.primary1, _typographyConfig.default.fontStyles['500'], _typographyConfig.default.fontStyles['400'], _colorsConfig.default.background1, _colorsConfig.default.font1);

const LinkList = _ref => {
  let {
    className,
    margin,
    items,
    lineHeight,
    itemMargin,
    color,
    weight,
    href,
    ...others
  } = _ref;
  (0, _deprecated.checkDeprecatedWeights)(weight);
  return /*#__PURE__*/_react.default.createElement(StyledLinkList, (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-LinkList', others.className, {
      'k-LinkList--withoutMargin': !margin
    })
  }), items.map(_ref2 => {
    let {
      item,
      key,
      href,
      active
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("li", {
      className: (0, _classnames.default)('k-LinkList__item', "k-LinkList__item--" + itemMargin),
      key: key
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: href,
      className: (0, _classnames.default)('k-LinkList__link', item.className, "k-LinkList__link--" + color, "k-LinkList__link--" + weight, "k-LinkList__item--" + weight, {
        'k-LinkList__link--isActive': active
      })
    }, item));
  }));
};

exports.LinkList = LinkList;
LinkList.propTypes = {
  color: _propTypes.default.oneOf(['light', 'dark']),
  lineHeight: _propTypes.default.oneOf(['normal']),
  itemMargin: _propTypes.default.oneOf(['double', 'triple']),
  weight: _propTypes.default.oneOf(['400', '500']),
  margin: _propTypes.default.bool,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    item: _propTypes.default.string.isRequired,
    key: _propTypes.default.string,
    href: _propTypes.default.string,
    weight: _propTypes.default.string,
    active: _propTypes.default.bool
  }))
};
LinkList.defaultProps = {
  className: null,
  margin: true,
  items: [],
  // Eg: [{ key: …, item: …, href: …, weight: …, }]
  color: 'dark',
  lineHeight: null,
  itemMargin: null,
  weight: '500'
};