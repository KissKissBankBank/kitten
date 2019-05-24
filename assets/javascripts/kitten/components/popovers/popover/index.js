import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import { Marger } from '../../../components/layout/marger'
import { CloseButton } from '../../../components/buttons/close-button'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

const StyledPopover = styled.div`
  position: relative;
  width: ${pxToRem(520)};
  box-sizing: border-box;
  background-color: ${COLORS.background1};
`

const StyledPopoverContainer = styled.div`
  min-height: ${pxToRem(245)};
  box-sizing: border-box;
`

export class Popover extends PureComponent {
  static propTypes = {}

  static defaultProps = {
    onCloseClick: null,
    closeButtonLabel: 'Close',
    popoverClassName: '',
    containerClassName: '',
  }

  constructor(props) {
    super(props)

    this.handleCloseClick = this.handleCloseClick.bind(this)
  }

  handleCloseClick() {
    if (this.props.onCloseClick) return this.props.onCloseClick()
  }

  renderCloseButton() {
    return (
      <CloseButton
        modifier="beryllium"
        closeButtonLabel={this.props.closeButtonLabel}
        onClick={this.handleCloseClick}
      />
    )
  }

  renderContent() {
    if (typeof this.props.children != 'string') {
      return this.props.children
    }

    return (
      <Marger top="5" bottom="5" className="k-Popover__content">
        {this.props.children}
      </Marger>
    )
  }

  render() {
    const {
      children,
      popoverClassName,
      containerClassName,
      titleAriaLabelId,
      onCloseClick,
      closeButtonLabel,
      ...popoverAttributes
    } = this.props

    return (
      <StyledPopover
        ref="popover"
        role="dialog"
        aria-hidden="true"
        aria-labelledby={titleAriaLabelId}
        {...popoverAttributes}
      >
        <StyledPopoverContainer>
          {this.renderContent()}
          <div>{this.renderCloseButton()}</div>
        </StyledPopoverContainer>
      </StyledPopover>
    )
  }
}
