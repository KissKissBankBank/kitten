import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { Container } from '../../../components/grid/container'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledRow = styled.div`
  .k-Row--centered {
    text-align: center;
  }

  .k-Row--light {
    background: ${COLORS.primary6};
  }

  .k-Row--dark {
    background: ${COLORS.line2};
    color: ${COLORS.background1};
  }

  .k-Row--lightTopBorder {
    border-top: ${pxToRem(1)} solid ${COLORS.line1};
  }

  .k-Row--lightBottomBorder {
    border-bottom: ${pxToRem(1)} solid ${COLORS.line1};
  }

  .k-Row__content {
    .k-Row--padded & {
      padding-top: ${pxToRem(60)};
      padding-bottom: ${pxToRem(60)};

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        padding-top: ${pxToRem(80)};
        padding-bottom: ${pxToRem(80)};
      }
    }
  }
`

export const Row = ({
  className,
  contentClassName,
  centered,
  light,
  dark,
  lightTopBorder,
  lightBottomBorder,
  padded,
  children,
  ...others
}) => {
  return (
    <StyledRow
      className={classNames(
        'k-Row',
        {
          'k-Row--centered': centered,
          'k-Row--light': light,
          'k-Row--dark': dark,
          'k-Row--lightTopBorder': lightTopBorder,
          'k-Row--lightBottomBorder': lightBottomBorder,
          'k-Row--padded': padded,
        },
        className,
      )}
      {...others}
    >
      <Container className={classNames('k-Row__content', contentClassName)}>
        {children}
      </Container>
    </StyledRow>
  )
}

Row.defaultProps = {
  className: null,
  contentClassName: null,
  centered: false,
  light: false,
  dark: false,
  lightTopBorder: false,
  lightBottomBorder: false,
  padded: false,
}

Row.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  centered: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  lightTopBorder: PropTypes.bool,
  lightBottomBorder: PropTypes.bool,
  padded: PropTypes.bool,
}
