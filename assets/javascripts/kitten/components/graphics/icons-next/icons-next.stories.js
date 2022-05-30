import styled from 'styled-components'
import {
  AirplaneIconNext,
  BankCardIconNext,
  BubbleIconNext,
  CheckedShieldIconNext,
  ChronoIconNext,
  CogIconNext,
  ColorCheckedShieldIconNext,
  ColorCrossCircleIconNext,
  ColorHeartWithClickIconNext,
  ColorGiftIconNext,
  CrossIconNext,
  CrossCircleIconNext,
  CubeIconNext,
  EditIconNext,
  EmbedIconNext,
  EnvelopeIconNext,
  EyeIconNext,
  FacebookIconNext,
  FacebookIconCircleNext,
  FlashIconNext,
  FilterIconNext,
  GiftIcon,
  GoogleIconNext,
  HeartIconNext,
  HomeIconNext,
  InfiniteIconNext,
  InstagramIconNext,
  LargeArrowIconNext,
  LinkIconNext,
  LinkedinIconNext,
  LockOutlineIcon,
  LongArrowIconNext,
  MessengerIconNext,
  OpenLockIconNext,
  PeopleCircleIconNext,
  PeopleIconNext,
  PlusIconNext,
  RefundIcon,
  SpeechBubbleIconNext,
  StarIconNext,
  StatsIconNext,
  StatusIconNext,
  SunIconNext,
  TagIconNext,
  ThumbUpIconNext,
  TwitterIconNext,
  UsersIconNext,
  WhatsappIconNext,
  WindowEditIconNext,
  MicrophoneIconNext,
  QuestionBubbleIconNext,
} from 'kitten'
import { Text, Title, pxToRem } from 'kitten'
import React from 'react'
import LinkTo from '@storybook/addon-links/react'

const Container = styled.div`
  padding: ${pxToRem(40)};
  background-color: lightgray;
`

const Group = styled(({ className, children, title }) => {
  return (
    <>
      <Title tag="h2" modifier="septenary">
        {title}
      </Title>
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
          {children?.type?.name} <ArrowIcon direction="right" />
        </LinkTo>
      ) : (
        <Text weight="light" size="micro">
          {children?.type?.name}
          {suffix && (
            <>
              <br />
              {suffix}
            </>
          )}
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
    max-width: ${pxToRem(27)};
    max-height: ${pxToRem(27)};
  }

  &.noMaxDimensions svg {
    max-height: initial;
    max-width: initial;
  }
  &.noMaxWidth svg {
    max-width: initial;
  }
`

export const AllIcons = ({ colorInput, secondaryColorInput, bgColorInput }) => {
  return (
    <Container>
      <Group>
        <IconContainer suffix='direction="up-left"'>
          <AirplaneIconNext color={colorInput} />
        </IconContainer>
        <IconContainer suffix='direction="left"'>
          <AirplaneIconNext direction="left" color={colorInput} />
        </IconContainer>
        <IconContainer>
          <BankCardIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <BubbleIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <CheckedShieldIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <ChronoIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <CrossIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <CrossCircleIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <CogIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <CubeIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <EditIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <EnvelopeIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <EyeIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <FlashIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <FilterIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <GiftIcon color={colorInput} />
        </IconContainer>
        <IconContainer>
          <HeartIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <HomeIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <InfiniteIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <LockOutlineIcon color={colorInput} />
        </IconContainer>
        <IconContainer>
          <OpenLockIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <PeopleCircleIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <PeopleIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <PlusIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <RefundIcon color={colorInput} />
        </IconContainer>
        <IconContainer>
          <SpeechBubbleIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <StatsIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <StarIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <SunIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <TagIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <ThumbUpIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <UsersIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <WindowEditIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <LinkIconNext color={colorInput} width={24} height={24} />
        </IconContainer>
        <IconContainer>
          <EmbedIconNext color={colorInput} width={24} height={24} />
        </IconContainer>
        <IconContainer>
          <MicrophoneIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <QuestionBubbleIconNext color={colorInput} width={24} height={24} />
        </IconContainer>
      </Group>

      <Group title="Icônes remplies">
        <IconContainer suffix="bgColor">
          <HeartIconNext color={colorInput} bgColor={bgColorInput} />
        </IconContainer>
        <IconContainer suffix="bgColor">
          <StarIconNext color={colorInput} bgColor={bgColorInput} />
        </IconContainer>
      </Group>

      <Group title="Icônes bicolores">
        <IconContainer>
          <ColorCheckedShieldIconNext
            color={colorInput}
            secondaryColor={secondaryColorInput}
          />
        </IconContainer>
        <IconContainer>
          <ColorGiftIconNext
            color={colorInput}
            secondaryColor={secondaryColorInput}
          />
        </IconContainer>
        <IconContainer>
          <ColorHeartWithClickIconNext
            color={colorInput}
            secondaryColor={secondaryColorInput}
          />
        </IconContainer>
        <IconContainer>
          <ColorCrossCircleIconNext
            color={colorInput}
            secondaryColor={secondaryColorInput}
          />
        </IconContainer>
      </Group>

      <Group title="Icônes flèches">
        <IconContainer suffix='direction="up"'>
          <LargeArrowIconNext color={colorInput} direction="up" />
        </IconContainer>
        <IconContainer suffix='direction="down"'>
          <LargeArrowIconNext color={colorInput} direction="down" />
        </IconContainer>
        <IconContainer suffix='direction="left"'>
          <LargeArrowIconNext color={colorInput} direction="left" />
        </IconContainer>
        <IconContainer suffix='direction="right"'>
          <LargeArrowIconNext color={colorInput} direction="right" />
        </IconContainer>
        <IconContainer suffix='direction="up"'>
          <LongArrowIconNext color={colorInput} direction="up" />
        </IconContainer>
        <IconContainer suffix='direction="down"'>
          <LongArrowIconNext color={colorInput} direction="down" />
        </IconContainer>
        <IconContainer suffix='direction="left"'>
          <LongArrowIconNext color={colorInput} direction="left" />
        </IconContainer>
        <IconContainer suffix='direction="right"'>
          <LongArrowIconNext color={colorInput} direction="right" />
        </IconContainer>
      </Group>

      <Group title="Icônes statuts">
        <IconContainer suffix="status=info">
          <StatusIconNext status="info" color={colorInput} />
        </IconContainer>
        <IconContainer suffix="status=warning">
          <StatusIconNext status="warning" color={colorInput} />
        </IconContainer>
        <IconContainer suffix="status=disabled">
          <StatusIconNext status="disabled" color={colorInput} />
        </IconContainer>
        <IconContainer suffix="status=success">
          <StatusIconNext status="success" color={colorInput} />
        </IconContainer>
        <IconContainer suffix="status=danger">
          <StatusIconNext status="danger" color={colorInput} />
        </IconContainer>
        <IconContainer suffix="status=pending">
          <StatusIconNext status="pending" color={colorInput} />
        </IconContainer>
      </Group>

      <Group title="Icônes réseaux sociaux">
        <IconContainer>
          <FacebookIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <TwitterIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <InstagramIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <WhatsappIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <MessengerIconNext color={colorInput} />
        </IconContainer>
        <IconContainer>
          <LinkedinIconNext color={colorInput} />
        </IconContainer>
      </Group>

      <Group title="Icônes réseaux sociaux couleurs"> 
        <IconContainer>
          <GoogleIconNext />
        </IconContainer>
        <IconContainer>
          <FacebookIconCircleNext />
        </IconContainer>
      </Group>
    </Container>
  )
}

export default {
  title: 'Graphics/Icons Next',
  args: {
    colorInput: '#333',
    secondaryColorInput: '#006cff',
    bgColorInput: 'rgba(0,0,0,0)',
  },
  argTypes: {
    colorInput: { control: 'color' },
    secondaryColorInput: { control: 'color' },
    bgColorInput: { control: 'color' },
  },
}
