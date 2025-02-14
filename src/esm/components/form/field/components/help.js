import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Text } from '../../../typography/text';
import { pxToRem } from '../../../../helpers/utils/typography';
import classNames from 'classnames';
import { createGlobalStyle } from 'styled-components';
const FieldHelpGlobalStyles = createGlobalStyle([".k-Field__control + .k-Field__help--hiddenOnBlur,.k-Field__control + .k-Field__error + .k-Field__help--hiddenOnBlur{opacity:0;max-height:0;margin-top:0;transition:opacity var(--transition),max-height var(--transition),margin-top var(--transition);}.k-Field__control:focus-within + .k-Field__help--hiddenOnBlur,.k-Field__control:focus-within + .k-Field__error + .k-Field__help--hiddenOnBlur{opacity:1;max-height:", ";margin-top:", " !important;}"], pxToRem(50), pxToRem(10));
export const FieldHelp = _ref => {
  let {
    children,
    className,
    hiddenOnBlur = false,
    ...others
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FieldHelpGlobalStyles, null), /*#__PURE__*/React.createElement(Text, _extends({
    tag: "p",
    cssColor: "var(--color-grey-700)",
    size: "micro",
    weight: "400",
    lineHeight: "normal",
    className: classNames('k-Field__help', className, 'k-u-margin-none', {
      'k-u-margin-top-single': !hiddenOnBlur,
      'k-Field__help--hiddenOnBlur': hiddenOnBlur
    })
  }, others), children));
};