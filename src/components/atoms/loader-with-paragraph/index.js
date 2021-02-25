"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoaderWithParagraph = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _loader = require("../../../components/atoms/loader");

var _paragraph = require("../../../components/typography/paragraph");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var StyledLoaderWithParagraph = _styledComponents.default.div.withConfig({
  displayName: "loader-with-paragraph__StyledLoaderWithParagraph",
  componentId: "sc-1a44voe-0"
})(["display:flex;align-items:center;gap:", ";&.k-LoaderWithParagraph--top{flex-direction:column;}&.k-LoaderWithParagraph--bottom{flex-direction:column-reverse;}&.k-LoaderWithParagraph--left{flex-direction:row;}&.k-LoaderWithParagraph--right{flex-direction:row-reverse;}"], (0, _typography.pxToRem)(10));

var LoaderWithParagraph = function LoaderWithParagraph(_ref) {
  var className = _ref.className,
      loaderPosition = _ref.loaderPosition,
      loaderProps = _ref.loaderProps,
      paragraphProps = _ref.paragraphProps,
      children = _ref.children,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className", "loaderPosition", "loaderProps", "paragraphProps", "children"]);
  return /*#__PURE__*/_react.default.createElement(StyledLoaderWithParagraph, (0, _extends2.default)({
    className: (0, _classnames.default)('k-LoaderWithParagraph', className, "k-LoaderWithParagraph--".concat(loaderPosition))
  }, others), /*#__PURE__*/_react.default.createElement(_loader.Loader, (0, _extends2.default)({
    "aria-hidden": true
  }, loaderProps, {
    className: (0, _classnames.default)('k-LoaderWithParagraph__loader', loaderProps.className)
  })), /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, (0, _extends2.default)({
    modifier: "secondary",
    margin: false
  }, paragraphProps, {
    className: (0, _classnames.default)('k-LoaderWithParagraph__paragraph', paragraphProps.className)
  }), children));
};

exports.LoaderWithParagraph = LoaderWithParagraph;
LoaderWithParagraph.defaultProps = {
  children: 'Loading',
  loaderPosition: 'left',
  loaderProps: {},
  paragraphProps: {}
};
LoaderWithParagraph.propTypes = {
  loaderPosition: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
  loaderProps: _propTypes.default.object,
  paragraphProps: _propTypes.default.object
};