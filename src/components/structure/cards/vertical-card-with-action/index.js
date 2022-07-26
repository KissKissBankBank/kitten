"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.VerticalCardWithAction = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _title = require("../../../typography/title");

var _next = require("../../../typography/paragraph/next");

var _button = require("../../../action/button");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _classnames = _interopRequireDefault(require("classnames"));

const StyledVerticalCardWithAction = _styledComponents.default.div.withConfig({
  displayName: "vertical-card-with-action__StyledVerticalCardWithAction",
  componentId: "sc-1py59cr-0"
})([".k-VerticalCardWithAction__image{width:100%;height:auto;display:block;}.k-VerticalCardWithAction__text{color:", ";}"], _colorsConfig.default.font1);

const VerticalCardWithAction = _ref => {
  let {
    imageProps,
    title,
    titleTag,
    description,
    descriptionTag,
    button,
    buttonModifier,
    buttonProps,
    ...others
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledVerticalCardWithAction, others, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-margin-bottom-triple"
  }, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, imageProps, {
    className: (0, _classnames.default)('k-VerticalCardWithAction__image', imageProps.className)
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-VerticalCardWithAction__text k-u-margin-top-triple k-u-margin-bottom-triple"
  }, /*#__PURE__*/_react.default.createElement(_title.Title, {
    modifier: "senary",
    tag: titleTag,
    noMargin: true,
    className: (0, _classnames.default)('k-u-align-center', {
      'k-u-margin-bottom-singleHalf': !!description
    })
  }, title), description && /*#__PURE__*/_react.default.createElement(_next.Paragraph, {
    modifier: "tertiary",
    tag: descriptionTag,
    noMargin: true,
    className: "k-u-align-center k-u-margin-top-singleHalf"
  }, description)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-margin-top-triple k-u-align-center"
  }, /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, buttonProps, {
    modifier: buttonModifier,
    type: "button",
    onClick: buttonProps.onClick,
    href: buttonProps.href,
    className: (0, _classnames.default)('k-VerticalCardWithAction__button', buttonProps.className)
  }), button)));
};

exports.VerticalCardWithAction = VerticalCardWithAction;
VerticalCardWithAction.propTypes = {
  imageProps: _propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    alt: _propTypes.default.string.isRequired,
    style: _propTypes.default.shape({})
  }).isRequired,
  title: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  description: _propTypes.default.string,
  descriptionTag: _propTypes.default.string,
  button: _propTypes.default.string.isRequired,
  buttonModifier: _propTypes.default.string,
  buttonProps: _propTypes.default.shape({
    onClick: _propTypes.default.func,
    href: _propTypes.default.string
  }).isRequired
};
VerticalCardWithAction.defaultProps = {
  imageProps: {
    style: {}
  },
  titleTag: 'h1',
  description: '',
  descriptionTag: 'p',
  buttonModifier: 'helium',
  buttonProps: {
    onClick: null,
    href: null
  }
};