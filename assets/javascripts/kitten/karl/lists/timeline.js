import React, { Fragment } from 'react'
import { Timeline } from '../../components/lists/timeline'
import { Text } from '../../components/typography/text'
import { Paragraph } from '../../components/typography/paragraph'
import { Marger } from '../../components/layout/marger'
import { KarlExampleTitle } from '../../karl/examples/title'

export const KarlTimeline = () => (
  <Fragment>
    <KarlExampleTitle>Large timeline</KarlExampleTitle>
    <Timeline>
      <div>
        <Marger bottom="1">
          <Text size="huge" weight="bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Marger>
        <Text size="tiny">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta
          blandit est in tincidunt. Aenean et orci pellentesque, iaculis turpis
          id, elementum nisl.
        </Text>
      </div>
      <Paragraph margin={false} modifier="primary">
        Ut porta blandit est in tincidunt. Aenean et orci pellentesque, iaculis
        turpis id, elementum nisl. Donec ultrices turpis eget sem congue, eu
        fringilla sem hendrerit.
      </Paragraph>
      <span>
        Maecenas vestibulum purus vitae nulla aliquet, nec faucibus ex semper.
      </span>
      <span>
        Aliquam in luctus libero. Phasellus pretium posuere leo, in semper odio
        ullamcorper at. Suspendisse placerat tincidunt tincidunt.
      </span>
      <Fragment>
        Ut ut arcu maximus, condimentum metus nec, luctus odio. Aliquam maximus
        lacus et mauris convallis varius. Vivamus volutpat et metus at
        consequat.
      </Fragment>
    </Timeline>

    <KarlExampleTitle>Thin timeline</KarlExampleTitle>
    <Timeline itemHeight="thin">
      <Fragment>
        Ut porta blandit est in tincidunt. Aenean et orci pellentesque, iaculis
        turpis id, elementum nisl.
      </Fragment>
      <Fragment>
        Maecenas vestibulum purus vitae nulla aliquet, nec faucibus ex semper.
      </Fragment>
      <Fragment>
        Aliquam in luctus libero. Phasellus pretium posuere leo, in semper odio
        ullamcorper at. Suspendisse placerat tincidunt tincidunt.
      </Fragment>
    </Timeline>
  </Fragment>
)
