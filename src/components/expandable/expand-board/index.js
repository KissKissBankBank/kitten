"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandBoard = exports.ExpandBoardContent = exports.ExpandBoardButton = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("../../../components/buttons/button/button");

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "expand-board__StyledButton",
  componentId: "sc-5cysn4-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;line-height:", ";", ""], (0, _typography.pxToRem)(21), function (_ref) {
  var expanded = _ref.expanded;
  return expanded && (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], _colorsConfig.default.font1, _colorsConfig.default.font1);
});
var StyledArrowIcon = (0, _styledComponents.default)(_arrowIcon.ArrowIcon).withConfig({
  displayName: "expand-board__StyledArrowIcon",
  componentId: "sc-5cysn4-1"
})(["width:", ";height:", ";margin-left:", ";"], (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10));

var ExpandBoardButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(ExpandBoardButton, _PureComponent);

  var _super = _createSuper(ExpandBoardButton);

  function ExpandBoardButton() {
    (0, _classCallCheck2.default)(this, ExpandBoardButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ExpandBoardButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          expandChildren = _this$props.expandChildren,
          expanded = _this$props.expanded,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          ariaId = _this$props.ariaId,
          borderRadius = _this$props.borderRadius,
          big = _this$props.big;
      var defaultExpandChildren = expandChildren ? expandChildren : children;
      return /*#__PURE__*/_react.default.createElement(StyledButton, {
        big: big,
        modifier: "helium",
        disabled: disabled,
        "aria-expanded": expanded,
        "aria-controls": ariaId,
        onClick: onClick,
        type: "button",
        borderRadius: borderRadius
      }, /*#__PURE__*/_react.default.createElement("div", null, expanded ? defaultExpandChildren : children, /*#__PURE__*/_react.default.createElement(StyledArrowIcon, {
        direction: expanded ? 'top' : 'bottom',
        fill: _colorsConfig.default.background1
      })));
    }
  }]);
  return ExpandBoardButton;
}(_react.PureComponent);

exports.ExpandBoardButton = ExpandBoardButton;
ExpandBoardButton.propTypes = {
  children: _propTypes.default.node.isRequired,
  ariaId: _propTypes.default.string,
  expandChildren: _propTypes.default.node,
  expanded: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  big: _propTypes.default.bool,
  borderRadius: _propTypes.default.number
};
ExpandBoardButton.defaultProps = {
  expandChildren: null,
  expanded: false,
  disabled: false,
  onClick: function onClick() {},
  ariaId: '',
  borderRadius: 0,
  big: true
};

var ExpandBoardContent = /*#__PURE__*/function (_PureComponent2) {
  (0, _inherits2.default)(ExpandBoardContent, _PureComponent2);

  var _super2 = _createSuper(ExpandBoardContent);

  function ExpandBoardContent() {
    (0, _classCallCheck2.default)(this, ExpandBoardContent);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2.default)(ExpandBoardContent, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          ariaId = _this$props2.ariaId;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: ariaId
      }, children);
    }
  }]);
  return ExpandBoardContent;
}(_react.PureComponent);

exports.ExpandBoardContent = ExpandBoardContent;
ExpandBoardContent.propTypes = {
  children: _propTypes.default.node.isRequired,
  ariaId: _propTypes.default.string
};
ExpandBoardContent.defaultProps = {
  ariaId: ''
};

var growAnimation = function growAnimation() {
  return (0, _styledComponents.keyframes)(["0%:{opacity:0;maxHeight:0;}100%:{opacity:1;maxHeight:this.props.animationMaxHeight;}grow;"]);
};

var shrinkAnimation = function shrinkAnimation() {
  return (0, _styledComponents.keyframes)(["0%:{opacity:1;maxHeight:this.props.animationMaxHeight;}100%:{opacity:0;maxHeight:0;}schrink;"]);
};

var ExpandBoard = /*#__PURE__*/function (_PureComponent3) {
  (0, _inherits2.default)(ExpandBoard, _PureComponent3);

  var _super3 = _createSuper(ExpandBoard);

  function ExpandBoard() {
    var _this;

    (0, _classCallCheck2.default)(this, ExpandBoard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super3.call.apply(_super3, [this].concat(args));
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
          animationName: shrinkAnimation,
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
        animationName: growAnimation,
        animationTimingFunction: 'ease-in-out'
      };
    };

    return _this;
  }

  (0, _createClass2.default)(ExpandBoard, [{
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
            style: /*#__PURE__*/_react.default.createElement(StyledButton, null),
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

      return /*#__PURE__*/_react.default.createElement("div", {
        style: style
      }, button, this.state.expanded && content);
    }
  }]);
  return ExpandBoard;
}(_react.PureComponent);

exports.ExpandBoard = ExpandBoard;
ExpandBoard.Button = ExpandBoardButton;
ExpandBoard.Content = ExpandBoardContent;
ExpandBoard.propTypes = {
  children: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  style: _propTypes.default.object,
  onClick: _propTypes.default.func,
  ariaId: _propTypes.default.string.isRequired,
  withAnimation: _propTypes.default.bool,
  animationMaxHeight: _propTypes.default.string,
  animationShrinkingDuration: _propTypes.default.number
};
ExpandBoard.defaultProps = {
  disabled: false,
  style: {},
  onClick: function onClick() {},
  ariaId: 'k-ExpandBoard',
  withAnimation: false,
  animationMaxHeight: '100vh',
  animationShrinkingDuration: 0.5
};