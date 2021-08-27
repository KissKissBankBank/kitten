"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideLayout = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bowser = _interopRequireDefault(require("bowser"));

var _sideGrid = require("../../../components/layout/side-grid");

var _elementHelper = _interopRequireDefault(require("../../../helpers/dom/element-helper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledSideLayout = (0, _styledComponents.default)(_sideGrid.SideGrid).withConfig({
  displayName: "side-layout__StyledSideLayout",
  componentId: "ocof17-0"
})([".k-VerticalGrid__fluid{flex-basis:100%;}.k-VerticalGrid__fullHeight{height:100vh;}.k-VerticalGrid__container{display:flex;height:100%;}.k-VerticalGrid__element{flex-grow:1;}"]);

var SideLayout = function SideLayout(_ref) {
  var className = _ref.className,
      children = _ref.children,
      sidebar = _ref.sidebar;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      needsFullHeight = _useState2[0],
      setNeedsFullHeight = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!_elementHelper.default.canUseDom()) return;

    var browser = _bowser.default.getParser(window.navigator.userAgent);

    setNeedsFullHeight(browser.isBrowser('safari'));
  }, []);
  var hasFluidLayout = (className || '').search('k-VerticalGrid__fluid') != -1;
  return /*#__PURE__*/_react.default.createElement(StyledSideLayout, {
    className: (0, _classnames.default)(className, {
      'k-VerticalGrid__fullHeight': hasFluidLayout && needsFullHeight
    }),
    containerClassName: "k-VerticalGrid__container",
    rowClassName: "k-VerticalGrid__element"
  }, /*#__PURE__*/_react.default.createElement(_sideGrid.SideGridContent, null, children), /*#__PURE__*/_react.default.createElement(_sideGrid.SideGridAside, {
    className: "k-VerticalGrid__element"
  }, sidebar));
};

exports.SideLayout = SideLayout;
SideLayout.defaultProps = {
  children: 'Children',
  sidebar: null
};