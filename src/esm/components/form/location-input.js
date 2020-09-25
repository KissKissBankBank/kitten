import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react'; // Via "https://github.com/kenny-hibino/react-places-autocomplete"

import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete';
import { LocationIcon } from '../../components/icons/location-icon'; // Make sure you include a script to the Google Maps places API.
// For example:
//   <script src="https://maps.googleapis.com/maps/api/js?key=…&libraries=places"></script>

export var LocationInput = /*#__PURE__*/function (_Component) {
  _inherits(LocationInput, _Component);

  var _super = _createSuper(LocationInput);

  function LocationInput(props) {
    var _this;

    _classCallCheck(this, LocationInput);

    _this = _super.call(this, props);
    _this.state = {
      address: _this.props.defaultValue
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
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

      geocodeByPlaceId(placeId).then(function (results) {
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
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LocationIcon, {
          width: "12px",
          height: "15px"
        }), /*#__PURE__*/React.createElement("span", {
          className: "k-LocationInput__autocompleteItem__mainText"
        }, formattedSuggestion.mainText), ' ', /*#__PURE__*/React.createElement("span", {
          className: "k-LocationInput__autocompleteItem__secondaryText"
        }, formattedSuggestion.secondaryText));
      };

      var finalInputProps = _extends({}, inputProps, {
        value: this.state.address,
        onChange: this.handleChange
      });

      return /*#__PURE__*/React.createElement("div", {
        className: "k-LocationInput"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-LocationInput__icon"
      }, /*#__PURE__*/React.createElement(LocationIcon, null)), /*#__PURE__*/React.createElement(PlacesAutocomplete, _extends({
        classNames: placesClassNames,
        autocompleteItem: autocompleteItem,
        inputProps: finalInputProps,
        onSelect: this.handleSelect,
        hideLabel: true
      }, others)));
    }
  }]);

  return LocationInput;
}(Component);
LocationInput.defaultProps = {
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  defaultValue: ''
};