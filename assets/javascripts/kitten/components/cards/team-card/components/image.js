import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import styled from 'styled-components'

const imageHeight = 378
const imageWidth = 252

const StyledTeamCardImage = styled(({ styled, ...props }) => (
  <div {...props} />
))`
  background-image: url(${({ backgroundSource }) => backgroundSource});
  background-color: ${COLORS.background1};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding-bottom: ${(imageHeight / imageWidth) * 100 + '%'};
  ${({ style }) => style}
`

export const TeamCardImage = ({ src, title, style, className, ...props }) => {
  return (
    <StyledTeamCardImage
      {...props}
      backgroundSource={src}
      title={title}
      className={classNames(className, 'k-u-margin-bottom-double')}
      style={style}
    />
  )
}

TeamCardImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
