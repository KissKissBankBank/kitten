"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Description = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../../components/typography/text");

var Description = function Description(_ref) {
  var children = _ref.children,
      className = _ref.className,
      moreButtonText = _ref.moreButtonText,
      truncateText = _ref.truncateText,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "moreButtonText", "truncateText"]);
  var descriptionElementRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      displayMoreButton = _useState2[0],
      setMoreButtonDisplay = _useState2[1];

  (0, _react.useEffect)(function () {
    var _descriptionElementRe;

    if (!truncateText) return;
    if (!descriptionElementRef) return;
    var parent = descriptionElementRef.current;
    var child = (_descriptionElementRe = descriptionElementRef.current) === null || _descriptionElementRe === void 0 ? void 0 : _descriptionElementRe.children[0];
    if (!child) return;

    if (parent.clientHeight < child.clientHeight) {
      setMoreButtonDisplay(true);
    }
  }, [descriptionElementRef, truncateText]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: descriptionElementRef,
    className: (0, _classnames.default)('k-BackingCard__descriptionWrapper', 'k-BackingCard__drawer', 'k-BackingCard__drawer--extensible', className, {
      'k-BackingCard__descriptionWrapper--hasMore': displayMoreButton,
      'k-BackingCard__descriptionWrapper--truncateText': truncateText
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-BackingCard__description"
  }, children), displayMoreButton && /*#__PURE__*/_react.default.createElement(_text.Text, {
    className: "k-BackingCard__description__moreButton",
    color: "primary1",
    weight: "regular",
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