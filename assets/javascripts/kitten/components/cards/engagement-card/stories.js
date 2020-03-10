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
import { PhoneIllustration } from '../../../components/illustrations/phone-illustration'
import { Carousel } from '../../../components/carousel/carousel/carousel'

const data = [
  {
    bgColor: '#ffebe1',
    children: 'autoproduction culturelle',
  },
  {
    bgColor: '#8fd9fa',
    children: 'Autoproduction culturelle',
  },
  {
    bgColor: '#ffebe1',
    children: 'education',
  },
  {
    bgColor: '#caf4fe',
    children: 'bio',
  },
  {
    bgColor: '#caf4fe',
    children: 'Made in france',
  },
  {
    bgColor: '#8fd9fa',
    children: 'zero-dechet',
  },
  {
    bgColor: '#fd8081',
    children: 'media independant',
  },
  {
    bgColor: '#ffebe1',
    children: 'maladie-handicap',
  },
  {
    bgColor: '#8fd9fa',
    children: 'biodiversite',
  },
  {
    bgColor: '#ffebe1',
    children: 'developpement-local',
  },
  {
    bgColor: '#ffebe1',
    children: 'solidarite-internationale',
  },
]

const StyledEngagementCard = styled(EngagementCard)`
  display: flex;
  height: ${pxToRem(130)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    height: ${pxToRem(140)};
  }
`
const StyledContainer = styled(Container)`
  margin-top: ${pxToRem(20)};
  box-sizing: border-box;

  [class^='carousel-page']:hover > [class^='carousel-page'] a:hover {
    opacity: 1;
  }

  [class^='carousel-page']:hover > [class^='carousel-page'] a {
    opacity: 0.5;
  }
`

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  overflow: hidden;

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
    <EngagementCard icon={<MyIcon />} />
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
        <StyledContainer>
          <Marger top="3">
            <StyledList>
              <li>
                <StyledEngagementCard
                  isActive
                  href="#"
                  icon={<PhoneIllustration />}
                  backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
                  hoverBorder={(color, ('hoverBorder', '#caf4fe'))}
                >
                  {text('Categorie', 'Fabrication française')}
                </StyledEngagementCard>
              </li>
              <li>
                <StyledEngagementCard
                  className="k-u-hidden@s-down--important"
                  href="#"
                  icon={<KissKissBankBankIcon height="25" />}
                  backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
                  hoverBorder={(color, ('hoverBorder', '#caf4fe'))}
                >
                  {text('Categorie 2', 'Education')}
                </StyledEngagementCard>
              </li>
              <li>
                <StyledEngagementCard
                  className="k-u-hidden@s-down--important"
                  href="#"
                  icon={<KissKissBankBankIcon height="25" />}
                  backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
                  hoverBorder={(color, ('hoverBorder', '#caf4fe'))}
                >
                  {text('Categorie 3', 'Bio')}
                </StyledEngagementCard>
              </li>
            </StyledList>
          </Marger>
        </StyledContainer>
      )
    },
    { info },
  )

storiesOf('Cards/EngagementCardWithCarousel', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => {
    return (
      <StyledContainer fullWidthBelowScreenSize="S">
        <Carousel
          itemMinWidth={110}
          hidePaginationOnMobile
          baseItemMarginBetween={20}
          paginationPosition={{ default: 'right' }}
        >
          {data.map(data => {
            return (
              <StyledEngagementCard
                href="#"
                icon={<PhoneIllustration />}
                backgroundColor={data.bgColor}
                hoverBorder={data.bgColor}
              >
                {data.children}
              </StyledEngagementCard>
            )
          })}
        </Carousel>
      </StyledContainer>
    )
  })
