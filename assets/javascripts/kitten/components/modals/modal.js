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
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  renderCloseModal() {
    return (
      <CloseButton
        className="k-Modal__close"
        modifier="hydrogen"
        onClick={ this.handleCloseModal } />
    )
  }

  renderModal() {
    return (
      <ReactModal
        className={{
          base: 'k-Modal',
          afterOpen: 'k-Modal--afterOpen',
          beforeClose: 'k-Modal--beforeClose'
        }}
        overlayClassName={{
          base: 'k-ModalOverlay',
          afterOpen: 'k-ModalOverlay--afterOpen',
          beforeClose: 'k-ModalOverlay--beforeClose'
        }}
        isOpen={ this.state.showModal }>

        { this.renderCloseModal() }

        <div className="k-Modal__paragraph">
          <Title
            margin={ false }
            modifier="quaternary">
              Titre de la popin
          </Title>
          <Paragraph
            modifier="tertiary">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Donec quam felis, ultricies nec, pellentesque eu, pretium
          </Paragraph>
        </div>

        <div className="k-Modal__action">
          <Button
            className="k-Modal__button--first"
            modifier="hydrogen"
            size="big">
              Big button
          </Button>
          <Button
            modifier="helium"
            size="big">
              Big button
          </Button>
        </div>
      </ReactModal>
    )
  }

  render() {
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
