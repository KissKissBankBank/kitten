import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Title } from '../../../components/typography/title'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { Button } from '../../../components/buttons/button/button'
import { Text } from '../../../components/typography/text'

class WidgetCard extends PureComponent {
  static propTypes = {
    buttonProps: PropTypes.shape({
      onClick: PropTypes.func,
      href: PropTypes.string,
    }).isRequired,
    cardTitle: PropTypes.string,
    cardDescription: PropTypes.string,
    remainindDay: PropTypes.string,
  }

  static defaultProps = {
    buttonProps: {},
    cardTitle: null,
    cardDescription: null,
    remainindDay: null,
  }

  render() {
    const {
      imageProps,
      avatarProps,
      buttonProps,
      ownerTitle,
      ownerDescription,
      cardTitle,
      cardDescription,
      remainindDay,
      ...others
    } = this.props
  }
}
export default WidgetCard
