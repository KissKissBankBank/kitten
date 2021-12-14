"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeskLayout = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _loader = require("../../../components/atoms/loader");

var DeskLayout = function DeskLayout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      menu = _ref.menu,
      menuProps = _ref.menuProps,
      fullWidth = _ref.fullWidth,
      contentProps = _ref.contentProps,
      loading = _ref.loading,
      loaderComponent = _ref.loaderComponent,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "menu", "menuProps", "fullWidth", "contentProps", "loading", "loaderComponent"]);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledLayout, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DeskLayout__wrapper', className)
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DeskLayout"
  }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, menuProps, {
    className: (0, _classnames.default)('k-DeskLayout__menu', menuProps.className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DeskLayout__menu__inside"
  }, menu)), loading && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DeskLayout__loading"
  }, loaderComponent), !loading && /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, contentProps, {
    className: (0, _classnames.default)('k-DeskLayout__content', contentProps.className, {
      'k-DeskLayout__content--fullWidth': fullWidth
    })
  }), children)));
};

exports.DeskLayout = DeskLayout;
DeskLayout.defaultProps = {
  menu: null,
  menuProps: {},
  contentProps: {},
  fullWidth: false,
  loading: false,
  loaderComponent: /*#__PURE__*/_react.default.createElement(_loader.Loader, null)
};
DeskLayout.propTypes = {
  menu: _propTypes.default.node,
  menuProps: _propTypes.default.object,
  contentProps: _propTypes.default.object,
  fullWidth: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  loaderComponent: _propTypes.default.node
};