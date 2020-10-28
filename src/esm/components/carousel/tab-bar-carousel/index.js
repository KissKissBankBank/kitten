import React from 'react';
import { NavTabCarousel as NewNavTabCarousel } from '../nav-tab-carousel';
import { Deprecated } from '../../../helpers/utils/deprecated';
export var NavTabCarousel = function NavTabCarousel(props) {
  var message = "DEPRECATED:\n    Import `NavTabCarousel` from `\u2026/nav-tab-carousel`\n    instead of `\u2026/tab-bar-carousel.";
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: message
  }, /*#__PURE__*/React.createElement(NewNavTabCarousel, props));
};