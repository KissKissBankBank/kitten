"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ResponsiveIframeContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

const StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "responsive-iframe-container__StyledWrapper",
  componentId: "sc-12misvs-0"
})(["position:relative;overflow:hidden;padding-bottom:67.5%;padding-bottom:var(--ResponsiveImageContainer-ratio);height:0;> *{position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;}"]);

const ResponsiveIframeContainer = _ref => {
  let {
    ratio,
    style,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledWrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ResponsiveIframeContainer', className),
    style: { ...style,
      '--ResponsiveImageContainer-ratio': ratio + "%"
    }
  }, props));
};

exports.ResponsiveIframeContainer = ResponsiveIframeContainer;
ResponsiveIframeContainer.defaultProps = {
  ratio: '67.5',
  children: /*#__PURE__*/_react.default.createElement("iframe", null)
};