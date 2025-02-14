"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ContributionCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _closeButton = require("../../../action/close-button");

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _components = require("./components");

var _context = require("./context");

var _getReactElements = require("../../../../helpers/react/get-react-elements");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ContributionCard = _ref => {
  let {
    className,
    closeButtonLabel,
    children,
    show,
    style,
    borderRadius,
    borderColor,
    borderStyle,
    onClose,
    largeInput,
    largeTitle,
    ...props
  } = _ref;
  const imageChild = (0, _getReactElements.getReactElementsByType)({
    children,
    type: ContributionCard.Image
  })[0];
  const wrappedChildren = (0, _getReactElements.getReactElementsWithoutType)({
    children,
    type: ContributionCard.Image
  });
  const [isInputEmpty, setEmptyInput] = (0, _react.useState)(true);
  if (!show) return null;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledContributionCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ContributionCard', className),
    style: { ...style,
      '--contributionCard--border-radius': (0, _typography.pxToRem)(borderRadius),
      '--contributionCard--border-color': borderColor,
      '--contributionCard--border-style': borderStyle
    }
  }, props), onClose && /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    className: "k-ContributionCard__close",
    size: "micro",
    closeButtonLabel: closeButtonLabel,
    onClick: onClose
  }), imageChild && /*#__PURE__*/(0, _react.cloneElement)(imageChild), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-ContributionCard__gridWrapper', {
      'k-ContributionCard__gridWrapper--largeInput': largeInput
    })
  }, /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: {
      isInputEmpty,
      setEmptyInput
    }
  }, wrappedChildren.map((item, index) => /*#__PURE__*/(0, _react.cloneElement)(item, {
    key: "ContributionCard-" + index
  })))));
};

exports.ContributionCard = ContributionCard;
ContributionCard.Image = _components.Image;
ContributionCard.Title = _components.Title;
ContributionCard.Description = _components.Description;
ContributionCard.PillNumber = _components.PillNumber;
ContributionCard.Amount = _components.Amount;
ContributionCard.Input = _components.Input;
ContributionCard.Action = _components.Action;
ContributionCard.defaultProps = {
  show: true,
  closeButtonLabel: 'Close',
  borderColor: 'var(--color-grey-400)',
  borderRadius: 8,
  borderStyle: 'solid',
  onClose: undefined,
  largeInput: false,
  largeTitle: false
};
ContributionCard.propTypes = {
  show: _propTypes.default.bool,
  closeButtonLabel: _propTypes.default.string,
  onClose: _propTypes.default.func,
  borderColor: _propTypes.default.string,
  borderRadius: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  borderStyle: _propTypes.default.string,
  largeInput: _propTypes.default.bool,
  largeTitle: _propTypes.default.bool
};