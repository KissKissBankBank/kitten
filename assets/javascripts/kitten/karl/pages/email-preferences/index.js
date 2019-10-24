import React from 'react'
import HorizontalCard from './components/horizontal-card'

import { Container } from '../../../components/grid/container'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { Switch } from '../../../components/form/switch'

import styled from 'styled-components'

const StyledDiv = styled.div`
  background: #ccc;
  padding-top: 56.25%;
  width: 100%;
  height: auto;
`

const StyledTitle = styled(Title)`
  margin-top: 0;
`

const EmailPreferences = props => (
  <Container>
    <HorizontalCard>
      <HorizontalCard.Image>
        <StyledDiv />
      </HorizontalCard.Image>
      <HorizontalCard.Text>
        <StyledTitle tag="h2" modifier="senary">
          Nos coups de coeur
        </StyledTitle>
        <Text>
          Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque
          ornare sem lacinia quam venenatis vestibulum.
        </Text>
        <br />
        <Text weight="bold" size="micro">
          Une fois par semaine
        </Text>
      </HorizontalCard.Text>
      <HorizontalCard.Action>
        <Switch />
      </HorizontalCard.Action>
    </HorizontalCard>
    <HorizontalCard>
      <HorizontalCard.Image>
        <StyledDiv />
      </HorizontalCard.Image>
      <HorizontalCard.Text>
        <StyledTitle tag="h2" modifier="senary">
          Culture indé : prenez un indie break
        </StyledTitle>
        <Text>
          Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque
          ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non
          commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit.
        </Text>
        <br />
        <Text weight="bold" size="micro">
          Une fois par semaine
        </Text>
      </HorizontalCard.Text>
      <HorizontalCard.Action>
        <Switch />
      </HorizontalCard.Action>
    </HorizontalCard>
    <HorizontalCard>
      <HorizontalCard.Image>
        <StyledDiv />
      </HorizontalCard.Image>
      <HorizontalCard.Text>
        <StyledTitle tag="h2" modifier="senary">
          Égalité : crowdfunding is crowdcaring
        </StyledTitle>
        <Text>
          Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque
          ornare sem lacinia quam venenatis vestibulum.
        </Text>
        <br />
        <Text weight="bold" size="micro">
          Une fois par semaine
        </Text>
      </HorizontalCard.Text>
      <HorizontalCard.Action>
        <Switch />
      </HorizontalCard.Action>
    </HorizontalCard>
    <HorizontalCard>
      <HorizontalCard.Image>
        <StyledDiv />
      </HorizontalCard.Image>
      <HorizontalCard.Text>
        <StyledTitle tag="h2" modifier="senary">
          Innovation, design & mode : nos projets les plus cool
        </StyledTitle>
        <Text>
          Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque
          ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non
          commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit.
        </Text>
        <br />
        <Text weight="bold" size="micro">
          Une fois par semaine
        </Text>
      </HorizontalCard.Text>
      <HorizontalCard.Action>
        <Switch />
      </HorizontalCard.Action>
    </HorizontalCard>
    <HorizontalCard>
      <HorizontalCard.Image>
        <StyledDiv />
      </HorizontalCard.Image>
      <HorizontalCard.Text>
        <StyledTitle tag="h2" modifier="senary">
          Écologie : devenons greener together
        </StyledTitle>
        <Text>
          Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque
          ornare sem lacinia quam venenatis vestibulum.
        </Text>
        <br />
        <Text weight="bold" size="micro">
          Une fois par semaine
        </Text>
      </HorizontalCard.Text>
      <HorizontalCard.Action>
        <Switch />
      </HorizontalCard.Action>
    </HorizontalCard>
  </Container>
)

export default EmailPreferences
