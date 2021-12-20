import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../../components/atoms/typography/text';

var Informations = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(Informations, _PureComponent);

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
    return /*#__PURE__*/React.createElement("div", {
      className: "k-CrowdfundingCard__informations"
    }, this.renderInfo(info1), this.renderInfo(info2), this.renderInfo(info3));
  };

  _proto.renderInfo = function renderInfo(text) {
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
  };

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