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

  @media ${mq.tabletAndDesktop} {
    padding: ${pxToRem(200)} ${pxToRem(120)} 0;
    gap: ${pxToRem(100)};
  }

  .kiss-Homepage__engagements__block {
    .kiss-Homepage__engagements__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: ${pxToRem(30)};
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
          Il n’y a pas de monde juste si Joachim s’en va.
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
            The Office, la série culte décortiquée par S!CK
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
          colorMode="dark"
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
            The Office, la série culte décortiquée par S!CK
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
          colorMode="dark"
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
            The Office, la série culte décortiquée par S!CK
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
      <EngagementBlock />
      <EngagementBlock />
      <EngagementBlock />
    </EngagementsWrapper>
  )
}

export default Engagements
