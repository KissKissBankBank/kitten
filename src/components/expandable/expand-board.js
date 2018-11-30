"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandBoard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("../../components/buttons/button");

var _arrowIcon = require("../../components/icons/arrow-icon");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _typography = require("../../helpers/utils/typography");

var Button = (0, _radium.default)(_button.Button);

var ExpandBoardButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ExpandBoardButton, _Component);

  function ExpandBoardButton() {
    (0, _classCallCheck2.default)(this, ExpandBoardButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(ExpandBoardButton).apply(this, arguments));
  }

  (0, _createClass2.default)(ExpandBoardButton, [{
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
      var buttonStyles = expanded ? (0, _extends2.default)({}, style.base, style.expanded) : style.base;
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

ExpandBoardButton.propTypes = {
  children: _propTypes.default.node.isRequired,
  ariaId: _propTypes.default.string,
  expandChildren: _propTypes.default.node,
  expanded: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  style: _propTypes.default.object,
  onClick: _propTypes.default.func
};
ExpandBoardButton.defaultProps = {
  expandChildren: null,
  expanded: false,
  disabled: false,
  style: {},
  onClick: function onClick() {},
  ariaId: ''
};

var ExpandBoardContentBase =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(ExpandBoardContentBase, _Component2);

  function ExpandBoardContentBase() {
    (0, _classCallCheck2.default)(this, ExpandBoardContentBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(ExpandBoardContentBase).apply(this, arguments));
  }

  (0, _createClass2.default)(ExpandBoardContentBase, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          ariaId = _this$props2.ariaId,
          style = _this$props2.style;
      return _react.default.createElement("div", {
        id: ariaId,
        style: style
      }, children);
    }
  }]);
  return ExpandBoardContentBase;
}(_react.Component);

ExpandBoardContentBase.propTypes = {
  children: _propTypes.default.node.isRequired,
  ariaId: _propTypes.default.string
};
ExpandBoardContentBase.defaultProps = {
  ariaId: ''
};
var ExpandBoardContent = (0, _radium.default)(ExpandBoardContentBase);

var ExpandBoardBase =
/*#__PURE__*/
function (_Component3) {
  (0, _inherits2.default)(ExpandBoardBase, _Component3);

  function ExpandBoardBase() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ExpandBoardBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ExpandBoardBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      expanded: false,
      isShrinking: false,
      isExpanding: false
    };

    _this.isButtonComponent = function (component) {
      return component.type === ExpandBoardButton;
    };

    _this.isContentComponent = function (component) {
      return component.type === ExpandBoardContent;
    };

    _this.growAnimation = _radium.default.keyframes({
      '0%': {
        opacity: 0,
        maxHeight: 0
      },
      '100%': {
        opacity: 1,
        maxHeight: _this.props.animationMaxHeight
      }
    }, 'grow');
    _this.shrinkAnimation = _radium.default.keyframes({
      '0%': {
        opacity: 1,
        maxHeight: _this.props.animationMaxHeight
      },
      '100%': {
        opacity: 0,
        maxHeight: 0
      }
    }, 'schrink');

    _this.handleAfterClick = function () {
      var _this$state = _this.state,
          expanded = _this$state.expanded,
          isShrinking = _this$state.isShrinking,
          isExpanding = _this$state.isExpanding;
      document.activeElement.blur();

      _this.props.onClick({
        expanded: expanded,
        isShrinking: isShrinking,
        isExpanding: isExpanding
      });
    };

    _this.updateExpandState = function () {
      _this.setState(function (prevState) {
        return {
          expanded: !prevState.expanded,
          isShrinking: false,
          isExpanding: false
        };
      }, _this.handleAfterClick);
    };

    _this.handleClick = function () {
      var _this$props3 = _this.props,
          withAnimation = _this$props3.withAnimation,
          animationShrinkingDuration = _this$props3.animationShrinkingDuration;
      if (!withAnimation) return _this.updateExpandState();
      return _this.setState(function (prevState) {
        if (prevState.expanded) {
          return {
            isShrinking: true
          };
        }

        return {
          isExpanding: true
        };
      }, function () {
        if (_this.state.isShrinking) {
          return setTimeout(_this.updateExpandState, animationShrinkingDuration * 1000);
        }

        return _this.updateExpandState();
      });
    };

    _this.contentStyle = function () {
      var _this$props4 = _this.props,
          withAnimation = _this$props4.withAnimation,
          animationShrinkingDuration = _this$props4.animationShrinkingDuration,
          animationMaxHeight = _this$props4.animationMaxHeight;
      if (!withAnimation) return null;

      if (_this.state.isShrinking) {
        return {
          maxHeight: animationMaxHeight,
          opacity: 1,
          animationDuration: "".concat(animationShrinkingDuration, "s"),
          animationDelay: 0,
          animationIterationCount: 1,
          animationFillMode: 'forwards',
          animationName: _this.shrinkAnimation,
          animationTimingFunction: 'ease-in-out'
        };
      }

      return {
        maxHeight: 0,
        opacity: 0,
        animationDuration: '1s',
        animationDelay: 0,
        animationIterationCount: 1,
        animationFillMode: 'forwards',
        animationName: _this.growAnimation,
        animationTimingFunction: 'ease-in-out'
      };
    };

    return _this;
  }

  (0, _createClass2.default)(ExpandBoardBase, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          children = _this$props5.children,
          style = _this$props5.style,
          disabled = _this$props5.disabled,
          ariaId = _this$props5.ariaId;
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
            ariaId: ariaId,
            style: _this2.contentStyle()
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

ExpandBoardBase.Button = ExpandBoardButton;
ExpandBoardBase.Content = ExpandBoardContent;
ExpandBoardBase.propTypes = {
  children: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  style: _propTypes.default.object,
  onClick: _propTypes.default.func,
  ariaId: _propTypes.default.string.isRequired,
  withAnimation: _propTypes.default.bool,
  animationMaxHeight: _propTypes.default.string,
  animationShrinkingDuration: _propTypes.default.number
};
ExpandBoardBase.defaultProps = {
  disabled: false,
  style: {},
  onClick: function onClick() {},
  ariaId: 'k-ExpandBoard',
  withAnimation: false,
  animationMaxHeight: '100vh',
  animationShrinkingDuration: 0.5
};
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