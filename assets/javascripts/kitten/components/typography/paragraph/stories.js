import React from 'react'
import { Paragraph } from './index'
import { Text } from '../../../components/typography/text'

export default {
  component: Paragraph,
  title: 'Typography/Paragraph',
  parameters: {
    component: Paragraph,
    componentSubtitle: 'List of Paragraph',
  },
}

export const DefaultProp = () => (
  <Paragraph
    tag="p"
    modifier="primary"
    margin={true}
    normalLineHeight={false}
    italic={false}
  >
    Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type 
    specimen book.
  </Paragraph>
)

export const Modifier = () => (
  <>
    <Text size="micro">• modifier="primary"</Text>
    <br />
    <Paragraph modifier="primary">
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type 
      specimen book…
    </Paragraph>
    <br />
    <br />
    <Text size="micro">• modifier="secondary"</Text>
    <br />
    <Paragraph modifier="secondary">
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type 
      specimen book…
    </Paragraph>
    <br />
    <br />
    <Text size="micro">• modifier="tertiary"</Text>
    <br />
    <Paragraph modifier="tertiary">
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type 
      specimen book…
    </Paragraph>
    <br />
    <br />
    <Text size="micro">• modifier="quaternary"</Text>
    <br />
    <Paragraph modifier="quaternary">
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type 
      specimen book…
    </Paragraph>
  </>
)

export const Italic = () => (
  <>
    <Paragraph modifier="primary" italic>
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type 
      specimen book…
    </Paragraph>
  </>
)

export const NormalLineHeight = () => (
  <>
    <Paragraph modifier="primary" normalLineHeight>
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type 
      specimen book…
    </Paragraph>
  </>
)
