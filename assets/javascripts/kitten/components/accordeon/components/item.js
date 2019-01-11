import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Header } from './header'
import { Content } from './content'
import { getReactElementsByType } from '../../../helpers/react/react-elements'
import styled, { css } from 'styled-components'

const ItemStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = ({ children, id }) => {
  const header = getReactElementsByType({ children, type: Header })
  const content = getReactElementsByType({ children, type: Content })

  return (
    <ItemStyled>
      {header[0] && React.cloneElement(header[0], { id })}
      {content[0] && React.cloneElement(content[0], { id })}
    </ItemStyled>
  )
}

Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Item.defaultProps = {
  id: null,
}
