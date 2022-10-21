import React from 'react'
import styled from 'styled-components'
import {
  pxToRem,
  mq,
  Title,
  HEADER_HEIGHT,
  Text,
  Button,
} from 'kitten'

const HeroWrapper = styled.section`
  display: flex;
  max-width: ${pxToRem(1440)};
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media ${mq.mobileAndTablet} {

    .kiss-Homepage__hero__main {
      box-sizing: border-box;
      height: calc(100vh - ${pxToRem(HEADER_HEIGHT * 2)});
      padding: ${pxToRem(20)};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: ${pxToRem(20)};    }

    .kiss-Homepage__hero__grid--mobile {
      box-sizing: border-box;
      top: 0;
      left: -10vw;
      width: calc(100vw * 6 / 5);
      height: 100vh;
      display: grid;
      gap: ${pxToRem(5)};
      padding: ${pxToRem(5)};
      grid-template-rows: repeat(3, auto) 1fr repeat(4, auto);
      grid-template-columns: repeat(6, 1fr);
      z-index: 2;
    }
  }

  @media ${mq.desktop} {
    .kiss-Homepage__hero__main {
      box-sizing: border-box;
      width: 50vw;
      height: calc(0.85 * (50vw - ${pxToRem(HEADER_HEIGHT)}));
      padding: 2vw calc(50vw * 0.125);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: ${pxToRem(20)};
    }

    .kiss-Homepage__hero__img {
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
      display: block;
    
      img {
        display: block;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`

const Hero = () => {

  return (
    <HeroWrapper>
      <div className="kiss-Homepage__hero__main">
        <Title noMargin modifier="secondary">
          Financez vos projets grâce <br className="k-u-hidden@l-up" />
          à votre communauté et <br className="k-u-hidden@l-up" />
          nos 2,6 millions de <br className="k-u-hidden@l-up" />
          membres.
        </Title>
        <Text size="large" className="k-u-padding-right-decuple@s-up">
          <span>
            Nous avons déjà aidé 26 526 projets de{' '}
            <br className="k-u-hidden@l-up" />
            créateurs et entrepreneurs à voir le jour.
            Et si c’était votre tour&nbsp;?
          </span>
        </Text>
        <Button modifier="helium">Voir les offres</Button>
      </div>
      <div className="kiss-Homepage__hero__img">
        <img
          alt=""
          src="https://source.unsplash.com/random/790x638?kitten,1"
          width="790"
          height="638"
        />
      </div>
    </HeroWrapper>
  )
}

export default Hero
