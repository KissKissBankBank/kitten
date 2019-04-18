"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UserMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dropdown = require("../../components/dropdowns/dropdown");

var _buttonImageWithTextAndBadge = require("../../components/buttons/button-image-with-text-and-badge");

var _navList = require("../../components/lists/nav-list");

var _elementHelper = _interopRequireDefault(require("../../helpers/dom/element-helper"));

var _emitter = _interopRequireDefault(require("../../helpers/utils/emitter"));

var UserMenu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(UserMenu, _Component);

  function UserMenu(props) {
    var _this;

    (0, _classCallCheck2.default)(this, UserMenu);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UserMenu).call(this, props));
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
    _this.handleButtonClick = _this.handleButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handlePositionUpdate = _this.handlePositionUpdate.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOtherDropdownsOpening = _this.handleOtherDropdownsOpening.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(UserMenu, [{
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
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["dropdownList"]);
      return _react.default.createElement(_dropdown.Dropdown, (0, _extends2.default)({
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