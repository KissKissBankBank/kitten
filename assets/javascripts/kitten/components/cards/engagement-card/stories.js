import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { EngagementCard } from './index'
import { Container } from '../../grid/container'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import { Marger } from '../../layout/marger'
import { KissKissBankBankIcon } from '../../../components/icons/kisskissbankbank-icon'

const StyledEngagementCard = styled(EngagementCard)`
  display: flex;
  width: ${pxToRem(100)};
  height: ${pxToRem(130)};
  margin-right: ${pxToRem(20)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    width: ${pxToRem(110)};
    height: ${pxToRem(150)};
  }
`

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    position: relative;
  }

  :hover li,
  :active li {
    opacity: 0.5;
  }

  li:hover,
  li:active {
    opacity: 1;
  }
`

const info = {
  text: `
    #EngagementCard
    &nbsp;

    ## Import
    ~~~js
    import { EngagementCard } from '@kisskissbankbank/kitten/src/components/cards/engagement-card'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <EngagementCard />
    ~~~

    #### Icon
    ~~~js
    <EngagementCard icon="…" />
    ~~~

  #### Background color
    ~~~js
    <EngagementCard backgroundColor="…" />
    ~~~

    #### Hover's border
    ~~~js
    <EngagementCard hoverBorder="…" />
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Cards/EngagementCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <Container>
          <Marger top="3">
            <StyledList>
              <li>
                <StyledEngagementCard
                  isActive
                  href="#"
                  icon={<KissKissBankBankIcon height="25" />}
                  backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
                  hoverBorder={(color, ('hoverBorder', '#caf4fe'))}
                  title={text('Categorie', 'Fabrication française')}
                />
              </li>
              <li>
                <StyledEngagementCard
                  className="k-u-hidden@s-down--important"
                  href="#"
                  icon={<KissKissBankBankIcon height="25" />}
                  backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
                  hoverBorder={(color, ('hoverBorder', '#caf4fe'))}
                  title={text('Categorie', 'Education')}
                />
              </li>
              <li>
                <StyledEngagementCard
                  className="k-u-hidden@s-down--important"
                  href="#"
                  icon={<KissKissBankBankIcon height="25" />}
                  backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
                  hoverBorder={(color, ('hoverBorder', '#caf4fe'))}
                  title={text('Categorie', 'Bio')}
                />
              </li>
            </StyledList>
          </Marger>
        </Container>
      )
    },
    { info },
  )
