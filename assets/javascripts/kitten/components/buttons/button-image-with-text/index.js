import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ButtonImage } from '../../../components/buttons/button-image'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'

const StyledButtonImageWithText = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  .k-ButtonImageNextWithText__textContainer {
    margin-left: ${pxToRem(10)};
    line-height: 1.2;

    &.k-ButtonImageNextWithText__textContainer--largeGutter {
      margin-left: ${pxToRem(15)};
    }
  }

  .k-ButtonImageNextWithText__text {
    display: flex;
    align-items: center;
    flex: 1;
  }

  p.k-ButtonImageNextWithText__text {
    margin: 0;
  }
`

export const ButtonImageWithText = ({
  title,
  description,
  micro,
  tag,
  titleRegular,
  textRegular,
  largeGutter,
  avatarProps,
}) => {
  const size = micro ? 'micro' : 'tiny'
  const titleWeight = titleRegular ? 'regular' : 'light'
  const textWeight = textRegular ? 'regular' : 'light'

  return (
    <StyledButtonImageWithText className="k-ButtonImageNextWithText">
      <ButtonImage img={avatarProps} withoutPointerEvents />

      <div
        className={classNames('k-ButtonImageNextWithText__textContainer', {
          'k-ButtonImageNextWithText__textContainer--largeGutter': largeGutter,
        })}
      >
        <Text
          className="k-ButtonImageNextWithText__text"
          tag={tag}
          size={size}
          weight={titleWeight}
        >
          {title}
        </Text>

        <Text
          className="k-ButtonImageNextWithText__text"
          tag={tag}
          size={size}
          weight={textWeight}
        >
          {description}
        </Text>
      </div>
    </StyledButtonImageWithText>
  )
}

ButtonImageWithText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  micro: PropTypes.bool,
  tag: PropTypes.string,
  titleRegular: PropTypes.bool,
  textRegular: PropTypes.bool,
  largeGutter: PropTypes.bool,
  avatarProps: PropTypes.object,
}

ButtonImageWithText.defaultProps = {
  micro: false,
  tag: 'p',
  titleRegular: false,
  textRegular: false,
  largeGutter: false,
  avatarProps: {
    src: '',
    alt: '',
  },
}
