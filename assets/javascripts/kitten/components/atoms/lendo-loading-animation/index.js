import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'

const ola = keyframes`
  0% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(0);
  }
  68% {
    transform: translateY(0.8px);
  }
  95% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(-3px);
  }
`

const StyledLoadingAnimation = styled.svg`
  .animated_col {
    animation-name: ${ola};
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
  #col_1 {
    animation-delay: 0;
  }
  #col_2 {
    animation-delay: 0.15s;
  }
  #col_3 {
    animation-delay: 0.3s;
  }
  #col_4 {
    animation-delay: 0.45s;
  }
  #col_5 {
    animation-delay: 0.6s;
  }
  #col_6 {
    animation-delay: 0.75s;
  }
  #col_7 {
    animation-delay: 0.9s;
  }
`

export const LendoLoadingAnimation = (props) => (
  <StyledLoadingAnimation
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="56"
    aria-hidden
    {...props}
    className={classNames('k-LendoLoadingAnimation', props.className)}
  >
    <clipPath id="clipPath">
      <circle cx="14" cy="14" r="13" />
    </clipPath>
    <g clip-path="url(#clipPath)">
      <path fill="#fff" d="M0 0h28v28H0z" />
      <path
        d="M16 19.4 18.5 0l-9 .1L12 19.5 0 1v27h28V1L16 19.4Z"
        fill="#caf4fe"
      />

      <g id="col_1" class="animated_col">
        <path
          d="M6.1 39.4c.4 0 .6-.3.6-.6V19.3c0-.6-.5-1.1-1.1-1.1h-5c-.7 0-1.2.5-1.2 1.1v19.5c0 .3.3.6.6.6h6.1Zm0-.6h-6V19.4c0-.4.2-.6.5-.6h5c.3 0 .5.2.5.6v19.4Z"
          fill="#fff"
        />
        <path d="M6.1 38.8h-6V19.4c0-.4.2-.6.5-.6h5c.3 0 .5.2.5.6v19.4Z" />
      </g>
      <g id="col_2" class="animated_col">
        <path
          d="M9.2 35.1c.3 0 .6-.3.6-.6V15.1c0-.6-.5-1.2-1.2-1.2H7.4c-.7 0-1.2.6-1.2 1.2v19.4c0 .3.3.6.6.6h2.4Zm0-.6H6.8V15.1c0-.3.3-.6.6-.6h1.2c.3 0 .6.3.6.6v19.4Z"
          fill="#fff"
        />
        <path d="M9.2 34.5H6.8V15.1c0-.3.3-.6.6-.6h1.2c.3 0 .6.3.6.6v19.4Z" />
      </g>
      <g id="col_3" class="animated_col">
        <path
          d="M12.2 31.6c.4 0 .6-.3.6-.6V11.6c0-.6-.5-1.1-1.1-1.2h-1.3c-.7 0-1.2.6-1.2 1.2V31c0 .3.3.6.6.6h2.4Zm0-.6H9.8V11.6c0-.3.3-.6.6-.6h1.3c.3 0 .5.3.5.6V31Z"
          fill="#fff"
        />
        <path d="M12.2 31H9.8V11.6c0-.3.3-.6.6-.6h1.3c.3 0 .5.3.5.6V31Z" />
      </g>
      <g id="col_7" class="animated_col">
        <path
          d="M21.2 38.8c0 .3.3.6.6.6H28c.3 0 .6-.3.6-.6V19.3c0-.6-.6-1.1-1.2-1.1h-5c-.7 0-1.2.5-1.2 1.1v19.5Zm.6 0H28V19.4c0-.4-.3-.6-.6-.6h-5c-.3 0-.6.2-.6.6v19.4Z"
          fill="#fff"
        />
        <path d="M21.8 38.8H28V19.4c0-.4-.3-.6-.6-.6h-5c-.3 0-.6.2-.6.6v19.4Z" />
      </g>
      <g id="col_6" class="animated_col">
        <path
          d="M18.2 34.5c0 .3.2.6.6.6h2.4c.3 0 .6-.3.6-.6V15.1c0-.6-.6-1.2-1.2-1.2h-1.3c-.6 0-1.1.6-1.1 1.2v19.4Zm.6 0h2.4V15.1c0-.3-.3-.6-.6-.6h-1.3c-.3 0-.5.3-.5.6v19.4Z"
          fill="#fff"
        />
        <path d="M18.8 34.5h2.4V15.1c0-.3-.3-.6-.6-.6h-1.3c-.3 0-.5.3-.5.6v19.4Z" />
      </g>
      <g id="col_5" class="animated_col">
        <path
          d="M15.1 31c0 .3.3.6.6.6h2.4c.4 0 .6-.3.6-.6V11.6c0-.6-.5-1.1-1.1-1.2h-1.3c-.6 0-1.1.6-1.2 1.2V31Zm.6 0h2.4V11.6c0-.3-.2-.6-.5-.6h-1.3c-.3 0-.6.3-.6.6V31Z"
          fill="#fff"
        />
        <path d="M15.7 31h2.4V11.6c0-.3-.2-.6-.5-.6h-1.3c-.3 0-.6.3-.6.6V31Z" />
      </g>
      <g id="col_4" class="animated_col">
        <path
          d="M12.2 31.4c0 .4.3.6.6.6h2.4c.3 0 .6-.2.6-.6V8.6c0-.6-.5-1.2-1.2-1.2h-1.2c-.7 0-1.2.6-1.2 1.2v22.8Zm.6 0h2.4V8.6c0-.3-.3-.6-.6-.6h-1.2c-.3 0-.6.3-.6.6v22.8Z"
          fill="#fff"
        />
        <path d="M12.8 31.4h2.4V8.6c0-.3-.3-.6-.6-.6h-1.2c-.3 0-.6.3-.6.6v22.8Z" />
      </g>
    </g>
    <path
      fillRule="evenodd"
      d="M14 0a14 14 0 1 1 0 28 14 14 0 0 1 0-28Zm0 1.8a12.2 12.2 0 1 1 0 24.5 12.2 12.2 0 0 1 0-24.5Z"
    />
  </StyledLoadingAnimation>
)

LendoLoadingAnimation.defaultProps = {
  svgProps: {},
}

LendoLoadingAnimation.propTypes = {
  svgProps: PropTypes.object,
}
