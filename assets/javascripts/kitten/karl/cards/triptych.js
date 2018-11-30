import React from 'react'
import { Title } from '../../components/typography/title'
import { VerticalCardWithAction } from '../../components/cards/vertical-card-with-action'
import { Triptych } from '../../components/cards/triptych'

export const KarlTriptych = props => (
  <Triptych
    title={
      <Title tag="h2" modifier="secondary" margin={false}>
        Main title goes here !
      </Title>
    }
    item1={
      <VerticalCardWithAction
        imageProps={{
          src: `http://via.placeholder.com/349x465/19b4fa/19b4fa`,
          alt: '',
        }}
        title="Lorem ipsum dolor sit amet"
        button="Lorem"
      />
    }
    item2={
      <VerticalCardWithAction
        imageProps={{
          src: `http://via.placeholder.com/349x465/ff8846/ff8846`,
          alt: '',
        }}
        title="Donsectetur adipiscing elit"
        description="Nulla ut orci velit. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus."
        button="Ipsum"
      />
    }
    item3={
      <VerticalCardWithAction
        imageProps={{
          src: `http://via.placeholder.com/349x465/61d079/61d079`,
          alt: '',
        }}
        title="Praesent tincidunt ultrices sem"
        button="Dolor"
      />
    }
  />
)
