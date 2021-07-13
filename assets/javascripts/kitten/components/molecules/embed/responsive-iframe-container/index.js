import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;

  padding-bottom: 67.5%;
  padding-bottom: var(--ResponsiveImageContainer-ratio);
  height: 0;

  > * {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    box-sizing: border-box;
  }
`

export const ResponsiveIframeContainer = ({
  ratio,
  style,
  className,
  ...props
}) => {
  return (
    <StyledWrapper
      className={classNames('k-ResponsiveIframeContainer', className)}
      style={{
        ...style,
        '--ResponsiveImageContainer-ratio': `${ratio}%`,
      }}
      {...props}
    />
  )
}

ResponsiveIframeContainer.defaultProps = {
  ratio: '67.5',
  children: <iframe />,
}
