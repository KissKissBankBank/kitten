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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _closeButton = require("../../../components/buttons/close-button");

var _styledComponents = require("styled-components");

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  .k-Modal__overlay {\n    opacity: 0;\n  }\n  .k-Modal__content {\n    opacity: 0;\n    transform: scale(.94);\n  }\n\n  .k-Modal__overlay--afterOpen {\n    transition: opacity .3s ease;\n    opacity: 1;\n  }\n  .k-Modal--afterOpen {\n    transition: opacity .3s ease, transform .3s ease;\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  .k-Modal__overlay--beforeClose {\n    opacity: 0;\n  }\n  .k-Modal--beforeClose {\n    transition: opacity .3s ease, transform .5s ease;\n    transform: scale(1.06);\n    opacity: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  body.k-Modal__body--open {\n    overflow: hidden;\n  }\n\n  .k-Modal__content {\n    position: relative;\n    max-height: calc(100% - ", " * 2);\n    max-width: calc(100vw - ", " * 2);\n\n    background-color: ", ";\n    text-align: center;\n    padding-left: ", ";\n    padding-right: ", ";\n\n    box-sizing: border-box;\n    overflow: scroll;\n\n    @media (min-width: ", ") {\n      max-width: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n    }\n  }\n\n  .k-Modal__close {\n    position: absolute;\n    top: 0;\n    right: ", ";\n\n    button {\n      margin: 0;\n    }\n  }\n\n  .k-Modal__close--fixed {\n    position: fixed;\n  }\n\n  .k-Modal__overlay {\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: rgba(34, 34, 34, .9);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), _colorsConfig.default.background1, (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(690), (0, _typography.pxToRem)(110), (0, _typography.pxToRem)(110), (0, _typography.pxToRem)(30));
var AnimatedGlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject2());

var Modal = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    var _this;

    (0, _classCallCheck2.default)(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
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
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Modal__close"
      }, /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
        className: "k-Modal__close--fixed",
        modifier: "hydrogen",
        onClick: this.close,
        size: "micro",
        closeButtonLabel: closeButtonLabel
      }));
    }
  }, {
    key: "renderTriggerAction",
    value: function renderTriggerAction() {
      if (!this.props.trigger) return;
      return /*#__PURE__*/_react.default.createElement("span", {
        onClick: this.open
      }, this.props.trigger);
    }
  }, {
    key: "renderGlobalStyle",
    value: function renderGlobalStyle() {
      var modalClassNames = this.props.modalClassNames;
      if (modalClassNames.className.base !== 'k-Modal__content' && modalClassNames.overlayClassName.base !== 'k-Modal__overlay') return;
      return /*#__PURE__*/_react.default.createElement(GlobalStyle, null);
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
          modalClassNames = _this$props.modalClassNames,
          hasCloseButton = _this$props.hasCloseButton,
          isAnimated = _this$props.isAnimated,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["trigger", "content", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "disableOutsideScroll", "modalClassNames", "hasCloseButton", "isAnimated"]);
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