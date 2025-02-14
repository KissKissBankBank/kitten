"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RewardCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _components = require("./components");

var _getReactElements = require("../../../../helpers/react/get-react-elements");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RewardCard = _ref => {
  let {
    children,
    className,
    disabled,
    hasBorder,
    hasShadow,
    stretch,
    ...props
  } = _ref;
  const contentsChild = (0, _getReactElements.getReactElementsByType)({
    children,
    type: RewardCard.Contents
  })[0];

  if (!!contentsChild) {
    return /*#__PURE__*/_react.default.createElement(_styles.StyledRewardCard, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)('k-RewardCard', className, {
        'k-RewardCard--disabled': disabled,
        'k-RewardCard--hasBorder': hasBorder,
        'k-RewardCard--hasShadow': hasShadow,
        'k-RewardCard--isStretched': stretch
      })
    }), children);
  } // Old card version


  console.warn('This use of the RewardCard is deprecated. Please wrap contents with `RewardCard.Contents`.');
  const imageChild = (0, _getReactElements.getReactElementsByType)({
    children,
    type: RewardCard.Image
  })[0];
  const buttonChild = (0, _getReactElements.getReactElementsByType)({
    children,
    type: RewardCard.Button
  })[0];
  const wrappedChildren = (0, _getReactElements.getReactElementsWithoutTypeArray)({
    children,
    typeArray: [RewardCard.Button, RewardCard.Image]
  });
  return /*#__PURE__*/_react.default.createElement(_styles.StyledRewardCard, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-RewardCard', className, {
      'k-RewardCard--disabled': disabled,
      'k-RewardCard--hasBorder': hasBorder,
      'k-RewardCard--isStretched': stretch
    })
  }), imageChild && /*#__PURE__*/(0, _react.cloneElement)(imageChild), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-RewardCard__gridWrapper"
  }, wrappedChildren && wrappedChildren.map((item, index) => /*#__PURE__*/(0, _react.cloneElement)(item, {
    key: "RewardCard-" + index
  }))), buttonChild && /*#__PURE__*/(0, _react.cloneElement)(buttonChild, {
    disabled
  }));
};

exports.RewardCard = RewardCard;
RewardCard.Info = _components.Info;
RewardCard.Form = _components.Form;
RewardCard.Title = _components.Title;
RewardCard.Image = _components.Image;
RewardCard.Amount = _components.Amount;
RewardCard.Button = _components.Button;
RewardCard.TagList = _components.TagList;
RewardCard.HeadingTag = _components.HeadingTag;
RewardCard.Description = _components.Description;
RewardCard.Contents = _components.Contents;
RewardCard.defaultProps = {
  hasBorder: true,
  hasShadow: true,
  disabled: false,
  stretch: false
};
RewardCard.propTypes = {
  hasBorder: _propTypes.default.bool,
  hasShadow: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  stretch: _propTypes.default.bool
};