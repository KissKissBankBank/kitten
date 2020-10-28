"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordeon = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _item = require("./components/item");

var _header = require("./components/header");

var _content = require("./components/content");

var _context = require("./components/context");

var _marger = require("../layout/marger");

var _reactElements = require("../../helpers/react/react-elements");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Accordeon = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Accordeon, _Component);

  var _super = _createSuper(Accordeon);

  function Accordeon(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Accordeon);
    _this = _super.call(this, props);

    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.selectedItem !== _this.props.selectedItem) {
        _this.updateSelectedItem(_this.props.selectedItem);
      }

      if (prevProps.isAnimated !== _this.props.isAnimated) {
        _this.setState({
          isAnimated: _this.props.isAnimated
        });
      }
    };

    _this.updateSelectedItem = function (newSelectedItemId) {
      _this.setState({
        selectedItem: newSelectedItemId
      });

      _this.props.onChange(newSelectedItemId);
    };

    _this.state = {
      selectedItem: props.selectedItem,
      updateSelectedItem: _this.updateSelectedItem,
      isAnimated: props.isAnimated,
      componentId: props.id
    };
    return _this;
  }

  (0, _createClass2.default)(Accordeon, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var items = (0, _reactElements.getReactElementsByType)({
        children: children,
        type: Accordeon.Item
      });
      return /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
        value: this.state
      }, items.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
          key: index,
          bottom: index === items.length - 1 ? 0 : 1.5
        }, _react.default.cloneElement(item, {
          id: item.props.id || index
        }));
      }));
    }
  }]);
  return Accordeon;
}(_react.Component);

exports.Accordeon = Accordeon;
Accordeon.Item = _item.Item;
Accordeon.Header = _header.Header;
Accordeon.Content = _content.Content;
Accordeon.propTypes = {
  selectedItem: _propTypes.default.number,
  onChange: _propTypes.default.func,
  isAnimated: _propTypes.default.bool,
  id: _propTypes.default.string
};
Accordeon.defaultProps = {
  selectedItem: null,
  onChange: function onChange() {},
  isAnimated: true,
  id: 'accordeon'
};