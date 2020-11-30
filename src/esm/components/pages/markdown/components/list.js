import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import styled from 'styled-components';
import { BulletList } from '../../../lists/bullet-list';
import { Marger } from '../../../layout/marger';
import { Context } from './context';
var BulletListStyle = styled(BulletList).withConfig({
  displayName: "list__BulletListStyle",
  componentId: "sc-1hya2vn-0"
})(["li{line-height:1.8em;}"]);
export var MarkdownList = function MarkdownList(props) {
  var items = props.children.map(function (item) {
    return {
      key: item.key,
      item: item.props.children[0]
    };
  });
  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref) {
    var paragraphModifier = _ref.paragraphModifier;
    var modifier = {};

    if (paragraphModifier === 'primary') {
      modifier = {
        huge: true
      };
    } else if (paragraphModifier === 'secondary') {
      modifier = {
        big: true
      };
    } else if (paragraphModifier === 'tertiary') {
      modifier = {
        large: true
      };
    } else if (paragraphModifier === 'quaternary') {
      modifier = {
        small: true
      };
    }

    return /*#__PURE__*/React.createElement(Marger, {
      top: "3",
      bottom: "3"
    }, /*#__PURE__*/React.createElement(BulletListStyle, _extends({}, modifier, {
      items: items
    })));
  });
};