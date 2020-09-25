import { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'

export const modifierStyles = modifier => {
  let borderColor
  let borderStyle = 'solid'
  let backgroundColor
  let color

  let hoverBorderColor = COLORS.primary2
  let hoverBgColor = COLORS.primary2
  let hoverColor = COLORS.background1
  let activeBorderColor = COLORS.primary3
  let activeBgColor = COLORS.primary3
  let activeColor = COLORS.background1

  switch (modifier) {
    case 'hydrogen':
      borderColor = COLORS.line1
      backgroundColor = COLORS.background1
      color = COLORS.font1
      break

    case 'helium':
      borderColor = COLORS.primary1
      backgroundColor = COLORS.primary1
      color = COLORS.background1
      break

    case 'lithium':
    case 'checked':
      borderColor = COLORS.primary4
      backgroundColor = COLORS.background1
      color = COLORS.primary1
      break

    case 'beryllium':
      borderColor = COLORS.font1
      backgroundColor = COLORS.font1
      color = COLORS.background1
      break

    case 'carbon':
      borderColor = COLORS.background1
      backgroundColor = COLORS.background1
      color = COLORS.font1
      break

    case 'oxygen':
      borderColor = COLORS.primary4
      borderStyle = 'dashed'
      backgroundColor = COLORS.background1
      color = COLORS.primary1
      break

    case 'copper':
      borderColor = COLORS.error3
      backgroundColor = COLORS.background1
      color = COLORS.error
      hoverBorderColor = 'currentColor'
      hoverBgColor = COLORS.background1
      hoverColor = COLORS.error
      activeBorderColor = 'currentColor'
      activeBgColor = COLORS.background1
      activeColor = COLORS.error
      break

    /* Social modifiers */
    case 'social_facebook':
      borderColor = '#3b5998'
      backgroundColor = '#3b5998'
      color = COLORS.background1
      hoverBorderColor = '#2c4a89'
      hoverBgColor = '#2c4a89'
      activeBorderColor = '#1d3b7a'
      activeBgColor = '#1d3b7a'
      break

    case 'social_twitter':
      borderColor = '#55acee'
      backgroundColor = '#55acee'
      color = COLORS.background1
      hoverBorderColor = '#469ddf'
      hoverBgColor = '#469ddf'
      activeBorderColor = '#388ed0'
      activeBgColor = '#388ed0'
      break

    case 'social_linkedin':
      borderColor = '#00669e'
      backgroundColor = '#00669e'
      color = COLORS.background1
      hoverBorderColor = '#00578f'
      hoverBgColor = '#00578f'
      activeBorderColor = '#004880'
      activeBgColor = '#004880'
      break

    case 'social_instagram':
      borderColor = '#3b5998'
      backgroundColor = '#3b5998'
      color = COLORS.background1
      hoverBorderColor = '#2c4a89'
      hoverBgColor = '#2c4a89'
      activeBorderColor = '#1d3b7a'
      activeBgColor = '#1d3b7a'
      break

    case 'social_pinterest':
      borderColor = '#bd081c'
      backgroundColor = '#bd081c'
      color = COLORS.background1
      hoverBorderColor = '#ae000d'
      hoverBgColor = '#ae000d'
      activeBorderColor = '#9f0000'
      activeBgColor = '#9f0000'
      break

    case 'social_youtube':
      borderColor = '#ff0000'
      backgroundColor = '#ff0000'
      color = COLORS.background1
      hoverBorderColor = '#f00000'
      hoverBgColor = '#f00000'
      activeBorderColor = '#e10000'
      activeBgColor = '#e10000'
      break
  }

  return css`
    border: ${pxToRem(2)} ${borderStyle} ${borderColor};
    background-color: ${backgroundColor};
    color: ${color};

    svg,
    path {
      fill: currentColor;
      transition: fill 0.2s;
    }

    transition: background-color 0.2s, color 0.2s, border-color 0.2s;

    ${modifier === 'social_instagram' &&
    css`
      transition: background 0.2s, color 0.2s;
      border: 0 !important;
      background-repeat: no-repeat;
      background-image: radial-gradient(
          farthest-side at 32% 100%,
          #ffe17d 0%,
          #ffcd69 10%,
          #fa9137 28%,
          #eb4141 42%,
          transparent 82%
        ),
        linear-gradient(135deg, #234bd7 12%, #c33cbe 58%);
      background-size: 160% 100%;
      background-position: center;

      &:hover,
      &:focus {
        background-image: radial-gradient(
            farthest-side at 32% 100%,
            #f0d26e 0%,
            #f0be5a 10%,
            #eb8228 28%,
            #dc3232 42%,
            transparent 82%
          ),
          linear-gradient(135deg, #143cc8 12%, #b42daf 58%);
      }

      &:active {
        background-image: radial-gradient(
            farthest-side at 32% 100%,
            #e1c35f 0%,
            #e1af4b 10%,
            #dc7319 28%,
            #cd2323 42%,
            transparent 82%
          ),
          linear-gradient(135deg, #052db9 12%, #a51ea0 58%);
      }
    `}

    ${modifier !== 'checked' &&
    css`
      :hover,
      :focus {
        border-color: ${hoverBorderColor};
        background-color: ${hoverBgColor};
        color: ${hoverColor};
      }

      :active {
        border-color: ${activeBorderColor};
        background-color: ${activeBgColor};
        color: ${activeColor};
      }
    `} :disabled {
      border-color: ${COLORS.line2};
      background-color: ${COLORS.line2};
      color: ${COLORS.background1};
    }
  `
}
