import React from 'react'
import styled from 'styled-components'
import { Text, pxToRem } from 'kitten'

import { LightbulbIllustration } from './lightbulb-illustration'
import { LinkBoxIllustration } from './link-box-illustration'
import { LoudspeakerIllustration } from './loudspeaker-illustration'
import { MixIllustration } from './mix-illustration'
import { PhoneIllustration } from './phone-illustration'
import { RocketIllustration } from './rocket-illustration'
import { KkbbFlashIllustration } from './kkbb-flash-illustration'
import { HourglassIllustration } from './hourglass-illustration'
import { HandIllustration } from './hand-illustration'
import { FormIllustration } from './form-illustration'
import { ComputerIllustration } from './computer-illustration'
import { RibbonIllustration } from './ribbon-illustration'
import { HandAndFlowerIllustration } from './hand-and-flower-illustration'
import { RainbowIllustration } from './rainbow-illustration'
import { PencilIllustration } from './pencil-illustration'
import { PatchNewIllustration } from './patch-new-illustration'
import { WeirdIllustration } from './weird-illustration'
import { HeartIllustration } from './heart-illustration'
import { FlashIllustration } from './flash-illustration'
import { MusicIllustration } from './music-illustration'
import { PencilColorIllustration } from './pencil-color-illustration'
import { HandAndFlowerColorIllustration } from './hand-and-flower-color-illustration'
import { RainbowColorIllustration } from './rainbow-color-illustration'
import { MoneyBankIllustration } from './money-bank-illustration'
import { LibraryIllustration } from './library-illustration'
import { DeskIllustration } from './desk-illustration'
import { SpeakerIllustration } from './speaker-illustration'
import { BoxesIllustration } from './boxes-illustration'

const Wrapper = styled.div`
  padding: ${pxToRem(40)};
  background-color: lightgray;
  display: grid;
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
  grid-template-columns: repeat(auto-fill, minmax(${pxToRem(250)}, 1fr));
  grid-gap: ${pxToRem(80)} ${pxToRem(20)};
  margin-bottom: ${pxToRem(50)};
`

const IllustrationWrapper = styled(({ className, children, name }) => {
  return (
    <div className={className}>
      <div className="svgWrapper">{children}</div>
      <Text size="micro" className="k-u-margin-top-double" as="p">
        {name}
      </Text>
    </div>
  )
})`
  text-align: center;
  align-self: end;

  .svgWrapper {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: auto;
    height: auto;
    max-width: ${pxToRem(250)};
    max-height: ${pxToRem(300)};
  }
`

export const AllIllustrations = () => {
  return (
    <Wrapper>
      <Group>
        <IllustrationWrapper name="LoudspeakerIllustration">
          <LoudspeakerIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="MixIllustration">
          <MixIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="PhoneIllustration">
          <PhoneIllustration />
        </IllustrationWrapper>
      </Group>
      <Group>
        <IllustrationWrapper name="LightbulbIllustration">
          <LightbulbIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="RocketIllustration">
          <RocketIllustration />
        </IllustrationWrapper>
      </Group>
      <Group>
        <IllustrationWrapper name="LinkBoxIllustration">
          <LinkBoxIllustration />
        </IllustrationWrapper>
      </Group>

      <Group>
        <IllustrationWrapper name="KkbbFlashIllustration">
          <KkbbFlashIllustration size="small" />
        </IllustrationWrapper>
      </Group>

      <Group>
      <IllustrationWrapper name="HourglassIllustration">
        <HourglassIllustration />
      </IllustrationWrapper>
      <IllustrationWrapper name="HandIllustration">
        <HandIllustration />
      </IllustrationWrapper>
      <IllustrationWrapper name="ComputerIllustration">
        <ComputerIllustration />
      </IllustrationWrapper>
      <IllustrationWrapper name="FormIllustration">
        <FormIllustration />
      </IllustrationWrapper>
      <IllustrationWrapper name="RibbonIllustration">
        <RibbonIllustration />
      </IllustrationWrapper>
      </Group>

      <Group>
      <IllustrationWrapper name="PencilIllustration">
        <PencilIllustration />
      </IllustrationWrapper>
      <IllustrationWrapper name="RainbowIllustration">
        <RainbowIllustration />
      </IllustrationWrapper>
      <IllustrationWrapper name="HandAndFlowerIllustration">
        <HandAndFlowerIllustration />
      </IllustrationWrapper>
      </Group>

      <Group>
        <IllustrationWrapper name="PatchNewIllustration">
          <PatchNewIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="MoneyBankIllustration">
          <MoneyBankIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="LibraryIllustration">
          <LibraryIllustration />
        </IllustrationWrapper>
      </Group>
      <Group>
        <IllustrationWrapper name="WeirdIllustration">
          <WeirdIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="HeartIllustration">
          <HeartIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="FlashIllustration">
          <FlashIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="MusicIllustration">
          <MusicIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="PencilColorIllustration">
          <PencilColorIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="HandAndFlowerColorIllustration">
          <HandAndFlowerColorIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="RainbowColorIllustration">
          <RainbowColorIllustration />
        </IllustrationWrapper>
      </Group>
      <Group>
        <IllustrationWrapper name="DeskIllustration">
          <DeskIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="SpeakerIllustration">
          <SpeakerIllustration />
        </IllustrationWrapper>
        <IllustrationWrapper name="BoxesIllustration">
          <BoxesIllustration />
        </IllustrationWrapper>
      </Group>
    </Wrapper>
  )
}

export default { title: 'Graphics/Illustrations' }
