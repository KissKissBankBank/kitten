import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { EngagementCard } from './index'
import { Grid, GridCol } from '../../grid/grid'
import { Container } from '../../grid/container'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import { Marger } from '../../layout/marger'

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

  :hover li {
    opacity: 0.5;
  }

  li:hover {
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

    #### Image
    ~~~js
    <EngagementCard imageSrc="…" />
    ~~~

  #### Background color
    ~~~js
    <EngagementCard backgroundColor="…" />
    ~~~

    #### Border color
    ~~~js
    <EngagementCard borderColor="…" />
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
                  href="#"
                  imageSrc={text(
                    'Image',
                    'https://via.placeholder.com/130x100/caf4fe',
                  )}
                  backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
                  borderHover={(color, ('borderHover', '#caf4fe'))}
                >
                  {text('Categorie', 'Fabrication française')}
                </StyledEngagementCard>
              </li>
              <li>
                <StyledEngagementCard
                  className="k-u-hidden@s-down--important"
                  href="#"
                  imageSrc={text(
                    'Image',
                    'https://via.placeholder.com/130x100/caf4fe',
                  )}
                  backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
                  borderHover={(color, ('borderHover', '#caf4fe'))}
                >
                  {text('Categorie', 'Education')}
                </StyledEngagementCard>
              </li>
              <li>
                <StyledEngagementCard
                  className="k-u-hidden@s-down--important"
                  href="#"
                  imageSrc={text(
                    'Image',
                    'https://via.placeholder.com/130x100/caf4fe',
                  )}
                  backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
                  borderHover={(color, ('borderHover', '#caf4fe'))}
                >
                  {text('Categorie', 'Bio')}
                </StyledEngagementCard>
              </li>
            </StyledList>
          </Marger>
        </Container>
      )
    },
    { info },
  )
