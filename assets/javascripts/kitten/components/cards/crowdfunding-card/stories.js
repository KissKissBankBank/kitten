import React from 'react'
import styled from 'styled-components'
import { text, boolean, number, select } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { CrowdfundingCard as CrowdfundingCardComponent } from './index'
import { CrowdfundingCardWidget as CrowdfundingCardWidgetComponent } from './widget'
import { KissKissBankBankIcon } from '../../../components/icons/kisskissbankbank-icon'
import { Text } from '../../../components/typography/text'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { STATE_CHOICES } from './stories/project-state'
import { ScreenConfig } from '../../../constants/screen-config'
import { parseHtml } from '../../../helpers/utils/parser'

const StoryContainer = ({ children }) => (
  <Container>
    <Grid>
      <GridCol col-m="4">
        <Marger top="5" bottom="5">
          {children}
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

const StyledWidgetText = styled(Text)`
  display: flex;
  align-items: center;
`

const StyledWidgetLogo = styled(KissKissBankBankIcon)`
  margin-left: ${pxToRem(5)};
`

const WidgetContainerState = () => (
  <StyledWidgetText
    size="micro"
    lineHeight="normal"
    weight="regular"
    color="background1"
  >
    Sur
    <StyledWidgetLogo width="80" height="18" />
  </StyledWidgetText>
)

export default {
  component: CrowdfundingCard,
  title: 'Cards/CrowdfundingCard',
  parameters: {
    component: CrowdfundingCard,
    componentSubtitle:
      'The CrowdfundingCardWidget is a container that can expand on click. It can accept any content.',
  },
}

export const CrowdfundingCard = () => (
  <StoryContainer>
    <CrowdfundingCardComponent
      href={text('Link', '#')}
      ownerTitle={text('Owner title', 'Owner title')}
      ownerDescription={text('Owner description', 'Owner description')}
      loading={boolean('Loading', false)}
      stretch={boolean('Stretch', false)}
      cardTitle={text(
        'Title',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      )}
      cardSubTitle={text(
        'SubTitle',
        'Sed ut perspiciatis unde omnis iste natus error Lorem',
      )}
      info1={text('Info1', 'Lorem ipsum…')}
      info2={text('Info2', 'Lorem ipsum…')}
      info3={text('Info3', 'Lorem ipsum…')}
      progress={number('Progress', 42)}
      state={text('State', 'Lorem ipsum…')}
    />
  </StoryContainer>
)

export const CrowdfundingCardWithVideo = () => (
  <StoryContainer>
    <CrowdfundingCardComponent
      href={text('Link', '#')}
      ownerTitle={text('Owner title', 'Owner title')}
      ownerDescription={text('Owner description', 'Owner description')}
      loading={boolean('Loading', false)}
      stretch={boolean('Stretch', false)}
      cardTitle={text(
        'Title',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      )}
      cardSubTitle={text(
        'SubTitle',
        'Sed ut perspiciatis unde omnis iste natus error Lorem',
      )}
      info1={text('Info1', 'Lorem ipsum…')}
      info2={text('Info2', 'Lorem ipsum…')}
      info3={text('Info3', 'Lorem ipsum…')}
      progress={number('Progress', 42)}
      state={text('State', 'Lorem ipsum…')}
      videoProps={{ className: 'videoClass' }}
      videoSources={[
        {
          src:
            'https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.webm',
          type: 'video/webm',
        },
        {
          src:
            'https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.mp4',
          type: 'video/mp4',
        },
      ]}
    />
  </StoryContainer>
)

export const CrowdfundingCardWidget = () => (
  <StoryContainer>
    <CrowdfundingCardWidgetComponent
      href={text('Link', '#')}
      ownerTitle={text('Owner title', 'Owner title')}
      ownerDescription={text('Owner description', 'Owner description')}
      loading={boolean('Loading', false)}
      stretch={boolean('Stretch', false)}
      title={text(
        'Title',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit…',
      )}
      dayCounter={text('Day counter', '27 jours restants')}
      subtitle={text(
        'Subtitle',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      )}
      buttonText={text('Button text', 'Contribuer')}
      state={<WidgetContainerState />}
    />
  </StoryContainer>
)

const options = Object.keys(STATE_CHOICES)

const StyledText = styled(Text)`
  display: inline-flex;

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    display: block;
  }
`

const InfoContainer = styled.span`
  font-size: ${stepToRem(-1)};
  flex-direction: column;
  display: inline-flex;
`

const Info = ({ label, text }) => (
  <InfoContainer>
    <StyledText tag="strong" weight="bold">
      {parseHtml(text)}
    </StyledText>
    <span>{parseHtml(label)}</span>
  </InfoContainer>
)

export const LendopolisCrowdfundingCard = () => {
  const widgetState = select('widget State', options, options[0])

  return (
    <StoryContainer>
      <CrowdfundingCardComponent
        href={text('Link', '#')}
        ownerTitle={text('Owner title', 'Urbasolar Energy Ocean Indien 6')}
        loading={boolean('Loading', false)}
        stretch={boolean('Stretch', false)}
        cardTitle={text('Title', 'Centrale solaire Urbasolar Le Port')}
        cardSubTitle={text('SubTitle', 'Obligation convertible')}
        info1={text('Info1', <Info label="maturité" text="48 mois" />)}
        info2={text('Info2', <Info label="sur 157 000 €" text="157 000 €" />)}
        info3={text('Info3', <Info label="Taux d'intérêt" text="5,0%" />)}
        progress={number('Progress', 42)}
        widgetState={STATE_CHOICES[widgetState]}
        additionalInfo={'Collecte réservée aux départements : 92, 34, 12, 82'}
        title="Aller sur la collecte …"
        imageContainerRatio={number('ratio', 9 / 16)}
      />
    </StoryContainer>
  )
}
