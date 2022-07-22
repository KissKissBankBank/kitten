"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EditorialCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _title = require("../../../typography/title");

var _text = require("../../../typography/text");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _typography = require("../../../../helpers/utils/typography");

var _longArrowIconNext = require("../../../graphics/icons-next/long-arrow-icon-next");

var _getReactElements = require("../../../../helpers/react/get-react-elements");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledEditorialCard = _styledComponents.default.div.withConfig({
  displayName: "editorial-card__StyledEditorialCard",
  componentId: "sc-r7owgx-0"
})(["box-sizing:border-box;height:100%;position:relative;color:var(--color-grey-000);border-radius:var(--border-radius-m);overflow:hidden;font-size:var(--font-size-3);line-height:", ";.k-EditorialCard__grid{height:100%;display:grid;grid-template-columns:100%;transition:transform var(--transition);}&.k-EditorialCard--hasVerso .k-EditorialCard__grid{grid-template-columns:repeat(2,100%);}&:not(.k-EditorialCard--isRecto) .k-EditorialCard__grid{transform:translateX(-100%);}.k-EditorialCard__recto,.k-EditorialCard__verso{box-sizing:border-box;height:100%;padding:", ";display:flex;flex-direction:column;}@media ", "{font-size:var(--font-size-4);line-height:", ";}.k-EditorialCard__recto{", "}.k-EditorialCard__verso{", "}.k-EditorialCard__content{flex:1 1 auto;p{margin:0;& + p{margin-top:1em;}}}.k-EditorialCard__action{position:absolute;top:0;left:0;width:100%;height:100%;}.k-EditorialCard__arrow{margin-top:", ";align-self:end;@media ", "{transform:none !important;}}&.k-EditorialCard--info{background-color:var(--color-primary-500);}&.k-EditorialCard--success{background-color:var(--color-success-500);}&.k-EditorialCard--custom{background-color:var(--editorialCard-customColor);}"], (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(30), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(20), _typographyConfig.default.fontStyles['500'], _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(20), _screenConfig.mq.mobile);

const EditorialCard = _ref => {
  let {
    children,
    className,
    status,
    customColor,
    hasArrow,
    href,
    style,
    linkActionText,
    showVersoActionText,
    linkProps,
    ...props
  } = _ref;
  const [isRecto, setIsVerso] = (0, _react.useState)(true);
  const VersoChild = (0, _getReactElements.getReactElementsByType)({
    children,
    type: Verso
  })[0];
  const hasVerso = !!VersoChild;
  let Action = 'a';
  let actionProps = {
    className: 'k-EditorialCard__action',
    href: href,
    'aria-label': linkActionText,
    ...linkProps
  };

  if (hasVerso && isRecto) {
    Action = 'button';
    actionProps = {
      className: 'k-EditorialCard__action k-u-reset-button',
      type: 'button',
      onClick: e => {
        setIsVerso(false);
        linkProps.onClick(e);
      },
      'aria-label': showVersoActionText,
      ...linkProps
    };
  }

  return /*#__PURE__*/_react.default.createElement(StyledEditorialCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-EditorialCard', className, "k-EditorialCard--" + status, {
      'k-EditorialCard--hasArrow': hasArrow,
      'k-EditorialCard--hasVerso': hasVerso,
      'k-EditorialCard--isRecto': isRecto,
      'k-EditorialCard--isVerso': !isRecto
    }),
    style: {
      '--editorialCard-customColor': !!customColor ? customColor : null,
      ...style
    }
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-EditorialCard__grid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-EditorialCard__recto"
  }, (0, _getReactElements.getReactElementsWithoutType)({
    children,
    type: Verso
  }), !!hasArrow && /*#__PURE__*/_react.default.createElement(_longArrowIconNext.LongArrowIconNext, {
    className: "k-EditorialCard__arrow",
    color: "var(--color-grey-000)"
  })), hasVerso && VersoChild), /*#__PURE__*/_react.default.createElement(Action, actionProps));
};

exports.EditorialCard = EditorialCard;
EditorialCard.propTypes = {
  status: _propTypes.default.oneOf(['info', 'success', 'custom']),
  customColor: _propTypes.default.string,
  hasArrow: _propTypes.default.bool,
  linkActionText: _propTypes.default.string,
  showVersoActionText: _propTypes.default.string,
  linkProps: _propTypes.default.object
};
EditorialCard.defaultProps = {
  status: 'info',
  customColor: '',
  hasArrow: true,
  linkActionText: 'Voir tous les projets',
  showVersoActionText: 'Plus de précisions',
  linkProps: {}
};

const Title = _ref2 => {
  let {
    className,
    children,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    modifier: "tertiary",
    cssColor: "inherit",
    noMargin: true,
    className: (0, _classnames.default)('k-EditorialCard__title', className)
  }, props), children, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": true
  }, "-"));
};

const Content = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-EditorialCard__content', className)
  }, props));
};

const Verso = _ref4 => {
  let {
    className,
    actionText,
    children,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-EditorialCard__verso', className)
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-EditorialCard__content"
  }, children), /*#__PURE__*/_react.default.createElement(_text.Text, {
    className: "k-EditorialCard__actionText k-u-m-t-8",
    weight: "700"
  }, actionText));
};

EditorialCard.Title = Title;
EditorialCard.Content = Content;
EditorialCard.Verso = Verso;