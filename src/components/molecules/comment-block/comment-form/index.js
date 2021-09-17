"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CommentForm = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../../components/layout/marger");

var _commentAvatar = require("../../../../components/molecules/comment-block/comment-avatar");

var _button = require("../../../../components/molecules/buttons/button");

var _text = require("../../../../components/atoms/typography/text");

var _screenConfig = require("../../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledGrid = _styledComponents.default.div.withConfig({
  displayName: "comment-form__StyledGrid",
  componentId: "sc-1hg07ex-0"
})(["display:flex;"]);

var StyledGridCol = _styledComponents.default.div.withConfig({
  displayName: "comment-form__StyledGridCol",
  componentId: "sc-1hg07ex-1"
})(["flex:1;margin-left:", ";@media (min-width:", "px){margin-left:", ";}"], (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(35));

var StyledInput = _styledComponents.default.div.withConfig({
  displayName: "comment-form__StyledInput",
  componentId: "sc-1hg07ex-2"
})(["margin-bottom:", ";display:flex;position:relative;"], (0, _typography.pxToRem)(0.5));

var StyledTextarea = _styledComponents.default.textarea.withConfig({
  displayName: "comment-form__StyledTextarea",
  componentId: "sc-1hg07ex-3"
})(["color:", ";", ";width:100%;overflow-y:hidden;resize:none;box-sizing:border-box;border-width:", ";border-style:solid;border-color:", ";color:", ";padding:", ";font-size:", ";@media (min-width:", "px){font-size:", ";}&:focus{outline:", " solid ", ";outline-offset:", ";border-color:", ";color:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}::placeholder{color:", ";}", " ", ""], _colorsConfig.default.font2, _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.font1, (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), _screenConfig.ScreenConfig.S.min, (0, _typography.stepToRem)(0), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.line2, _colorsConfig.default.font1, _colorsConfig.default.primary4, _colorsConfig.default.font2, function (_ref) {
  var isDisabled = _ref.isDisabled;
  return isDisabled && css(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n      border-color: ", ";\n      color: ", ";\n      background-color: ", ";\n    "])), _colorsConfig.default.line1, _colorsConfig.default.font2, _colorsConfig.default.line1);
}, function (_ref2) {
  var error = _ref2.error;
  return error && css(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n      border-color: ", ";\n      color: ", ";\n    "])), _colorsConfig.default.error3, _colorsConfig.default.error3);
});

var StyledArrow = _styledComponents.default.div.withConfig({
  displayName: "comment-form__StyledArrow",
  componentId: "sc-1hg07ex-4"
})(["position:absolute;top:", ";display:block;width:0;height:0;border-width:", ";border-style:solid;border-color:transparent;border-right-color:", ";left:-", ";@media (min-width:", "px){top:", ";}", ":focus + &{border-right-color:", ";}", ""], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _colorsConfig.default.line1, (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(35), StyledTextarea, _colorsConfig.default.line2, function (_ref3) {
  var error = _ref3.error;
  return error && css(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n      border-right-color: ", ";\n    "])), _colorsConfig.default.error3);
});

var StyledArrowBefore = _styledComponents.default.span.withConfig({
  displayName: "comment-form__StyledArrowBefore",
  componentId: "sc-1hg07ex-5"
})(["position:absolute;width:0;height:0;margin-top:-", ";border-width:", ";border-style:solid;border-color:transparent;border-right-color:", ";left:-", ";"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), _colorsConfig.default.background1, (0, _typography.pxToRem)(7));

var CommentForm = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(CommentForm, _PureComponent);

  function CommentForm(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _this.handleChange = function (e) {
      var element = e.target;

      _this.setState({
        value: element.value,
        height: 'auto'
      }, function () {
        _this.setState({
          height: element.scrollHeight
        });
      });
    };

    _this.handleSubmit = function () {
      _this.props.onSubmit(_this.state.value);
    };

    _this.state = {
      value: _this.props.defaultValue,
      height: 'auto'
    };
    return _this;
  }

  var _proto = CommentForm.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        avatarImgProps = _this$props.avatarImgProps,
        avatarBadge = _this$props.avatarBadge;
    return /*#__PURE__*/_react.default.createElement(StyledGrid, null, /*#__PURE__*/_react.default.createElement(_commentAvatar.CommentAvatar, {
      avatarBadge: avatarBadge,
      avatarImgProps: avatarImgProps
    }), this.renderInput());
  };

  _proto.renderInput = function renderInput() {
    var _this$props2 = this.props,
        isDisabled = _this$props2.isDisabled,
        placeholder = _this$props2.placeholder,
        defaultValue = _this$props2.defaultValue,
        commentLabel = _this$props2.commentLabel,
        ariaId = _this$props2.ariaId,
        textareaId = _this$props2.textareaId;
    return /*#__PURE__*/_react.default.createElement(StyledGridCol, null, /*#__PURE__*/_react.default.createElement(StyledInput, null, /*#__PURE__*/_react.default.createElement(StyledTextarea, {
      id: textareaId,
      "aria-label": commentLabel,
      "aria-describedby": ariaId,
      "aria-invalid": "false",
      "aria-required": "true",
      defaultValue: defaultValue,
      key: "comment-form",
      disabled: isDisabled,
      placeholder: placeholder,
      onChange: this.handleChange,
      rows: "1"
    }), /*#__PURE__*/_react.default.createElement(StyledArrow, null, /*#__PURE__*/_react.default.createElement(StyledArrowBefore, null))), this.renderError(), this.renderButton());
  };

  _proto.renderButton = function renderButton() {
    if (!this.state.value) return;
    var commentButton = this.props.commentButton;
    return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
      top: "2"
    }, /*#__PURE__*/_react.default.createElement(_button.Button, {
      type: "button",
      modifier: "helium",
      onClick: this.handleSubmit,
      className: "k-u-margin-right-single"
    }, commentButton));
  };

  _proto.renderError = function renderError() {
    var _this$props3 = this.props,
        error = _this$props3.error,
        errorMessage = _this$props3.errorMessage,
        ariaId = _this$props3.ariaId;
    if (!error) return;
    return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
      top: ".5"
    }, /*#__PURE__*/_react.default.createElement(_text.Text, {
      id: ariaId,
      color: "error",
      size: "micro",
      weight: "regular"
    }, errorMessage));
  };

  return CommentForm;
}(_react.PureComponent);

exports.CommentForm = CommentForm;
CommentForm.propTypes = {
  avatarImgProps: _propTypes.default.object.isRequired,
  isDisabled: _propTypes.default.bool,
  placeholder: _propTypes.default.string.isRequired,
  commentButton: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  onSubmit: _propTypes.default.func,
  defaultValue: _propTypes.default.string,
  commentLabel: _propTypes.default.string,
  ariaId: _propTypes.default.string,
  avatarBadge: _propTypes.default.node,
  textareaId: _propTypes.default.string
};
CommentForm.defaultProps = {
  onSubmit: function onSubmit() {},
  error: false,
  errorMessage: '',
  isDisabled: false,
  commentButton: '',
  defaultValue: '',
  ariaId: '',
  commentLabel: '',
  avatarBadge: '',
  textareaId: null
};