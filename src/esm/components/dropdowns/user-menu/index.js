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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from '../../../components/dropdowns/dropdown';
import { ButtonImageWithTextAndBadge } from '../../../components/buttons/button-image-with-text-and-badge';
import { NavList } from '../../../components/lists/nav-list';
import domElementHelper from '../../../helpers/dom/element-helper';
import emitter from '../../../helpers/utils/emitter';
import { TOGGLE_DROPDOWN_EVENT } from '../../../helpers/dom/events';
export var UserMenu = /*#__PURE__*/function (_Component) {
  _inherits(UserMenu, _Component);

  var _super = _createSuper(UserMenu);

  function UserMenu(props) {
    var _this;

    _classCallCheck(this, UserMenu);

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
      }
    };
    _this.handleButtonClick = _this.handleButtonClick.bind(_assertThisInitialized(_this));
    _this.handlePositionUpdate = _this.handlePositionUpdate.bind(_assertThisInitialized(_this));
    _this.handleOtherDropdownsOpening = _this.handleOtherDropdownsOpening.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UserMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.handlePositionUpdate();
      emitter.on(TOGGLE_DROPDOWN_EVENT, this.handleOtherDropdownsOpening);

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

      emitter.off(TOGGLE_DROPDOWN_EVENT, this.handleOtherDropdownsOpening);

      if (this.props.closeEvents) {
        this.props.closeEvents.forEach(function (ev) {
          window.removeEventListener(ev, _this3.handleOtherDropdownsOpening);
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.shouldUpdatePosition(prevProps)) {
        this.handlePositionUpdate();
      }
    } // Component methods.

  }, {
    key: "shouldUpdatePosition",
    value: function shouldUpdatePosition(prevProps) {
      return prevProps != this.props;
    }
  }, {
    key: "getButtonId",
    value: function getButtonId() {
      return 'k-UserMenu';
    }
  }, {
    key: "canComputeSize",
    value: function canComputeSize() {
      return domElementHelper.canUseDom() && typeof this.refs.dropdown != 'undefined';
    }
  }, {
    key: "getDropdownContainer",
    value: function getDropdownContainer() {
      return this.refs.dropdown.refs.dropdown.parentNode;
    }
  }, {
    key: "getDropdownContainerWidth",
    value: function getDropdownContainerWidth() {
      return domElementHelper.getComputedWidth(this.getDropdownContainer());
    }
  }, {
    key: "getButtonImageElement",
    value: function getButtonImageElement() {
      return this.refs.dropdownButton.refs.buttonImage;
    }
  }, {
    key: "getButtonImageElementHalfWidth",
    value: function getButtonImageElementHalfWidth() {
      return domElementHelper.getComputedWidth(this.getButtonImageElement()) / 2;
    }
  }, {
    key: "getDropdownContentElement",
    value: function getDropdownContentElement() {
      return this.refs.dropdown.refs.dropdownContent;
    }
  }, {
    key: "getDropdownContentElementHalfWidth",
    value: function getDropdownContentElementHalfWidth() {
      return domElementHelper.getComputedWidth(this.getDropdownContentElement()) / 2;
    }
  }, {
    key: "getContentHorizontalPosition",
    value: function getContentHorizontalPosition() {
      // Compute dropdown position depending on the button image position.
      var space = this.getDropdownContainerWidth() + this.props.spaceAroundGrid - this.getButtonImageElementHalfWidth() - this.getDropdownContentElementHalfWidth(); // If the interval is negative, just stick the dropdown to the reference
      // element border.

      space = space < 0 ? 0 : space;
      return {
        right: space + 'px'
      };
    }
  }, {
    key: "getArrowHorizontalPosition",
    value: function getArrowHorizontalPosition() {
      var contentHorizontalPositionValue = parseInt(this.getContentHorizontalPosition().right, 10); // Compute arrow position depending on the button image position.

      var space = this.getDropdownContainerWidth() + this.props.spaceAroundGrid - this.getButtonImageElementHalfWidth() - contentHorizontalPositionValue;
      return {
        right: space + 'px'
      };
    }
  }, {
    key: "getDropdownContent",
    value: function getDropdownContent() {
      return /*#__PURE__*/React.createElement(NavList, {
        className: classNames('k-UserMenu', 'k-UserMenu--withoutBorderTop'),
        role: "menubar",
        list: this.props.dropdownList
      });
    }
  }, {
    key: "getDropdownButton",
    value: function getDropdownButton() {
      return /*#__PURE__*/React.createElement(ButtonImageWithTextAndBadge, {
        ref: "dropdownButton",
        className: this.props.buttonClassName,
        id: this.getButtonId(),
        isExpanded: this.state.isExpanded,
        onClick: this.handleButtonClick,
        srcImg: this.props.buttonImgSrc,
        widthImg: this.props.buttonImgWidth,
        heightImg: this.props.buttonImgHeight,
        altImg: this.props.buttonImgAlt,
        text: this.props.buttonText,
        title: this.props.buttonTitle,
        notifications: this.props.buttonNotifications,
        badgeColor: this.props.badgeColor,
        textClassName: "k-UserMenu__text--withEllipsis"
      });
    }
  }, {
    key: "getDropdownArrow",
    value: function getDropdownArrow() {
      return /*#__PURE__*/React.createElement("span", {
        className: "k-UserMenu__arrow"
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
        dropdownContent: this.getDropdownContent(),
        dropdownListArrow: this.getDropdownArrow(),
        contentHorizontalPosition: this.state.contentHorizontalPosition,
        arrowHorizontalPosition: this.state.arrowHorizontalPosition,
        isExpanded: this.state.isExpanded,
        buttonId: this.getButtonId(),
        onPositionUpdate: this.handlePositionUpdate
      }, otherProps));
    }
  }]);

  return UserMenu;
}(Component);
UserMenu.propTypes = {
  buttonClassName: PropTypes.string,
  buttonImgSrc: PropTypes.string,
  buttonImgWidth: PropTypes.number,
  buttonImgHeight: PropTypes.number,
  buttonImgAlt: PropTypes.string,
  buttonText: PropTypes.string,
  buttonTitle: PropTypes.string,
  dropdownList: PropTypes.array,
  positionedWith: PropTypes.func,
  positionedWithBorder: PropTypes.bool,
  notifications: PropTypes.number,
  refreshEvents: PropTypes.array,
  closeEvents: PropTypes.array,
  onPositionUpdate: PropTypes.func,
  badgeColor: PropTypes.string
};
UserMenu.defaultProps = {
  // Add custom value to compute horizontal position
  spaceAroundGrid: 0,
  // Notifications count on badge.
  buttonNotifications: 0
}; // DEPRECATED: do not use default export.

export default UserMenu;