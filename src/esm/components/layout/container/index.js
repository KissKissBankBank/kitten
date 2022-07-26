import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styled';
export class Container extends React.PureComponent {
  render() {
    const {
      style,
      ...others
    } = this.props;
    return /*#__PURE__*/React.createElement(StyledContainer, _extends({
      styles: style
    }, others));
  }

}
Container.defaultProps = {
  fullWidthBelowScreenSize: null
};
Container.propTypes = {
  fullWidthBelowScreenSize: PropTypes.oneOf(['XXS', 'XS', 'S', 'M', 'L', 'XL'])
};