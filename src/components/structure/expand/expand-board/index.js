"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ExpandBoardContent = exports.ExpandBoardButton = exports.ExpandBoard = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("../../../action/button");

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _deprecated = require("../../../../helpers/utils/deprecated");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "expand-board__StyledButton",
  componentId: "sc-tpghry-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;line-height:", ";", ""], (0, _typography.pxToRem)(21), function (_ref) {
  var expanded = _ref.expanded;
  return expanded && (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], _colorsConfig.default.font1, _colorsConfig.default.font1);
});
var StyledArrowIcon = (0, _styledComponents.default)(_arrowIcon.ArrowIcon).withConfig({
  displayName: "expand-board__StyledArrowIcon",
  componentId: "sc-tpghry-1"
})(["width:", ";height:", ";margin-left:", ";"], (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10));

var ExpandBoardButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(ExpandBoardButton, _PureComponent);

  function ExpandBoardButton() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ExpandBoardButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        expandChildren = _this$props.expandChildren,
        expanded = _this$props.expanded,
        disabled = _this$props.disabled,
        onClick = _this$props.onClick,
        ariaId = _this$props.ariaId,
        borderRadius = _this$props.borderRadius,
        size = _this$props.size;
    (0, _deprecated.checkDeprecatedSizes)(size);
    var defaultExpandChildren = expandChildren ? expandChildren : children;
    return /*#__PURE__*/_react.default.createElement(StyledButton, {
      size: size,
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
  };

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
  size: _propTypes.default.string,
  borderRadius: _propTypes.default.number
};
ExpandBoardButton.defaultProps = {
  expandChildren: null,
  expanded: false,
  disabled: false,
  onClick: function onClick() {},
  ariaId: '',
  borderRadius: 0,
  size: 'large'
};

var ExpandBoardContent = /*#__PURE__*/function (_PureComponent2) {
  (0, _inheritsLoose2.default)(ExpandBoardContent, _PureComponent2);

  function ExpandBoardContent() {
    return _PureComponent2.apply(this, arguments) || this;
  }

  var _proto2 = ExpandBoardContent.prototype;

  _proto2.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        ariaId = _this$props2.ariaId;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: ariaId
    }, children);
  };

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
  return (0, _styledComponents.keyframes)(["0%:{opacity:0;max-height:0;}100%:{opacity:1;max-height:var(--ExpandBoard-animationMaxHeight);};"]);
};

var shrinkAnimation = function shrinkAnimation() {
  return (0, _styledComponents.keyframes)(["0%:{opacity:1;max-height:var(--ExpandBoard-animationMaxHeight);}100%:{opacity:0;max-height:0;};"]);
};

var ExpandBoard = /*#__PURE__*/function (_PureComponent3) {
  (0, _inheritsLoose2.default)(ExpandBoard, _PureComponent3);

  function ExpandBoard() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent3.call.apply(_PureComponent3, [this].concat(args)) || this;
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
          '--ExpandBoard-animationMaxHeight': animationMaxHeight,
          maxHeight: animationMaxHeight,
          opacity: 1,
          animationDuration: animationShrinkingDuration + "s",
          animationDelay: 0,
          animationIterationCount: 1,
          animationFillMode: 'forwards',
          animationName: shrinkAnimation,
          animationTimingFunction: 'ease-in-out'
        };
      }

      return {
        '--ExpandBoard-animationMaxHeight': animationMaxHeight,
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

  var _proto3 = ExpandBoard.prototype;

  _proto3.render = function render() {
    var _this2 = this;

    var _this$props5 = this.props,
        children = _this$props5.children,
        style = _this$props5.style,
        disabled = _this$props5.disabled,
        ariaId = _this$props5.ariaId;
    var button = null;
    var content = null;

    _react.default.Children.forEach(children, function (child) {
      if (! /*#__PURE__*/_react.default.isValidElement(child)) return null;

      if (_this2.isButtonComponent(child)) {
        button = /*#__PURE__*/_react.default.cloneElement(child, {
          disabled: disabled,
          expanded: _this2.state.expanded,
          onClick: _this2.handleClick,
          style: /*#__PURE__*/_react.default.createElement(StyledButton, null),
          ariaId: ariaId
        });
      }

      if (_this2.isContentComponent(child)) {
        content = /*#__PURE__*/_react.default.cloneElement(child, {
          ariaId: ariaId,
          style: _this2.contentStyle()
        });
      }
    });

    return /*#__PURE__*/_react.default.createElement("div", {
      style: style
    }, button, this.state.expanded && content);
  };

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