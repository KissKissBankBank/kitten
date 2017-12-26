import React, { Component } from 'react'
import { Hero } from 'kitten/components/heroes/hero'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Marger } from 'kitten/components/layout/marger'
import { Button } from 'kitten/components/buttons/button'

export const KarlHero = props => {
  return (
    <Hero { ...props }>
      <Marger bottom="5">
        <Title modifier="secondary" margin={ false }>
          Lorem ipsum dolor sit amet.
        </Title>
      </Marger>

      <Marger top="5" bottom="4">
        <Paragraph modifier="primary" margin={ false }>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu enim justo, rhoncus ut.
        </Paragraph>
      </Marger>

      <Marger top="4">
        <Button modifier="helium">Button</Button>
      </Marger>
    </Hero>
  )
}
