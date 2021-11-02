import React from 'react'
import styled, { css } from 'styled-components'
import {
  COLORS,
  Button,
  TextInput,
  pxToRem,
} from 'kitten'

const styleOverrides = css`
  .k-Button--hydrogen {
    &:hover {
      background-color: ${COLORS.background1};
      border-color: ${COLORS.primary4};
      color: ${COLORS.font1};
    }
    &:focus,
    &:active {
      background-color: ${COLORS.background1};
      border-color: ${COLORS.primary1};
      color: ${COLORS.font1};
    }
  }
`

const InsideStory = () => (
  <>
    <div className="story-Container story-Grid story-Grid--large">
      <div>
        <Button>
          Bouton, tab pour focus
        </Button>
      </div>
      <div>
        <Button modifier="helium">
          Bouton Helium
        </Button>
      </div>
    </div>
    <div className="story-Container story-Grid story-Grid--large">
      <div>
        <TextInput
          placeholder="Input, clic ou tab pour focus"
          aria-label="dummy input"
        />
      </div>
    </div>
  </>
)

const StyledCurrent = styled.div`
  ${styleOverrides}

  .k-Button {
    &:focus {
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary4};
    }
  }

  .k-Form-TextInput {
    &:focus {
      color: ${COLORS.font1};
      border-color: ${COLORS.font2};
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary4};
    }
  }
`

export const CurrentStyle = props => (
  <StyledCurrent {...props}>
    <InsideStory />
  </StyledCurrent>
)

const StyledBasic = styled.div`
  ${styleOverrides}

  .k-Button {
    &:focus {
      outline: ${COLORS.primary3} solid ${pxToRem(2)};
      outline-offset: 0;
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary3};
    }
  }

  .k-Form-TextInput {
    &:focus {
      color: ${COLORS.font1};
      border-color: ${COLORS.font2};
      outline: ${COLORS.primary3} solid ${pxToRem(2)};
      outline-offset: 0;
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary3};
    }
  }
`

export const BasicStyle = props => (
  <StyledBasic {...props}>
    <InsideStory />
  </StyledBasic>
)


const StyledBorder = styled.div`
  ${styleOverrides}

  .k-Button {
    &:focus {
      outline: ${COLORS.primary3} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(-2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary3};
    }
  }

  .k-Form-TextInput {
    &:focus {
      color: ${COLORS.font1};
      border-color: ${COLORS.font2};
      outline: ${COLORS.primary3} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(-2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary3};
    }
  }
`

export const BorderStyle = props => (
  <StyledBorder {...props}>
    <InsideStory />
  </StyledBorder>
)


const StyledC = styled.div`
  ${styleOverrides}

  .k-Button {
    &:focus {
      outline: ${COLORS.primary3} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(-2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary3};
    }
  }

  .k-Form-TextInput {
    &:focus {
      color: ${COLORS.font1};
      border-color: ${COLORS.font2};
      outline: ${COLORS.primary3} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(-2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary3};
    }
  }
`

export const CStyle = props => (
  <StyledC {...props}>
    <InsideStory />
  </StyledC>
)


const StyledDefault = styled.div`
  ${styleOverrides}

  .k-Form-TextInput {
    &:focus {
      color: ${COLORS.font1};
      border-color: ${COLORS.font2};
    }
  }
`

export const DefaultStyle = props => (
  <StyledDefault {...props}>
    <InsideStory />
  </StyledDefault>
)
