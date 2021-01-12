import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marger } from '../../../../components/layout/marger';
import { Grid, GridCol } from '../../../../components/grid/grid';
import { StyledLegacyRewardCard } from './styles';
import { RewardCardContent as LegacyRewardCardContent } from './content';
import { RewardCardInfos } from './infos';
import { RewardCardImage } from './image';
import { RewardCardAction, RewardCardActionOnMOrMore } from './action';
import { Deprecated } from '../../../../helpers/utils/deprecated';
import { mediaQueries } from '../../../../hoc/media-queries';
import classNames from 'classnames';

var LegacyRewardCardContainerBase = /*#__PURE__*/function (_Component) {
  _inherits(LegacyRewardCardContainerBase, _Component);

  var _super = _createSuper(LegacyRewardCardContainerBase);

  function LegacyRewardCardContainerBase() {
    var _this;

    _classCallCheck(this, LegacyRewardCardContainerBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.isTinyVersion = function () {
      return _this.props.version === 'tiny' || _this.props.viewportIsMobile;
    };

    _this.isSOrLessVersion = function () {
      return _this.isTinyVersion() || _this.props.viewportIsSOrLess;
    };

    _this.legacyInfos = function () {
      var _this$props = _this.props,
          titleContributors = _this$props.titleContributors,
          titleDelivery = _this$props.titleDelivery,
          titleAvailability = _this$props.titleAvailability,
          valueContributors = _this$props.valueContributors,
          valueDelivery = _this$props.valueDelivery,
          valueAvailability = _this$props.valueAvailability;
      var infos = [];

      if (titleContributors) {
        infos.push({
          label: titleContributors,
          value: valueContributors
        });
      }

      if (titleDelivery) {
        infos.push({
          label: titleDelivery,
          value: valueDelivery
        });
      }

      if (titleAvailability) {
        infos.push({
          label: titleAvailability,
          value: valueAvailability
        });
      }

      return infos;
    };

    return _this;
  }

  _createClass(LegacyRewardCardContainerBase, [{
    key: "render",
    value: function render() {
      // We need to destructure the props to prevent them to hydrate children components.
      var _this$props2 = this.props,
          titleAmount = _this$props2.titleAmount,
          titleTag = _this$props2.titleTag,
          subtitle = _this$props2.subtitle,
          subtitleTag = _this$props2.subtitleTag,
          description = _this$props2.description,
          infos = _this$props2.infos,
          manageContributionDescription = _this$props2.manageContributionDescription,
          manageContributionLinkLabel = _this$props2.manageContributionLinkLabel,
          manageContributionLinkHref = _this$props2.manageContributionLinkHref,
          buttonLabel = _this$props2.buttonLabel,
          buttonOnMouseEnter = _this$props2.buttonOnMouseEnter,
          buttonOnMouseLeave = _this$props2.buttonOnMouseLeave,
          buttonOnClick = _this$props2.buttonOnClick,
          isDisabled = _this$props2.isDisabled,
          starred = _this$props2.starred,
          starLabel = _this$props2.starLabel,
          version = _this$props2.version,
          viewportIsMobile = _this$props2.viewportIsMobile,
          viewportIsSOrLess = _this$props2.viewportIsSOrLess,
          viewportIsTabletOrLess = _this$props2.viewportIsTabletOrLess,
          titleDescription = _this$props2.titleDescription,
          textDescription = _this$props2.textDescription,
          textTag = _this$props2.textTag,
          myContribution = _this$props2.myContribution,
          manageContribution = _this$props2.manageContribution,
          manageContributionLink = _this$props2.manageContributionLink,
          button = _this$props2.button,
          titleContributors = _this$props2.titleContributors,
          titleDelivery = _this$props2.titleDelivery,
          titleAvailability = _this$props2.titleAvailability,
          valueContributors = _this$props2.valueContributors,
          valueDelivery = _this$props2.valueDelivery,
          valueAvailability = _this$props2.valueAvailability,
          imageProps = _this$props2.imageProps,
          others = _objectWithoutProperties(_this$props2, ["titleAmount", "titleTag", "subtitle", "subtitleTag", "description", "infos", "manageContributionDescription", "manageContributionLinkLabel", "manageContributionLinkHref", "buttonLabel", "buttonOnMouseEnter", "buttonOnMouseLeave", "buttonOnClick", "isDisabled", "starred", "starLabel", "version", "viewportIsMobile", "viewportIsSOrLess", "viewportIsTabletOrLess", "titleDescription", "textDescription", "textTag", "myContribution", "manageContribution", "manageContributionLink", "button", "titleContributors", "titleDelivery", "titleAvailability", "valueContributors", "valueDelivery", "valueAvailability", "imageProps"]);

      var shouldDisplayImage = imageProps && imageProps.src;
      var leftColumnProps = this.isTinyVersion() ? null : {
        'col-l': shouldDisplayImage ? 7 : 10,
        'col-s': 7
      };
      var rightColumnProps = this.isTinyVersion() ? null : {
        'col-s': 4,
        'offset-s': 1
      };
      var withImageOnTinyVersion = shouldDisplayImage && this.isTinyVersion();
      if (!titleAmount) return null;
      return /*#__PURE__*/React.createElement(Deprecated, {
        warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
      }, /*#__PURE__*/React.createElement(StyledLegacyRewardCard, _extends({}, others, {
        className: classNames('k-LegacyRewardCard', this.props.className, {
          'k-LegacyRewardCard--tinyVersion': this.isTinyVersion(),
          'k-LegacyRewardCard--sOrLessVersion': this.isSOrLessVersion(),
          'k-LegacyRewardCard--isDisabled': isDisabled
        })
      }), /*#__PURE__*/React.createElement(Marger, {
        bottom: this.isSOrLessVersion() ? 0 : 4,
        top: this.isSOrLessVersion() ? 3 : 4
      }, /*#__PURE__*/React.createElement(Grid, {
        className: "k-LegacyRewardCard__row"
      }, /*#__PURE__*/React.createElement(GridCol, leftColumnProps, titleAmount && /*#__PURE__*/React.createElement(LegacyRewardCardContent, _extends({}, this.props, {
        subtitle: subtitle || titleDescription,
        subtitleTag: subtitleTag || textTag,
        description: description || textDescription,
        isTinyVersion: this.isTinyVersion()
      })), /*#__PURE__*/React.createElement(RewardCardInfos, _extends({
        infos: this.legacyInfos()
      }, this.props, {
        isTinyVersion: this.isTinyVersion(),
        viewportIsTabletOrLess: viewportIsTabletOrLess
      })), !this.isSOrLessVersion() && /*#__PURE__*/React.createElement(RewardCardActionOnMOrMore, _extends({}, this.props, {
        manageContributionDescription: manageContributionDescription || myContribution,
        manageContributionLinkLabel: manageContributionLinkLabel || manageContribution,
        manageContributionLinkHref: manageContributionLinkHref || manageContributionLink,
        buttonLabel: buttonLabel || button,
        isTinyVersion: this.isTinyVersion(),
        isSOrLessVersion: this.isSOrLessVersion()
      }))), shouldDisplayImage && /*#__PURE__*/React.createElement(GridCol, _extends({}, rightColumnProps, {
        className: "LegacyRewardCard__col_image"
      }), /*#__PURE__*/React.createElement(Marger, {
        bottom: !myContribution ? 2 : null
      }, /*#__PURE__*/React.createElement(RewardCardImage, this.props)))), this.isSOrLessVersion() && /*#__PURE__*/React.createElement(RewardCardAction, _extends({}, this.props, {
        manageContributionDescription: manageContributionDescription || myContribution,
        manageContributionLinkLabel: manageContributionLinkLabel || manageContribution,
        manageContributionLinkHref: manageContributionLinkHref || manageContributionLink,
        buttonLabel: buttonLabel || button,
        isTinyVersion: this.isTinyVersion(),
        isSOrLessVersion: this.isSOrLessVersion(),
        topMargin: withImageOnTinyVersion ? 2 : 0
      })))));
    }
  }]);

  return LegacyRewardCardContainerBase;
}(Component);

LegacyRewardCardContainerBase.propTypes = {
  viewportIsMobile: PropTypes.bool,
  viewportIsSOrLess: PropTypes.bool,
  viewportIsTabletOrLess: PropTypes.bool
};
export var LegacyRewardCardContainer = mediaQueries(LegacyRewardCardContainerBase, {
  viewportIsTabletOrLess: true,
  viewportIsSOrLess: true,
  viewportIsMobile: true
});