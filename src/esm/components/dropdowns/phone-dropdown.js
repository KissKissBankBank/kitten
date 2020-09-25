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

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../components/dropdowns/dropdown';
import { DropdownButton } from '../../components/dropdowns/dropdown-button';
import domElementHelper from '../../helpers/dom/element-helper';
import emitter from '../../helpers/utils/emitter';
import classNames from 'classnames';
import { TOGGLE_DROPDOWN_EVENT } from '../../helpers/dom/events';
export var PhoneDropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(PhoneDropdown, _React$Component);

  var _super = _createSuper(PhoneDropdown);

  function PhoneDropdown(props) {
    var _this;

    _classCallCheck(this, PhoneDropdown);

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
    _this.handleButtonClick = _this.handleButtonClick.bind(_assertThisInitialized(_this));
    _this.handlePositionUpdate = _this.handlePositionUpdate.bind(_assertThisInitialized(_this));
    _this.handleOtherDropdownsOpening = _this.handleOtherDropdownsOpening.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PhoneDropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.handlePositionUpdate();
      emitter.on(TOGGLE_DROPDOWN_EVENT, this.handleOtherDropdownsOpening);
      emitter.on('element:update', this.handlePositionUpdate);

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

      emitter.off(TOGGLE_DROPDOWN_EVENT, this.handleOtherDropdownsOpening);
      emitter.off('element:update', this.handlePositionUpdate);
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
      return domElementHelper.getComputedWidth(this.getDropdownButtonElement()) / 2;
    }
  }, {
    key: "getDropdownButtonPositionLeft",
    value: function getDropdownButtonPositionLeft() {
      return this.getDropdownButtonElement().offsetLeft + this.getDropdownButtonHalfWidth();
    }
  }, {
    key: "getDropdownContentElementWidth",
    value: function getDropdownContentElementWidth() {
      return domElementHelper.getComputedWidth(this.getDropdownContentElement());
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
      var buttonClassName = classNames('k-ButtonIcon', 'k-ButtonIcon--hydrogen', 'k-ButtonIcon--phone', this.props.buttonClassName);
      return /*#__PURE__*/React.createElement(DropdownButton, {
        ref: "dropdownButton",
        className: buttonClassName,
        id: this.props.buttonId,
        isExpanded: this.state.isExpanded,
        onClick: this.handleButtonClick
      }, /*#__PURE__*/React.createElement("svg", {
        className: "k-ButtonIcon__svg",
        viewBox: "0 0 16 18",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M3.354 0C2.238 0 .496.498.207 2.268-.2 4.764 1.533 9.09 4.047 12.202c2.49 3.084 6.305 5.63 8.86 5.792.06.004.12.006.177.006 2.39 0 3.002-3.158 2.694-3.548l-4.335-1.94c-.26-.15-.532-.225-.79-.225-.263 0-.51.08-.713.24l-.866.63c-.093.034-.194.05-.302.05-1.807 0-5.535-4.758-4.636-6.166.006-.008.79-.724.79-.724.387-.313.534-.882.347-1.444L4.275.206C4.18.088 3.823 0 3.355 0"
      })));
    }
  }, {
    key: "getDropdownArrow",
    value: function getDropdownArrow() {
      return /*#__PURE__*/React.createElement("span", {
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

      return /*#__PURE__*/React.createElement(Dropdown, _extends({
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
}(React.Component);
PhoneDropdown.propTypes = {
  buttonClassName: PropTypes.string,
  positionedWith: PropTypes.func,
  positionedWithBorder: PropTypes.bool,
  refreshEvents: PropTypes.array,
  closeEvents: PropTypes.array,
  onPositionUpdate: PropTypes.func
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

export default PhoneDropdown;