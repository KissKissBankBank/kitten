"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("./../../../constants/colors-config"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("./../../../helpers/utils/typography");

var List = _styledComponents.default.ul.withConfig({
  displayName: "check-list__List",
  componentId: "sc-1berzg4-0"
})(["display:inline-flex;flex-direction:column;padding:0;margin:0;.k-CheckList__item{list-style-type:none;display:flex;align-items:stretch;margin-bottom:", ";color:", ";font-size:", ";line-height:1.2;.strike{text-decoration:line-through;}&:before{content:'\u25CF';color:", ";padding-right:", ";}&:last-child{margin-bottom:0;}}.k-CheckList__item--done{&:before{color:", ";}}"], (0, _typography.pxToRem)(10), _colorsConfig.default.font1, (0, _typography.stepToRem)(-1), _colorsConfig.default.line2, (0, _typography.pxToRem)(10), _colorsConfig.default.valid);

var a11yProps = function a11yProps(a11yText, done) {
  return {
    'aria-label': done ? a11yText.done : a11yText.default
  };
};

var CheckList = function CheckList(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  return /*#__PURE__*/_react.default.createElement(List, props, children);
};

exports.CheckList = CheckList;

CheckList.Item = function (_ref2) {
  var done = _ref2.done,
      children = _ref2.children,
      a11yText = _ref2.a11yText,
      className = _ref2.className,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["done", "children", "a11yText", "className"]);
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