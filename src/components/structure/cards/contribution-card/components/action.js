"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Action = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("../../../../action/button");

var _checkedCircleIcon = require("../../../../graphics/icons/checked-circle-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../../constants/colors-config"));

var _context = require("../context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Action = _ref => {
  let {
    isInputValid,
    title,
    className,
    ...props
  } = _ref;
  const {
    isInputEmpty
  } = (0, _react.useContext)(_context.Context);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isInputValid ? /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
    bgColor: _colorsConfig.default.valid,
    color: _colorsConfig.default.background1,
    title: title
  }) : /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    type: "submit",
    className: (0, _classnames.default)('k-ContributionCard__action', className),
    modifier: "helium",
    disabled: isInputEmpty,
    fit: "content"
  }, props)));
};

exports.Action = Action;
Action.defaultProps = {
  isInputValid: false,
  title: ''
};
Action.propTypes = {
  isInputValid: _propTypes.default.bool,
  title: _propTypes.default.string
};