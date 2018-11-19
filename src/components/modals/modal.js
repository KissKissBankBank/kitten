"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _closeButton = require("kitten/components/buttons/close-button");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "open", function () {
      _this.setState({
        showModal: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function () {
      _this.setState({
        showModal: false
      });

      if (_this.props.onClose) {
        _this.props.onClose();
      }
    });

    _this.state = {
      showModal: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "renderCloseModal",
    value: function renderCloseModal() {
      return _react.default.createElement(_closeButton.CloseButton, {
        className: "k-Modal__close",
        modifier: "beryllium",
        onClick: this.close
      });
    }
  }, {
    key: "renderTriggerAction",
    value: function renderTriggerAction() {
      if (!this.props.trigger) return;
      return _react.default.createElement("span", {
        className: "k-Modal__trigger",
        onClick: this.open
      }, this.props.trigger);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          trigger = _this$props.trigger,
          content = _this$props.content,
          label = _this$props.label,
          labelledby = _this$props.labelledby,
          describedby = _this$props.describedby,
          className = _this$props.className,
          onClose = _this$props.onClose,
          others = _objectWithoutProperties(_this$props, ["trigger", "content", "label", "labelledby", "describedby", "className", "onClose"]);

      var triggerClassNames = (0, _classnames.default)('k-Modal', className);
      return _react.default.createElement("div", _extends({
        className: triggerClassNames
      }, others), this.renderTriggerAction(), _react.default.createElement(_reactModal.default, {
        role: "dialog",
        className: {
          base: 'k-Modal__content',
          afterOpen: 'k-Modal--afterOpen',
          beforeClose: 'k-Modal--beforeClose'
        },
        overlayClassName: {
          base: 'k-Modal__overlay',
          afterOpen: 'k-Modal__overlay--afterOpen',
          beforeClose: 'k-Modal__overlay--beforeClose'
        },
        isOpen: this.state.showModal,
        aria: {
          labelledby: labelledby,
          describedby: describedby
        },
        ariaHideApp: false,
        onRequestClose: this.close,
        contentLabel: label
      }, content, this.renderCloseModal()));
    }
  }]);

  return Modal;
}(_react.Component);

exports.Modal = Modal;
Modal.propTypes = {
  label: _propTypes.default.string,
  labelledby: _propTypes.default.string,
  describedby: _propTypes.default.string
};
Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: ''
};