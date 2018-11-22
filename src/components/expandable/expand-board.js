"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandBoard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("kitten/components/buttons/button");

var _arrowIcon = require("kitten/components/icons/arrow-icon");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _typography = require("kitten/helpers/utils/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = (0, _radium.default)(_button.Button);

var ExpandBoardButton =
/*#__PURE__*/
function (_Component) {
  _inherits(ExpandBoardButton, _Component);

  function ExpandBoardButton() {
    _classCallCheck(this, ExpandBoardButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExpandBoardButton).apply(this, arguments));
  }

  _createClass(ExpandBoardButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          expandChildren = _this$props.expandChildren,
          expanded = _this$props.expanded,
          disabled = _this$props.disabled,
          style = _this$props.style,
          onClick = _this$props.onClick,
          ariaId = _this$props.ariaId;
      var defaultExpandChildren = expandChildren ? expandChildren : children;
      var buttonStyles = expanded ? _objectSpread({}, style.base, style.expanded) : style.base;
      return _react.default.createElement(Button, {
        icon: true,
        iconOnRight: true,
        size: "big",
        modifier: "helium",
        disabled: disabled,
        "aria-expanded": expanded,
        "aria-controls": ariaId,
        style: buttonStyles,
        onClick: onClick,
        type: "button"
      }, _react.default.createElement("div", null, expanded ? defaultExpandChildren : children, _react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
        direction: expanded ? 'top' : 'bottom',
        fill: _colorsConfig.default.background1,
        style: style.arrow
      })));
    }
  }]);

  return ExpandBoardButton;
}(_react.Component);

_defineProperty(ExpandBoardButton, "propTypes", {
  children: _propTypes.default.node.isRequired,
  ariaId: _propTypes.default.string,
  expandChildren: _propTypes.default.node,
  expanded: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  style: _propTypes.default.object,
  onClick: _propTypes.default.func
});

_defineProperty(ExpandBoardButton, "defaultProps", {
  expandChildren: null,
  expanded: false,
  disabled: false,
  style: {},
  onClick: function onClick() {},
  ariaId: ''
});

var ExpandBoardContent =
/*#__PURE__*/
function (_Component2) {
  _inherits(ExpandBoardContent, _Component2);

  function ExpandBoardContent() {
    _classCallCheck(this, ExpandBoardContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExpandBoardContent).apply(this, arguments));
  }

  _createClass(ExpandBoardContent, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          ariaId = _this$props2.ariaId;
      return _react.default.createElement("div", {
        id: ariaId
      }, children);
    }
  }]);

  return ExpandBoardContent;
}(_react.Component);

_defineProperty(ExpandBoardContent, "propTypes", {
  children: _propTypes.default.node.isRequired,
  ariaId: _propTypes.default.string
});

_defineProperty(ExpandBoardContent, "defaultProps", {
  ariaId: ''
});

var ExpandBoardBase =
/*#__PURE__*/
function (_Component3) {
  _inherits(ExpandBoardBase, _Component3);

  function ExpandBoardBase(props) {
    var _this;

    _classCallCheck(this, ExpandBoardBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpandBoardBase).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isButtonComponent", function (component) {
      return component.type === ExpandBoardButton;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isContentComponent", function (component) {
      return component.type === ExpandBoardContent;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      _this.setState(function (prevState) {
        return {
          expanded: !prevState.expanded
        };
      }, function () {
        document.activeElement.blur();

        _this.props.onClick({
          expanded: _this.state.expanded
        });
      });
    });

    _this.state = {
      expanded: false
    };
    return _this;
  }

  _createClass(ExpandBoardBase, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          style = _this$props3.style,
          disabled = _this$props3.disabled,
          ariaId = _this$props3.ariaId;
      var button = null;
      var content = null;

      _react.default.Children.forEach(children, function (child) {
        if (!_react.default.isValidElement(child)) return null;

        if (_this2.isButtonComponent(child)) {
          button = _react.default.cloneElement(child, {
            disabled: disabled,
            expanded: _this2.state.expanded,
            onClick: _this2.handleClick,
            style: styles.button,
            ariaId: ariaId
          });
        }

        if (_this2.isContentComponent(child)) {
          content = _react.default.cloneElement(child, {
            ariaId: ariaId
          });
        }
      });

      return _react.default.createElement("div", {
        style: style
      }, button, this.state.expanded && content);
    }
  }]);

  return ExpandBoardBase;
}(_react.Component);

_defineProperty(ExpandBoardBase, "Button", ExpandBoardButton);

_defineProperty(ExpandBoardBase, "Content", ExpandBoardContent);

_defineProperty(ExpandBoardBase, "propTypes", {
  children: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  style: _propTypes.default.object,
  onClick: _propTypes.default.func,
  ariaId: _propTypes.default.string.isRequired
});

_defineProperty(ExpandBoardBase, "defaultProps", {
  disabled: false,
  style: {},
  onClick: function onClick() {},
  ariaId: 'k-ExpandBoard'
});

var styles = {
  button: {
    base: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1.3rem',
      padding: "".concat((0, _typography.pxToRem)(22), " ").concat((0, _typography.pxToRem)(30))
    },
    expanded: {
      backgroundColor: _colorsConfig.default.font1,
      borderColor: _colorsConfig.default.font1
    },
    arrow: {
      width: (0, _typography.pxToRem)(8),
      height: '0.75rem',
      // half of button base line-height
      marginLeft: (0, _typography.pxToRem)(10)
    }
  }
};
var ExpandBoard = (0, _radium.default)(ExpandBoardBase);
exports.ExpandBoard = ExpandBoard;