import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridCol } from '../../../../components/grid/grid';
import { Text } from '../../../../components/typography/text';
import { RewardCardCheckedIcon } from './checked-icon';
import { Deprecated } from '../../../../helpers/utils/deprecated';
export var ManageContribution = function ManageContribution(_ref) {
  var description = _ref.description,
      linkLabel = _ref.linkLabel,
      linkHref = _ref.linkHref,
      isDisabled = _ref.isDisabled,
      isTinyVersion = _ref.isTinyVersion,
      isSOrLessVersion = _ref.isSOrLessVersion;
  if (!description) return null;
  if (isTinyVersion && isDisabled) return null;
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/React.createElement(Fragment, null, isSOrLessVersion && /*#__PURE__*/React.createElement(Grid, {
    className: "k-LegacyRewardCard__choiceButton"
  }, /*#__PURE__*/React.createElement(GridCol, null, /*#__PURE__*/React.createElement("div", {
    className: "k-LegacyRewardCard__myContribution"
  }, /*#__PURE__*/React.createElement(RewardCardCheckedIcon, null), /*#__PURE__*/React.createElement("div", {
    className: "k-LegacyRewardCard__myContribution__text"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "font1",
    size: "tiny",
    weight: "regular"
  }, description, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Text, {
    tag: "a",
    href: linkHref,
    color: "primary1",
    weight: "regular",
    decoration: "none"
  }, linkLabel)))))), !isSOrLessVersion && /*#__PURE__*/React.createElement("div", {
    className: "k-LegacyRewardCard__myContribution"
  }, /*#__PURE__*/React.createElement(RewardCardCheckedIcon, null), /*#__PURE__*/React.createElement("div", {
    className: "k-LegacyRewardCard__myContribution__text"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "font1",
    size: "tiny",
    weight: "regular"
  }, description, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Text, {
    tag: "a",
    href: linkHref,
    color: "primary1",
    weight: "regular",
    decoration: "none"
  }, linkLabel))))));
};
ManageContribution.propTypes = {
  description: PropTypes.string,
  linkLabel: PropTypes.string,
  linkHref: PropTypes.string,
  isDisabled: PropTypes.bool,
  isTinyVersion: PropTypes.bool.isRequired,
  isSOrLessVersion: PropTypes.bool.isRequired
};
ManageContribution.defaultProps = {
  description: '',
  linkLabel: '',
  linkHref: '',
  isDisabled: false
};