"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CheckList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("./../../../constants/colors-config"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("./../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

const List = _styledComponents.default.ul.withConfig({
  displayName: "check-list__List",
  componentId: "sc-1i76wsf-0"
})(["display:inline-flex;flex-direction:column;padding:0;margin:0;.k-CheckList__item{", ";list-style-type:none;display:flex;align-items:stretch;margin-bottom:", ";color:", ";font-size:", ";line-height:1.2;.strike{text-decoration:line-through;}&:before{content:'\u25CF';color:", ";padding-right:", ";}&:last-child{margin-bottom:0;}}.k-CheckList__item--done{&:before{color:", ";}}"], _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(10), _colorsConfig.default.font1, (0, _typography.stepToRem)(-1), _colorsConfig.default.line2, (0, _typography.pxToRem)(10), _colorsConfig.default.valid);

const a11yProps = (a11yText, done) => {
  return {
    'aria-label': done ? a11yText.done : a11yText.default
  };
};

const CheckList = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(List, props, children);
};

exports.CheckList = CheckList;

CheckList.Item = _ref2 => {
  let {
    done,
    children,
    a11yText,
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
    className: (0, _classnames.default)('k-CheckList__item', className, {
      'k-CheckList__item--done': done
    })
  }, props, a11yProps(a11yText, done)), done ? /*#__PURE__*/_react.default.createElement("span", {
    className: "strike"
  }, children) : children);
};

CheckList.Item.propTypes = {
  done: _propTypes.default.bool,
  a11yText: _propTypes.default.shape({
    default: _propTypes.default.string,
    done: _propTypes.default.string
  })
};
CheckList.Item.defaultProps = {
  done: false,
  a11yText: {
    default: 'Élément non validé',
    done: 'Élément validé'
  }
};