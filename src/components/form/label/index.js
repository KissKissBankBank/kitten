"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Label = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

var _elementHelper = require("../../../helpers/dom/element-helper");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

const StyledLabel = _styledComponents.default.label.withConfig({
  displayName: "label__StyledLabel",
  componentId: "sc-l6ih7y-0"
})(["display:block;", " cursor:pointer;line-height:1.3;&.k-Label--micro{font-size:", ";}&.k-Label--small{font-size:", ";}&.k-Label--medium{font-size:", ";}&.k-Label--withoutPointerEvents{pointer-events:none;}.k-Label--dot{margin:0 0 0 ", ";width:var(--dot-width);height:var(--dot-width);background-color:var(--dot-background-color);vertical-align:middle;display:inline-block;border-radius:var(--border-radius-rounded);}"], _typographyConfig.default.fontStyles['500'], (0, _typography.stepToRem)(-2), (0, _typography.stepToRem)(-1), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(10));

const Label = _ref => {
  var _dot$backgroundColor;

  let {
    tag,
    className,
    children,
    focusId,
    size,
    withoutPointerEvents,
    htmlFor,
    dot,
    style,
    ...other
  } = _ref;

  const handleClick = e => {
    if (_elementHelper.domElementHelper.canUseDom() && focusId) {
      e.preventDefault();
      document.getElementById(focusId).focus();
    }
  };

  return /*#__PURE__*/_react.default.createElement(StyledLabel, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Label', className, "k-Label--" + size, {
      'k-Label--withoutPointerEvents': withoutPointerEvents
    }),
    htmlFor: focusId || htmlFor,
    onClick: handleClick,
    as: tag
  }, other), children, !(0, _isEmpty.default)(dot) && /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('k-Label--dot'),
    title: dot.title,
    tabIndex: "-1",
    style: {
      '--dot-background-color': (_dot$backgroundColor = dot == null ? void 0 : dot.backgroundColor) != null ? _dot$backgroundColor : null,
      '--dot-width': 'width' in dot ? (0, _typography.pxToRem)(dot.width) : null,
      ...style
    }
  }));
};

exports.Label = Label;
Label.defaultProps = {
  children: 'Label',
  focusId: null,
  size: 'small',
  withoutPointerEvents: false,
  dot: {}
};
Label.propTypes = {
  focusId: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  size: _propTypes.default.oneOf(['micro', 'small', 'medium']),
  withoutPointerEvents: _propTypes.default.bool,
  dot: _propTypes.default.shape({
    width: _propTypes.default.number,
    backgroundColor: _propTypes.default.node,
    title: _propTypes.default.string
  })
};