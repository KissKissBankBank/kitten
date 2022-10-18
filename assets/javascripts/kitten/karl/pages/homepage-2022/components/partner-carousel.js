import React from 'react'
import { pxToRem, Title, Text, Button, AirplaneIconNext, mq } from 'kitten'
import styled from 'styled-components'

const PartnersWrapper = styled.section`
  position: relative;
  background-color: var(--color-danger-100);
  color: var(--color-grey-900);
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(30)};
  padding: ${pxToRem(70)} ${pxToRem(20)} ${pxToRem(70)};
  clip-path: polygon(100% 0%, 0% 5%, 0% 100%, 100% 95%);

  @media ${mq.tabletAndDesktop} {
    gap: ${pxToRem(50)};
    padding: ${pxToRem(100)} ${pxToRem(260)} ${pxToRem(100)};
  }

  .kiss-Homepage__partners__cards {
    display: grid;
    gap: ${pxToRem(10)};
    grid-template-columns: repeat(2, 1fr);

    @media ${mq.tabletAndDesktop} {
      gap: ${pxToRem(30)};
      grid-template-columns: repeat(4, 1fr);
    }
    .kiss-Homepage__partners__card {
      background-color: var(--color-grey-000);
      border-radius: var(--border-radius-m);
      box-shadow: var(--box-shadow-m);
      padding: ${pxToRem(10)};
      aspect-ratio: 22 / 15;

      img,
      svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }
`

const CardComponent = ({ item }) => (
  <PartnerCard
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
  </PartnerCard>
)


const PartnerCarousel = () => {
  return (
    <PartnersWrapper>
      <Title modifier="secondary">
      Les entreprises s’engagent au service de la réussite des projets
      </Title>

      <div className="k-u-margin-top-triple@s-up">
        <Text
          size="huge"
          weight="700"
          className="k-u-block k-u-margin-horizontal-auto k-u-margin-bottom-double"
        >
          Vous êtes une entreprise ?
        </Text>
        <Button modifier="boron" size="small">
          Devenons partenaires
        </Button>
      </div>
    </PartnersWrapper>
  )
}

export default PartnerCarousel
