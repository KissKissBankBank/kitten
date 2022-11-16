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
  margin-top: ${pxToRem(100)};

  svg {
    right: 0;
  }
  .kiss-Manifesto__defense__img {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
  
    img {
      display: block;
      object-fit: cover;
      object-position: center;
    }

    svg {
      position: absolute;
      margin-top: ${pxToRem(700)};
      margin-left: ${pxToRem(220)};
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
  }

  .kiss-Manifesto__defense__block {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: ${pxToRem(20)};

    .k-Button {
      margin-top: ${pxToRem(20)};
    }
  }
`

const Defense = () => (
  <DefenseWrapper>
    <MusicIllustration />
    <div className="kiss-Manifesto__defense__img">
      <img alt="" src="/kitten-3.jpg" />
    </div>
    <div className="kiss-Manifesto__defense__background">
      <div className="kiss-Manifesto__defense__container">
        <Title cssColor="var(--color-grey-000)" tag="h2" modifier="primary" noMargin>
          Pour un monde juste où chacun·e peut libérer sa créativité.
        </Title>
        <div className="kiss-Manifesto__defense__block">
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
