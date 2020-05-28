import React from 'react'
import styled from 'styled-components'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { CrowdfundingCard as CrowdfundingCardComponent } from './index'
import { CrowdfundingCardWidget as CrowdfundingCardWidgetComponent } from './widget'
import { KissKissBankBankIcon } from '../../../components/icons/kisskissbankbank-icon'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import { STATE_CHOICES } from './stories/project-state'

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
  decorators: [withKnobs],
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

export const LendopolisCrowdfundingCard = () => {
  const widgetState = select('widget State', options, options[0])

  return (
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
        widgetState={STATE_CHOICES[widgetState]}
        additionalInfo={"Collecte réservée aux départements : 92, 34, 12, 82"}
        title="Aller sur la collecte …"
      />
    </StoryContainer>
  )
}
