import React from 'react'
import styled from 'styled-components'
import { ProjectCard, Text, Title, pxToRem, mq, LongArrowIcon } from 'kitten'

const EngagementsWrapper = styled.section`
  color: var(--color-grey-000);
  background-color: var(--color-grey-900);

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};
  padding: 0 ${pxToRem(20)};
  overflow: hidden;

  @media ${mq.tabletAndDesktop} {
    padding: 0 ${pxToRem(120)} 0;
    gap: ${pxToRem(100)};
  }

  .kiss-Homepage__engagements__blockWrapper {
    position: relative;

    .kiss-Homepage__engagements__graphic {
      position: absolute;
      z-index: 1;
      @media ${mq.mobile} {
        display: none;
      }
    }

    .kiss-Homepage__engagements__heart {
      width: ${pxToRem(450)};
      transform: rotate(-30deg);
      top: 55%;
      left: -12%;
    }
    .kiss-Homepage__engagements__bolt {
      height: ${pxToRem(580)};
      transform: rotate(-15deg);
      top: 5%;
      right: -20%;
    }
    .kiss-Homepage__engagements__invader {
      width: ${pxToRem(410)};
      transform: rotate(-15deg);
      top: -7%;
      left: -15%;
    }
  }

  .kiss-Homepage__engagements__block {
    position: relative;
    z-index: 2;
    .kiss-Homepage__engagements__cards {
      display: grid;
      gap: ${pxToRem(30)};

      @media ${mq.tabletAndDesktop} {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`

const EngagementBlock = () => {
  return (
    <div className="kiss-Homepage__engagements__block">
      <Title
        modifier="secondary"
        noMargin
        cssColor="inherit"
        className="k-u-margin-bottom-single"
      >
        Luttons contre les discriminations
      </Title>
      <div className="k-u-flex k-u-flex-justifyContent-sb k-u-margin-bottom-triple">
        <Text cssColor="inherit" size="small">
          Il n’y a pas de monde juste blablabla bla bla bla.
        </Text>
        <Text
          cssColor="inherit"
          size="small"
          className="k-u-hidden@xs-down k-u-link k-u-link-background1 k-u-inlineFlex k-u-flex-alignItems-center k-u-weight-500 k-u-flex-gap-noneHalf"
          tag="a"
          href="#1"
        >
          <LongArrowIcon color="currentColor" height="16" />
          Voir plus de projets engagés
        </Text>
      </div>

      <div className="kiss-Homepage__engagements__cards">
        <ProjectCard
          aria-label="The Office, la série culte décortiquée par S!CK"
          href="//www.kisskissbankbank.com"
          colorMode="dark"
          hoverableTitle
          imageProps={{
            alt: '',
            src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
          }}
        >
          <ProjectCard.Sticker className="k-u-transform-capitalize k-u-hidden@xs-down">
            Prolongation
          </ProjectCard.Sticker>
          <ProjectCard.Title>
            The Office, la série culte
          </ProjectCard.Title>
          <ProjectCard.Line>
            <Text size="micro">
              par <strong className="k-u-weight-700">Bidules</strong>
            </Text>
          </ProjectCard.Line>
          <ProjectCard.ItemsLine>
            <ProjectCard.Item>
              <Text className="k-u-ellipsis" size="small" weight="700">
                134
              </Text>
              <Text className="k-u-ellipsis" size="micro">
                contributeurs
              </Text>
            </ProjectCard.Item>
            <ProjectCard.Item>
              <Text className="k-u-ellipsis" size="small" weight="700">
                7 jours
              </Text>
              <Text className="k-u-ellipsis" size="micro">
                restants
              </Text>
            </ProjectCard.Item>
            <ProjectCard.Item>
              <Text className="k-u-nowrap" size="small" weight="700">
                9 930 €
              </Text>
              <Text className="k-u-nowrap" size="micro">
                sur 12 000 €
              </Text>
            </ProjectCard.Item>
          </ProjectCard.ItemsLine>
          <ProjectCard.Progress
            aria-label="Progrès de la campagne"
            value="55"
          />
        </ProjectCard>
        <ProjectCard
          aria-label="The Office, la série culte décortiquée par S!CK"
          href="//www.kisskissbankbank.com"
          colorMode="dark"
          hoverableTitle
          imageProps={{
            alt: '',
            src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
          }}
          videoProps={{}}
          videoSources={[]}
        >
          <ProjectCard.Sticker className="k-u-transform-capitalize k-u-hidden@xs-down">
            Prolongation
          </ProjectCard.Sticker>
          <ProjectCard.Title>
            The Office, la série culte qui fait peur
          </ProjectCard.Title>
          <ProjectCard.Line>
            <Text size="micro">
              par <strong className="k-u-weight-700">Bidules</strong>
            </Text>
          </ProjectCard.Line>
          <ProjectCard.ItemsLine>
            <ProjectCard.Item>
              <Text className="k-u-ellipsis" size="small" weight="700">
                134
              </Text>
              <Text className="k-u-ellipsis" size="micro">
                contributeurs
              </Text>
            </ProjectCard.Item>
            <ProjectCard.Item>
              <Text className="k-u-ellipsis" size="small" weight="700">
                7 jours
              </Text>
              <Text className="k-u-ellipsis" size="micro">
                restants
              </Text>
            </ProjectCard.Item>
            <ProjectCard.Item>
              <Text className="k-u-nowrap" size="small" weight="700">
                9 930 €
              </Text>
              <Text className="k-u-nowrap" size="micro">
                sur 12 000 €
              </Text>
            </ProjectCard.Item>
          </ProjectCard.ItemsLine>
          <ProjectCard.Progress
            aria-label="Progrès de la campagne"
            value="55"
          />
        </ProjectCard>
        <ProjectCard
          aria-label="The Office, la série culte décortiquée par S!CK"
          href="//www.kisskissbankbank.com"
          colorMode="dark"
          hoverableTitle
          imageProps={{
            alt: '',
            src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
          }}
          videoProps={{}}
          videoSources={[]}
        >
          <ProjectCard.Sticker className="k-u-transform-capitalize k-u-hidden@xs-down">
            Prolongation
          </ProjectCard.Sticker>
          <ProjectCard.Title>
            The Office,
          </ProjectCard.Title>
          <ProjectCard.Line>
            <Text size="micro">
              par <strong className="k-u-weight-700">Bidules</strong>
            </Text>
          </ProjectCard.Line>
          <ProjectCard.ItemsLine>
            <ProjectCard.Item>
              <Text className="k-u-ellipsis" size="small" weight="700">
                134
              </Text>
              <Text className="k-u-ellipsis" size="micro">
                contributeurs
              </Text>
            </ProjectCard.Item>
            <ProjectCard.Item>
              <Text className="k-u-ellipsis" size="small" weight="700">
                7 jours
              </Text>
              <Text className="k-u-ellipsis" size="micro">
                restants
              </Text>
            </ProjectCard.Item>
            <ProjectCard.Item>
              <Text className="k-u-nowrap" size="small" weight="700">
                9 930 €
              </Text>
              <Text className="k-u-nowrap" size="micro">
                sur 12 000 €
              </Text>
            </ProjectCard.Item>
          </ProjectCard.ItemsLine>
          <ProjectCard.Progress
            aria-label="Progrès de la campagne"
            value="55"
          />
        </ProjectCard>
      </div>
    </div>
  )
}

const Engagements = () => {
  return (
    <EngagementsWrapper>
      <div className="kiss-Homepage__engagements__blockWrapper">
        <svg
          className="kiss-Homepage__engagements__graphic kiss-Homepage__engagements__heart"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 148 127"
        >
          <path
            fill="#2d2d2d"
            d="M37.07.1A37.12 37.12 0 0 0 10.2 62.8l63.58 63.41 61.65-61.84a37 37 0 0 0 11.92-27.31 37.13 37.13 0 0 0-73.7-6.28A37.09 37.09 0 0 0 37.07.1Z"
          />
        </svg>
        <EngagementBlock />
      </div>
      <div className="kiss-Homepage__engagements__blockWrapper">
        <svg
          className="kiss-Homepage__engagements__graphic kiss-Homepage__engagements__bolt"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 462 587"
        >
          <path
            fill="#2d2d2d"
            d="M461.97 29.06 244.17 0 0 365.06h141.38L82.52 586.13l322.5-322.06H251.58l210.4-235.01Z"
          />
        </svg>
        <EngagementBlock />
      </div>
      <div className="kiss-Homepage__engagements__blockWrapper">
        <svg
          className="kiss-Homepage__engagements__graphic kiss-Homepage__engagements__invader"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 107 125"
        >
          <path
            fill="#2d2d2d"
            d="M106.17 18.72a61.83 61.83 0 1 0 0 87.45L62.44 62.45l43.73-43.73Z"
          />
        </svg>
        <EngagementBlock />
      </div>
    </EngagementsWrapper>
  )
}

export default Engagements
