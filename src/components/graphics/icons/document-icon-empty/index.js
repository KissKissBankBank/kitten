"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentIconEmpty = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className", "children", "title"];

var StyledDocumentIcon = _styledComponents.default.svg.withConfig({
  displayName: "document-icon-empty__StyledDocumentIcon",
  componentId: "sc-1wxnwfw-0"
})(["path.kiss-DocumentIcon__shadow{fill:#000 !important;opacity:0.05;}path.kiss-DocumentIcon__bg{fill:#fff !important;}path.kiss-DocumentIcon__fold{fill:#000 !important;opacity:0.1;}path.kiss-DocumentIcon__icon{fill:#000 !important;}"]);

var DocumentIconEmpty = function DocumentIconEmpty(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledDocumentIcon, (0, _extends2.default)({
    width: "25",
    height: "33",
    viewBox: "0 0 25 33",
    xmlns: "http://www.w3.org/2000/svg",
    className: (0, _classnames.default)('k-ColorSvg', className)
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    className: "kiss-DocumentIcon__shadow",
    d: "M3 3h 15l 7 7V33H3L3 3z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "kiss-DocumentIcon__bg",
    d: "M0 0h15l7 7V30H0L0 0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "kiss-DocumentIcon__fold",
    d: "M15 0v7h7L15 0z"
  }), children);
};

exports.DocumentIconEmpty = DocumentIconEmpty;
DocumentIconEmpty.propTypes = {
  title: _propTypes.default.string
};
DocumentIconEmpty.defaultProps = {
  title: ''
};