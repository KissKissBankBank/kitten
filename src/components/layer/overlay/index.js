"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Overlay = exports.OPEN_OVERLAY_EVENT = exports.CLOSE_OVERLAY_EVENT = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CLOSE_OVERLAY_EVENT = 'overlay-close';
exports.CLOSE_OVERLAY_EVENT = CLOSE_OVERLAY_EVENT;
const OPEN_OVERLAY_EVENT = 'overlay-open';
exports.OPEN_OVERLAY_EVENT = OPEN_OVERLAY_EVENT;

const StyledOverlay = _styledComponents.default.div.withConfig({
  displayName: "overlay__StyledOverlay",
  componentId: "sc-22og3c-0"
})(["left:0;top:0;right:100%;bottom:100%;z-index:", ";visibility:hidden;opacity:0;background:rgba(0,0,0,0.4);transition:visibility 0s ease,opacity 0.2s ease,bottom 0s,right 0s;transition-delay:0.2s,0s,0.2s,0.2s;&.k-Overlay--absolute{position:absolute;}&.k-Overlay--fixed{position:fixed;}&.k-Overlay--isActive{right:0;bottom:0;visibility:visible;opacity:1;transition-delay:0s,0s,0s,0s;}"], _ref => {
  let {
    zIndex
  } = _ref;
  return zIndex;
});

class Overlay extends _react.Component {
  constructor(props) {
    super(props);

    this.toggleActiveState = () => this.setState({
      isActive: !this.state.isActive
    });

    this.disableActiveState = () => this.setState({
      isActive: false
    });

    this.enableActiveState = () => this.setState({
      isActive: true
    });

    this.state = {
      isActive: props.isActive
    };
  }

  componentDidMount() {
    this.props.toggleEvent && window.addEventListener(this.props.toggleEvent, this.toggleActiveState);
    this.props.closeEvent && window.addEventListener(this.props.closeEvent, this.disableActiveState);
    this.props.openEvent && window.addEventListener(this.props.openEvent, this.enableActiveState);
  }

  componentWillUnmount() {
    this.props.toggleEvent && window.removeEventListener(this.props.toggleEvent, this.toggleActiveState);
    this.props.closeEvent && window.removeEventListener(this.props.closeEvent, this.disableActiveState);
    this.props.openEvent && window.removeEventListener(this.props.openEvent, this.enableActiveState);
  }

  render() {
    const {
      className,
      zIndex,
      position,
      ...other
    } = this.props;
    const {
      isActive
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(StyledOverlay, (0, _extends2.default)({
      zIndex: zIndex,
      className: (0, _classnames.default)(className, 'k-Overlay', "k-Overlay--" + position, {
        'k-Overlay--isActive': isActive
      })
    }, other));
  }

}

exports.Overlay = Overlay;
Overlay.propTypes = {
  zIndex: _propTypes.default.number,
  isActive: _propTypes.default.bool,
  toggleEvent: _propTypes.default.string,
  closeEvent: _propTypes.default.string,
  openEvent: _propTypes.default.string,
  position: _propTypes.default.oneOf(['absolute', 'fixed'])
};
Overlay.defaultProps = {
  zIndex: 100,
  isActive: false,
  toggleEvent: '',
  closeEvent: CLOSE_OVERLAY_EVENT,
  openEvent: OPEN_OVERLAY_EVENT,
  position: 'absolute'
};