import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Context } from './context'
import { ArrowIcon } from '../../../icons/arrow-icon'
import { Button } from '../../../../components/buttons/button/button'

const ButtonContainer = styled.div`
  padding: ${pxToRem(20)};
  background-color: ${COLORS.background1};

  a:focus {
    outline: ${pxToRem(5)} auto -webkit-focus-ring-color;
  }
`

const StyledItem = styled.a`
  display: block;
  position: relative;

  padding: ${({ largeItem }) =>
    largeItem
      ? `${pxToRem(28)} ${pxToRem(21)} ${pxToRem(28)} ${pxToRem(40)}`
      : `${pxToRem(18)} ${pxToRem(30)} ${pxToRem(17)}`};

  background-color: ${COLORS.background1};
  border-bottom: ${({ noBorder }) =>
    noBorder ? null : `${pxToRem(1)} solid ${COLORS.line1}`};

  ${TYPOGRAPHY.fontStyles.regular}
  color: ${COLORS.font1};
  line-height: 1;
  font-size: ${pxToRem(14)};
  text-decoration: none;

  &:focus {
    outline-offset: ${pxToRem(-3)};
  }

  ${({ borderSide }) =>
    borderSide
      ? css`
          ::before {
            content: '';
            position: absolute;
            top: ${pxToRem(-1)};
            left: ${pxToRem(-1)};
            bottom: 0;
            width: ${pxToRem(0)};
            background-color: transparent;
            transition: background-color 0.2s, width 0.2s;
          }

          :hover,
          :focus {
            color: ${({ borderSideOnHover }) =>
              !borderSideOnHover && COLORS.primary1};

            &::before {
              width: ${({ borderSideOnHover }) =>
                borderSideOnHover && pxToRem(4)};
              background-color: ${COLORS.primary1};
              transition: width 0.2s;
            }
          }
        `
      : css`
          :hover,
          :focus {
            color: ${COLORS.primary1};
            background-color: ${({ backgroundColors }) =>
              backgroundColors.hover ? backgroundColors.hover : COLORS.line1};
            transition: color 0.2s, background-color 0.4s;
          }
        `}

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${COLORS.primary1};

      ::before {
        width: ${pxToRem(4)};
        background-color: ${COLORS.primary1};
      }
    `}

  ${({ modifier }) =>
    modifier === 'light' &&
    css`
      color: ${COLORS.font2};
    `}

  ${({ borderSide }) =>
    borderSide === 'right' &&
    css`
      ::before {
        left: unset;
        right: -1px;
      }
    `}
`

const ExternalStyledItem = styled(StyledItem)`
  display: flex;
  height: ${pxToRem(24)};
  padding: ${({ largeItem }) =>
    largeItem
      ? `${pxToRem(23)} ${pxToRem(21)} ${pxToRem(22)} ${pxToRem(40)}`
      : `${pxToRem(23)} ${pxToRem(21)} ${pxToRem(22)} ${pxToRem(30)}`};

  align-items: center;
  align-self: flex-start;
  justify-content: space-between;

  background-color: ${COLORS.background3};

  .itemNextToArrowIcon {
    margin-right: ${pxToRem(20)};
  }

  .headerMenuArrowIcon {
    position: relative;
    left: 0;
    transition: left 0.2s;
  }

  svg,
  img {
    max-height: ${pxToRem(24)};
    width: auto;
  }

  :focus,
  :hover {
    color: ${COLORS.font1};

    .headerMenuArrowIcon {
      left: ${pxToRem(5)};
    }
  }

  ::before {
    display: none;
  }
`

export const Item = ({
  children,
  href,
  external,
  liProps,
  modifier,
  button,
  isSelected,
  ...other
}) => (
  <Context.Consumer>
    {({
      borderSide,
      borderSideOnHover,
      largeItem,
      noBorder,
      backgroundColors,
    }) => (
      <li role="menuitem" {...liProps}>
        {external && (
          <ExternalStyledItem
            {...other}
            href={href}
            borderSide={borderSide}
            external={external}
            largeItem={largeItem}
            noBorder={noBorder}
          >
            <span className="itemNextToArrowIcon">{children}</span>
            <ArrowIcon
              className="headerMenuArrowIcon"
              version="solid"
              direction="right"
            />
          </ExternalStyledItem>
        )}

        {button && (
          <ButtonContainer>
            <Button as="a" href={href} modifier={modifier} fluid {...other}>
              {children}
            </Button>
          </ButtonContainer>
        )}

        {!(external || button) && (
          <StyledItem
            {...other}
            href={href}
            isSelected={isSelected}
            aria-current={isSelected ? 'page' : null}
            borderSide={borderSide}
            borderSideOnHover={borderSideOnHover}
            external={external}
            largeItem={largeItem}
            noBorder={noBorder}
            backgroundColors={backgroundColors}
            modifier={modifier}
          >
            {children}
          </StyledItem>
        )}
      </li>
    )}
  </Context.Consumer>
)

Item.propTypes = {
  external: PropTypes.bool,
  button: PropTypes.bool,
  href: PropTypes.string,
  isSelected: PropTypes.bool,
  liProps: PropTypes.object,
  modifier: PropTypes.oneOf([
    null,
    undefined,
    'light',
    'default',
    'hydrogen',
    'helium',
    'lithium',
    'beryllium',
    'carbon',
    'oxygen',
    'copper',
    'checked',
  ]),
}

Item.defaultProps = {
  external: false,
  button: false,
  modifier: null,
  href: null,
  isSelected: false,
  liProps: {},
}
