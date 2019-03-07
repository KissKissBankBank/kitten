import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { Icon } from './icon'

export class Item extends PureComponent {
  static propTypes = {
    icon: PropTypes.node,
    iconProps: PropTypes.object,
  }

  static defaultProps = {
    icon: null,
    iconProps: {},
  }

  render() {
    const { icon, iconProps, children, ...other } = this.props

    return (
      <StyledItem {...other}>
        <Icon {...iconProps}>{icon}</Icon>

        <StyledContent>{children}</StyledContent>
      </StyledItem>
    )
  }
}

const StyledItem = styled.li`
  display: flex;
  margin ${pxToRem(40)} 0;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${TYPOGRAPHY.fontStyles.light};
  color: ${COLORS.font1};
  line-height: 1.6;
  font-size: ${pxToRem(14)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    font-size: ${pxToRem(16)};
  }
`
