"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoaderWithParagraph = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _loader = require("../../../components/atoms/loader");

var _paragraph = require("../../../components/typography/paragraph");

var LoaderWithParagraph = (0, _styledComponents.default)(function (_ref) {
  var children = _ref.children,
      className = _ref.className,
      loaderPosition = _ref.loaderPosition,
      loaderProps = _ref.loaderProps,
      paragraphProps = _ref.paragraphProps,
      others = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "loaderPosition", "loaderProps", "paragraphProps"]);
  var containerClassName = (0, _classnames.default)('k-LoaderWithParagraph', {
    'k-LoaderWithParagraph--column': loaderPosition == 'top' || loaderPosition == 'bottom'
  }, className);
  var loaderClassName = (0, _classnames.default)({
    'k-u-margin-bottom-single': loaderPosition == 'top',
    'k-u-margin-left-single': loaderPosition == 'right',
    'k-u-margin-top-single': loaderPosition == 'bottom',
    'k-u-margin-right-single': loaderPosition == 'left'
  }, loaderProps.className);

  var loader = /*#__PURE__*/_react.default.createElement(_loader.Loader, (0, _extends2.default)({}, loaderProps, {
    className: loaderClassName
  }));

  var loaderBefore = loaderPosition == 'top' || loaderPosition == 'left';
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: containerClassName
  }, others), loaderBefore ? loader : null, /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, (0, _extends2.default)({
    modifier: "secondary",
    margin: false
  }, paragraphProps), children), loaderBefore ? null : loader);
}).withConfig({
  displayName: "loader-with-paragraph__LoaderWithParagraph",
  componentId: "sc-1a44voe-0"
})(["display:flex;flex-direction:row;align-items:center;&.k-LoaderWithParagraph--column{flex-direction:column;}"]);
exports.LoaderWithParagraph = LoaderWithParagraph;
LoaderWithParagraph.propTypes = {
  className: _propTypes.default.string,
  loaderPosition: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
  loaderProps: _propTypes.default.object,
  paragraphProps: _propTypes.default.object
};
LoaderWithParagraph.defaultProps = {
  children: 'Loading',
  className: null,
  loaderPosition: 'left',
  loaderProps: {},
  // Show Loader component.
  paragraphProps: {} // Show Paragraph component.

};