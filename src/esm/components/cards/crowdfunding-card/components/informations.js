import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../components/typography/text';

var Informations = /*#__PURE__*/function (_PureComponent) {
  _inherits(Informations, _PureComponent);

  var _super = _createSuper(Informations);

  function Informations() {
    _classCallCheck(this, Informations);

    return _super.apply(this, arguments);
  }

  _createClass(Informations, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          info1 = _this$props.info1,
          info2 = _this$props.info2,
          info3 = _this$props.info3;
      if (!info1 && !info2 && !info3) return null;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-CrowdfundingCard__informations"
      }, this.renderInfo(info1), this.renderInfo(info2), this.renderInfo(info3));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(text) {
      var loading = this.props.loading;
      if (!text) return null;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-CrowdfundingCard__informations__infoContainer"
      }, !loading && /*#__PURE__*/React.createElement(Text, {
        lineHeight: "normal",
        weight: "light",
        color: "font1",
        className: "k-CrowdfundingCard__informations__info"
      }, text), loading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "k-CrowdfundingCard__informations__loadingElement"
      }), /*#__PURE__*/React.createElement("span", {
        className: "k-CrowdfundingCard__informations__loadingElement"
      })));
    }
  }]);

  return Informations;
}(PureComponent);

Informations.propTypes = {
  info1: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  info2: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  info3: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  loading: PropTypes.bool
};
Informations.defaultProps = {
  info1: '',
  info2: '',
  info3: '',
  loading: false
};
export default Informations;