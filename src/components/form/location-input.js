"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactPlacesAutocomplete = _interopRequireWildcard(require("react-places-autocomplete"));

var _locationIcon = require("kitten/components/icons/location-icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Make sure you include a script to the Google Maps places API.
// For example:
//   <script src="https://maps.googleapis.com/maps/api/js?key=…&libraries=places"></script>
var LocationInput =
/*#__PURE__*/
function (_Component) {
  _inherits(LocationInput, _Component);

  function LocationInput(props) {
    var _this;

    _classCallCheck(this, LocationInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LocationInput).call(this, props));
    _this.state = {
      address: _this.props.defaultValue
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LocationInput, [{
    key: "handleChange",
    value: function handleChange(address) {
      this.setState({
        address: address
      });
      this.props.onChange({
        value: address,
        name: this.props.name
      });
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(address, placeId) {
      var _this2 = this;

      (0, _reactPlacesAutocomplete.geocodeByPlaceId)(placeId).then(function (results) {
        var place = results[0];

        if (place) {
          _this2.setState({
            address: address
          });

          _this2.props.onSelect({
            value: address,
            placeId: placeId,
            place: place
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          onSelect = _this$props.onSelect,
          defaultValue = _this$props.defaultValue,
          inputProps = _this$props.inputProps,
          others = _objectWithoutProperties(_this$props, ["onChange", "onSelect", "defaultValue", "inputProps"]);

      var placesClassNames = {
        root: 'k-LocationInput__group',
        input: 'k-LocationInput__input',
        autocompleteContainer: 'k-LocationInput__autocomplete',
        autocompleteItem: 'k-LocationInput__autocompleteItem',
        autocompleteItemActive: 'k-LocationInput__autocompleteItem--active'
      };

      var autocompleteItem = function autocompleteItem(_ref) {
        var formattedSuggestion = _ref.formattedSuggestion;
        return _react.default.createElement("div", null, _react.default.createElement(_locationIcon.LocationIcon, {
          width: "12px",
          height: "15px"
        }), _react.default.createElement("span", {
          className: "k-LocationInput__autocompleteItem__mainText"
        }, formattedSuggestion.mainText), ' ', _react.default.createElement("span", {
          className: "k-LocationInput__autocompleteItem__secondaryText"
        }, formattedSuggestion.secondaryText));
      };

      var finalInputProps = _objectSpread({}, inputProps, {
        value: this.state.address,
        onChange: this.handleChange
      });

      return _react.default.createElement("div", {
        className: "k-LocationInput"
      }, _react.default.createElement("div", {
        className: "k-LocationInput__icon"
      }, _react.default.createElement(_locationIcon.LocationIcon, null)), _react.default.createElement(_reactPlacesAutocomplete.default, _extends({
        classNames: placesClassNames,
        autocompleteItem: autocompleteItem,
        inputProps: finalInputProps,
        onSelect: this.handleSelect,
        hideLabel: true
      }, others)));
    }
  }]);

  return LocationInput;
}(_react.Component);

exports.LocationInput = LocationInput;
LocationInput.defaultProps = {
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  defaultValue: ''
};