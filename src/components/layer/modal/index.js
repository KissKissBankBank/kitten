"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Modal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _closeButton = require("../../action/close-button");

var _styledComponents = require("styled-components");

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _excluded = ["trigger", "content", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "disableOutsideScroll", "modalClassNames", "hasCloseButton", "isAnimated"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(["body.k-Modal__body--open{overflow:hidden;}.k-Modal__content{position:relative;max-height:calc(100% - ", " * 2);max-width:calc(100vw - ", " * 2);background-color:", ";text-align:center;padding-left:", ";padding-right:", ";box-sizing:border-box;overflow:scroll;@media (min-width:", "){max-width:", ";padding-left:", ";padding-right:", ";}}.k-Modal__close{position:absolute;top:0;right:", ";button{margin:0;}}.k-Modal__close--fixed{position:fixed;}.k-Modal__overlay{position:fixed;z-index:10;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;background-color:rgba(34,34,34,.9);}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), _colorsConfig.default.background1, (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(690), (0, _typography.pxToRem)(110), (0, _typography.pxToRem)(110), (0, _typography.pxToRem)(30));
var AnimatedGlobalStyle = (0, _styledComponents.createGlobalStyle)([".k-Modal__overlay{opacity:0;}.k-Modal__content{opacity:0;transform:scale(.94);}.k-Modal__overlay--afterOpen{transition:opacity .3s ease;opacity:1;}.k-Modal--afterOpen{transition:opacity .3s ease,transform .3s ease;transform:scale(1);opacity:1;}.k-Modal__overlay--beforeClose{opacity:0;}.k-Modal--beforeClose{transition:opacity .3s ease,transform .5s ease;transform:scale(1.06);opacity:0;}"]);

var Modal = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Modal, _Component);

  function Modal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
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

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    console.warn('The Modal component on `modals/modal` will be deprecated in favor of `ModalNext`.');
  };

  _proto.renderCloseModal = function renderCloseModal() {
    var closeButtonLabel = this.props.closeButtonLabel;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "k-Modal__close"
    }, /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
      className: "k-Modal__close--fixed",
      modifier: "hydrogen",
      onClick: this.close,
      size: "micro",
      closeButtonLabel: closeButtonLabel
    }));
  };

  _proto.renderTriggerAction = function renderTriggerAction() {
    if (!this.props.trigger) return;
    return /*#__PURE__*/_react.default.createElement("span", {
      onClick: this.open
    }, this.props.trigger);
  };

  _proto.renderGlobalStyle = function renderGlobalStyle() {
    var modalClassNames = this.props.modalClassNames;
    if (modalClassNames.className.base !== 'k-Modal__content' && modalClassNames.overlayClassName.base !== 'k-Modal__overlay') return;
    return /*#__PURE__*/_react.default.createElement(GlobalStyle, null);
  };

  _proto.render = function render() {
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
        modalClassNames = _this$props.modalClassNames,
        hasCloseButton = _this$props.hasCloseButton,
        isAnimated = _this$props.isAnimated,
        others = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
    var triggerClassNames = (0, _classnames.default)('k-Modal', className);
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      className: triggerClassNames
    }, others), this.renderTriggerAction(), this.renderGlobalStyle(), isAnimated && /*#__PURE__*/_react.default.createElement(AnimatedGlobalStyle, null), /*#__PURE__*/_react.default.createElement(_reactModal.default, (0, _extends2.default)({
      closeTimeoutMS: isAnimated ? 500 : 0,
      role: "dialog",
      className: (0, _extends2.default)({}, modalClassNames.className),
      overlayClassName: (0, _extends2.default)({}, modalClassNames.overlayClassName),
      isOpen: this.state.showModal,
      aria: {
        labelledby: labelledby,
        describedby: describedby
      },
      ariaHideApp: false,
      onRequestClose: this.close,
      contentLabel: label,
      bodyOpenClassName: disableOutsideScroll ? 'k-Modal__body--open' : null
    }, modalProps), content, hasCloseButton && this.renderCloseModal()));
  };

  return Modal;
}(_react.Component);

exports.Modal = Modal;
Modal.propTypes = {
  label: _propTypes.default.string,
  labelledby: _propTypes.default.string,
  describedby: _propTypes.default.string,
  closeButtonLabel: _propTypes.default.string,
  modalProps: _propTypes.default.object,
  disableOutsideScroll: _propTypes.default.bool,
  modalClassNames: _propTypes.default.shape({
    className: _propTypes.default.shape({
      base: _propTypes.default.string,
      afterOpen: _propTypes.default.string,
      beforeClose: _propTypes.default.string
    }),
    overlayClassName: _propTypes.default.shape({
      base: _propTypes.default.string,
      afterOpen: _propTypes.default.string,
      beforeClose: _propTypes.default.string
    }),
    closeContainerClassName: _propTypes.default.string
  }),
  hasCloseButton: _propTypes.default.bool,
  isAnimated: _propTypes.default.bool
};
Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: '',
  modalProps: {},
  disableOutsideScroll: false,
  modalClassNames: {
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
    closeContainerClassName: 'k-Modal__close'
  },
  hasCloseButton: true,
  isAnimated: true
};