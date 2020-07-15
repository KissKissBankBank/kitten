import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDocumentIcon = styled.svg`
  path.kiss-DocumentIcon__shadow {
    fill: #000 !important;
    opacity: 0.05;
  }
  path.kiss-DocumentIcon__bg {
    fill: #fff !important;
  }
  path.kiss-DocumentIcon__fold {
    fill: #000 !important;
    opacity: 0.1;
  }
  path.kiss-DocumentIcon__icon {
    fill: #000 !important;
  }
`
export const DocumentIconEmpty = ({ children, title, ...props }) => (
  <StyledDocumentIcon
    width="25"
    height="33"
    viewBox="0 0 25 33"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path className="kiss-DocumentIcon__shadow" d="M3 3h 15l 7 7V33H3L3 3z" />
    <path className="kiss-DocumentIcon__bg" d="M0 0h15l7 7V30H0L0 0z" />
    <path className="kiss-DocumentIcon__fold" d="M15 0v7h7L15 0z" />
    {children}
  </StyledDocumentIcon>
)

DocumentIconEmpty.propTypes = {
  title: PropTypes.string,
}

DocumentIconEmpty.defaultProps = {
  title: '',
}
