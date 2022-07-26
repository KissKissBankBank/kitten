"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LocationInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactPlacesAutocomplete = _interopRequireWildcard(require("react-places-autocomplete"));

var _locationIcon = require("../../../graphics/icons/location-icon");

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _textInput = require("../../../form/input/text-input");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledLocationInput = _styledComponents.default.div.withConfig({
  displayName: "location-input__StyledLocationInput",
  componentId: "sc-d3bomz-0"
})(["position:relative;width:100%;.k-LocationInput__autocomplete{box-sizing:border-box;background-color:", ";border:var(--border-active);border-top:0;position:absolute;z-index:1000;z-index:var(--menu-z-index,1000);width:100%;overflow-y:scroll;&:empty{border:0;}}.k-LocationInput__autocompleteItem,.k-LocationInput__autocompleteItem--active{padding:0 ", ";height:", ";display:flex;align-items:center;font-size:", ";cursor:pointer;color:", ";}.k-LocationInput__autocompleteItem--active{background-color:", ";}.k-LocationInput__autocompleteItem__mainText{", " margin-left:", ";color:", ";}.k-LocationInput__autocompleteItem__secondaryText{", " margin-left:1ch;}.k-LocationInput__loading{padding-left:", ";color:", ";}"], _colorsConfig.default.background1, (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(50), (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.background3, _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(20), _colorsConfig.default.font1, _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(20), _colorsConfig.default.font2); // Make sure you include a script to the Google Maps places API.
// For example:
//   <script src="https://maps.googleapis.com/maps/api/js?key=…&libraries=places"></script>


const LocationInput = _ref => {
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
  const [address, updateAddress] = (0, _react.useState)(defaultValue);

  const handleChange = returnedAddress => {
    updateAddress(returnedAddress);
    onChange({
      value: returnedAddress,
      name: name
    });
  };

  const handleSelect = (returnedAddress, placeId) => {
    (0, _reactPlacesAutocomplete.geocodeByPlaceId)(placeId).then(results => {
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

  return /*#__PURE__*/_react.default.createElement(_reactPlacesAutocomplete.default, (0, _extends2.default)({
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
    return /*#__PURE__*/_react.default.createElement(StyledLocationInput, {
      className: "k-LocationInput"
    }, /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({}, getInputProps({ ...inputProps,
      className: (0, _classnames.default)('k-LocationInput__input', inputProps == null ? void 0 : inputProps.className)
    }), {
      id: id,
      has: "icon",
      icon: /*#__PURE__*/_react.default.createElement(_locationIcon.LocationIcon, null)
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "k-LocationInput__autocomplete"
    }, loading && /*#__PURE__*/_react.default.createElement("div", {
      className: "k-LocationInput__loading k-LocationInput__autocompleteItem"
    }, loadingText), suggestions.map(suggestion => {
      const className = suggestion.active ? 'k-LocationInput__autocompleteItem--active' : 'k-LocationInput__autocompleteItem';
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        key: suggestion.formattedSuggestion.mainText
      }, getSuggestionItemProps(suggestion, {
        className
      })), /*#__PURE__*/_react.default.createElement("span", {
        className: "k-LocationInput__autocompleteItem__mainText"
      }, suggestion.formattedSuggestion.mainText), ', ', /*#__PURE__*/_react.default.createElement("span", {
        className: "k-LocationInput__autocompleteItem__secondaryText"
      }, suggestion.formattedSuggestion.secondaryText));
    })));
  });
};

exports.LocationInput = LocationInput;
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
  onChange: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  defaultValue: _propTypes.default.string,
  inputProps: _propTypes.default.object,
  name: _propTypes.default.string,
  loadingText: _propTypes.default.string,
  customInputValue: _propTypes.default.string
};