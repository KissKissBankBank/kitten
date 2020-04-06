"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactPlacesAutocomplete = _interopRequireWildcard(require("react-places-autocomplete"));

var _locationIcon = require("../../components/icons/location-icon");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Make sure you include a script to the Google Maps places API.
// For example:
//   <script src="https://maps.googleapis.com/maps/api/js?key=…&libraries=places"></script>
var LocationInput = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(LocationInput, _Component);

  var _super = _createSuper(LocationInput);

  function LocationInput(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LocationInput);
    _this = _super.call(this, props);
    _this.state = {
      address: _this.props.defaultValue
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSelect = _this.handleSelect.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(LocationInput, [{
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
          others = (0, _objectWithoutProperties2.default)(_this$props, ["onChange", "onSelect", "defaultValue", "inputProps"]);
      var placesClassNames = {
        root: 'k-LocationInput__group',
        input: 'k-LocationInput__input',
        autocompleteContainer: 'k-LocationInput__autocomplete',
        autocompleteItem: 'k-LocationInput__autocompleteItem',
        autocompleteItemActive: 'k-LocationInput__autocompleteItem--active'
      };

      var autocompleteItem = function autocompleteItem(_ref) {
        var formattedSuggestion = _ref.formattedSuggestion;
        return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_locationIcon.LocationIcon, {
          width: "12px",
          height: "15px"
        }), /*#__PURE__*/_react.default.createElement("span", {
          className: "k-LocationInput__autocompleteItem__mainText"
        }, formattedSuggestion.mainText), ' ', /*#__PURE__*/_react.default.createElement("span", {
          className: "k-LocationInput__autocompleteItem__secondaryText"
        }, formattedSuggestion.secondaryText));
      };

      var finalInputProps = (0, _extends2.default)({}, inputProps, {
        value: this.state.address,
        onChange: this.handleChange
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-LocationInput"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-LocationInput__icon"
      }, /*#__PURE__*/_react.default.createElement(_locationIcon.LocationIcon, null)), /*#__PURE__*/_react.default.createElement(_reactPlacesAutocomplete.default, (0, _extends2.default)({
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