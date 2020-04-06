"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PhoneDropdown = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dropdown = require("../../components/dropdowns/dropdown");

var _dropdownButton = require("../../components/dropdowns/dropdown-button");

var _elementHelper = _interopRequireDefault(require("../../helpers/dom/element-helper"));

var _emitter = _interopRequireDefault(require("../../helpers/utils/emitter"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PhoneDropdown = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(PhoneDropdown, _React$Component);

  var _super = _createSuper(PhoneDropdown);

  function PhoneDropdown(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PhoneDropdown);
    _this = _super.call(this, props);
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
    _this.handleButtonClick = _this.handleButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handlePositionUpdate = _this.handlePositionUpdate.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOtherDropdownsOpening = _this.handleOtherDropdownsOpening.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(PhoneDropdown, [{
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
      return /*#__PURE__*/_react.default.createElement(_dropdownButton.DropdownButton, {
        ref: "dropdownButton",
        className: buttonClassName,
        id: this.props.buttonId,
        isExpanded: this.state.isExpanded,
        onClick: this.handleButtonClick
      }, /*#__PURE__*/_react.default.createElement("svg", {
        className: "k-ButtonIcon__svg",
        viewBox: "0 0 16 18",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M3.354 0C2.238 0 .496.498.207 2.268-.2 4.764 1.533 9.09 4.047 12.202c2.49 3.084 6.305 5.63 8.86 5.792.06.004.12.006.177.006 2.39 0 3.002-3.158 2.694-3.548l-4.335-1.94c-.26-.15-.532-.225-.79-.225-.263 0-.51.08-.713.24l-.866.63c-.093.034-.194.05-.302.05-1.807 0-5.535-4.758-4.636-6.166.006-.008.79-.724.79-.724.387-.313.534-.882.347-1.444L4.275.206C4.18.088 3.823 0 3.355 0"
      })));
    }
  }, {
    key: "getDropdownArrow",
    value: function getDropdownArrow() {
      return /*#__PURE__*/_react.default.createElement("span", {
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
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["dropdownList"]);
      return /*#__PURE__*/_react.default.createElement(_dropdown.Dropdown, (0, _extends2.default)({
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
  buttonNotifications: 0
}; // DEPRECATED: do not use default export.

var _default = PhoneDropdown;
exports.default = _default;