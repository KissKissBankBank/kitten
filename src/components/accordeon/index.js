"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordeon = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _item = require("./components/item");

var _header = require("./components/header");

var _content = require("./components/content");

var _context = require("./components/context");

var _marger = require("../layout/marger");

var _reactElements = require("../../helpers/react/react-elements");

var Accordeon =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Accordeon, _Component);

  function Accordeon(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Accordeon);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Accordeon).call(this, props));

    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.selectedItem !== _this.props.selectedItem) {
        _this.updateSelectedItem(_this.props.selectedItem);
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
      updateSelectedItem: _this.updateSelectedItem
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
      return _react.default.createElement(_context.Context.Provider, {
        value: this.state
      }, items.map(function (item, index) {
        return _react.default.createElement(_marger.Marger, {
          key: index,
          bottom: index === items.length - 1 ? 0 : 1.5
        }, _react.default.cloneElement(item, {
          id: index
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
  onChange: _propTypes.default.func
};
Accordeon.defaultProps = {
  selectedItem: null,
  onChange: function onChange() {}
};