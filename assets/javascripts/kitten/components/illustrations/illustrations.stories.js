import React from 'react'
import { pxToRem } from '../../helpers/utils/typography'
import styled from 'styled-components'
import { Text, COLORS } from '../..'

import { LightbulbIllustration } from './lightbulb-illustration'
import { LinkBoxIllustration } from './link-box-illustration'
import { LoudspeakerIllustration } from './loudspeaker-illustration'
import { MixIllustration } from './mix-illustration'
import { PhoneIllustration } from './phone-illustration'

const Container = styled.div`
  padding: ${pxToRem(40)};
  background-color: ${COLORS.background3};
`
const Group = styled(({ className, children, title }) => {
  return (
    <>
      <h2 style={{ fontSize: '20px' }}>{title}</h2>
      <div className={className}>{children}</div>
    </>
  )
})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${pxToRem(140)}, 1fr));
  grid-gap: ${pxToRem(80)} ${pxToRem(40)};
  margin-bottom: ${pxToRem(50)};
`

const IllustrationWrapper = styled(({ className, children, name }) => {
  return (
    <div className={className}>
      <div className="svgWrapper">{children}</div>
      <Text size="micro">{name}</Text>
    </div>
  )
})`
  text-align: center;

  .svgWrapper {
    margin: auto;
    height: ${pxToRem(50)};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.noMaxDimensions svg {
    max-height: ${pxToRem(50)};
    max-width: ${pxToRem(50)};
  }
`

export const IllustrationsList = () => {
  return (
    <Container>
      <Group title="LightbulbIllustration">
        <IllustrationWrapper children={<LightbulbIllustration />} />
        <IllustrationWrapper
          name="size=small"
          children={<LightbulbIllustration size="small" />}
        />
      </Group>

      <Group title="LinkBoxIllustration">
        <IllustrationWrapper children={<LinkBoxIllustration />} />
      </Group>

      <Group title="LoudspeakerIllustration">
        <IllustrationWrapper children={<LoudspeakerIllustration />} />
      </Group>

      <Group title="MixIllustration">
        <IllustrationWrapper children={<MixIllustration />} />
      </Group>

      <Group title="PhoneIllustration">
        <IllustrationWrapper children={<PhoneIllustration />} />
      </Group>
    </Container>
  )
}

export default { title: 'Graphics/Illustrations' }
