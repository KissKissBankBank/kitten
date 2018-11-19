import React from 'react'
import { KarlCarouselProjectCard } from 'kitten/karl/carousel/carousel'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Zero">
        <KarlCarouselProjectCard data={[]} />
      </Example>
      <Example title="One">
        <KarlCarouselProjectCard data={[{ id: 1, title: 'A' }]} />
      </Example>
      <Example title="Two">
        <KarlCarouselProjectCard
          data={[{ id: 1, title: 'A' }, { id: 2, title: 'B' }]}
        />
      </Example>
      <Example title="Three">
        <KarlCarouselProjectCard
          data={[
            { id: 1, title: 'A' },
            { id: 2, title: 'B' },
            { id: 3, title: 'C' },
          ]}
          hidePaginationOnMobile
        />
      </Example>
      <Example title="Four">
        <KarlCarouselProjectCard
          data={[
            { id: 1, title: 'A' },
            { id: 2, title: 'B' },
            { id: 3, title: 'C' },
            { id: 4, title: 'D' },
          ]}
        />
      </Example>
      <Example title="Five">
        <KarlCarouselProjectCard
          data={[
            { id: 1, title: 'A', linkHref: '#A' },
            { id: 2, title: 'B', linkHref: '#B' },
            { id: 3, title: 'C', linkHref: '#C' },
            { id: 4, title: 'D', linkHref: '#D' },
            { id: 5, title: 'E', linkHref: '#E' },
          ]}
        />
      </Example>
    </div>
  )
}
