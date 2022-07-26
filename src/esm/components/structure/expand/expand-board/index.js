import React, { PureComponent } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../../action/button';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
const StyledButton = styled(Button).withConfig({
  displayName: "expand-board__StyledButton",
  componentId: "sc-tpghry-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;line-height:", ";", ""], pxToRem(21), _ref => {
  let {
    expanded
  } = _ref;
  return expanded && css(["background-color:", ";border-color:", ";"], COLORS.font1, COLORS.font1);
});
const StyledArrowIcon = styled(ArrowIcon).withConfig({
  displayName: "expand-board__StyledArrowIcon",
  componentId: "sc-tpghry-1"
})(["width:", ";height:", ";margin-left:", ";"], pxToRem(8), pxToRem(12), pxToRem(10));
export class ExpandBoardButton extends PureComponent {
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
    return /*#__PURE__*/React.createElement(StyledButton, {
      size: size,
      modifier: "helium",
      disabled: disabled,
      "aria-expanded": expanded,
      "aria-controls": ariaId,
      onClick: onClick,
      type: "button",
      borderRadius: borderRadius
    }, /*#__PURE__*/React.createElement("div", null, expanded ? defaultExpandChildren : children, /*#__PURE__*/React.createElement(StyledArrowIcon, {
      direction: expanded ? 'top' : 'bottom',
      fill: COLORS.background1
    })));
  }

}
ExpandBoardButton.propTypes = {
  children: PropTypes.node.isRequired,
  ariaId: PropTypes.string,
  expandChildren: PropTypes.node,
  expanded: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  borderRadius: PropTypes.number
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
export class ExpandBoardContent extends PureComponent {
  render() {
    const {
      children,
      ariaId
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      id: ariaId
    }, children);
  }

}
ExpandBoardContent.propTypes = {
  children: PropTypes.node.isRequired,
  ariaId: PropTypes.string
};
ExpandBoardContent.defaultProps = {
  ariaId: ''
};

const growAnimation = () => keyframes(["0%:{opacity:0;max-height:0;}100%:{opacity:1;max-height:var(--ExpandBoard-animationMaxHeight);};"]);

const shrinkAnimation = () => keyframes(["0%:{opacity:1;max-height:var(--ExpandBoard-animationMaxHeight);}100%:{opacity:0;max-height:0;};"]);

export class ExpandBoard extends PureComponent {
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
    React.Children.forEach(children, child => {
      if (! /*#__PURE__*/React.isValidElement(child)) return null;

      if (this.isButtonComponent(child)) {
        button = /*#__PURE__*/React.cloneElement(child, {
          disabled,
          expanded: this.state.expanded,
          onClick: this.handleClick,
          style: /*#__PURE__*/React.createElement(StyledButton, null),
          ariaId
        });
      }

      if (this.isContentComponent(child)) {
        content = /*#__PURE__*/React.cloneElement(child, {
          ariaId,
          style: this.contentStyle()
        });
      }
    });
    return /*#__PURE__*/React.createElement("div", {
      style: style
    }, button, this.state.expanded && content);
  }

}
ExpandBoard.Button = ExpandBoardButton;
ExpandBoard.Content = ExpandBoardContent;
ExpandBoard.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
  ariaId: PropTypes.string.isRequired,
  withAnimation: PropTypes.bool,
  animationMaxHeight: PropTypes.string,
  animationShrinkingDuration: PropTypes.number
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