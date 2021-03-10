import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Marger } from '../../../components/layout/marger';
import { GarbageIcon } from '../../../components/icons/garbage-icon';
import { ButtonIcon } from '../../../components/buttons/button-icon';
import { Title } from '../../../components/typography/title';
import { Text } from '../../../components/typography/text';
import { Paragraph } from '../../../components/typography/paragraph/next';
import COLORS from '../../../constants/colors-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { domElementHelper } from '../../../helpers/dom/element-helper';
import { pxToRem } from '../../../helpers/utils/typography';
import deprecated from 'prop-types-extra/lib/deprecated';
import classNames from 'classnames';
var garbageButtonKeyframes = keyframes(["0%{opacity:1;}100%{opacity:0;height:0;}"]);
var borderWidth = 2;
var StyledCartRewardCard = styled.div.withConfig({
  displayName: "cart-reward-card__StyledCartRewardCard",
  componentId: "sc-1ggr5k8-0"
})(["border-width:", ";border-style:solid;border-color:", ";height:", ";&.k-CartRewardCard--hidden{animation:", " 0.4s cubic-bezier(0.895,0.03,0.685,0.22) forwards;pointer-events:none;opacity:1;}.k-CartRewardCard__description{margin-left:", ";margin-right:", ";max-width:", ";@media (min-width:", "){margin-left:", ";margin-right:", ";}}.k-CartRewardCard__cart{display:flex;flex-direction:row;justify-content:flex-end;}.k-CartRewardCard__garbage{position:relative;top:", ";right:", ";}"], pxToRem(borderWidth), COLORS.line1, function (_ref) {
  var elementHeight = _ref.elementHeight;
  return pxToRem(elementHeight);
}, garbageButtonKeyframes, pxToRem(20), pxToRem(20), pxToRem(500), pxToRem(ScreenConfig.S.min), pxToRem(40), pxToRem(40), pxToRem(-borderWidth), pxToRem(-borderWidth));
export var CartRewardCard = /*#__PURE__*/function (_Component) {
  _inherits(CartRewardCard, _Component);

  var _super = _createSuper(CartRewardCard);

  function CartRewardCard(props) {
    var _this;

    _classCallCheck(this, CartRewardCard);

    _this = _super.call(this, props);

    _this.handleCloseClick = function () {
      if (_this.props.onCloseClick) {
        _this.props.onCloseClick();
      } else {
        _this.close();
      }
    };

    _this.handleAnimationEnd = function () {
      _this.props.onAfterClose();
    };

    _this.close = function () {
      _this.setState({
        isHidden: true,
        // The css animation on the garbage button requires a fixed height.
        height: domElementHelper.getComputedHeight(_this.container)
      });
    };

    _this.state = {
      isHidden: false,
      height: 'auto'
    };
    return _this;
  }

  _createClass(CartRewardCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(StyledCartRewardCard, {
        ref: function ref(div) {
          _this2.container = div;
        },
        onAnimationEnd: this.handleAnimationEnd,
        className: classNames('k-CartRewardCard', {
          'k-CartRewardCard--hidden': this.state.isHidden
        }),
        elementHeight: this.state.height
      }, this.renderGarbage(), this.renderDescription());
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      var _this$props = this.props,
          titleTag = _this$props.titleTag,
          titleAmount = _this$props.titleAmount,
          subtitle = _this$props.subtitle,
          descriptionTag = _this$props.descriptionTag,
          children = _this$props.children,
          textDescription = _this$props.textDescription;
      var description = React.Children.toArray(children).filter(function (child) {
        return child.type === CartRewardCard.Description;
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "k-u-margin-bottom-quadruple k-CartRewardCard__description"
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames('k-u-margin-bottom-double', {
          'k-u-margin-bottom-single@xs-down': !subtitle
        })
      }, /*#__PURE__*/React.createElement(Title, {
        italic: true,
        modifier: "quinary",
        noMargin: true,
        tag: titleTag
      }, titleAmount)), subtitle && /*#__PURE__*/React.createElement("div", {
        className: "k-u-margin-bottom-single k-u-margin-top-double"
      }, /*#__PURE__*/React.createElement(Text, {
        weight: "bold",
        size: "default"
      }, subtitle)), /*#__PURE__*/React.createElement("div", {
        className: classNames('k-u-margin-bottom-double', 'k-u-margin-top-double', {
          'k-u-margin-top-single@xs-down': !subtitle
        })
      }, /*#__PURE__*/React.createElement(Paragraph, {
        tag: descriptionTag,
        noMargin: true,
        modifier: "tertiary"
      }, textDescription, description)), this.renderBottomContent());
    }
  }, {
    key: "renderGarbage",
    value: function renderGarbage() {
      return /*#__PURE__*/React.createElement("div", {
        className: "k-CartRewardCard__cart"
      }, /*#__PURE__*/React.createElement(ButtonIcon, {
        type: "button",
        "aria-label": this.props.deleteButtonA11yText,
        modifier: "hydrogen",
        size: "micro",
        onClick: this.handleCloseClick,
        className: "k-CartRewardCard__garbage"
      }, /*#__PURE__*/React.createElement(GarbageIcon, {
        "aria-hidden": true,
        className: "k-ButtonIcon__svg"
      })));
    }
  }, {
    key: "renderBottomContent",
    value: function renderBottomContent() {
      var _this$props2 = this.props,
          shippingTitle = _this$props2.shippingTitle,
          shippingValue = _this$props2.shippingValue,
          updateAmountTitle = _this$props2.updateAmountTitle,
          updateAmountLink = _this$props2.updateAmountLink,
          children = _this$props2.children;
      var informationElements = React.Children.toArray(children).filter(function (child) {
        return child.type === CartRewardCard.Information;
      });
      return /*#__PURE__*/React.createElement(React.Fragment, null, shippingTitle && shippingValue && /*#__PURE__*/React.createElement(Marger, {
        top: "2"
      }, /*#__PURE__*/React.createElement(CartRewardCard.Information, {
        title: shippingTitle,
        value: shippingValue
      })), informationElements, updateAmountTitle && /*#__PURE__*/React.createElement(Marger, {
        top: "2"
      }, /*#__PURE__*/React.createElement(Text, {
        tag: "a",
        href: updateAmountLink,
        color: "primary1",
        decoration: "none",
        weight: "regular",
        size: "tiny"
      }, updateAmountTitle)));
    }
  }]);

  return CartRewardCard;
}(Component);
CartRewardCard.propTypes = {
  titleAmount: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
  subtitle: PropTypes.string,
  descriptionTag: PropTypes.string,
  updateAmountTitle: PropTypes.string,
  updateAmountLink: PropTypes.string,
  onAfterClose: PropTypes.func,
  onCloseClick: PropTypes.func,
  deleteButtonA11yText: PropTypes.string,
  // Deprecated.
  shippingTitle: deprecated(PropTypes.string, 'Prefer use <CartRewardCard.Information />'),
  shippingValue: deprecated(PropTypes.string, 'Prefer use <CartRewardCard.Information />'),
  textDescription: deprecated(PropTypes.string, 'Prefer use <CartRewardCard.Description />')
};
CartRewardCard.defaultProps = {
  titleTag: 'h1',
  subtitle: '',
  descriptionTag: 'p',
  updateAmountTitle: '',
  updateAmountLink: '',
  onAfterClose: function onAfterClose() {},
  onCloseClick: null,
  deleteButtonA11yText: 'Delete'
};

CartRewardCard.Information = function (_ref2) {
  var title = _ref2.title,
      value = _ref2.value;
  return /*#__PURE__*/React.createElement(Text, {
    weight: "regular",
    size: "tiny",
    tag: "p",
    className: "k-u-margin-none"
  }, title, " ", /*#__PURE__*/React.createElement(Text, {
    weight: "light"
  }, value));
};

CartRewardCard.Information.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

CartRewardCard.Description = function (_ref3) {
  var children = _ref3.children;
  return children;
};