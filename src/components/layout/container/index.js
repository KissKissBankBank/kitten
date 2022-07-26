"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Container = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("./styled");

class Container extends _react.default.PureComponent {
  render() {
    const {
      style,
      ...others
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_styled.StyledContainer, (0, _extends2.default)({
      styles: style
    }, others));
  }

}

exports.Container = Container;
Container.defaultProps = {
  fullWidthBelowScreenSize: null
};
Container.propTypes = {
  fullWidthBelowScreenSize: _propTypes.default.oneOf(['XXS', 'XS', 'S', 'M', 'L', 'XL'])
};