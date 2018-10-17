import React from 'react'
import { Timeline } from 'kitten/components/lists/timeline'
import { Text } from 'kitten/components/typography/text'
import { Marger } from 'kitten/components/layout/marger'

export const KarlTimeline = props => (
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
    <span>
      Ut porta blandit est in tincidunt. Aenean et orci pellentesque, iaculis
      turpis id, elementum nisl. Donec ultrices turpis eget sem congue, eu
      fringilla sem hendrerit.
    </span>
    <span>
      Maecenas vestibulum purus vitae nulla aliquet, nec faucibus ex semper.
    </span>
    <span>
      Aliquam in luctus libero. Phasellus pretium posuere leo, in semper odio
      ullamcorper at. Suspendisse placerat tincidunt tincidunt.
    </span>
    <span>
      Ut ut arcu maximus, condimentum metus nec, luctus odio. Aliquam maximus
      lacus et mauris convallis varius. Vivamus volutpat et metus at consequat.
    </span>
  </Timeline>
)
