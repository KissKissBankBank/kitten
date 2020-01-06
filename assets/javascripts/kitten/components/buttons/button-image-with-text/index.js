import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ButtonImage } from '../../../components/buttons/button-image'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

const TextContainer = styled.div`
  margin-left: ${pxToRem(10)};
  line-height: 1.2;

  ${({ largeGutter }) =>
    largeGutter &&
    css`
      margin-left: ${pxToRem(15)};
    `}
`

const StyledText = styled(Text)`
  display: flex;
  align-items: center;
  flex: 1;

  ${({ tag }) =>
    tag === 'p' &&
    css`
      margin: 0;
    `}
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
    <Container>
      <ButtonImage tag="span" img={avatarProps} withoutPointerEvents />

      <TextContainer largeGutter={largeGutter}>
        <StyledText tag={tag} size={size} weight={titleWeight}>
          {title}
        </StyledText>

        <StyledText tag={tag} size={size} weight={textWeight}>
          {description}
        </StyledText>
      </TextContainer>
    </Container>
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
