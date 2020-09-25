import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      border-right-color: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      border-color: ", ";\n      color: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      border-color: ", ";\n      color: ", ";\n      background-color: ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Marger } from '../../../components/layout/marger';
import { CommentAvatar } from '../../../components/comments/comment-avatar';
import { Button } from '../../../components/buttons/button';
import { Text } from '../../../components/typography/text';
import { ScreenConfig } from '../../../constants/screen-config';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
var StyledGrid = styled.div.withConfig({
  displayName: "comment-form__StyledGrid",
  componentId: "sc-1yidca9-0"
})(["display:flex;"]);
var StyledGridCol = styled.div.withConfig({
  displayName: "comment-form__StyledGridCol",
  componentId: "sc-1yidca9-1"
})(["flex:1;margin-left:", ";@media (min-width:", "px){margin-left:", ";}"], pxToRem(20), ScreenConfig.S.min, pxToRem(35));
var StyledInput = styled.div.withConfig({
  displayName: "comment-form__StyledInput",
  componentId: "sc-1yidca9-2"
})(["margin-bottom:", ";display:flex;position:relative;"], pxToRem(0.5));
var StyledTextarea = styled.textarea.withConfig({
  displayName: "comment-form__StyledTextarea",
  componentId: "sc-1yidca9-3"
})(["color:", ";", ";width:100%;overflow-y:hidden;resize:none;box-sizing:border-box;border-width:", ";border-style:solid;border-color:", ";color:", ";padding:", ";font-size:", ";@media (min-width:", "px){font-size:", ";}:focus{outline:none;border-color:", ";color:", ";}::placeholder{color:", ";}", " ", ""], COLORS.font2, TYPOGRAPHY.fontStyles.light, pxToRem(2), COLORS.line1, COLORS.font1, pxToRem(30), stepToRem(-1), ScreenConfig.S.min, stepToRem(0), COLORS.line2, COLORS.font1, COLORS.font2, function (_ref) {
  var isDisabled = _ref.isDisabled;
  return isDisabled && css(_templateObject(), COLORS.line1, COLORS.font2, COLORS.line1);
}, function (_ref2) {
  var error = _ref2.error;
  return error && css(_templateObject2(), COLORS.error3, COLORS.error3);
});
var StyledArrow = styled.div.withConfig({
  displayName: "comment-form__StyledArrow",
  componentId: "sc-1yidca9-4"
})(["position:absolute;top:", ";display:block;width:0;height:0;border-width:", ";border-style:solid;border-color:transparent;border-right-color:", ";left:-", ";@media (min-width:", "px){top:", ";}", ":focus + &{border-right-color:", ";}", ""], pxToRem(20), pxToRem(10), COLORS.line1, pxToRem(20), ScreenConfig.S.min, pxToRem(35), StyledTextarea, COLORS.line2, function (_ref3) {
  var error = _ref3.error;
  return error && css(_templateObject3(), COLORS.error3);
});
var StyledArrowBefore = styled.span.withConfig({
  displayName: "comment-form__StyledArrowBefore",
  componentId: "sc-1yidca9-5"
})(["position:absolute;width:0;height:0;margin-top:-", ";border-width:", ";border-style:solid;border-color:transparent;border-right-color:", ";left:-", ";"], pxToRem(10), pxToRem(10), COLORS.background1, pxToRem(7));
export var CommentForm = /*#__PURE__*/function (_PureComponent) {
  _inherits(CommentForm, _PureComponent);

  var _super = _createSuper(CommentForm);

  function CommentForm(props) {
    var _this;

    _classCallCheck(this, CommentForm);

    _this = _super.call(this, props);

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

  _createClass(CommentForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          avatarImgProps = _this$props.avatarImgProps,
          avatarBadge = _this$props.avatarBadge;
      return /*#__PURE__*/React.createElement(StyledGrid, null, /*#__PURE__*/React.createElement(CommentAvatar, {
        avatarBadge: avatarBadge,
        avatarImgProps: avatarImgProps
      }), this.renderInput());
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props2 = this.props,
          isDisabled = _this$props2.isDisabled,
          placeholder = _this$props2.placeholder,
          defaultValue = _this$props2.defaultValue,
          commentLabel = _this$props2.commentLabel,
          ariaId = _this$props2.ariaId,
          textareaId = _this$props2.textareaId;
      return /*#__PURE__*/React.createElement(StyledGridCol, null, /*#__PURE__*/React.createElement(StyledInput, null, /*#__PURE__*/React.createElement(StyledTextarea, {
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
      }), /*#__PURE__*/React.createElement(StyledArrow, null, /*#__PURE__*/React.createElement(StyledArrowBefore, null))), this.renderError(), this.renderButton());
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      if (!this.state.value) return;
      var commentButton = this.props.commentButton;
      return /*#__PURE__*/React.createElement(Marger, {
        top: "2"
      }, /*#__PURE__*/React.createElement(Button, {
        type: "button",
        modifier: "helium",
        onClick: this.handleSubmit,
        className: "k-u-margin-right-single"
      }, commentButton));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      var _this$props3 = this.props,
          error = _this$props3.error,
          errorMessage = _this$props3.errorMessage,
          ariaId = _this$props3.ariaId;
      if (!error) return;
      return /*#__PURE__*/React.createElement(Marger, {
        top: ".5"
      }, /*#__PURE__*/React.createElement(Text, {
        id: ariaId,
        color: "error",
        size: "micro",
        weight: "regular"
      }, errorMessage));
    }
  }]);

  return CommentForm;
}(PureComponent);
CommentForm.propTypes = {
  avatarImgProps: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  commentButton: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
  defaultValue: PropTypes.string,
  commentLabel: PropTypes.string,
  ariaId: PropTypes.string,
  avatarBadge: PropTypes.node,
  textareaId: PropTypes.string
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