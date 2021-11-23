import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete';
import { LocationIcon } from '../../../components/graphics/icons/location-icon';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
var StyledLocationInput = styled.div.withConfig({
  displayName: "location-input__StyledLocationInput",
  componentId: "sc-1aqtnfv-0"
})(["position:relative;width:100%;.k-LocationInput__input{", " font-size:", ";line-height:1.3;position:relative;display:block;box-sizing:border-box;padding:0 ", " 0 ", ";width:100%;height:", ";background:", ";border:var(--border);border-radius:0;color:", ";transition:color 0.2s,border-color 0.2s;&::placeholder{color:", ";}&:hover{border:var(--border-hover);}&:focus{color:", ";outline:var(--outline-input);outline-offset:var(--outline-offset-input);}&:disabled{border:var(--border-disabled);background-color:", ";color:", ";cursor:not-allowed;&::placeholder{opacity:1;}}&.k-LocationInput__input--orion{border-radius:", ";}}.k-LocationInput__autocomplete{box-sizing:border-box;background-color:", ";border:var(--border-active);border-top:0;position:absolute;z-index:1000;z-index:var(--menu-z-index,1000);width:100%;overflow-y:scroll;&:empty{border:0;}}.k-LocationInput__autocompleteItem,.k-LocationInput__autocompleteItem--active{padding:0 ", ";height:", ";display:flex;align-items:center;font-size:", ";cursor:pointer;color:", ";}.k-LocationInput__autocompleteItem--active{background-color:", ";}.k-LocationInput__autocompleteItem__mainText{", " margin-left:", ";color:", ";}.k-LocationInput__autocompleteItem__secondaryText{", " margin-left:1ch;}.k-LocationInput__loading{padding-left:", ";color:", ";}.k-LocationInput__icon{position:absolute;z-index:1;top:", ";left:", ";}"], TYPOGRAPHY.fontStyles.light, stepToRem(-1), pxToRem(15), pxToRem(35), pxToRem(50), COLORS.background1, COLORS.font1, COLORS.font2, COLORS.font1, COLORS.line1, COLORS.font2, pxToRem(4), COLORS.background1, pxToRem(12), pxToRem(50), stepToRem(-1), COLORS.font1, COLORS.background3, TYPOGRAPHY.fontStyles.light, pxToRem(20), COLORS.font1, TYPOGRAPHY.fontStyles.light, pxToRem(20), COLORS.font2, pxToRem(15), pxToRem(15)); // Make sure you include a script to the Google Maps places API.
// For example:
//   <script src="https://maps.googleapis.com/maps/api/js?key=…&libraries=places"></script>

export var LocationInput = function LocationInput(_ref) {
  var onChange = _ref.onChange,
      onSelect = _ref.onSelect,
      defaultValue = _ref.defaultValue,
      inputProps = _ref.inputProps,
      name = _ref.name,
      loadingText = _ref.loadingText,
      variant = _ref.variant,
      others = _objectWithoutProperties(_ref, ["onChange", "onSelect", "defaultValue", "inputProps", "name", "loadingText", "variant"]);

  var _useState = useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      address = _useState2[0],
      updateAddress = _useState2[1];

  var handleChange = function handleChange(returnedAddress) {
    updateAddress(returnedAddress);
    onChange({
      value: returnedAddress,
      name: name
    });
  };

  var handleSelect = function handleSelect(returnedAddress, placeId) {
    geocodeByPlaceId(placeId).then(function (results) {
      var place = results[0];

      if (place) {
        updateAddress(returnedAddress);
        onSelect({
          value: returnedAddress,
          placeId: placeId,
          place: place
        });
      }
    });
  };

  return /*#__PURE__*/React.createElement(PlacesAutocomplete, _extends({
    value: address,
    onSelect: handleSelect,
    onChange: handleChange
  }, others), function (_ref2) {
    var getInputProps = _ref2.getInputProps,
        suggestions = _ref2.suggestions,
        getSuggestionItemProps = _ref2.getSuggestionItemProps,
        loading = _ref2.loading;
    return /*#__PURE__*/React.createElement(StyledLocationInput, {
      className: "k-LocationInput"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-LocationInput__icon"
    }, /*#__PURE__*/React.createElement(LocationIcon, null)), /*#__PURE__*/React.createElement("input", getInputProps(_extends({}, inputProps, {
      className: classNames('k-LocationInput__input', inputProps === null || inputProps === void 0 ? void 0 : inputProps.className, "k-LocationInput__input--".concat(variant))
    }))), /*#__PURE__*/React.createElement("div", {
      className: "k-LocationInput__autocomplete"
    }, loading && /*#__PURE__*/React.createElement("div", {
      className: "k-LocationInput__loading k-LocationInput__autocompleteItem"
    }, loadingText), suggestions.map(function (suggestion) {
      var className = suggestion.active ? 'k-LocationInput__autocompleteItem--active' : 'k-LocationInput__autocompleteItem';
      return /*#__PURE__*/React.createElement("div", _extends({
        key: suggestion.formattedSuggestion.mainText
      }, getSuggestionItemProps(suggestion, {
        className: className
      })), /*#__PURE__*/React.createElement("span", {
        className: "k-LocationInput__autocompleteItem__mainText"
      }, suggestion.formattedSuggestion.mainText), ', ', /*#__PURE__*/React.createElement("span", {
        className: "k-LocationInput__autocompleteItem__secondaryText"
      }, suggestion.formattedSuggestion.secondaryText));
    })));
  });
};
LocationInput.defaultProps = {
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  defaultValue: '',
  inputProps: {},
  name: 'location-input',
  loadingText: 'Loading...',
  variant: 'orion'
};
LocationInput.propTypes = {
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  defaultValue: PropTypes.string,
  inputProps: PropTypes.object,
  name: PropTypes.string,
  loadingText: PropTypes.string,
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};