import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Marger } from '../../../components/layout/marger';
import { Grid, GridCol } from '../../../components/grid/grid';
import { Title as KittenTitle } from '../../../components/typography/title';
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke';
import COLORS from '../../../constants/colors-config';
import { TextInputWithUnitForm } from '../../../components/form/text-input-with-unit-form';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
var StyledCard = styled.div.withConfig({
  displayName: "donation-card__StyledCard",
  componentId: "sc-19h76fz-0"
})(["border-width:", ";border-style:solid;border-color:", ";", ""], pxToRem(2), COLORS.line1, function (_ref) {
  var isDisabled = _ref.isDisabled;
  return isDisabled && css(["filter:grayscale(1) opacity(0.4);cursor:not-allowed;"]);
});
var StyledGrid = styled(Grid).withConfig({
  displayName: "donation-card__StyledGrid",
  componentId: "sc-19h76fz-1"
})(["padding:0 ", ";"], pxToRem(20));
var StyledTitle = styled(function (_ref2) {
  var version = _ref2.version,
      others = _objectWithoutProperties(_ref2, ["version"]);

  return /*#__PURE__*/React.createElement(KittenTitle, others);
}).withConfig({
  displayName: "donation-card__StyledTitle",
  componentId: "sc-19h76fz-2"
})(["color:", ";text-align:center;line-height:1.2;font-size:", ";", ""], COLORS.font1, stepToRem(5), function (_ref3) {
  var version = _ref3.version;
  return version === 'tiny' && css(["font-size:", ";"], stepToRem(4));
});
var StyledHorizontalStroke = styled(HorizontalStroke).withConfig({
  displayName: "donation-card__StyledHorizontalStroke",
  componentId: "sc-19h76fz-3"
})(["margin:0 auto;"]);
export var DonationCard = /*#__PURE__*/function (_PureComponent) {
  _inherits(DonationCard, _PureComponent);

  var _super = _createSuper(DonationCard);

  function DonationCard() {
    _classCallCheck(this, DonationCard);

    return _super.apply(this, arguments);
  }

  _createClass(DonationCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          titleTag = _this$props.titleTag,
          isDisabled = _this$props.isDisabled,
          version = _this$props.version,
          donationForm = _this$props.donationForm;
      return /*#__PURE__*/React.createElement(StyledCard, {
        isDisabled: isDisabled
      }, /*#__PURE__*/React.createElement(Marger, {
        bottom: version === 'tiny' ? 3 : 4,
        top: version === 'tiny' ? 3 : 4
      }, /*#__PURE__*/React.createElement(StyledGrid, null, /*#__PURE__*/React.createElement(GridCol, {
        "col-m": version === 'tiny' ? 0 : 10,
        "offset-m": version === 'tiny' ? 0 : 1,
        "col-l": version === 'tiny' ? 0 : 8,
        "offset-l": version === 'tiny' ? 0 : 2
      }, /*#__PURE__*/React.createElement(Marger, {
        bottom: "2"
      }, /*#__PURE__*/React.createElement(StyledTitle, {
        margin: false,
        tag: titleTag
      }, title)), /*#__PURE__*/React.createElement(Marger, {
        top: "2",
        bottom: "3"
      }, /*#__PURE__*/React.createElement(StyledHorizontalStroke, {
        size: "big"
      })), /*#__PURE__*/React.createElement(TextInputWithUnitForm, _extends({}, donationForm, {
        align: "center",
        version: version
      }))))));
    }
  }]);

  return DonationCard;
}(PureComponent);
DonationCard.propTypes = {
  title: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
  version: PropTypes.oneOf(['default', 'tiny']),
  isDisabled: PropTypes.bool,
  donationForm: PropTypes.shape({
    inputUnit: PropTypes.string,
    inputLabel: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputIsOnError: PropTypes.bool,
    errorMessage: PropTypes.string,
    buttonLabel: PropTypes.string
  })
};
DonationCard.defaultProps = {
  titleTag: 'h2',
  version: 'default',
  isDisabled: false,
  donationForm: {
    inputUnit: '€',
    inputLabel: 'Enter your amount',
    inputPlaceholder: 'Enter your amount',
    inputIsOnError: true,
    errorMessage: 'lorem ipsum dolor sit amet',
    buttonLabel: 'Choose'
  }
};