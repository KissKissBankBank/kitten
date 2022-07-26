import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete';
import { LocationIcon } from '../../../graphics/icons/location-icon';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { TextInput } from '../../../form/input/text-input';
const StyledLocationInput = styled.div.withConfig({
  displayName: "location-input__StyledLocationInput",
  componentId: "sc-d3bomz-0"
})(["position:relative;width:100%;.k-LocationInput__autocomplete{box-sizing:border-box;background-color:", ";border:var(--border-active);border-top:0;position:absolute;z-index:1000;z-index:var(--menu-z-index,1000);width:100%;overflow-y:scroll;&:empty{border:0;}}.k-LocationInput__autocompleteItem,.k-LocationInput__autocompleteItem--active{padding:0 ", ";height:", ";display:flex;align-items:center;font-size:", ";cursor:pointer;color:", ";}.k-LocationInput__autocompleteItem--active{background-color:", ";}.k-LocationInput__autocompleteItem__mainText{", " margin-left:", ";color:", ";}.k-LocationInput__autocompleteItem__secondaryText{", " margin-left:1ch;}.k-LocationInput__loading{padding-left:", ";color:", ";}"], COLORS.background1, pxToRem(12), pxToRem(50), stepToRem(-1), COLORS.font1, COLORS.background3, TYPOGRAPHY.fontStyles['400'], pxToRem(20), COLORS.font1, TYPOGRAPHY.fontStyles['400'], pxToRem(20), COLORS.font2); // Make sure you include a script to the Google Maps places API.
// For example:
//   <script src="https://maps.googleapis.com/maps/api/js?key=…&libraries=places"></script>

export const LocationInput = _ref => {
  let {
    onChange,
    onSelect,
    defaultValue,
    inputProps,
    name,
    loadingText,
    customInputValue,
    id,
    ...others
  } = _ref;
  const [address, updateAddress] = useState(defaultValue);

  const handleChange = returnedAddress => {
    updateAddress(returnedAddress);
    onChange({
      value: returnedAddress,
      name: name
    });
  };

  const handleSelect = (returnedAddress, placeId) => {
    geocodeByPlaceId(placeId).then(results => {
      const place = results[0];

      if (place) {
        updateAddress(returnedAddress);
        onSelect({
          value: returnedAddress,
          placeId,
          place
        });
      }
    });
  };

  return /*#__PURE__*/React.createElement(PlacesAutocomplete, _extends({
    value: customInputValue || address,
    onSelect: handleSelect,
    onChange: handleChange
  }, others), _ref2 => {
    let {
      getInputProps,
      suggestions,
      getSuggestionItemProps,
      loading
    } = _ref2;
    return /*#__PURE__*/React.createElement(StyledLocationInput, {
      className: "k-LocationInput"
    }, /*#__PURE__*/React.createElement(TextInput, _extends({}, getInputProps({ ...inputProps,
      className: classNames('k-LocationInput__input', inputProps == null ? void 0 : inputProps.className)
    }), {
      id: id,
      has: "icon",
      icon: /*#__PURE__*/React.createElement(LocationIcon, null)
    })), /*#__PURE__*/React.createElement("div", {
      className: "k-LocationInput__autocomplete"
    }, loading && /*#__PURE__*/React.createElement("div", {
      className: "k-LocationInput__loading k-LocationInput__autocompleteItem"
    }, loadingText), suggestions.map(suggestion => {
      const className = suggestion.active ? 'k-LocationInput__autocompleteItem--active' : 'k-LocationInput__autocompleteItem';
      return /*#__PURE__*/React.createElement("div", _extends({
        key: suggestion.formattedSuggestion.mainText
      }, getSuggestionItemProps(suggestion, {
        className
      })), /*#__PURE__*/React.createElement("span", {
        className: "k-LocationInput__autocompleteItem__mainText"
      }, suggestion.formattedSuggestion.mainText), ', ', /*#__PURE__*/React.createElement("span", {
        className: "k-LocationInput__autocompleteItem__secondaryText"
      }, suggestion.formattedSuggestion.secondaryText));
    })));
  });
};
LocationInput.defaultProps = {
  onChange: () => {},
  onSelect: () => {},
  defaultValue: '',
  inputProps: {},
  name: 'location-input',
  loadingText: 'Loading...',
  customInputValue: ''
};
LocationInput.propTypes = {
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  defaultValue: PropTypes.string,
  inputProps: PropTypes.object,
  name: PropTypes.string,
  loadingText: PropTypes.string,
  customInputValue: PropTypes.string
};