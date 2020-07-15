import React from 'react'
import { Text } from './index'
import { Marger } from '../../layout/marger'

export default {
  component: Text,
  title: 'Typography/Text',
  parameters: {
    component: Text,
    componentSubtitle: 'List of Text',
  },
}

export const DefaultProp = () => (
  <Text
    color="font1"
    lineHeight="normal"
    size="big"
    weight="regular"
  >
    Lorem ipsum dolor sit amet…
  </Text>
)

export const Size = () => (
  <>
    <Text size="micro">• size="huge"</Text>
    <br />
    <Text size="huge">Lorem ipsum dolor sit amet…</Text>
    <Marger top="2">
      <Text size="micro">• size="big"</Text>
      <br />
      <Text size="big">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• size="default"</Text>
      <br />
      <Text size="default">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• size="tiny"</Text>
      <br />
      <Text size="tiny">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• size="micro"</Text>
      <br />
      <Text size="micro">Lorem ipsum dolor sit amet…</Text>
    </Marger>
  </>
)

export const Color = () => (
  <>
    <Text size="micro">• color="font1"</Text>
    <br />
    <Text color="font1">Lorem ipsum dolor sit amet…</Text>
    <Marger top="2">
      <Text size="micro">• color="font2"</Text>
      <br />
      <Text color="font2">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• color="primary1"</Text>
      <br />
      <Text color="primary1">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• color="background1"</Text>
      <br />
      <Text style={{ backgroundColor: "#222" }} color="background1">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• color="error"</Text>
      <br />
      <Text color="error">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• color="valid"</Text>
      <br />
      <Text color="valid">Lorem ipsum dolor sit amet…</Text>
    </Marger>
  </>
)

export const FontStyle = () => (
  <>
    <Text size="micro">• fontStyle="normal"</Text>
    <br />
    <Text fontStyle="normal">Lorem ipsum dolor sit amet…</Text>
    <Marger top="2">
      <Text size="micro">• fontStyle="italic"</Text>
      <br />
      <Text fontStyle="italic">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    </>
)

export const Weight = () => (
  <>
    <Text size="micro">• weight="light" - font-weight: 400, Maax Regular</Text>
    <br />
    <Text weight="light">Lorem ipsum dolor sit amet…</Text>
    <Marger top="2">
      <Text size="micro">• weight="regular" - font-weight: 500, Maax Medium</Text>
      <br />
      <Text weight="regular">Lorem ipsum dolor sit amet…</Text>
    </Marger>
    <Marger top="2">
      <Text size="micro">• weight="bold" - font-weight: 600, Maax Bold</Text>
      <br />
      <Text weight="bold">Lorem ipsum dolor sit amet…</Text>
    </Marger>
  </>
)

export const Decoration = () => (
  <>  
    <Text size="micro">• decoration="underline"</Text>
    <br />
    <Text decoration="underline">Lorem ipsum dolor sit amet…</Text>
  </>
)

export const Transform = () => (
  <>
    <Text size="micro">• transform="uppercase"</Text>
    <br />
    <Text transform="uppercase">Lorem ipsum dolor sit amet…</Text>
  </>
)
