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
exports.Navbar = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _arrowIcon = require("../../../../components/graphics/icons/arrow-icon");

var _typography = require("../../../../helpers/utils/typography");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledArrowIcon = _styledComponents.default.div.withConfig({
  displayName: "navbar__StyledArrowIcon",
  componentId: "sc-19zp3yg-0"
})(["width:", ";height:", ";cursor:pointer;position:absolute;top:-", ";display:flex;align-items:center;justify-content:center;transition:transform 0.3s ease-in-out;", " ", ""], (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(2), function (_ref) {
  var left = _ref.left;
  return left && (0, _styledComponents.css)(["left:-", ";&:hover{transform:translate(-", ");}"], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(8));
}, function (_ref2) {
  var right = _ref2.right;
  return right && (0, _styledComponents.css)(["right:-", ";&:hover{transform:translate(", ");}"], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(8));
});

var Navbar = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Navbar, _Component);

  function Navbar() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Navbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        onPreviousClick = _this$props.onPreviousClick,
        onNextClick = _this$props.onNextClick,
        className = _this$props.className,
        iconColor = _this$props.iconColor,
        labels = _this$props.labels;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className
    }, /*#__PURE__*/_react.default.createElement(StyledArrowIcon, {
      "aria-label": labels.previoustMonth,
      onClick: function onClick() {
        return onPreviousClick();
      },
      left: true
    }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
      color: iconColor,
      direction: "left"
    })), /*#__PURE__*/_react.default.createElement(StyledArrowIcon, {
      "aria-label": labels.nextMonth,
      onClick: function onClick() {
        return onNextClick();
      },
      right: true
    }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
      color: iconColor
    })));
  };

  return Navbar;
}(_react.Component);

exports.Navbar = Navbar;