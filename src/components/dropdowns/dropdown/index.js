"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Dropdown = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _emitter = _interopRequireDefault(require("../../../helpers/utils/emitter"));

var _dropdownButton = require("../../../components/dropdowns/dropdown-button");

var _elementHelper = _interopRequireDefault(require("../../../helpers/dom/element-helper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Dropdown = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Dropdown);
    _this = _super.call(this, props);
    _this.state = {
      isExpanded: false,
      referenceElementHeight: 0
    };
    _this.handleDropdownPosition = _this.handleDropdownPosition.bind((0, _assertThisInitialized2.default)(_this));
    _this.revertHandleClickOnLinks = _this.revertHandleClickOnLinks.bind((0, _assertThisInitialized2.default)(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (_elementHelper.default.canUseDom()) {
        // Update dropdown content position after DOM is build.
        var referenceElementHeight = this.getReferenceElementHeight();
        this.setState({
          referenceElementHeight: referenceElementHeight
        });
      } // Handle events.


      this.handleClickOnLinks();

      _emitter.default.on('dropdown:opening:trigger', this.close);

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

      _emitter.default.off('dropdown:opening:trigger', this.close);
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
        _emitter.default.emit('dropdown:opening:trigger', this);
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
      return _elementHelper.default.getComputedHeight(referenceElement, this.props.positionedWithBorder);
    }
  }, {
    key: "getArrowPosition",
    value: function getArrowPosition() {
      var defaultPosition = {
        position: 'absolute',
        top: 0
      };
      var arrowHorizontalPosition = this.props.arrowHorizontalPosition;
      return (0, _extends2.default)({}, defaultPosition, arrowHorizontalPosition);
    }
  }, {
    key: "getContentPosition",
    value: function getContentPosition() {
      var defaultPosition = {
        top: this.state.referenceElementHeight
      };
      var horizontalPosition = this.props.contentHorizontalPosition;
      return (0, _extends2.default)({}, defaultPosition, horizontalPosition);
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
      if (_elementHelper.default.canUseDom()) {
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
      return /*#__PURE__*/_react.default.createElement(_dropdownButton.DropdownButton, {
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
      return /*#__PURE__*/_react.default.createElement("span", {
        ref: "arrow",
        style: style
      }, this.props.dropdownListArrow);
    }
  }, {
    key: "render",
    value: function render() {
      var button = this.renderButton();
      var dropdownClassName = (0, _classnames.default)('k-Dropdown', {
        'is-expanded': this.state.isExpanded,
        'k-Dropdown--asReference': this.isSelfReference()
      }, this.props.className);
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: "dropdown",
        className: dropdownClassName
      }, button, /*#__PURE__*/_react.default.createElement("div", {
        ref: "dropdownContent",
        className: "k-Dropdown__content",
        style: this.getContentPosition(),
        "aria-hidden": "true",
        "aria-labelledby": this.props.buttonId
      }, this.props.dropdownContent, this.renderArrow()));
    }
  }]);
  return Dropdown;
}(_react.default.Component);

exports.Dropdown = Dropdown;
Dropdown.propTypes = {
  isExpanded: _propTypes.default.bool,
  positionedWith: _propTypes.default.func,
  positionedWithBorder: _propTypes.default.bool,
  positionedOn: _propTypes.default.string,
  notifications: _propTypes.default.number,
  refreshEvents: _propTypes.default.array,
  closeEvents: _propTypes.default.array,
  onPositionUpdate: _propTypes.default.func
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

var _default = Dropdown;
exports.default = _default;