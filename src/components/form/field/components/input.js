"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textInput = require("../../../form/input/text-input");

const FieldInput = _ref => {
  var _props$wrapperProps;

  let {
    limit,
    unit,
    noMargin,
    className,
    ...props
  } = _ref;

  const has = (() => {
    switch (true) {
      case !!limit:
        return 'limit';

      case !!unit:
        return 'unit';

      default:
        return undefined;
    }
  })();

  return /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
    has: has,
    limit: limit,
    unit: unit
  }, props, {
    wrapperProps: { ...props.wrapperProps,
      className: (0, _classnames.default)('k-FieldInput', 'k-Field__control', className, (_props$wrapperProps = props.wrapperProps) == null ? void 0 : _props$wrapperProps.className, {
        'k-u-margin-top-single': !noMargin
      })
    }
  }));
};

exports.FieldInput = FieldInput;
FieldInput.propTypes = {
  limit: _propTypes.default.number,
  unit: _propTypes.default.string,
  noMargin: _propTypes.default.bool
};
FieldInput.defaultProps = {
  limit: undefined,
  unit: undefined,
  noMargin: false
};