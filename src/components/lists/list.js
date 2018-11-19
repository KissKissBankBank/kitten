"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.ListBase = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireWildcard(require("radium"));

var _arrowIcon = require("kitten/components/icons/arrow-icon");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _typography = require("kitten/helpers/utils/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ArrowIcon = (0, _radium.default)(_arrowIcon.ArrowIcon);

var ListButtonItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ListButtonItem, _Component);

  function ListButtonItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ListButtonItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ListButtonItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focus: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (event) {
      var _this$props = _this.props,
          onKeyPress = _this$props.onKeyPress,
          onClick = _this$props.onClick;
      var enterKey = 13;
      var spaceKey = 32;

      switch (event.which) {
        case enterKey:
        case spaceKey:
          event.preventDefault;
          onClick();
          onKeyPress();
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateFocus", function (focusState) {
      _this.setState({
        focus: focusState
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFocus", function (event) {
      _this.updateFocus(true);

      _this.props.onFocus();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBlur", function () {
      _this.updateFocus(false);

      _this.props.onBlur();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseEnter", function () {
      _this.updateFocus(true);

      _this.props.onMouseEnter();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseLeave", function () {
      _this.updateFocus(false);

      _this.props.onMouseLeave();
    });

    return _this;
  }

  _createClass(ListButtonItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          style = _this$props2.style,
          onClick = _this$props2.onClick,
          withTopBorder = _this$props2.withTopBorder,
          others = _objectWithoutProperties(_this$props2, ["children", "disabled", "style", "onClick", "withTopBorder"]);

      var focus = this.state.focus;
      var buttonStyles = [styles.buttonItem.base, style, withTopBorder && styles.buttonItem.topBorder, disabled && styles.buttonItem.disabled];
      var arrowStyles = [styles.buttonItem.icon.base, disabled && styles.buttonItem.icon.disabled, !disabled && focus && styles.buttonItem.icon.focus];
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("div", _extends({}, others, {
        role: "button",
        style: buttonStyles,
        tabIndex: "0",
        onClick: disabled ? null : onClick,
        onKeyPress: disabled ? null : this.handleKeyPress,
        onMouseEnter: this.handleMouseEnter,
        onFocus: this.handleFocus,
        onMouseLeave: this.handleMouseLeave,
        onBlur: this.handleBlur
      }), _react.default.createElement("div", {
        style: styles.buttonItem.content
      }, children), _react.default.createElement("div", {
        style: styles.buttonItem.arrow
      }, _react.default.createElement(ArrowIcon, {
        className: "k-Button__icon",
        style: arrowStyles
      }))));
    }
  }]);

  return ListButtonItem;
}(_react.Component);

_defineProperty(ListButtonItem, "propTypes", {
  children: _propTypes.default.node.isRequired,
  style: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  disabled: _propTypes.default.bool,
  withTopBorder: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func
});

_defineProperty(ListButtonItem, "defaultProps", {
  style: {},
  disabled: false,
  withTopBorder: false,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
});

var ListBase =
/*#__PURE__*/
function (_Component2) {
  _inherits(ListBase, _Component2);

  function ListBase() {
    _classCallCheck(this, ListBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListBase).apply(this, arguments));
  }

  _createClass(ListBase, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement("ul", {
        style: styles.list
      }, _react.default.Children.map(children, function (child, index) {
        if (!_react.default.isValidElement(child)) return null;
        return _react.default.createElement("li", null, child);
      }));
    }
  }]);

  return ListBase;
}(_react.Component);

exports.ListBase = ListBase;

_defineProperty(ListBase, "ButtonItem", ListButtonItem);

ListBase.propTypes = {
  children: _propTypes.default.node.isRequired
};
var styles = {
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  buttonItem: {
    base: {
      display: 'flex',
      borderLeft: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      borderRight: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      borderBottom: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      cursor: 'pointer',
      paddingLeft: '1.25rem',
      paddingRight: '1.25rem',
      ':hover': {
        backgroundColor: _colorsConfig.default.background2
      }
    },
    topBorder: {
      borderTop: "".concat(_colorsConfig.default.line1, " 0.125rem solid")
    },
    disabled: {
      color: _colorsConfig.default.line2,
      backgroundColor: _colorsConfig.default.background1,
      cursor: 'not-allowed',
      ':hover': {
        backgroundColor: _colorsConfig.default.background1
      }
    },
    content: {
      flexGrow: 1
    },
    arrow: {
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      base: {
        position: 'relative',
        left: 0,
        transition: 'left .2s'
      },
      focus: {
        left: (0, _typography.pxToRem)(5)
      },
      disabled: {
        fill: _colorsConfig.default.line2
      }
    }
  }
};
var List = (0, _radium.default)(ListBase);
exports.List = List;