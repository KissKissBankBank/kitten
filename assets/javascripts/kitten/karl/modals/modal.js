import React, { Component } from 'react'
import { Button } from 'kitten/components/buttons/button'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Modal } from 'kitten/components/modals/modal'
import { Marger } from 'kitten/components/layout/marger'
import { createMatchMediaMax } from 'kitten/helpers/utils/media-queries'
import {
  ScreenConfig,
  SCREEN_SIZE_XS,
  SCREEN_SIZE_M,
} from 'kitten/constants/screen-config'

class KarlModalComponent extends Component {
  constructor(props, context) {
    super(props, context)

    this.mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)

    this.state = {
      viewportIsMobile: this.mqMobile
        ? this.mqMobile.matches
        : false,
    }
  }

  onMobileMQ = (event) => {
    this.setState({ viewportIsMobile: event.matches })
  }

  componentDidMount() {
    if (this.mqMobile) this.mqMobile.addListener(this.onMobileMQ)
    }

  componentWillUnmount() {
    if (this.mqMobile) this.mqMobile.removeListener(this.onMobileMQ)
  }

  render() {
    return (
      <Marger
        top={ this.state.viewportIsMobile ? 8 : 10 }
        bottom={ this.state.viewportIsMobile ? 8 : 10 }
      >
        <Marger bottom="1">
          <Title
            modifier="tertiary"
            margin={ false }
            tag="p"
          >
            Lorem ipsum dolor sit consectetuer
          </Title>
        </Marger>

        <Marger top="1" bottom="4">
          <Paragraph
            modifier="tertiary"
            margin={ false }
            tag="p"
          >
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
            laoreet
          </Paragraph>
        </Marger>

        <Marger top="4" bottom="10">
          <Button
            modifier="helium"
            size="big"
          >
            Action 1 Button
          </Button>
        </Marger>
      </Marger>
    )
  }
}

const KarlModalButton = () => (
  <Button modifier="helium">
    Open
  </Button>
)

export const KarlModal = props => (
  <Modal
    trigger={ <KarlModalButton /> }
    content={ <KarlModalComponent /> }
  />
)

export class KarlModalExternalTrigger extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={ () => this._modal.open() }
        >
          Open
        </Button>
        <Modal
          ref={ node => this._modal = node }
          content={ <KarlModalComponent /> }
        />
      </div>
    )
  }
}
