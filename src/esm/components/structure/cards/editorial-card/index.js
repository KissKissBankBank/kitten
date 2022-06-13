import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "status", "customColor", "hasArrow", "href", "style", "linkActionText", "showVersoActionText", "linkProps"],
    _excluded2 = ["className", "children"],
    _excluded3 = ["className"],
    _excluded4 = ["className", "actionText", "children"];
import React, { useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Title as KittenTitle } from '../../../typography/title';
import { Text } from '../../../typography/text';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { mq } from '../../../../constants/screen-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { LongArrowIconNext } from '../../../graphics/icons-next/long-arrow-icon-next';
import { getReactElementsByType, getReactElementsWithoutType } from '../../../../helpers/react/get-react-elements';
var StyledEditorialCard = styled.div.withConfig({
  displayName: "editorial-card__StyledEditorialCard",
  componentId: "sc-r7owgx-0"
})(["box-sizing:border-box;height:100%;position:relative;color:var(--color-grey-000);border-radius:var(--border-radius-m);overflow:hidden;font-size:var(--font-size-3);line-height:", ";.k-EditorialCard__grid{height:100%;display:grid;grid-template-columns:100%;transition:transform var(--transition);}&.k-EditorialCard--hasVerso .k-EditorialCard__grid{grid-template-columns:repeat(2,100%);}&:not(.k-EditorialCard--isRecto) .k-EditorialCard__grid{transform:translateX(-100%);}.k-EditorialCard__recto,.k-EditorialCard__verso{box-sizing:border-box;height:100%;padding:", ";display:flex;flex-direction:column;}@media ", "{font-size:var(--font-size-4);line-height:", ";}.k-EditorialCard__recto{", "}.k-EditorialCard__verso{", "}.k-EditorialCard__content{flex:1 1 auto;p{margin:0;& + p{margin-top:1em;}}}.k-EditorialCard__action{position:absolute;top:0;left:0;width:100%;height:100%;}.k-EditorialCard__arrow{margin-top:", ";align-self:end;@media ", "{transform:none !important;}}&.k-EditorialCard--info{background-color:var(--color-primary-500);}&.k-EditorialCard--success{background-color:var(--color-success-500);}&.k-EditorialCard--custom{background-color:var(--editorialCard-customColor);}"], pxToRem(18), pxToRem(30), mq.tabletAndDesktop, pxToRem(20), TYPOGRAPHY.fontStyles['500'], TYPOGRAPHY.fontStyles['400'], pxToRem(20), mq.mobile);
export var EditorialCard = function EditorialCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      status = _ref.status,
      customColor = _ref.customColor,
      hasArrow = _ref.hasArrow,
      href = _ref.href,
      style = _ref.style,
      linkActionText = _ref.linkActionText,
      showVersoActionText = _ref.showVersoActionText,
      linkProps = _ref.linkProps,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(true),
      isRecto = _useState[0],
      setIsVerso = _useState[1];

  var VersoChild = getReactElementsByType({
    children: children,
    type: Verso
  })[0];
  var hasVerso = !!VersoChild;
  var Action = 'a';

  var actionProps = _extends({
    className: 'k-EditorialCard__action',
    href: href,
    'aria-label': linkActionText
  }, linkProps);

  if (hasVerso && isRecto) {
    Action = 'button';
    actionProps = _extends({
      className: 'k-EditorialCard__action k-u-reset-button',
      type: 'button',
      onClick: function onClick(e) {
        setIsVerso(false);
        linkProps.onClick(e);
      },
      'aria-label': showVersoActionText
    }, linkProps);
  }

  return /*#__PURE__*/React.createElement(StyledEditorialCard, _extends({
    className: classNames('k-EditorialCard', className, "k-EditorialCard--" + status, {
      'k-EditorialCard--hasArrow': hasArrow,
      'k-EditorialCard--hasVerso': hasVerso,
      'k-EditorialCard--isRecto': isRecto,
      'k-EditorialCard--isVerso': !isRecto
    }),
    style: _extends({
      '--editorialCard-customColor': !!customColor ? customColor : null
    }, style)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-EditorialCard__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-EditorialCard__recto"
  }, getReactElementsWithoutType({
    children: children,
    type: Verso
  }), !!hasArrow && /*#__PURE__*/React.createElement(LongArrowIconNext, {
    className: "k-EditorialCard__arrow",
    color: "var(--color-grey-000)"
  })), hasVerso && VersoChild), /*#__PURE__*/React.createElement(Action, actionProps));
};
EditorialCard.propTypes = {
  status: PropTypes.oneOf(['info', 'success', 'custom']),
  customColor: PropTypes.string,
  hasArrow: PropTypes.bool,
  linkActionText: PropTypes.string,
  showVersoActionText: PropTypes.string,
  linkProps: PropTypes.object
};
EditorialCard.defaultProps = {
  status: 'info',
  customColor: '',
  hasArrow: true,
  linkActionText: 'Voir tous les projets',
  showVersoActionText: 'Plus de précisions',
  linkProps: {}
};

var Title = function Title(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(KittenTitle, _extends({
    modifier: "tertiary",
    cssColor: "inherit",
    noMargin: true,
    className: classNames('k-EditorialCard__title', className)
  }, props), children, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "-"));
};

var Content = function Content(_ref3) {
  var className = _ref3.className,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-EditorialCard__content', className)
  }, props));
};

var Verso = function Verso(_ref4) {
  var className = _ref4.className,
      actionText = _ref4.actionText,
      children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-EditorialCard__verso', className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-EditorialCard__content"
  }, children), /*#__PURE__*/React.createElement(Text, {
    className: "k-EditorialCard__actionText k-u-m-t-8",
    weight: "700"
  }, actionText));
};

EditorialCard.Title = Title;
EditorialCard.Content = Content;
EditorialCard.Verso = Verso;