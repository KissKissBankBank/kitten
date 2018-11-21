"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UserMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dropdown = require("kitten/components/dropdowns/dropdown");

var _buttonImageWithTextAndBadge = require("kitten/components/buttons/button-image-with-text-and-badge");

var _navList = require("kitten/components/lists/nav-list");

var _elementHelper = _interopRequireDefault(require("kitten/helpers/dom/element-helper"));

var _emitter = _interopRequireDefault(require("kitten/helpers/utils/emitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var UserMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(UserMenu, _Component);

  function UserMenu(props) {
    var _this;

    _classCallCheck(this, UserMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserMenu).call(this, props));
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
    _this.handleButtonClick = _this.handleButtonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handlePositionUpdate = _this.handlePositionUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOtherDropdownsOpening = _this.handleOtherDropdownsOpening.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(UserMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.handlePositionUpdate();

      _emitter.default.on('dropdown:opening:trigger', this.handleOtherDropdownsOpening);

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
      return _elementHelper.default.canUseDom() && typeof this.refs.dropdown != 'undefined';
    }
  }, {
    key: "getDropdownContainer",
    value: function getDropdownContainer() {
      return this.refs.dropdown.refs.dropdown.parentNode;
    }
  }, {
    key: "getDropdownContainerWidth",
    value: function getDropdownContainerWidth() {
      return _elementHelper.default.getComputedWidth(this.getDropdownContainer());
    }
  }, {
    key: "getButtonImageElement",
    value: function getButtonImageElement() {
      return this.refs.dropdownButton.refs.buttonImage;
    }
  }, {
    key: "getButtonImageElementHalfWidth",
    value: function getButtonImageElementHalfWidth() {
      return _elementHelper.default.getComputedWidth(this.getButtonImageElement()) / 2;
    }
  }, {
    key: "getDropdownContentElement",
    value: function getDropdownContentElement() {
      return this.refs.dropdown.refs.dropdownContent;
    }
  }, {
    key: "getDropdownContentElementHalfWidth",
    value: function getDropdownContentElementHalfWidth() {
      return _elementHelper.default.getComputedWidth(this.getDropdownContentElement()) / 2;
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
      return _react.default.createElement(_navList.NavList, {
        className: (0, _classnames.default)('k-UserMenu', 'k-UserMenu--withoutBorderTop'),
        role: "menubar",
        list: this.props.dropdownList
      });
    }
  }, {
    key: "getDropdownButton",
    value: function getDropdownButton() {
      return _react.default.createElement(_buttonImageWithTextAndBadge.ButtonImageWithTextAndBadge, {
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
        textClassName: "k-Header__userMenuText--withEllipsis"
      });
    }
  }, {
    key: "getDropdownArrow",
    value: function getDropdownArrow() {
      return _react.default.createElement("span", {
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

      return _react.default.createElement(_dropdown.Dropdown, _extends({
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
}(_react.Component);

exports.UserMenu = UserMenu;
UserMenu.propTypes = {
  buttonClassName: _propTypes.default.string,
  buttonImgSrc: _propTypes.default.string,
  buttonImgWidth: _propTypes.default.number,
  buttonImgHeight: _propTypes.default.number,
  buttonImgAlt: _propTypes.default.string,
  buttonText: _propTypes.default.string,
  buttonTitle: _propTypes.default.string,
  dropdownList: _propTypes.default.array,
  positionedWith: _propTypes.default.func,
  positionedWithBorder: _propTypes.default.bool,
  positionedOn: _propTypes.default.string,
  notifications: _propTypes.default.number,
  refreshEvents: _propTypes.default.array,
  closeEvents: _propTypes.default.array,
  onPositionUpdate: _propTypes.default.func
};
UserMenu.defaultProps = {
  // Add custom value to compute horizontal position
  spaceAroundGrid: 0,
  // Notifications count on badge.
  buttonNotifications: 0 // DEPRECATED: do not use default export.

};
var _default = UserMenu;
exports.default = _default;