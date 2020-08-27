import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledInfoLines = styled.div.withConfig({
  displayName: "info-lines__StyledInfoLines",
  componentId: "sc-1tjj1rx-0"
})(["", " ", " ", " ", " ", ""], function (_ref) {
  var borderColor = _ref.borderColor;
  return borderColor && css(["border-top:", " solid ", ";border-bottom:", " solid ", ";& > * + *{border-top:", " solid ", ";}"], pxToRem(1), borderColor, pxToRem(1), borderColor, pxToRem(1), borderColor);
}, function (_ref2) {
  var withBorderRadius = _ref2.withBorderRadius;
  return withBorderRadius && css(["border-radius:", ";"], pxToRem(8));
}, function (_ref3) {
  var withLeftRightBorder = _ref3.withLeftRightBorder,
      borderColor = _ref3.borderColor;
  return withLeftRightBorder && borderColor && css(["border-left:", " solid ", ";border-right:", " solid ", ";"], pxToRem(1), borderColor, pxToRem(1), borderColor);
}, function (_ref4) {
  var withoutTopBottomBorder = _ref4.withoutTopBottomBorder;
  return withoutTopBottomBorder && css(["border-top:none;border-bottom:none;"]);
}, function (_ref5) {
  var withoutResponsive = _ref5.withoutResponsive;
  return withoutResponsive && css(["", "{flex-direction:row;}", "{flex:auto;}"], StyledLine, StyledKey);
});
var StyledLine = styled.div.withConfig({
  displayName: "info-lines__StyledLine",
  componentId: "sc-1tjj1rx-1"
})(["flex-direction:column;display:flex;padding:", ";@media (min-width:", "px){flex-direction:row;}"], pxToRem(15), ScreenConfig.M.min);
var StyledKey = styled.span.withConfig({
  displayName: "info-lines__StyledKey",
  componentId: "sc-1tjj1rx-2"
})(["@media (min-width:", "px){flex:auto;}"], ScreenConfig.M.min);
var StyledValue = styled.span.withConfig({
  displayName: "info-lines__StyledValue",
  componentId: "sc-1tjj1rx-3"
})(["margin:", ";"], pxToRem(0));

var InfoList = function InfoList(_ref6) {
  var title = _ref6.title,
      value = _ref6.value,
      id = _ref6.id,
      titleTagList = _ref6.titleTagList,
      itemTagList = _ref6.itemTagList,
      others = _objectWithoutProperties(_ref6, ["title", "value", "id", "titleTagList", "itemTagList"]);

  return React.Children.toArray( /*#__PURE__*/React.createElement(StyledLine, _extends({}, others, {
    key: id
  }), /*#__PURE__*/React.createElement(StyledKey, {
    as: titleTagList
  }, title), /*#__PURE__*/React.createElement(StyledValue, {
    as: itemTagList
  }, value)));
};

export var InfoLines = /*#__PURE__*/function (_PureComponent) {
  _inherits(InfoLines, _PureComponent);

  var _super = _createSuper(InfoLines);

  function InfoLines() {
    _classCallCheck(this, InfoLines);

    return _super.apply(this, arguments);
  }

  _createClass(InfoLines, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          infos = _this$props.infos,
          withBorderRadius = _this$props.withBorderRadius,
          withLeftRightBorder = _this$props.withLeftRightBorder,
          withoutTopBottomBorder = _this$props.withoutTopBottomBorder,
          withoutResponsive = _this$props.withoutResponsive,
          borderColor = _this$props.borderColor,
          descriptionTagList = _this$props.descriptionTagList,
          titleTagList = _this$props.titleTagList,
          itemTagList = _this$props.itemTagList,
          others = _objectWithoutProperties(_this$props, ["infos", "withBorderRadius", "withLeftRightBorder", "withoutTopBottomBorder", "withoutResponsive", "borderColor", "descriptionTagList", "titleTagList", "itemTagList"]);

      return /*#__PURE__*/React.createElement(StyledInfoLines, _extends({}, others, {
        as: descriptionTagList,
        borderColor: borderColor,
        withBorderRadius: withBorderRadius,
        withLeftRightBorder: withLeftRightBorder,
        withoutTopBottomBorder: withoutTopBottomBorder,
        withoutResponsive: withoutResponsive
      }), infos.map(function (info) {
        return /*#__PURE__*/React.createElement(InfoList, {
          key: info.id,
          title: info.key,
          value: info.value,
          id: info.id,
          titleTagList: titleTagList,
          itemTagList: itemTagList
        });
      }));
    }
  }]);

  return InfoLines;
}(PureComponent);
InfoLines.propTypes = {
  infos: PropTypes.array.isRequired,
  borderColor: PropTypes.string,
  withBorderRadius: PropTypes.bool,
  withLeftRightBorder: PropTypes.bool,
  withoutTopBottomBorder: PropTypes.bool,
  withoutResponsive: PropTypes.bool,
  descriptionTagList: PropTypes.string,
  titleTagList: PropTypes.string,
  itemTagList: PropTypes.string
};
InfoLines.defaultProps = {
  borderColor: '#eee',
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutTopBottomBorder: false,
  withoutResponsive: false,
  descriptionTagList: 'dl',
  titleTagList: 'dt',
  itemTagList: 'dd'
};