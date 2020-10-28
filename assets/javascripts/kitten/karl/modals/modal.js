import React, { Component } from 'react'
import { Button } from '../../components/buttons/button'
import { Title } from '../../components/typography/title'
import { Paragraph } from '../../components/typography/paragraph'
import { Modal } from '../../components/modals/modal'
import { Marger } from '../../components/layout/marger'
import { createMatchMediaMax } from '../../helpers/utils/media-queries'
import { SCREEN_SIZE_XS } from '../../constants/screen-config'

class KarlModalComponent extends Component {
  constructor(props, context) {
    super(props, context)

    this.mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)

    this.state = {
      viewportIsMobile: false,
    }
  }

  onMobileMQ = event => {
    this.setState({ viewportIsMobile: event.matches })
  }

  componentDidMount() {
    if (this.mqMobile) {
      this.mqMobile.addListener(this.onMobileMQ)
      this.onMobileMQ(this.mqMobile)
    }
  }

  componentWillUnmount() {
    if (this.mqMobile) this.mqMobile.removeListener(this.onMobileMQ)
  }

  render() {
    return (
      <Marger
        top={this.state.viewportIsMobile ? 8 : 10}
        bottom={this.state.viewportIsMobile ? 8 : 10}
      >
        <Marger bottom="1">
          <Title id="heading" modifier="tertiary" margin={false} tag="p">
            Lorem ipsum dolor sit consectetuer
          </Title>
        </Marger>

        <Marger top="1" bottom="4">
          <Paragraph
            id="full-description"
            modifier="tertiary"
            margin={false}
            tag="p"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur? Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
          </Paragraph>
        </Marger>

        <Marger top="4" bottom="10">
          <Button modifier="helium" size="big">
            Action 1 Button
          </Button>
        </Marger>
      </Marger>
    )
  }
}

const KarlModalButton = () => <Button modifier="helium">Open</Button>

export const KarlModal = () => (
  <Modal
    trigger={<KarlModalButton />}
    content={<KarlModalComponent />}
    labelledby="heading"
    describedby="full-description"
  />
)

export class KarlModalExternalTrigger extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => this._modal.open()}>Open</Button>
        <Modal
          ref={node => (this._modal = node)}
          content={<KarlModalComponent />}
        />
      </div>
    )
  }
}
