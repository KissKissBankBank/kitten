import {
  Button,
  CarouselNext,
  Container,
  mq,
  PartnerCard,
  pxToRem,
  ScreenConfig,
  Text,
  Title,
  useWindowWidth,
} from 'kitten'
import React, { useState } from 'react'
import styled from 'styled-components'

const data = [
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-1.jpg',
    thumbSrc: '/kitten-1.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-2.jpg',
    thumbSrc: '/kitten-2.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-3.jpg',
    thumbSrc: '/kitten-3.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-4.jpg',
    thumbSrc: '/kitten-4.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-5.jpg',
    thumbSrc: '/kitten-5.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-6.jpg',
    thumbSrc: '/kitten-6.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-7.jpg',
    thumbSrc: '/kitten-7.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-8.jpg',
    thumbSrc: '/kitten-8.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-9.jpg',
    thumbSrc: '/kitten-9.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-0.jpg',
    thumbSrc: '/kitten-0.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-1.jpg',
    thumbSrc: '/kitten-1.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
  {
    description: 'Environnement et biodiversité',
    tag: 'Citoyenneté',
    imageSrc: '/kitten-2.jpg',
    thumbSrc: '/kitten-2.jpg',
    description:
      'Soutenez la création des deux premiers numéros du trimestriel de MAJ',
  },
]

const PartnerCardComponent = ({ item }) => (
  <PartnerCard
    imageProps={{
      src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
      alt: '',
    }}
  >
    <PartnerCard.Avatar
      imageProps={{
        src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
        alt: '',
      }}
    />
    <PartnerCard.Line>
      <Text size="small" weight="500">
        Les Jeunes Pousses méritent tout notre soutien : Naturalia s’engage dans
        le développement de votre produit bio.
      </Text>
      <PartnerCard.Sticker>Citoyenneté</PartnerCard.Sticker>
      <Text
        tag="p"
        weight="700"
        size="small"
        className="k-u-link-font1 k-u-cursor-pointer k-u-margin-none"
      >
        En savoir plus
      </Text>
    </PartnerCard.Line>
  </PartnerCard>
)

const PartnerCarousel = () => (
  <StyledWrapper>
    <div className="kiss-Homepage__partner__container">
      <Title
        tag="h2"
        className="k-u-margin-none k-u-margin-vertical-double@xs-down k-u-align-center"
        letterSpacing="10%"
        modifier="tertiary"
      >
        Les entreprises s’engagent
        <br />
        au service de la réussite des projets
      </Title>
      <Container>
        <CarouselBlock />
      </Container>

      <Text weight="700" size="large" className="k-u-align-center">
        Vous êtes une entreprise ?
      </Text>
      <Button modifier="beryllium">Devenons partenaires</Button>
    </div>
  </StyledWrapper>
)

const CarouselBlock = () => {
  const [navProps, setNavProps] = useState({})

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <div>
      <Container className="k-u-flex k-u-flex-justifyContent-end">
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
        itemMinWidth={windowWidth <= ScreenConfig.XS.max ? 200 : 300}
        viewportIsXSOrLess={windowWidth <= ScreenConfig.XS.max}
        viewportIsMOrLess={windowWidth <= ScreenConfig.M.max}
        navigationPropsGetter={setNavProps}
        showOtherPages
        shadowSize={windowWidth <= ScreenConfig.XS.max ? 15 : 30}
      >
        {data.map((item, index) => (
          <>
            <PartnerCardComponent item={item} key={index} />
          </>
        ))}
      </CarouselNext>
    </div>
  )
}

const StyledWrapper = styled.section`
  position: relative;
  background-color: var(--color-danger-100);
  margin-top: ${pxToRem(-50)};
  clip-path: polygon(100% 5%, 0% 1%, 0% 95%, 100% 100%);

  & > * {
    position: relative;
    z-index: 2;
  }

  .kiss-Homepage__partner__container {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${pxToRem(20)};
    padding: ${pxToRem(100)} 0 ${pxToRem(100)} 0;
  }

  .k-CarouselNext--showOtherPages .k-CarouselNext__inner {
    --container-padding: ${pxToRem(50)};

    @media ${mq.tabletAndDesktop} {
      --container-padding: ${pxToRem(150)};
    }
  }

  .k-CarouselNext__page {
    height: 100% !important;
  }
`

export default PartnerCarousel
