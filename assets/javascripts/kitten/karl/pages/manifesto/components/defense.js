import React from 'react'
import {
  pxToRem,
  Title,
  Button,
  Text,
  MusicIllustration,
  ScreenConfig,
} from 'kitten'
import styled from 'styled-components'

const DefenseWrapper = styled.section`
  margin-top: ${pxToRem(160)};

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    margin-top: ${pxToRem(80)};
  }

  svg {
    right: 0;
    position: absolute;
    margin-right: ${pxToRem(220)};
  }

  .kiss-Manifesto__defense__img {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    padding-top: ${pxToRem(150)};
  
    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      padding-top: ${pxToRem(200)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      padding-top: ${pxToRem(250)};
    }

    img {
      width: 100%;
      display: block;
      object-fit: cover;
      object-position: center;
    }
  }

  .kiss-Manifesto__defense__background {
    background-color: var(--color-danger-700);
  }

  .kiss-Manifesto__defense__container {
    max-width: ${pxToRem(1440)};
    display: flex;
    gap: ${pxToRem(40)};
    padding: ${pxToRem(120)} ${pxToRem(100)} ${pxToRem(200)} ${pxToRem(100)};

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      flex-direction: column;
      padding: ${pxToRem(70)} ${pxToRem(40)} ${pxToRem(100)} ${pxToRem(40)};
      text-align: center;
    }
  }

  .kiss-Manifesto__defense__content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: ${pxToRem(20)};

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      align-items: center;
    }

    .k-Button {
      margin-top: ${pxToRem(20)};
    }
  }
`

const Defense = () => (
  <DefenseWrapper>
    <MusicIllustration />
    <div className="kiss-Manifesto__defense__img">
      <img alt="" src="manifeste-3.png" />
    </div>
    <div className="kiss-Manifesto__defense__background">
      <div className="kiss-Manifesto__defense__container">
        <Title cssColor="var(--color-grey-000)" tag="h2" modifier="primary" noMargin>
          Pour un monde juste où chacun·e peut libérer sa créativité.
        </Title>
        <div className="kiss-Manifesto__defense__content">
          <Text cssColor="var(--color-grey-000)" size="huge" className="k-u-padding-right-decuple@sm-up">
            Il n’y a pas de monde juste sur une planète qui meurt.
          </Text>
          <Text cssColor="var(--color-grey-000)" size="huge">
            Dans un monde où les majors et grands groupes de l’industrie culturelle construisent
            des quasi-monopoles, KissKissBankBank est né pour permettre à chacun·e de créer
            librement. En s’affranchissant des circuits de financement classiques, des médias,
            des films, des albums, des livres, ont pu voir le jour — en toute indépendance.
          </Text>
          <Text cssColor="var(--color-grey-000)" size="huge">
            Parce que la création est le cœur battant de nos sociétés, parce que la culture est
            fondamentale et qu’elle résorbe les inégalités, nous serons toujours un soutien majeur
            de toutes celles et ceux qui créent, qui libèrent leur créativité.
          </Text>
          <Button modifier="copper">Créer mon projet</Button>
        </div>
        
      </div>
    </div>
  </DefenseWrapper>
)

export default Defense
