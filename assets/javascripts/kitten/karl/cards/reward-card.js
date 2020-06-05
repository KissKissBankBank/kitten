import React from 'react'
import { RewardCard } from '../../components/cards/reward-card'
import { Container } from '../../components/grid/container'
import { Marger } from '../../components/layout/marger'
import { KarlExampleTitle } from '../../karl/examples/title'

export const KarlRewardCard = () => (
  <>
    <KarlExampleTitle>Reward card</KarlExampleTitle>
    <Container>
      <Marger bottom="2">
        <RewardCard
          titleAmount="For 00€"
          subtitle="Lorem ipsumn, consectetuer adipiscing elit."
          description="In enim justo."
          infos={[
            { label: 'Contributors:', value: '35' },
            { label: 'Delivery:', value: 'January 2018' },
          ]}
          buttonLabel="Choose"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Disabled Reward card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <RewardCard
          titleAmount="For 00€"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          description="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          infos={[
            { label: 'Contributors:', value: '35' },
            { label: 'Delivery:', value: 'January 2018' },
            { label: 'Availability:', value: '200' },
          ]}
          buttonLabel="Choose"
          manageContributionDescription="You contributed to this project"
          manageContributionLinkLabel="Manage my contribution"
          isDisabled
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Completed Reward card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <RewardCard
          titleAmount="For 00€"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          description="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          infos={[
            { label: 'Contributors:', value: '35' },
            { label: 'Delivery:', value: 'January 2018' },
            { label: 'Availability:', value: '200' },
          ]}
          manageContributionDescription="You contributed to this project"
          manageContributionLinkLabel="Manage my contribution"
          imageProps={{
            src: 'http://via.placeholder.com/200x350/caf4fe/caf4fe',
            alt: '',
          }}
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Without Image Reward card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <RewardCard
          titleAmount="For 00€"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          description="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          infos={[
            { label: 'Contributors:', value: '35' },
            { label: 'Delivery:', value: 'January 2018' },
            { label: 'Availability:', value: '200' },
          ]}
          manageContributionDescription="You contributed to this project"
          manageContributionLinkLabel="Manage my contribution"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Without Image Reward card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <RewardCard
          titleAmount="For 00€"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          description="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          infos={[
            { label: 'Contributors:', value: '35' },
            { label: 'Delivery:', value: 'January 2018' },
            { label: 'Availability:', value: '200' },
          ]}
          manageContributionDescription="You contributed to this project"
          manageContributionLinkLabel="Manage my contribution"
          buttonLabel="Choose"
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Small Image Reward card</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <RewardCard
          titleAmount="For 00€"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          description="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          infos={[
            { label: 'Contributors:', value: '35' },
            { label: 'Delivery:', value: 'January 2018' },
            { label: 'Availability:', value: '200' },
          ]}
          manageContributionDescription="You contributed to this project"
          manageContributionLinkLabel="Manage my contribution"
          buttonLabel="Choose"
          imageProps={{
            src: 'http://via.placeholder.com/200x200/caf4fe/caf4fe',
            alt: '',
          }}
        />
      </Marger>
    </Container>

    <KarlExampleTitle>Small Image Reward card (tiny version)</KarlExampleTitle>
    <Container>
      <Marger top="2" bottom="2">
        <RewardCard
          titleAmount="For 00€"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          description="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
          infos={[
            { label: 'Contributors:', value: '35' },
            { label: 'Delivery:', value: 'January 2018' },
            { label: 'Availability:', value: '200' },
          ]}
          manageContributionDescription="You contributed to this project"
          manageContributionLinkLabel="Manage my contribution"
          buttonLabel="Choose"
          imageProps={{
            src: 'http://via.placeholder.com/200x200/caf4fe/caf4fe',
            alt: '',
          }}
          version="tiny"
        />
      </Marger>
    </Container>
  </>
)
