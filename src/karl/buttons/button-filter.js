"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlButtonIconFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _button = require("kitten/components/buttons/button");

var _filterIcon = require("kitten/components/icons/filter-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FilterIcon = (0, _radium.default)(_filterIcon.FilterIcon);
var Button = (0, _radium.default)(_button.Button);

var KarlButtonIconFilterBase =
/*#__PURE__*/
function (_Component) {
  _inherits(KarlButtonIconFilterBase, _Component);

  function KarlButtonIconFilterBase() {
    _classCallCheck(this, KarlButtonIconFilterBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(KarlButtonIconFilterBase).apply(this, arguments));
  }

  _createClass(KarlButtonIconFilterBase, [{
    key: "render",
    value: function render() {
      var animateIsHovered = _radium.default.getState(this.state, 'button-filter', ':hover');

      var animateIsFocused = _radium.default.getState(this.state, 'button-filter', ':focus');

      var animateIsActived = _radium.default.getState(this.state, 'button-filter', ':active');

      var isDisabled = this.props.disabled;
      var isModifier = this.props.modifier;
      var isAnimated = !isDisabled && (animateIsHovered || animateIsFocused || animateIsActived);
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("span", {
        key: "button-filter",
        style: styles.filter
      }, _react.default.createElement(Button, {
        icon: "true",
        "aria-label": "Filter button",
        title: "Filter button",
        disabled: isDisabled,
        modifier: isModifier,
        style: styles.button
      }, _react.default.createElement("span", {
        className: "k-Button__icon",
        style: styles.button.icon
      }, _react.default.createElement(FilterIcon, {
        key: "icon-".concat(animateIsHovered) // TODO:
        ,
        animated: isAnimated,
        style: styles.button.icon.svg
      })), "Filtrer les projets")));
    }
  }]);

  return KarlButtonIconFilterBase;
}(_react.Component);

KarlButtonIconFilterBase.defaultProps = {
  disabled: false,
  modifier: 'azote'
};
var styles = {
  filter: {
    ':hover': {},
    ':focus': {},
    ':active': {},
    ':disabled': {}
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    icon: {
      width: '20px',
      height: '24px',
      paddingTop: 0,
      paddingBottom: 0,
      svg: {
        display: 'block'
      }
    }
  }
};
var KarlButtonIconFilter = (0, _radium.default)(KarlButtonIconFilterBase);
exports.KarlButtonIconFilter = KarlButtonIconFilter;