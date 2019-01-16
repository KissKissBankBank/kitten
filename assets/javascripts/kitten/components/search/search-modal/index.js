import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

// const ModalAnimationStyled = styled(ModalStyled)`
//   transition: visibility .4s, opacity .4s;
//   visibility: visible;
//   opacity: 1;
// `

const OverlayStyled = styled(ModalStyled)`
  background: rgba(34, 34, 34, 0.9);
`

const ContentStyled = styled(ModalStyled)`
  position: relative;

  background-color: ${COLORS.background1};
`

export class SearchModal extends Component {
  static propTypes = {
    open: PropTypes.bool,
  }

  static defaultProps = {
    open: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      open: props.open,
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  toggle = (callback = () => {}) =>
    this.setState({ open: !this.state.open }, callback)

  handleKeyDown = event => {
    const enterKeyCode = 27

    if (event.keyCode === enterKeyCode) {
      this.close()
    }
  }

  render() {
    const { children, ...other } = this.props
    const { open } = this.state

    if (!open) return null

    return (
      <ModalStyled {...other}>
        <OverlayStyled onClick={this.close} />
        <ContentStyled>{children}</ContentStyled>
      </ModalStyled>
    )
  }
}
