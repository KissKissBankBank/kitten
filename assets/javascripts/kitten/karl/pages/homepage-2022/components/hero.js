import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  pxToRem,
  mq,
  Title,
  HEADER_HEIGHT,
  Paragraph,
  Button,
  domElementHelper,
} from 'kitten'

const HeroWrapper = styled.section`
  width: 100vw;
  position: relative;
  overflow: hidden;
  background-color: var(--color-grey-200);

  @media ${mq.mobileAndTablet} {
    min-height: calc(100vh - ${pxToRem(HEADER_HEIGHT)});
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);

    .kiss-Homepage__hero__main {
      box-sizing: border-box;
      height: calc(100vh - ${pxToRem(HEADER_HEIGHT * 2)});
      position: fixed;
      padding: ${pxToRem(20)};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: ${pxToRem(20)};
      z-index: 3;

      p span {
        background-color: var(--color-grey-200);
      }
    }

    .kiss-Homepage__hero__grid--mobile {
      position: fixed;
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
    min-height: calc(50vw - ${pxToRem(HEADER_HEIGHT)});
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);

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

    .kiss-Homepage__hero__grid--desktop {
      top: min(50vw, calc(var(--hero-scrollPosition, 0) / 2 * -1px));
      right: 0;
      width: 50vw;
      height: 50vw;
      display: grid;
      position: fixed;
      gap: ${pxToRem(10)};
      box-sizing: border-box;
      padding: ${pxToRem(10)};
      grid-template-rows: repeat(5, 1fr);
      grid-template-columns: repeat(5, 1fr);
    }

    .a-1 {
      transform: translateX(-50%);
    }
  }

  .kiss-Homepage__hero__grid--mobile,
  .kiss-Homepage__hero__grid--desktop {
    > div {
      grid-column-end: span 1;
      overflow: hidden;
    }

    > div[class*='a-'] {
      grid-row: 1;
    }
    > div[class*='b-'] {
      grid-row: 2;
    }
    > div[class*='c-'] {
      grid-row: 3;
    }
    > div[class*='d-'] {
      grid-row: 4;
    }
    > div[class*='e-'] {
      grid-row: 5;
    }
    > div[class*='f-'] {
      grid-row: 6;
    }
    > div[class*='g-'] {
      grid-row: 7;
    }
    > div[class*='h-'] {
      grid-row: 8;
    }

    > div[class*='-1'] {
      grid-column: 1;
    }
    > div[class*='-2'] {
      grid-column: 2;
    }
    > div[class*='-3'] {
      grid-column: 3;
    }
    > div[class*='-4'] {
      grid-column: 4;
    }
    > div[class*='-5'] {
      grid-column: 5;
    }
    > div[class*='-6'] {
      grid-column: 6;
    }

    > div[class*='nw'] {
      border-top-left-radius: 50%;
    }

    > div[class*='sw'] {
      border-bottom-left-radius: 50%;
    }

    > div[class*='ne'] {
      border-top-right-radius: 50%;
    }

    > div[class*='se'] {
      border-bottom-right-radius: 50%;
    }

    img,
    svg {
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      object-position: center;
      display: block;
    }
  }
`

const useScrollPosition = () => {
  if (!domElementHelper.canUseDom()) return

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}

const Hero = () => {
  const scrollPosition = useScrollPosition()

  return (
    <HeroWrapper style={{ '--hero-scrollPosition': scrollPosition }}>
      <div className="kiss-Homepage__hero__main">
        <Title noMargin modifier="secondary">
          Donnons vie <br className="k-u-hidden@l-up" />
          à votre projet <br className="k-u-hidden@l-up" />
          grâce au financement <br className="k-u-hidden@l-up" />
          par la communauté.
        </Title>
        <Paragraph noMargin className="k-u-padding-right-decuple@s-up">
          <span>
            Nous avons déjà aidé 26 526 projets de{' '}
            <br className="k-u-hidden@l-up" />
            créateurs et entrepreneurs à voir le jour.
            <br />
            Et si c’était votre tour&nbsp;?
          </span>
        </Paragraph>
        <Button modifier="helium">Créer mon projet</Button>
      </div>
      <div className="kiss-Homepage__hero__grid--desktop k-u-hidden@m-down">
        <div className="a-1 sw ne">
          <img alt="" src="/kitten-1.jpg" />
        </div>
        <div className="a-2">
          <HeroPacman color="var(--color-success-500)" rotation={-90} />
        </div>
        <div className="a-3 ne">
          <img alt="" src="/kitten-2.jpg" />
        </div>
        <div className="a-4 se nw">
          <img alt="" src="/kitten-3.jpg" />
        </div>
        <div className="a-5">
          <HeroHeart color="var(--color-danger-500)" rotation={-90} />
        </div>
        <div className="b-1 sw ne">
          <img alt="" src="/kitten-4.jpg" />
        </div>
        <div className="b-2 se nw">
          <img alt="" src="/kitten-5.jpg" />
        </div>
        <div className="b-3 sw">
          <img alt="" src="/kitten-6.jpg" />
        </div>
        <div className="b-4 ne">
          <img alt="" src="/kitten-7.jpg" />
        </div>
        <div className="b-5 nw">
          <img alt="" src="/kitten-8.jpg" />
        </div>
        <div className="c-1">
          <HeroHeart color="var(--color-danger-500)" rotation={180} />
        </div>
        <div className="c-2 sw ne">
          <img alt="" src="/kitten-9.jpg" />
        </div>
        <div className="c-3">
          <HeroPacman color="var(--color-primary-500)" rotation={0} />
        </div>
        <div className="c-4 sw">
          <img alt="" src="/kitten-0.jpg" />
        </div>
        <div className="c-5">
          <img alt="" src="/kitten-1.jpg" />
        </div>
        <div className="d-1 sw ne">
          <img alt="" src="/kitten-2.jpg" />
        </div>

        <div className="d-3 sw ne">
          <img alt="" src="/kitten-3.jpg" />
        </div>
        <div className="d-4 se nw">
          <img alt="" src="/kitten-4.jpg" />
        </div>
        <div className="d-5">
          <HeroHeart color="var(--color-primary-500)" rotation={0} />
        </div>

        <div className="e-2 sw ne">
          <img alt="" src="/kitten-5.jpg" />
        </div>
        <div className="e-3">
          <HeroPacman color="var(--color-success-500)" rotation={90} />
        </div>
        <div className="e-4 se nw">
          <img alt="" src="/kitten-6.jpg" />
        </div>
        <div className="e-5 nw">
          <img alt="" src="/kitten-7.jpg" />
        </div>
      </div>

      <div className="kiss-Homepage__hero__grid--mobile k-u-hidden@l-up">
        <div className="a-1">
          <HeroPacman color="var(--color-primary-500)" rotation={90} />
        </div>
        <div className="a-2 sw">
          <img alt="" src="/kitten-8.jpg" />
        </div>
        <div className="a-3 ne">
          <img alt="" src="/kitten-9.jpg" />
        </div>
        <div className="a-4">
          <HeroHeart color="var(--color-danger-500)" />
        </div>
        <div className="a-5 sw ne">
          <img alt="" src="/kitten-0.jpg" />
        </div>
        <div className="a-6">
          <HeroPacman color="var(--color-primary-500)" />
        </div>
        <div className="b-1 sw ne">
          <img alt="" src="/kitten-1.jpg" />
        </div>
        <div className="b-3">
          <HeroHeart color="var(--color-primary-500)" rotation={-90} />
        </div>
        <div className="b-4 sw ne">
          <img alt="" src="/kitten-2.jpg" />
        </div>
        <div className="b-6 se nw">
          <img alt="" src="/kitten-3.jpg" />
        </div>
        <div className="c-5 sw ne">
          <img alt="" src="/kitten-4.jpg" />
        </div>
        <div className="c-6">
          <HeroPacman color="var(--color-success-500)" rotation={-90} />
        </div>

        <div className="e-6 nw">
          <img alt="" src="/kitten-5.jpg" />
        </div>
        <div className="f-5 sw">
          <img alt="" src="/kitten-6.jpg" />
        </div>
        <div className="g-3 sw ne">
          <img alt="" src="/kitten-7.jpg" />
        </div>
        <div className="g-4">
          <HeroPacman color="var(--color-primary-500)" rotation={180} />
        </div>
        <div className="g-5 se nw">
          <img alt="" src="/kitten-8.jpg" />
        </div>
        <div className="h-2 ne">
          <img alt="" src="/kitten-9.jpg" />
        </div>
        <div className="h-3">
          <HeroHeart color="var(--color-danger-500)" />
        </div>
        <div className="h-4 ne">
          <img alt="" src="/kitten-0.jpg" />
        </div>
        <div className="h-5 ne sw">
          <img alt="" src="/kitten-1.jpg" />
        </div>
        <div className="h-6">
          <HeroHeart color="var(--color-success-500)" rotation={-90} />
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroHeart = ({ color, rotation = 0 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
    <path
      transform={`rotate(${rotation})`}
      transform-origin="center center"
      fill={color}
      d="M63.38 11.29A37.12 37.12 0 0 0 .06 36.62l.12 89.8 87.31-.13a37 37 0 0 0 27.75-10.89 37.13 37.13 0 0 0-47.67-56.55 37.09 37.09 0 0 0-4.19-47.56Z"
    />
  </svg>
)

const HeroPacman = ({ color, rotation = 0 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 125">
    <path
      transform={`rotate(${rotation})`}
      transform-origin="center center"
      fill={color}
      d="M18.72 18.72a61.83 61.83 0 1 1 0 87.45l43.73-43.72-43.73-43.73Z"
    />
  </svg>
)

export default Hero
