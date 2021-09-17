"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LocationInput = void 0;

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.array.map.js");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactPlacesAutocomplete = _interopRequireWildcard(require("react-places-autocomplete"));

var _locationIcon = require("../../../components/graphics/icons/location-icon");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _excluded = ["onChange", "onSelect", "defaultValue", "inputProps", "name", "loadingText", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledLocationInput = _styledComponents.default.div.withConfig({
  displayName: "location-input__StyledLocationInput",
  componentId: "sc-1aqtnfv-0"
})(["position:relative;width:100%;.k-LocationInput__input{", " font-size:", ";line-height:1.3;position:relative;display:block;box-sizing:border-box;padding:0 ", " 0 ", ";width:100%;height:", ";background:", ";border:", " solid ", ";border-radius:0;color:", ";transition:color 0.2s,border-color 0.2s;&::placeholder{color:", ";}&:focus{color:", ";border-color:", ";outline:", " solid ", ";outline-offset:", ";}&:disabled{border-color:", ";background-color:", ";color:", ";cursor:not-allowed;&::placeholder{opacity:1;}}&.k-LocationInput__input--orion{border-radius:", ";}}.k-LocationInput__autocomplete{box-sizing:border-box;background-color:", ";border:", " solid ", ";border-top:0;position:absolute;z-index:1000;z-index:var(--menu-z-index,1000);width:100%;overflow-y:scroll;&:empty{border:0;}}.k-LocationInput__autocompleteItem,.k-LocationInput__autocompleteItem--active{padding:0 ", ";height:", ";display:flex;align-items:center;font-size:", ";cursor:pointer;color:", ";}.k-LocationInput__autocompleteItem--active{background-color:", ";}.k-LocationInput__autocompleteItem__mainText{", " margin-left:", ";color:", ";}.k-LocationInput__autocompleteItem__secondaryText{", " margin-left:1ch;}.k-LocationInput__loading{padding-left:", ";color:", ";}.k-LocationInput__icon{position:absolute;z-index:1;top:", ";left:", ";}"], _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(35), (0, _typography.pxToRem)(50), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.font1, _colorsConfig.default.font2, _colorsConfig.default.font1, _colorsConfig.default.line2, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.line1, _colorsConfig.default.font2, (0, _typography.pxToRem)(4), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(50), (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.background3, _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(20), _colorsConfig.default.font1, _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(20), _colorsConfig.default.font2, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15)); // Make sure you include a script to the Google Maps places API.
// For example:
//   <script src="https://maps.googleapis.com/maps/api/js?key=…&libraries=places"></script>


var LocationInput = function LocationInput(_ref) {
  var onChange = _ref.onChange,
      onSelect = _ref.onSelect,
      defaultValue = _ref.defaultValue,
      inputProps = _ref.inputProps,
      name = _ref.name,
      loadingText = _ref.loadingText,
      variant = _ref.variant,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(defaultValue),
      address = _useState[0],
      updateAddress = _useState[1];

  var handleChange = function handleChange(returnedAddress) {
    updateAddress(returnedAddress);
    onChange({
      value: returnedAddress,
      name: name
    });
  };

  var handleSelect = function handleSelect(returnedAddress, placeId) {
    (0, _reactPlacesAutocomplete.geocodeByPlaceId)(placeId).then(function (results) {
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

  return /*#__PURE__*/_react.default.createElement(_reactPlacesAutocomplete.default, (0, _extends2.default)({
    value: address,
    onSelect: handleSelect,
    onChange: handleChange
  }, others), function (_ref2) {
    var getInputProps = _ref2.getInputProps,
        suggestions = _ref2.suggestions,
        getSuggestionItemProps = _ref2.getSuggestionItemProps,
        loading = _ref2.loading;
    return /*#__PURE__*/_react.default.createElement(StyledLocationInput, {
      className: "k-LocationInput"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "k-LocationInput__icon"
    }, /*#__PURE__*/_react.default.createElement(_locationIcon.LocationIcon, null)), /*#__PURE__*/_react.default.createElement("input", getInputProps(Object.assign({}, inputProps, {
      className: (0, _classnames.default)('k-LocationInput__input', inputProps == null ? void 0 : inputProps.className, "k-LocationInput__input--" + variant)
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "k-LocationInput__autocomplete"
    }, loading && /*#__PURE__*/_react.default.createElement("div", {
      className: "k-LocationInput__loading k-LocationInput__autocompleteItem"
    }, loadingText), suggestions.map(function (suggestion) {
      var className = suggestion.active ? 'k-LocationInput__autocompleteItem--active' : 'k-LocationInput__autocompleteItem';
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        key: suggestion.formattedSuggestion.mainText
      }, getSuggestionItemProps(suggestion, {
        className: className
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
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  defaultValue: '',
  inputProps: {},
  name: 'location-input',
  loadingText: 'Loading...',
  variant: 'andromeda'
};
LocationInput.propTypes = {
  onChange: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  defaultValue: _propTypes.default.string,
  inputProps: _propTypes.default.object,
  name: _propTypes.default.string,
  loadingText: _propTypes.default.string,
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};