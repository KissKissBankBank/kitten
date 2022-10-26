import React, { useState } from 'react'
import styled from 'styled-components'
import {
  CarouselNext,
  ProjectCard,
  Text,
  useWindowWidth,
  pxToRem,
  ScreenConfig,
  mq,
  Container,
  GiftIcon,
  Title,
} from 'kitten'

const data = [
  {
    engagement: 'Environnement et biodiversité',
    title: 'Item A',
    imageSrc: '/kitten-1.jpg',
    thumbSrc: '/kitten-1.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    engagement: 'Environnement et biodiversité',
    title: 'Item B with a pretty long title on two lines',
    imageSrc: '/kitten-2.jpg',
    thumbSrc: '/kitten-2.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    engagement: 'Environnement et biodiversité',
    title: 'Item C',
    imageSrc: '/kitten-3.jpg',
    thumbSrc: '/kitten-3.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    engagement: 'Environnement et biodiversité',
    title: 'Item D',
    imageSrc: '/kitten-4.jpg',
    thumbSrc: '/kitten-4.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    engagement: 'Environnement et biodiversité',
    title:
      'Item Ewith the longest title ever in all the world, three lines for sure',
    imageSrc: '/kitten-5.jpg',
    thumbSrc: '/kitten-5.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    engagement: 'Environnement et biodiversité',
    title: 'Item F',
    imageSrc: '/kitten-6.jpg',
    thumbSrc: '/kitten-6.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    engagement: 'Environnement et biodiversité',
    title: 'Item G',
    imageSrc: '/kitten-7.jpg',
    thumbSrc: '/kitten-7.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    engagement: 'Environnement et biodiversité',
    title: 'Item H',
    imageSrc: '/kitten-8.jpg',
    thumbSrc: '/kitten-8.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    engagement: 'Environnement et biodiversité',
    title: 'Item I',
    imageSrc: '/kitten-9.jpg',
    thumbSrc: '/kitten-9.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    engagement: 'Environnement et biodiversité',
    title: 'Item J',
    imageSrc: '/kitten-0.jpg',
    thumbSrc: '/kitten-0.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    engagement: 'Environnement et biodiversité',
    title: 'Item K',
    imageSrc: '/kitten-1.jpg',
    thumbSrc: '/kitten-1.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    engagement: 'Environnement et biodiversité',
    title: 'Item L',
    imageSrc: '/kitten-2.jpg',
    thumbSrc: '/kitten-2.jpg',
    description: 'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
]


const CampaignCardComponent = ({ item }) => (
  <ProjectCard
    key={`ProjectCard${item.title}`}
    href="#"
    imageProps={{
      src: item.imageSrc,
      alt: 'Image alt',
      backgroundColor: '#d8d8d8',
      color: '#333',
    }}
    stretch
  >
    <ProjectCard.Line className="k-u-flex k-u-flex-alignItems-center">
      <GiftIcon
        noMargin
        width="13"
        height="13"
        color="var(--color-primary-500)"
        className="k-u-margin-right-single"
      />
      <Text size="small" color="primary1">
        {item.engagement}
      </Text>
    </ProjectCard.Line>
    <ProjectCard.Title>{item.title}</ProjectCard.Title>
    <ProjectCard.Progress aria-label="Progrès de la campagne" value="84" />
    <ProjectCard.Item>
      <Text size="small">
        {item.description}
      </Text>
    </ProjectCard.Item>
  </ProjectCard>
)

const CampaignCarousel = () => (
  <>
    <Title
      tag="h1"
      noMargin
      modifier="tertiary"
      className="k-u-align-center k-u-margin-vertical-double"
    >
      Les plus beaux projets du moment prennent vie<br />
      sur KissKissBankBank
    </Title>
    <StyledWrapper>
      <CarouselBlock title="La sélection de l'équipe" />
    </StyledWrapper>
  </>
)

const CarouselBlock = ({ title }) => {
  const [navProps, setNavProps] = useState({})

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <div>
      <Container className="k-u-flex k-u-flex-alignItems-center k-u-flex-justifyContent-sb k-u-flex-gap-double">
        <Text
          tag="h1"
          className="k-u-margin-none k-u-margin-vertical-double@xs-down"
          weight="500"
          transform="uppercase"
          letterSpacing="10%"
          size="small"
        >
          {title}
        </Text>
        <CarouselNext.Navigation
          {...navProps}
          buttonProps={{ size: 'small' }}
          className="k-u-hidden@xs-down"
        />
      </Container>
      <CarouselNext
        baseGap={30}
        cycle
        itemsPerPage={windowWidth <= ScreenConfig.XS.max ? 1 : 3}
        itemMinWidth={0}
        viewportIsXSOrLess={windowWidth <= ScreenConfig.XS.max}
        viewportIsMOrLess={windowWidth <= ScreenConfig.M.max}
        navigationPropsGetter={setNavProps}
        showOtherPages
        shadowSize={windowWidth <= ScreenConfig.XS.max ? 15 : 30}
      >
        {data.map((item, index) => (
          <>
            <CampaignCardComponent item={item} key={index} />
          </>
        ))}
      </CarouselNext>
    </div>
  )
}

const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(40)};
  padding-top: ${pxToRem(60)};

  & > * {
    position: relative;
    z-index: 2;
  }

  &::before {
    z-index: 1;
    display: block;
    content: '';
    position: absolute;
    background-color: var(--color-grey-000);
    height: ${pxToRem(310)};
    width: 100%;
    left: 0;
    top: 0;
    clip-path: polygon(0 -1px, 100% -1px, 100% 100%, 0 50%);
  }

  .k-CarouselNext--showOtherPages .k-CarouselNext__inner {
    --container-padding: ${pxToRem(50 - 4)};

    @media ${mq.tabletAndDesktop} {
      --container-padding: 15vw;
    }
  }

  .k-CarouselNext__page {
    height: 100% !important;
  }
`

export default CampaignCarousel
