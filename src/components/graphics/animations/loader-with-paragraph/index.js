"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LoaderWithParagraph = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _loader = require("../../../graphics/animations/loader");

var _paragraph = require("../../../typography/paragraph");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

const StyledLoaderWithParagraph = _styledComponents.default.div.withConfig({
  displayName: "loader-with-paragraph__StyledLoaderWithParagraph",
  componentId: "sc-1h8nejh-0"
})(["display:flex;align-items:center;gap:", ";&.k-LoaderWithParagraph--top{flex-direction:column;}&.k-LoaderWithParagraph--bottom{flex-direction:column-reverse;}&.k-LoaderWithParagraph--left{flex-direction:row;}&.k-LoaderWithParagraph--right{flex-direction:row-reverse;}"], (0, _typography.pxToRem)(10));

const LoaderWithParagraph = _ref => {
  let {
    className,
    loaderPosition,
    loaderProps,
    loaderComponent,
    paragraphProps,
    children,
    ...others
  } = _ref;
  const Component = loaderComponent || _loader.Loader;
  return /*#__PURE__*/_react.default.createElement(StyledLoaderWithParagraph, (0, _extends2.default)({
    className: (0, _classnames.default)('k-LoaderWithParagraph', className, "k-LoaderWithParagraph--" + loaderPosition)
  }, others), /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    "aria-hidden": true
  }, loaderProps, {
    className: (0, _classnames.default)('k-LoaderWithParagraph__loader', loaderProps.className)
  })), /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, (0, _extends2.default)({
    modifier: "secondary",
    noMargin: true
  }, paragraphProps, {
    className: (0, _classnames.default)('k-LoaderWithParagraph__paragraph', paragraphProps.className)
  }), children));
};

exports.LoaderWithParagraph = LoaderWithParagraph;
LoaderWithParagraph.defaultProps = {
  children: 'Loading',
  loaderPosition: 'left',
  loaderProps: {},
  paragraphProps: {},
  loaderComponent: null
};
LoaderWithParagraph.propTypes = {
  loaderPosition: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
  loaderProps: _propTypes.default.object,
  paragraphProps: _propTypes.default.object,
  loaderComponent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
};