import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'

import { Title } from '../../../components/typography/title'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledInformationBox = styled.div`
  .k-InformationBox {
    display: inline-block;

    ${TYPOGRAPHY.fontStyles.light}
  }

  .k-InformationBox__container {
    padding: ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)};
    color: ${COLORS.font1};
    background-color: ${COLORS.background1};
    border: ${pxToRem(2)} solid ${COLORS.line1};
  }
`

export const InformationBox = ({ title, titleProps, children, ...other }) => (
  <StyledInformationBox
    {...other}
    className={classNames('k-InformationBox', other.className)}
  >
    <div className="k-InformationBox__container">
      <Title
        tag="p"
        noMargin={false}
        modifier="quaternary"
        {...titleProps}
        className={classNames(
          'k-InformationBox__title',
          'k-u-margin-bottom-single',
          titleProps.className,
        )}
      >
        {title}
      </Title>
      <div className="k-InformationBox__content k-u-margin-top-single">
        {children}
      </div>
    </div>
  </StyledInformationBox>
)

InformationBox.defaultProps = {
  title: null,
  titleProps: {},
  children: null,
}

InformationBox.propTypes = {
  title: PropTypes.node,
  titleProps: PropTypes.object,
  children: PropTypes.node,
}
