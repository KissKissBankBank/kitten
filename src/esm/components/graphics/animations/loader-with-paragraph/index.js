import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Loader } from '../../../graphics/animations/loader';
import { Paragraph } from '../../../typography/paragraph';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../../helpers/utils/typography';
const StyledLoaderWithParagraph = styled.div.withConfig({
  displayName: "loader-with-paragraph__StyledLoaderWithParagraph",
  componentId: "sc-1h8nejh-0"
})(["display:flex;align-items:center;gap:", ";&.k-LoaderWithParagraph--top{flex-direction:column;}&.k-LoaderWithParagraph--bottom{flex-direction:column-reverse;}&.k-LoaderWithParagraph--left{flex-direction:row;}&.k-LoaderWithParagraph--right{flex-direction:row-reverse;}"], pxToRem(10));
export const LoaderWithParagraph = _ref => {
  let {
    className,
    loaderPosition,
    loaderProps,
    loaderComponent,
    paragraphProps,
    children,
    ...others
  } = _ref;
  const Component = loaderComponent || Loader;
  return /*#__PURE__*/React.createElement(StyledLoaderWithParagraph, _extends({
    className: classNames('k-LoaderWithParagraph', className, "k-LoaderWithParagraph--" + loaderPosition)
  }, others), /*#__PURE__*/React.createElement(Component, _extends({
    "aria-hidden": true
  }, loaderProps, {
    className: classNames('k-LoaderWithParagraph__loader', loaderProps.className)
  })), /*#__PURE__*/React.createElement(Paragraph, _extends({
    modifier: "secondary",
    noMargin: true
  }, paragraphProps, {
    className: classNames('k-LoaderWithParagraph__paragraph', paragraphProps.className)
  }), children));
};
LoaderWithParagraph.defaultProps = {
  children: 'Loading',
  loaderPosition: 'left',
  loaderProps: {},
  paragraphProps: {},
  loaderComponent: null
};
LoaderWithParagraph.propTypes = {
  loaderPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  loaderProps: PropTypes.object,
  paragraphProps: PropTypes.object,
  loaderComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};