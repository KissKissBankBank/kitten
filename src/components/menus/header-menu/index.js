"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderMenu = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _item = require("./components/item");

var _context = require("./components/context");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var List = _styledComponents.default.ul.withConfig({
  displayName: "header-menu__List",
  componentId: "i1nt9v-0"
})(["margin:0;padding:0;list-style:none;border-left:1px solid ", ";border-right:1px solid ", ";"], _colorsConfig.default.line1, _colorsConfig.default.line1);

var HeaderMenu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(HeaderMenu, _Component);

  function HeaderMenu(props) {
    var _this;

    (0, _classCallCheck2.default)(this, HeaderMenu);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HeaderMenu).call(this, props));
    _this.state = {
      borderSide: props.borderSide
    };
    return _this;
  }

  (0, _createClass2.default)(HeaderMenu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.borderSide !== this.props.borderSide) {
        this.setState({
          borderSide: this.props.borderSide
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement(_context.Context.Provider, {
        value: this.state
      }, _react.default.createElement("nav", {
        role: "navigation"
      }, _react.default.createElement(List, {
        role: "menubar"
      }, children)));
    }
  }]);
  return HeaderMenu;
}(_react.Component);

exports.HeaderMenu = HeaderMenu;
HeaderMenu.Item = _item.Item;
HeaderMenu.propTypes = {
  borderSide: _propTypes.default.oneOf(['left', 'right'])
};
HeaderMenu.defaultProps = {
  borderSide: 'left'
};