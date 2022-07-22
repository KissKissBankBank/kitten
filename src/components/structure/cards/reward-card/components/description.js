"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Description = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../../typography/text");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Description = _ref => {
  let {
    children,
    className,
    moreButtonText,
    truncateText,
    ...props
  } = _ref;
  const descriptionElementRef = (0, _react.useRef)(null);
  const [displayMoreButton, setMoreButtonDisplay] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    var _descriptionElementRe;

    setMoreButtonDisplay(false);
    if (!truncateText) return;
    if (!descriptionElementRef) return;
    const parent = descriptionElementRef.current;
    const child = (_descriptionElementRe = descriptionElementRef.current) == null ? void 0 : _descriptionElementRe.children[0];
    if (!child) return;

    if (parent.clientHeight < child.clientHeight) {
      setMoreButtonDisplay(true);
    }
  }, [descriptionElementRef, truncateText]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-RewardCard__descriptionWrapper', 'k-RewardCard__drawer', 'k-RewardCard__drawer--extensible', className)
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    ref: descriptionElementRef,
    className: (0, _classnames.default)('k-RewardCard__description', {
      'k-RewardCard__description--hasMore': displayMoreButton,
      'k-RewardCard__description--truncateText': truncateText
    })
  }, /*#__PURE__*/_react.default.createElement("div", null, children)), displayMoreButton && /*#__PURE__*/_react.default.createElement(_text.Text, {
    className: "k-RewardCard__description__moreButton",
    color: "primary1",
    weight: "500",
    size: "micro"
  }, moreButtonText));
};

exports.Description = Description;
Description.defaultProps = {
  moreButtonText: 'More…',
  truncateText: false
};
Description.propTypes = {
  moreButtonText: _propTypes.default.node,
  truncateText: _propTypes.default.bool
};