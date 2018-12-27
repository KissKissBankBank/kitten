import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol } from '../../../../../components/grid/grid'
import { Container } from '../../../../../components/grid/container'
import { Marger } from '../../../../../components/layout/marger'
import { Title } from '../../../../../components/typography/title'
import { Paragraph } from '../../../../../components/typography/paragraph'
import { Button } from '../../../../../components/buttons/button'
import { Timeline } from '../../../../../components/lists/timeline'
import { withMediaQueries } from '../../../../../hoc/media-queries'

class TimelineSection extends Component {
  render() {
    return (
      <StyleRoot>
        <Container>
          <Marger top="8">
            <Grid>
              {this.renderTitleAndButton()}
              {this.renderTimeline()}
            </Grid>
          </Marger>
        </Container>
      </StyleRoot>
    )
  }

  renderTitleAndButton() {
    const { viewportIsMOrLess } = this.props

    return (
      <GridCol col-m="5" offset-m="1">
        <Title modifier="secondary">
          Quelles étapes pour lancer ma collecte ?
        </Title>

        {!viewportIsMOrLess && (
          <Button modifier="helium" size="big">
            Lancez vous
          </Button>
        )}
      </GridCol>
    )
  }

  renderTimeline() {
    const { paragraphProps, list1, list2, list3, list4 } = this.props

    return (
      <GridCol col-l="5" offset-m="1" col-m="10">
        <Timeline itemHeight="thin">
          <Paragraph {...paragraphProps}>{list1}</Paragraph>
          <Paragraph {...paragraphProps}>{list2}</Paragraph>
          <Paragraph {...paragraphProps}>{list3}</Paragraph>
          <Paragraph {...paragraphProps}>{list4}</Paragraph>
        </Timeline>
      </GridCol>
    )
  }
}

export default withMediaQueries({
  viewportIsMOrLess: true,
})(Radium(TimelineSection))
