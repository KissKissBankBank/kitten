"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Dropdown = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _emitter = _interopRequireDefault(require("kitten/helpers/utils/emitter"));

var _dropdownButton = require("kitten/components/dropdowns/dropdown-button");

var _elementHelper = _interopRequireDefault(require("kitten/helpers/dom/element-helper"));

var _assign = _interopRequireDefault(require("core-js/library/fn/object/assign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      isExpanded: false,
      referenceElementHeight: 0
    };
    _this.handleDropdownPosition = _this.handleDropdownPosition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.revertHandleClickOnLinks = _this.revertHandleClickOnLinks.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.close = _this.close.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var dropdown = this;

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
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
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
      return (0, _assign.default)(defaultPosition, arrowHorizontalPosition);
    }
  }, {
    key: "getContentPosition",
    value: function getContentPosition() {
      var defaultPosition = {
        top: this.state.referenceElementHeight
      };
      var horizontalPosition = this.props.contentHorizontalPosition;
      return (0, _assign.default)(defaultPosition, horizontalPosition);
    } // Component listener callbacks

  }, {
    key: "revertHandleClickOnLinks",
    value: function revertHandleClickOnLinks() {
      var _this4 = this;

      var links = this.refs.dropdownContent.getElementsByTagName('a');
      Array.prototype.forEach.call(links, function (link) {
        link.removeEventListener('click', _this4.close);
      });
    }
  }, {
    key: "handleClickOnLinks",
    value: function handleClickOnLinks() {
      var _this5 = this;

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
      return _react.default.createElement(_dropdownButton.DropdownButton, {
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
      return _react.default.createElement("span", {
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
      return _react.default.createElement("div", {
        ref: "dropdown",
        className: dropdownClassName
      }, button, _react.default.createElement("div", {
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
  onToggle: function onToggle() {} // DEPRECATED: do not use default export.

};
var _default = Dropdown;
exports.default = _default;