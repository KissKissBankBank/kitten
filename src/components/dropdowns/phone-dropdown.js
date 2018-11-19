"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PhoneDropdown = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dropdown = require("kitten/components/dropdowns/dropdown");

var _dropdownButton = require("kitten/components/dropdowns/dropdown-button");

var _elementHelper = _interopRequireDefault(require("kitten/helpers/dom/element-helper"));

var _assign = _interopRequireDefault(require("core-js/library/fn/object/assign"));

var _emitter = _interopRequireDefault(require("kitten/helpers/utils/emitter"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var PhoneDropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PhoneDropdown, _React$Component);

  function PhoneDropdown(props) {
    var _this;

    _classCallCheck(this, PhoneDropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PhoneDropdown).call(this, props));
    _this.state = {
      isExpanded: false,
      contentPosition: {
        top: 0,
        left: 0
      },
      arrowPosition: {
        top: 0,
        left: 0
      },
      positionOn: 'right'
    };
    _this.handleButtonClick = _this.handleButtonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handlePositionUpdate = _this.handlePositionUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOtherDropdownsOpening = _this.handleOtherDropdownsOpening.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(PhoneDropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.handlePositionUpdate();

      _emitter.default.on('dropdown:opening:trigger', this.handleOtherDropdownsOpening);

      _emitter.default.on('element:update', this.handlePositionUpdate);

      if (this.props.closeEvents) {
        this.props.closeEvents.forEach(function (ev) {
          window.addEventListener(ev, _this2.handleOtherDropdownsOpening);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (this.props.closeEvents) {
        this.props.closeEvents.forEach(function (ev) {
          window.removeEventListener(ev, _this3.handleOtherDropdownsOpening);
        });
      }

      _emitter.default.off('dropdown:opening:trigger', this.handleOtherDropdownsOpening);

      _emitter.default.off('element:update', this.handlePositionUpdate);
    } // Component methods.

  }, {
    key: "getButtonId",
    value: function getButtonId() {
      return 'k-PhoneDropdown';
    }
  }, {
    key: "canComputeSize",
    value: function canComputeSize() {
      return typeof this.refs.dropdown != 'undefined';
    }
  }, {
    key: "getDropdownContentElement",
    value: function getDropdownContentElement() {
      return this.refs.dropdown.refs.dropdownContent;
    }
  }, {
    key: "getDropdownButtonElement",
    value: function getDropdownButtonElement() {
      return this.refs.dropdownButton.refs.dropdownButton;
    }
  }, {
    key: "getDropdownButtonHalfWidth",
    value: function getDropdownButtonHalfWidth() {
      return _elementHelper.default.getComputedWidth(this.getDropdownButtonElement()) / 2;
    }
  }, {
    key: "getDropdownButtonPositionLeft",
    value: function getDropdownButtonPositionLeft() {
      return this.getDropdownButtonElement().offsetLeft + this.getDropdownButtonHalfWidth();
    }
  }, {
    key: "getDropdownContentElementWidth",
    value: function getDropdownContentElementWidth() {
      return _elementHelper.default.getComputedWidth(this.getDropdownContentElement());
    }
  }, {
    key: "getDropdownContentElementHalfWidth",
    value: function getDropdownContentElementHalfWidth() {
      return this.getDropdownContentElementWidth() / 2;
    }
  }, {
    key: "getContentHorizontalPosition",
    value: function getContentHorizontalPosition() {
      // Compute dropdown position.
      var space = this.getDropdownButtonPositionLeft() - this.getDropdownContentElementHalfWidth(); // If the interval is negative, just stick the dropdown to the reference
      // element border.

      if (window.innerWidth < space + this.getDropdownContentElementWidth()) {
        return {
          left: window.innerWidth - this.getDropdownContentElementWidth() + 'px'
        };
      } else {
        return {
          left: space + 'px'
        };
      }
    }
  }, {
    key: "getArrowHorizontalPosition",
    value: function getArrowHorizontalPosition() {
      var contentHorizontalPositionValue = parseInt(this.getContentHorizontalPosition().left, 10);
      var space = this.getDropdownButtonPositionLeft() - contentHorizontalPositionValue;
      return {
        left: space + 'px'
      };
    }
  }, {
    key: "getDropdownButton",
    value: function getDropdownButton() {
      var buttonClassName = (0, _classnames.default)('k-ButtonIcon', 'k-ButtonIcon--hydrogen', 'k-ButtonIcon--phone', this.props.buttonClassName);
      return _react.default.createElement(_dropdownButton.DropdownButton, {
        ref: "dropdownButton",
        className: buttonClassName,
        id: this.props.buttonId,
        isExpanded: this.state.isExpanded,
        onClick: this.handleButtonClick
      }, _react.default.createElement("svg", {
        className: "k-ButtonIcon__svg",
        viewBox: "0 0 16 18",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react.default.createElement("path", {
        d: "M3.354 0C2.238 0 .496.498.207 2.268-.2 4.764 1.533 9.09 4.047 12.202c2.49 3.084 6.305 5.63 8.86 5.792.06.004.12.006.177.006 2.39 0 3.002-3.158 2.694-3.548l-4.335-1.94c-.26-.15-.532-.225-.79-.225-.263 0-.51.08-.713.24l-.866.63c-.093.034-.194.05-.302.05-1.807 0-5.535-4.758-4.636-6.166.006-.008.79-.724.79-.724.387-.313.534-.882.347-1.444L4.275.206C4.18.088 3.823 0 3.355 0"
      })));
    }
  }, {
    key: "getDropdownArrow",
    value: function getDropdownArrow() {
      return _react.default.createElement("span", {
        className: "k-PhoneDropdown__arrow"
      });
    }
  }, {
    key: "updateDropdownContentPosition",
    value: function updateDropdownContentPosition() {
      this.setState({
        contentHorizontalPosition: this.getContentHorizontalPosition()
      });
    }
  }, {
    key: "updateDropdownArrowPosition",
    value: function updateDropdownArrowPosition() {
      this.setState({
        arrowHorizontalPosition: this.getArrowHorizontalPosition()
      });
    } // Component listener callbacks.

  }, {
    key: "handlePositionUpdate",
    value: function handlePositionUpdate() {
      if (this.canComputeSize()) {
        this.updateDropdownContentPosition();
        this.updateDropdownArrowPosition();
      }
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(event) {
      event.stopPropagation();
      event.preventDefault();
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    }
  }, {
    key: "handleOtherDropdownsOpening",
    value: function handleOtherDropdownsOpening(openedDropdown) {
      if (openedDropdown != this.refs.dropdown) {
        this.setState({
          isExpanded: false
        });
      }
    } // Rendering.

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dropdownList = _this$props.dropdownList,
          otherProps = _objectWithoutProperties(_this$props, ["dropdownList"]);

      return _react.default.createElement(_dropdown.Dropdown, _extends({
        ref: "dropdown",
        button: this.getDropdownButton(),
        dropdownContent: this.props.dropdownContent,
        dropdownListArrow: this.getDropdownArrow(),
        contentHorizontalPosition: this.state.contentHorizontalPosition,
        arrowHorizontalPosition: this.state.arrowHorizontalPosition,
        isExpanded: this.state.isExpanded,
        buttonId: this.getButtonId(),
        onPositionUpdate: this.handlePositionUpdate
      }, otherProps));
    }
  }]);

  return PhoneDropdown;
}(_react.default.Component);

exports.PhoneDropdown = PhoneDropdown;
PhoneDropdown.propTypes = {
  buttonClassName: _propTypes.default.string,
  positionedWith: _propTypes.default.func,
  positionedWithBorder: _propTypes.default.bool,
  positionedOn: _propTypes.default.string,
  refreshEvents: _propTypes.default.array,
  closeEvents: _propTypes.default.array,
  onPositionUpdate: _propTypes.default.func
};
PhoneDropdown.defaultProps = {
  // Position.
  positionedWithBorder: false,
  // Button classes.
  buttonClassName: '',
  // Add custom value to compute horizontal position.
  spaceAroundGrid: 0,
  // Notifications count on badge.
  buttonNotifications: 0 // DEPRECATED: do not use default export.

};
var _default = PhoneDropdown;
exports.default = _default;