"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.IconBadge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

const StyledBadge = _styledComponents.default.span.withConfig({
  displayName: "icon-badge__StyledBadge",
  componentId: "sc-r56wro-0"
})(["box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;padding:0;min-width:", ";min-height:", ";border-radius:var(--border-radius-rounded);background-color:var(--iconBadge-background-color);border-color:var(--iconBadge-border-color);& > span{display:block;display:inline-flex;justify-content:center;align-items:center;}&.k-IconBadge--star{background-color:var(--iconBadge-background-color);border-radius:0;min-width:", ";min-height:", ";position:relative;transform:rotate(-11deg);transform-origin:50% 50%;& > span{transform:rotate(11deg);transform-origin:inherit;}&::before,&::after{content:'';position:absolute;top:0;left:0;min-height:", ";min-width:", ";background-color:var(--iconBadge-background-color);z-index:-2;transform-origin:50% 50%;}::before{transform:rotate(30deg);}::after{transform:rotate(60deg);}}&.k-IconBadge--nano{min-width:", ";min-height:", ";&,& svg{max-width:", ";max-height:", ";}&.k-IconBadge--star::after,&.k-IconBadge--star::before{min-width:", ";min-height:", ";}}&.k-IconBadge--micro{min-width:", ";min-height:", ";&,& svg{max-width:", ";max-height:", ";}&.k-IconBadge--star::after,&.k-IconBadge--star::before{min-width:", ";min-height:", ";}}&.k-IconBadge--small{min-width:", ";min-height:", ";&,& svg{max-width:", ";}&.k-IconBadge--star::after,&.k-IconBadge--star::before{min-width:", ";min-height:", ";}}&.k-IconBadge--large{min-width:", ";min-height:", ";&.k-IconBadge--star::after,&.k-IconBadge--star::before{min-width:", ";min-height:", ";}}&.k-IconBadge--huge{min-width:", ";min-height:", ";&.k-IconBadge--star::after,&.k-IconBadge--star::before{min-width:", ";min-height:", ";}}svg{flex:0 0 auto;fill:var(--color-grey-000);}&.k-IconBadge--hasBorder{border-width:", ";border-style:solid;box-sizing:content-box;}&.k-IconBadge--hasBorderStyles{border-width:var(--iconBadge-border-width,0);border-color:var(--iconBadge-border-color);border-style:var(--iconBadge-border-style);}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(9), (0, _typography.pxToRem)(9), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(2));

const IconBadge = _ref => {
  var _border$style;

  let {
    className,
    children,
    empty,
    size,
    border,
    backgroundColor,
    status,
    shape,
    hasBorder,
    ...others
  } = _ref;

  const internalBackgroundColor = (() => {
    if (!!backgroundColor) return backgroundColor;
    if (!!empty) return 'var(--color-grey-000)';

    switch (status) {
      case 'news':
        return 'var(--color-news-500)';

      case 'success':
        return 'var(--color-success-500)';

      case 'disabled':
        return 'var(--color-grey-600)';

      case 'danger':
        return 'var(--color-danger-500)';

      case 'warning':
        return 'var(--color-warning-500)';

      case 'pending':
        return 'var(--color-grey-900)';

      case 'light':
        return 'var(--color-grey-400)';

      case 'info':
      default:
        return 'var(--color-primary-500)';
    }
  })();

  const internalBorderColor = (() => {
    if (!!border && 'color' in border) return border.color;
    if (!!empty) return 'var(--color-grey-300)';

    switch (status) {
      case 'success':
        return 'var(--color-success-300)';

      case 'disabled':
        return 'var(--color-grey-300)';

      case 'news':
        return 'var(--color-news-300)';

      case 'danger':
        return 'var(--color-danger-300)';

      case 'warning':
        return 'var(--color-warning-300)';

      case 'pending':
        return 'var(--color-grey-700)';

      case 'light':
        return 'var(--color-grey-100)';

      case 'info':
      default:
        return 'var(--color-primary-300)';
    }
  })();

  return /*#__PURE__*/_react.default.createElement(StyledBadge, (0, _extends2.default)({
    className: (0, _classnames.default)('k-IconBadge', className, "k-IconBadge--" + size, "k-IconBadge--" + status, "k-IconBadge--" + shape, {
      'k-IconBadge--empty': empty,
      'k-IconBadge--hasBorderStyles': !(0, _isEmpty.default)(border),
      'k-IconBadge--hasBorder': hasBorder
    }),
    style: {
      '--iconBadge-background-color': internalBackgroundColor != null ? internalBackgroundColor : null,
      '--iconBadge-border-width': 'width' in border ? (0, _typography.pxToRem)(border.width) : null,
      '--iconBadge-border-style': (_border$style = border == null ? void 0 : border.style) != null ? _border$style : null,
      '--iconBadge-border-color': internalBorderColor
    }
  }, others), /*#__PURE__*/_react.default.createElement("span", null, children));
};

exports.IconBadge = IconBadge;
IconBadge.defaultProps = {
  empty: false,
  size: 'medium',
  border: {},
  backgroundColor: null,
  status: 'info',
  shape: 'circle',
  hasBorder: false
};
IconBadge.propTypes = {
  empty: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['nano', 'micro', 'small', 'medium', 'large', 'huge']),
  backgroundColor: _propTypes.default.string,
  border: _propTypes.default.shape({
    width: _propTypes.default.number,
    color: _propTypes.default.node,
    style: _propTypes.default.string
  }),
  status: _propTypes.default.oneOf(['news', 'info', 'success', 'danger', 'warning', 'disabled', 'pending', 'light']),
  shape: _propTypes.default.oneOf(['circle', 'star']),
  hasBorder: _propTypes.default.bool
};