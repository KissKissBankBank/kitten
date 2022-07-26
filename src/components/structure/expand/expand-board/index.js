"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ExpandBoardContent = exports.ExpandBoardButton = exports.ExpandBoard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("../../../action/button");

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "expand-board__StyledButton",
  componentId: "sc-tpghry-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;line-height:", ";", ""], (0, _typography.pxToRem)(21), _ref => {
  let {
    expanded
  } = _ref;
  return expanded && (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], _colorsConfig.default.font1, _colorsConfig.default.font1);
});
const StyledArrowIcon = (0, _styledComponents.default)(_arrowIcon.ArrowIcon).withConfig({
  displayName: "expand-board__StyledArrowIcon",
  componentId: "sc-tpghry-1"
})(["width:", ";height:", ";margin-left:", ";"], (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10));

class ExpandBoardButton extends _react.PureComponent {
  render() {
    const {
      children,
      expandChildren,
      expanded,
      disabled,
      onClick,
      ariaId,
      borderRadius,
      size
    } = this.props;
    const defaultExpandChildren = expandChildren ? expandChildren : children;
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
  }

}

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
  onClick: () => {},
  ariaId: '',
  borderRadius: 0,
  size: 'large'
};

class ExpandBoardContent extends _react.PureComponent {
  render() {
    const {
      children,
      ariaId
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: ariaId
    }, children);
  }

}

exports.ExpandBoardContent = ExpandBoardContent;
ExpandBoardContent.propTypes = {
  children: _propTypes.default.node.isRequired,
  ariaId: _propTypes.default.string
};
ExpandBoardContent.defaultProps = {
  ariaId: ''
};

const growAnimation = () => (0, _styledComponents.keyframes)(["0%:{opacity:0;max-height:0;}100%:{opacity:1;max-height:var(--ExpandBoard-animationMaxHeight);};"]);

const shrinkAnimation = () => (0, _styledComponents.keyframes)(["0%:{opacity:1;max-height:var(--ExpandBoard-animationMaxHeight);}100%:{opacity:0;max-height:0;};"]);

class ExpandBoard extends _react.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      expanded: false,
      isShrinking: false,
      isExpanding: false
    };

    this.isButtonComponent = component => component.type === ExpandBoardButton;

    this.isContentComponent = component => component.type === ExpandBoardContent;

    this.handleAfterClick = () => {
      const {
        expanded,
        isShrinking,
        isExpanding
      } = this.state;
      document.activeElement.blur();
      this.props.onClick({
        expanded,
        isShrinking,
        isExpanding
      });
    };

    this.updateExpandState = () => {
      this.setState(prevState => ({
        expanded: !prevState.expanded,
        isShrinking: false,
        isExpanding: false
      }), this.handleAfterClick);
    };

    this.handleClick = () => {
      const {
        withAnimation,
        animationShrinkingDuration
      } = this.props;
      if (!withAnimation) return this.updateExpandState();
      return this.setState(prevState => {
        if (prevState.expanded) {
          return {
            isShrinking: true
          };
        }

        return {
          isExpanding: true
        };
      }, () => {
        if (this.state.isShrinking) {
          return setTimeout(this.updateExpandState, animationShrinkingDuration * 1000);
        }

        return this.updateExpandState();
      });
    };

    this.contentStyle = () => {
      const {
        withAnimation,
        animationShrinkingDuration,
        animationMaxHeight
      } = this.props;
      if (!withAnimation) return null;

      if (this.state.isShrinking) {
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
  }

  render() {
    const {
      children,
      style,
      disabled,
      ariaId
    } = this.props;
    let button = null;
    let content = null;

    _react.default.Children.forEach(children, child => {
      if (! /*#__PURE__*/_react.default.isValidElement(child)) return null;

      if (this.isButtonComponent(child)) {
        button = /*#__PURE__*/_react.default.cloneElement(child, {
          disabled,
          expanded: this.state.expanded,
          onClick: this.handleClick,
          style: /*#__PURE__*/_react.default.createElement(StyledButton, null),
          ariaId
        });
      }

      if (this.isContentComponent(child)) {
        content = /*#__PURE__*/_react.default.cloneElement(child, {
          ariaId,
          style: this.contentStyle()
        });
      }
    });

    return /*#__PURE__*/_react.default.createElement("div", {
      style: style
    }, button, this.state.expanded && content);
  }

}

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
  onClick: () => {},
  ariaId: 'k-ExpandBoard',
  withAnimation: false,
  animationMaxHeight: '100vh',
  animationShrinkingDuration: 0.5
};