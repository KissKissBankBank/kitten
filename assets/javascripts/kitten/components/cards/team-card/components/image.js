import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import styled from 'styled-components'

const imageHeight = 378
const imageWidth = 252

const StyledTeamCardImage = styled.div`
  background-image: url(${({ backgroundSource }) => backgroundSource});
  background-color: ${COLORS.background1};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding-bottom: ${(imageHeight / imageWidth) * 100 + '%'};
`

export const TeamCardImage = ({ src, title }) => {
  return (
    <StyledTeamCardImage
      backgroundSource={src}
      title={title}
      className="k-u-margin-bottom-double"
    />
  )
}

TeamCardImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
