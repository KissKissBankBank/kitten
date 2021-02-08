import React from 'react'
import styled from 'styled-components'
import COLORS from '../../assets/javascripts/kitten/constants/colors-config'

const sass = {
  'font-1': '#222', // Dark Grey
  'font-2': '#b8b8b8', // Semi Dark Grey
  'background-1': '#fff', // White
  'background-2': '#fbfbfb', // Extra Light Grey
  'background-3': '#f6f6f6', // Light Grey
  'line-1': '#eee', // Semi Light Grey
  'line-2': '#d8d8d8', // Grey
  'line-3': '#dbdbdb', // Grey

  'primary-1': '#19b4fa', // Primary
  'primary-2': '#05a8e6', // Semi Dark Primary
  'primary-3': '#0496cc', // Dark Primary
  'primary-4': '#bae8fd', // Light Primary
  'primary-5': '#e8f7fe', // Extra Light Primary
  'primary-6': '#f3fbff', // Thin Primary

  // DEPRECATED: colors.
  'secondary-1': '#4bfffa',
  'secondary-2': '#3cf0eb',
  'secondary-3': '#2de1dc',

  'tertiary-1': '#effaf1', // Light Green
  'tertiary-2': '#cff0d6', // Semi Light Green

   // DEPRECATED: colors.
  'tertiary-3': '#4ae191',

  'valid': '#61d079', // Green
  'valid1': 'rgba(97, 208, 121, .1)', // Green Light

  'error': '#ff0046', // Red
  'error-2': '#ffe5ec', // Light Red
  'error-3': '#ffb2c7', // Semi Light Red

  'orange': '#ff7800',
  'orange1': 'rgba(255, 130, 15, .1)', // Orange light

  'red-light-mdc': '#ffebe0',
  'red-mdc': '#ff0000',
  'blue-light-mdc': '#caf4fe',
}


const StyledColorsStory = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  grid-gap: 2em;

  .story-Colors__color {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: .5em;

    :focus,
    :hover {
      .story-Colors__color__box {
        background-color: white !important;
      }
    }

    &:focus {
      outline: ${COLORS.primary4} solid 2px;
      outline-offset: 2px;
    }
  }
  .story-Colors__color__box {
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 6px;
    border-style: solid;
    transition: background-color .2s ease;
  }
  .story-Colors__color__title {
    text-align: center;
    font-family: 'SF Mono', 'Menlo', 'Andale Mono', Consolas, monospace;
    font-size: .9em;
  }
`

const ColorsStory = ({colorSource, ...props}) => (
  <StyledColorsStory {...props}>
    {Object.keys(colorSource).map(color => (
      <div className="story-Colors__color" tabIndex="0">
        <span
          className="story-Colors__color__box"
          style={{
            backgroundColor: colorSource[color],
            borderColor: colorSource[color],
          }}
        >
          {colorSource[color]}
        </span>
        <span className="story-Colors__color__title">
          {color}
        </span>
      </div>
    ))}
  </StyledColorsStory>
)

export const JSColors = props => <ColorsStory colorSource={COLORS} {...props} />

export const SassColors = props => <ColorsStory colorSource={sass} {...props} />
