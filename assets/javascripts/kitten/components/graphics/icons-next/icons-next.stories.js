import styled from 'styled-components'
import { CrossIconNext } from './cross-icon-next'

import { Text, pxToRem } from '../../..'
import React from 'react'
import LinkTo from '@storybook/addon-links/react'

const Container = styled.div`
  padding: ${pxToRem(40)};
  background-color: lightgray;
`

const Group = styled(({ className, children, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className={className}>{children}</div>
    </>
  )
})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${pxToRem(140)}, 1fr));
  grid-gap: ${pxToRem(40)} ${pxToRem(20)};
  margin-bottom: ${pxToRem(40)};
`

const IconContainer = styled(({ className, link, children, suffix }) => {
  return (
    <div className={className}>
      <div className="svgWrapper">{children}</div>
      {link ? (
        <LinkTo
          {...link}
          className="k-u-link k-u-link-font1 k-u-size-micro"
          aria-label="go to story"
        >
          {children.type.name} <ArrowIcon direction="right" />
        </LinkTo>
      ) : (
        <Text weight="light" size="micro">
          {children.type.name}
          {suffix && <> {suffix}</>}
        </Text>
      )}
    </div>
  )
})`
  text-align: center;

  .svgWrapper {
    margin: auto;
    height: ${pxToRem(40)};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: auto;
    height: auto;
    max-width: ${pxToRem(25)};
    max-height: ${pxToRem(25)};
  }

  &.noMaxDimensions svg {
    max-height: initial;
    max-width: initial;
  }
  &.noMaxWidth svg {
    max-width: initial;
  }
`

export const AllIcons = ({ colorInput }) => {
  return (
    <Container>
      <Group>
        <IconContainer children={<CrossIconNext color={colorInput} />} />
      </Group>
    </Container>
  )
}

export default {
  title: 'Graphics/Icons-next',
  args: {
    colorInput: '#333',
  },
  argTypes: {
    colorInput: { control: 'color' },
  },
}
