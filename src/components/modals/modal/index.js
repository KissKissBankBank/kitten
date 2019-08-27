"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _closeButton = require("../../../components/buttons/close-button");

// Via "https://github.com/reactjs/react-modal"
var Modal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      showModal: false
    };

    _this.open = function () {
      _this.setState({
        showModal: true
      });
    };

    _this.close = function () {
      _this.setState({
        showModal: false
      });

      if (_this.props.onClose) {
        _this.props.onClose();
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Modal, [{
    key: "renderCloseModal",
    value: function renderCloseModal() {
      var closeButtonLabel = this.props.closeButtonLabel;
      return _react.default.createElement("div", {
        className: "k-Modal__close"
      }, _react.default.createElement(_closeButton.CloseButton, {
        className: "k-Modal__close--fixed",
        modifier: "beryllium",
        onClick: this.close,
        closeButtonLabel: closeButtonLabel
      }));
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
          closeButtonLabel = _this$props.closeButtonLabel,
          onClose = _this$props.onClose,
          modalProps = _this$props.modalProps,
          disableOutsideScroll = _this$props.disableOutsideScroll,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["trigger", "content", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "disableOutsideScroll"]);
      var triggerClassNames = (0, _classnames.default)('k-Modal', className);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: triggerClassNames
      }, others), this.renderTriggerAction(), _react.default.createElement(_reactModal.default, (0, _extends2.default)({
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
        contentLabel: label,
        bodyOpenClassName: disableOutsideScroll ? 'k-Modal__body--open' : null
      }, modalProps), content, this.renderCloseModal()));
    }
  }]);
  return Modal;
}(_react.Component);

exports.Modal = Modal;
Modal.propTypes = {
  label: _propTypes.default.string,
  labelledby: _propTypes.default.string,
  describedby: _propTypes.default.string,
  closeButtonLabel: _propTypes.default.string,
  modalProps: _propTypes.default.object,
  disableOutsideScroll: _propTypes.default.bool
};
Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: '',
  modalProps: {},
  disableOutsideScroll: false
};