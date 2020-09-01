import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import styled from 'styled-components'

const StyledButtonImageWithTextAndBadge = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding: 0;

  // Overrides default values of <button>
  border: none;
  background: none;
  cursor: pointer;

  .k-ButtonImageNextWithTextAndBadge--vertical {
    flex-direction: column;
  }

  .k-ButtonImageNextWithTextAndBadge__text {
    padding: ${pxToRem(10)};
    margin: 0;
    text-align: left;
  }

  &:hover,
  .k-ButtonImageNextWithTextAndBadge__text:hover {
    color: ${COLORS.primary1};
  }

  &:active,
  .k-ButtonImageNextWithTextAndBadge__text:active {
    color: ${COLORS.primary3};
  }

  .k-ButtonImageNextWithTextAndBadge__text--withoutPaddingRight {
    padding-right: 0;
  }
`
export const ButtonImageWithTextAndBadge = ({
  className,
  isExpanded,
  text,
  title,
  textClassName,
  srcImg,
  widthImg,
  heightImg,
  altImg,
  notifications,
  badgeColor,
  ...rest
}) => (
  <StyledButtonImageWithTextAndBadge
    className={classNames('k-ButtonImageNextWithTextAndBadge', className)}
    aria-haspopup="true"
    aria-expanded={isExpanded}
    title={title}
    {...rest}
  >
    <span className="k-ButtonWithBadge">
      <span className="k-ButtonImage">
        <img
          className="k-ButtonImage__img"
          src={srcImg}
          width={widthImg}
          height={heightImg}
          alt={altImg}
        />
      </span>
      {!!notifications && (
        <span
          className="k-ButtonWithBadge__badge k-Badge"
          style={{ backgroundColor: badgeColor }}
        >
          {notifications}
        </span>
      )}
    </span>
    <Text
      tag="p"
      size="tiny"
      weight="light"
      className={classNames(
        'k-ButtonImageNextWithTextAndBadge__text',
        'k-ButtonImageNextWithTextAndBadge__text--withoutPaddingRight',
        textClassName,
      )}
    >
      {text}
    </Text>
  </StyledButtonImageWithTextAndBadge>
)

ButtonImageWithTextAndBadge.propTypes = {
  onClick: PropTypes.func,
  isExpanded: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string,
  srcImg: PropTypes.string,
  widthImg: PropTypes.number,
  heightImg: PropTypes.number,
  altImg: PropTypes.string,
  notifications: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  badgeColor: PropTypes.string,
}

ButtonImageWithTextAndBadge.defaultProps = {
  onClick: () => {},
  badgeColor: COLORS.primary1,
}

// DEPRECATED: do not use default export.
export default ButtonImageWithTextAndBadge
