"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EditorBar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _arrowIcon = require("../../graphics/icons/arrow-icon");

var _details = require("../../structure/expand/details");

var _button = require("../../action/button");

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

const StyledEditorBar = _styledComponents.default.div.withConfig({
  displayName: "editor-bar__StyledEditorBar",
  componentId: "sc-9bmxee-0"
})(["--editorBar-spacing:", ";display:flex;gap:var(--editorBar-spacing);justify-content:var(--editorBar-align,flex-start);@media ", "{--editorBar-spacing:", ";}&.k-EditorBar--theme-grey{padding:", " var(--editorBar-spacing);background-color:var(--color-grey-200);}.k-EditorBar__group{flex-shrink:0;display:flex;.k-EditorBar__button{&:not(:last-of-type){border-top-right-radius:0;border-bottom-right-radius:0;}&:not(:first-of-type){border-top-left-radius:0;border-bottom-left-radius:0;}:hover:not(:disabled),:focus:not(:disabled){z-index:1;}&[aria-pressed='true'],&[aria-checked='true']{z-index:2;position:relative;}}.k-EditorBar__button + .k-EditorBar__button{margin-left:calc(-1 * var(--border-width,1px));}}.k-EditorBar__button{flex-shrink:0;&.k-EditorBar__button--wide{width:", ";}}.k-EditorBar__list{position:relative;summary{border-radius:var(--border-radius-s);&:focus{z-index:3;}}&[open] summary::after{content:'';display:block;position:fixed;left:0;right:0;top:0;bottom:0;z-index:4;cursor:initial;}&[open] summary .k-EditorBar__button{border-bottom-left-radius:0;border-bottom-right-radius:0;}&.k-EditorBar__list--disabled{pointer-events:none;cursor:not-allowed;}.k-EditorBar__list_items{position:absolute;z-index:5;display:flex;flex-direction:column;left:0;right:0;}.k-EditorBar__item{height:", ";position:relative;background-color:var(--color-grey-000);border:", " solid transparent;border-inline:var(--border,", " solid var(--color-grey-400));text-align:center;transition:border var(--transition),background-color var(--transition);box-sizing:border-box;&:hover,&:focus{background-color:var(--color-primary-100);border-color:var(--color-primary-700) !important;}&:focus{z-index:3;}&:first-child{border-top:none;}&:last-child{border-block-end:var( --border,", " solid var(--color-grey-400) );border-bottom-left-radius:var(--border-radius-s);border-bottom-right-radius:var(--border-radius-s);}&[aria-pressed='true']{svg,path{fill:var(--color-primary-500);}}}}"], (0, _typography.pxToRem)(10), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1));

const EditorBar = _ref => {
  let {
    className,
    align = 'flex-start',
    style,
    theme = 'white',
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledEditorBar, (0, _extends2.default)({
    className: (0, _classnames.default)('k-EditorBar', className, "k-EditorBar--theme-" + theme),
    style: { ...style,
      '--editorBar-align': align
    }
  }, props));
};

exports.EditorBar = EditorBar;

EditorBar.Group = _ref2 => {
  let {
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-EditorBar__group', className)
  }, props));
};

EditorBar.Button = _ref3 => {
  let {
    className,
    active,
    wide = false,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    className: (0, _classnames.default)('k-EditorBar__button', className, {
      'k-EditorBar__button--wide': wide
    })
  }, props, {
    fit: "icon",
    type: "button",
    "aria-pressed": active,
    active: active
  }));
};

EditorBar.List = _ref4 => {
  let {
    currentIcon = null,
    children,
    className,
    disabled = false,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(_details.Details, (0, _extends2.default)({
    summaryRender: _ref5 => {
      let {
        open
      } = _ref5;
      return /*#__PURE__*/_react.default.createElement(_button.Button, {
        active: open,
        tag: "span",
        className: "k-EditorBar__button k-EditorBar__button--wide",
        fit: "icon"
      }, currentIcon, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        width: "6",
        direction: open ? 'top' : 'bottom'
      }));
    },
    className: (0, _classnames.default)('k-EditorBar__list', className, {
      'k-EditorBar__list--disabled': disabled
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-EditorBar__list_items"
  }, children));
};

EditorBar.Item = _ref6 => {
  let {
    className,
    active,
    ...props
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: (0, _classnames.default)('k-EditorBar__item', 'k-u-reset-button', className, {
      'k-EditorBar__item': active
    }),
    type: "button",
    "aria-pressed": active
  }, props));
};