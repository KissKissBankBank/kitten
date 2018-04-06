import React, { Component } from 'react'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { InformationBox } from 'kitten/components/box/information-box'

export const KarlInformationBox = () => {
  return (
    <InformationBox title="Lorem ipsum dolor sit amet">
      <Paragraph modifier="quaternary" margin={false}>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </Paragraph>
    </InformationBox>
  )
}
