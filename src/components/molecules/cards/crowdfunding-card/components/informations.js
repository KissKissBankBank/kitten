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
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../../components/atoms/typography/text");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Informations = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(Informations, _PureComponent);

  function Informations() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Informations.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        info1 = _this$props.info1,
        info2 = _this$props.info2,
        info3 = _this$props.info3;
    if (!info1 && !info2 && !info3) return null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "k-CrowdfundingCard__informations"
    }, this.renderInfo(info1), this.renderInfo(info2), this.renderInfo(info3));
  };

  _proto.renderInfo = function renderInfo(text) {
    var loading = this.props.loading;
    if (!text) return null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "k-CrowdfundingCard__informations__infoContainer"
    }, !loading && /*#__PURE__*/_react.default.createElement(_text.Text, {
      lineHeight: "normal",
      weight: "light",
      color: "font1",
      className: "k-CrowdfundingCard__informations__info"
    }, text), loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "k-CrowdfundingCard__informations__loadingElement"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "k-CrowdfundingCard__informations__loadingElement"
    })));
  };

  return Informations;
}(_react.PureComponent);

Informations.propTypes = {
  info1: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.bool]),
  info2: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.bool]),
  info3: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.bool]),
  loading: _propTypes.default.bool
};
Informations.defaultProps = {
  info1: '',
  info2: '',
  info3: '',
  loading: false
};
var _default = Informations;
exports.default = _default;