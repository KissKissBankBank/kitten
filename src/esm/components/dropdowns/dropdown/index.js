import _extends from "@babel/runtime/helpers/esm/extends";
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
import classNames from 'classnames';
import emitter from '../../../helpers/utils/emitter';
import { DropdownButton } from '../../../components/dropdowns/dropdown-button';
import domElementHelper from '../../../helpers/dom/element-helper';
export var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      isExpanded: false,
      referenceElementHeight: 0
    };
    _this.handleDropdownPosition = _this.handleDropdownPosition.bind(_assertThisInitialized(_this));
    _this.revertHandleClickOnLinks = _this.revertHandleClickOnLinks.bind(_assertThisInitialized(_this));
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (domElementHelper.canUseDom()) {
        // Update dropdown content position after DOM is build.
        var referenceElementHeight = this.getReferenceElementHeight();
        this.setState({
          referenceElementHeight: referenceElementHeight
        });
      } // Handle events.


      this.handleClickOnLinks();
      emitter.on('dropdown:opening:trigger', this.close);

      if (this.props.refreshEvents) {
        this.props.refreshEvents.forEach(function (ev) {
          window.addEventListener(ev, _this2.handleDropdownPosition);
        });
      }

      if (this.props.closeEvents) {
        this.props.closeEvents.forEach(function (ev) {
          window.addEventListener(ev, _this2.close);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      this.revertHandleClickOnLinks();

      if (this.props.refreshEvents) {
        this.props.refreshEvents.forEach(function (ev) {
          window.removeEventListener(ev, _this3.handleDropdownPosition);
        });
      }

      if (this.props.closeEvents) {
        this.props.closeEvents.forEach(function (ev) {
          window.removeEventListener(ev, _this3.close);
        });
      }

      emitter.off('dropdown:opening:trigger', this.close);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      // Enable wrapper component to expand the dropdown.
      if (nextProps.isExpanded != this.state.isExpanded) {
        this.toggle(nextProps.isExpanded);
      }
    } // Component methods

  }, {
    key: "close",
    value: function close() {
      this.setState({
        isExpanded: false
      });
    }
  }, {
    key: "toggle",
    value: function toggle(nextExpandedState) {
      if (nextExpandedState) {
        emitter.emit('dropdown:opening:trigger', this);
      }

      this.props.onToggle();
      this.setState({
        isExpanded: nextExpandedState
      });
    }
  }, {
    key: "hasDefaultHorizontalPosition",
    value: function hasDefaultHorizontalPosition() {
      return this.props.positionedOn == 'left';
    }
  }, {
    key: "isSelfReference",
    value: function isSelfReference() {
      return typeof this.props.positionedWith == 'undefined';
    }
  }, {
    key: "getReferenceElement",
    value: function getReferenceElement() {
      if (!this.isSelfReference()) return this.props.positionedWith();
      return this.refs.dropdown;
    }
  }, {
    key: "getReferenceElementHeight",
    value: function getReferenceElementHeight() {
      var referenceElement = this.getReferenceElement();
      if (!referenceElement) return;
      return domElementHelper.getComputedHeight(referenceElement, this.props.positionedWithBorder);
    }
  }, {
    key: "getArrowPosition",
    value: function getArrowPosition() {
      var defaultPosition = {
        position: 'absolute',
        top: 0
      };
      var arrowHorizontalPosition = this.props.arrowHorizontalPosition;
      return _extends({}, defaultPosition, arrowHorizontalPosition);
    }
  }, {
    key: "getContentPosition",
    value: function getContentPosition() {
      var defaultPosition = {
        top: this.state.referenceElementHeight
      };
      var horizontalPosition = this.props.contentHorizontalPosition;
      return _extends({}, defaultPosition, horizontalPosition);
    } // Component listener callbacks

  }, {
    key: "revertHandleClickOnLinks",
    value: function revertHandleClickOnLinks() {
      var _this4 = this;

      if (!this.refs.dropdownContent) return;
      var links = this.refs.dropdownContent.getElementsByTagName('a');
      Array.prototype.forEach.call(links, function (link) {
        link.removeEventListener('click', _this4.close);
      });
    }
  }, {
    key: "handleClickOnLinks",
    value: function handleClickOnLinks() {
      var _this5 = this;

      if (!this.refs.dropdownContent) return;
      var links = this.refs.dropdownContent.getElementsByTagName('a');
      Array.prototype.forEach.call(links, function (link) {
        link.removeEventListener('click', _this5.close);
      });
    }
  }, {
    key: "handleDropdownPosition",
    value: function handleDropdownPosition() {
      if (domElementHelper.canUseDom()) {
        this.props.onPositionUpdate();
      }
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(event) {
      event.stopPropagation();
      event.preventDefault();
      this.toggle(!this.state.isExpanded);
    } // Rendering

  }, {
    key: "renderButtonContentElement",
    value: function renderButtonContentElement() {
      if (this.state.isExpanded) {
        return this.props.buttonContentOnExpanded;
      }

      return this.props.buttonContentOnCollapsed;
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      if (this.props.button) return this.props.button;
      return /*#__PURE__*/React.createElement(DropdownButton, {
        ref: "dropdownButton",
        className: this.props.buttonClassName,
        id: this.props.buttonId,
        isExpanded: this.state.isExpanded,
        onClick: this.handleButtonClick.bind(this)
      }, this.renderButtonContentElement());
    }
  }, {
    key: "renderArrow",
    value: function renderArrow() {
      if (!this.props.dropdownListArrow) return;
      var style = this.getArrowPosition();
      return /*#__PURE__*/React.createElement("span", {
        ref: "arrow",
        style: style
      }, this.props.dropdownListArrow);
    }
  }, {
    key: "render",
    value: function render() {
      var button = this.renderButton();
      var dropdownClassName = classNames('k-Dropdown', {
        'is-expanded': this.state.isExpanded,
        'k-Dropdown--asReference': this.isSelfReference()
      }, this.props.className);
      return /*#__PURE__*/React.createElement("div", {
        ref: "dropdown",
        className: dropdownClassName
      }, button, /*#__PURE__*/React.createElement("div", {
        ref: "dropdownContent",
        className: "k-Dropdown__content",
        style: this.getContentPosition(),
        "aria-hidden": "true",
        "aria-labelledby": this.props.buttonId
      }, this.props.dropdownContent, this.renderArrow()));
    }
  }]);

  return Dropdown;
}(React.Component);
Dropdown.propTypes = {
  isExpanded: PropTypes.bool,
  positionedWith: PropTypes.func,
  positionedWithBorder: PropTypes.bool,
  positionedOn: PropTypes.string,
  notifications: PropTypes.number,
  refreshEvents: PropTypes.array,
  closeEvents: PropTypes.array,
  onPositionUpdate: PropTypes.func
};
Dropdown.defaultProps = {
  // Take border into account to compute reference element height.
  positionedWithBorder: true,
  // Fix the dropdown on the left or on the right.
  positionedOn: 'left',
  // 'left' | 'right'
  // Custom horizontal position for content and content arrow.
  contentHorizontalPosition: {
    left: '0'
  },
  arrowHorizontalPosition: {
    left: '50%'
  },
  // Button settings
  buttonContentOnExpanded: 'Close me',
  buttonContentOnCollapsed: 'Expand me',
  // List of events that will trigger the update of the reference element
  // height.
  refreshEvents: [],
  // eg. ['resize']
  // List of events that will trigger the closure.
  closeEvents: [],
  // Called when one of the `refreshEvents` is triggered.
  onPositionUpdate: function onPositionUpdate() {},
  // Called when the dropdown is opened or closed
  onToggle: function onToggle() {}
}; // DEPRECATED: do not use default export.

export default Dropdown;