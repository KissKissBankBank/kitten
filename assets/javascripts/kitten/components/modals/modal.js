import React from 'react'
// Via "https://github.com/reactjs/react-modal"
import ReactModal from 'react-modal'
import classNames from 'classnames'
import { Button } from 'kitten/components/buttons/button'
import { CloseButton } from 'kitten/components/buttons/close-button'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'

export class Modal extends React.Component {
  constructor() {
    super()

    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    //this.afterOpenModal = this.afterOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  componentWillMount() {
    ReactModal.setAppElement('body')
  }

  renderCloseModal() {
    return (
      <CloseButton
        className="k-Modal__close"
        modifier="hydrogen"
        onClick={ this.handleCloseModal }>
      </CloseButton>
    )
  }

  renderModal() {
    const customStyles = {
      content : {
         top          : '50%',
         left         : '50%',
         right        : 'auto',
         bottom       : 'auto',
         maxWidth     : '550px',
         padding      : '10px',
         transform    : 'translate(-50%, -50%)',
         borderRadius : '15px'
      }
    }

    return (
      <ReactModal
        className="k-Modal"
        isOpen={ this.state.showModal }
        // style={ customStyles }
        >

        <Title
          modifier="quaternary"
          ref={subtitle => this.subtitle = subtitle}>
            Popin title
        </Title>

        <Paragraph
          modifier="tertiary">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Donec quam felis, ultricies nec, pellentesque eu, pretium
        </Paragraph>
        <Button onClick={ this.closeModal }>close</Button>

      </ReactModal>
    )
  }

  render () {
    const {
      id,
      ...others,
    } = this.props

    return (
      <div>
        <Button
          modifier="helium"
          size="tiny"
          onClick={ this.handleOpenModal }>
            Open
        </Button>

        { this.renderModal() }

      </div>
    )
  }
}

// Modal.defaultProps = {
//   id: "main",
// }

