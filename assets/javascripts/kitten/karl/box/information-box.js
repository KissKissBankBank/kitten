import React, { Component } from 'react'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { InformationBox } from 'kitten/components/box/information-box'

export const KarlInformationBox = () => {
  return (
    <InformationBox>
      <Title
        margin={ false }
        modifier="quaternary"
        tag="p">
          Lorem ipsum dolor sit amet
      </Title>
      <Paragraph
        margin={ false }
        modifier="quaternary">
          Consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
      </Paragraph>
    </InformationBox>
  )
}
