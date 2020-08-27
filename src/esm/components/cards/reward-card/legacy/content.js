import React from 'react';
import PropTypes from 'prop-types';
import { Marger } from '../../../../components/layout/marger';
import { Title } from '../../../../components/typography/title';
import { Button } from '../../../../components/buttons/button';
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke';
import { Paragraph } from '../../../../components/typography/paragraph';
import { Text } from '../../../../components/typography/text';
import { StarIcon } from '../../../../components/icons/star-icon';
import { Deprecated } from '../../../../helpers/utils/deprecated';
export var RewardCardContent = function RewardCardContent(_ref) {
  var titleAmount = _ref.titleAmount,
      titleTag = _ref.titleTag,
      subtitle = _ref.subtitle,
      subtitleTag = _ref.subtitleTag,
      description = _ref.description,
      starred = _ref.starred,
      starLabel = _ref.starLabel,
      isDisabled = _ref.isDisabled,
      isTinyVersion = _ref.isTinyVersion;
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/React.createElement("div", {
    className: isDisabled ? 'k-LegacyRewardCard__element--disabled' : null
  }, starred && /*#__PURE__*/React.createElement(Marger, {
    bottom: "2"
  }, /*#__PURE__*/React.createElement(Button, {
    icon: true,
    readonly: true,
    tag: "span",
    size: "tiny",
    modifier: "lithium",
    style: {
      borderRadius: 5
    }
  }, /*#__PURE__*/React.createElement(StarIcon, {
    className: "k-Button__icon is-readonly"
  }), starLabel)), /*#__PURE__*/React.createElement(Marger, {
    top: starred ? 2 : 0,
    bottom: "2"
  }, /*#__PURE__*/React.createElement(Title, {
    modifier: isTinyVersion ? 'quaternary' : 'tertiary',
    italic: true,
    margin: false,
    tag: titleTag,
    className: "k-u-color-font1"
  }, titleAmount)), /*#__PURE__*/React.createElement(Marger, {
    top: "2",
    bottom: "3"
  }, /*#__PURE__*/React.createElement(HorizontalStroke, {
    size: "big"
  })), subtitle && /*#__PURE__*/React.createElement(Marger, {
    top: "3",
    bottom: "1"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "font1",
    size: isTinyVersion ? 'big' : 'huge',
    tag: subtitleTag,
    weight: "bold",
    className: "k-u-margin-none"
  }, subtitle)), /*#__PURE__*/React.createElement(Marger, {
    top: !subtitle ? 3 : 1
  }, /*#__PURE__*/React.createElement(Paragraph, {
    className: "k-u-color-font1",
    modifier: isTinyVersion ? 'quaternary' : 'tertiary',
    margin: false
  }, description))));
};
RewardCardContent.propTypes = {
  titleAmount: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleTag: PropTypes.string,
  description: PropTypes.string,
  starred: PropTypes.bool,
  starLabel: PropTypes.string,
  isDisabled: PropTypes.bool,
  isTinyVersion: PropTypes.bool.isRequired
};
RewardCardContent.defaultProps = {
  titleTag: 'h1',
  subtitle: '',
  subtitleTag: 'p',
  description: '',
  starred: false,
  starLabel: '',
  isDisabled: false
};