"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Container = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("./styled");

var _excluded = ["style"];

var Container = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inheritsLoose2.default)(Container, _React$PureComponent);

  function Container() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Container.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        others = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
    return /*#__PURE__*/_react.default.createElement(_styled.StyledContainer, (0, _extends2.default)({
      styles: style
    }, others));
  };

  return Container;
}(_react.default.PureComponent);

exports.Container = Container;
Container.defaultProps = {
  fullWidthBelowScreenSize: null
};
Container.propTypes = {
  fullWidthBelowScreenSize: _propTypes.default.oneOf(['XXS', 'XS', 'S', 'M', 'L', 'XL'])
};