import React from 'react'
import { Triptych } from './index'
import { VerticalCardWithAction, Title } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: Triptych,
  title: 'Structure/Cards/Triptych',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Triptych" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  argTypes: {
    title: { control: null },
    item1: { control: null },
    item2: { control: null },
    item3: { control: null },
  },
}

export const Default = args => (
  <Triptych
    {...args}
    title={
      <Title tag="h2" modifier="secondary" noMargin>
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
