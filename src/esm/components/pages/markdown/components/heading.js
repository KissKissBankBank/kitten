import React, { Fragment } from 'react';
import slugify from 'slugify';
import { Title } from '../../../typography/title';
import { HorizontalStroke } from '../../../layout/horizontal-stroke';
import { Marger } from '../../../layout/marger';
export var MarkdownHeading = function MarkdownHeading(props) {
  var modifier;
  var tag;

  switch (props.level) {
    case 1:
      modifier = 'secondary';
      tag = 'h1';
      break;

    case 2:
      modifier = 'quaternary';
      tag = 'h2';
      break;

    case 3:
      modifier = 'quinary';
      tag = 'h3';
      break;

    default:
      modifier = 'senary';
      tag = 'h4';
      break;
  }

  var renderHorizontalStroke = function renderHorizontalStroke() {
    if (props.level > 1) return;
    return /*#__PURE__*/React.createElement(Marger, {
      top: "2",
      bottom: "4"
    }, /*#__PURE__*/React.createElement(HorizontalStroke, {
      size: "big"
    }));
  };

  var id = slugify(props.children[0], {
    lower: true,
    remove: /'/g
  });
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Marger, {
    top: {
      default: 8,
      fromS: 10
    },
    bottom: "2"
  }, /*#__PURE__*/React.createElement(Title, {
    modifier: modifier,
    tag: tag,
    id: id
  }, props.children)), renderHorizontalStroke());
};