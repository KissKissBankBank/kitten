import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { ListTable } from './index'
import {
  ScreenConfig,
  VisuallyHidden,
  pxToRem,
  COLORS,
  TYPOGRAPHY,
  StatusWithBullet,
  Text,
  Checkbox,
  DropdownSelect,
} from 'kitten'
import { DocsPage } from 'storybook/docs-page'

import { ToggleableStory } from './stories/toggleable'

export default {
  title: 'Structure/Tables/ListTable',
  component: ListTable,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ListTable" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
}

const ListTableStyles = createGlobalStyle`
  #CustomListTable {
    ${TYPOGRAPHY.fontStyles['400']}

    .k-ListTable__HeaderList {
      height: ${pxToRem(50)};
      background-color: ${COLORS.background3};
      color: ${COLORS.font1};
    }
  }

  .customCol_1 {
    text-align: center;

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      flex-basis: ${pxToRem(40)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      flex-basis: ${pxToRem(60)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      flex-basis: ${pxToRem(90)};
    }
  }

  .customCol_2 {
    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      flex-basis: calc(90% - ${pxToRem(150)});
    }
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      flex-basis: calc(50% - ${pxToRem(170)});
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      flex-basis: 15%;
    }
  }

  .customCol_3 {
    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      display: none;
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      flex-basis: 25%;
    }
  }

  .customCol_4 {
    text-align: right;

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      flex-basis: 110px;
    }
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      flex-basis: 110px;
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      flex-basis: 8%;
    }
  }
  .customCol_5 {
    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      flex-basis: 20%;
    }
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      flex-basis: 20%;
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      flex-basis: 15%;
    }
  }
  .customCol_6 {
    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      display: none;
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      flex-basis: calc(33% - ${pxToRem(200)});
    }
  }
  .customCol_7 {
    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      display: none;
    }
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      flex-basis: 20%;
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      flex-basis: 12%;
    }
  }
`

export const Default = () => (
  <>
    <ListTableStyles />
    <ListTable id="CustomListTable">
      <ListTable.Header
        className="customHeaderClass k-u-weight-500"
        listProps={{ className: 'customListClass' }}
      >
        <ListTable.Col className="customCol_1">
          <VisuallyHidden>Sélection</VisuallyHidden>
          <Checkbox aria-label="Sélectionner toutes les contributions de la liste" />
        </ListTable.Col>

        <ListTable.Col className="customCol_2">
          <Text
            weight="500"
            color="font1"
            size="small"
            className="k-u-hidden@s-down k-u-hidden@m"
          >
            Date
          </Text>
          <Text
            weight="500"
            color="font1"
            size="small"
            className="k-u-hidden@l-up"
          >
            Contributeur
          </Text>
        </ListTable.Col>

        <ListTable.Col className="customCol_3">
          <Text weight="500" color="font1" size="small">
            Contributeur
          </Text>
        </ListTable.Col>

        <ListTable.Col className="customCol_4">
          <Text weight="500" color="font1" size="small">
            Montant
          </Text>
        </ListTable.Col>

        <ListTable.Col className="customCol_5">
          <Text weight="500" color="font1" size="small">
            Statut
          </Text>
        </ListTable.Col>

        <ListTable.Col className="customCol_6">
          <Text weight="500" color="font1" size="small">
            Mode de livraison
          </Text>
        </ListTable.Col>

        <ListTable.Col className="customCol_7">
          <Text weight="500" color="font1" size="small">
            Statut livraison
          </Text>
        </ListTable.Col>
      </ListTable.Header>

      <ListTable.Body>
        <ListTable.Row isHighlighted>
          <ListTable.Col className="customCol_1">
            <VisuallyHidden>
              <h2>Contribution #888888 par Prénom NOM le 12 septembre 2019</h2>
              <button>Voir plus d'informations sur cette contribution</button>
            </VisuallyHidden>
            <Checkbox aria-label="Sélectionner toutes les contributions de la liste" />
          </ListTable.Col>

          <ListTable.Col className="customCol_2">
            <div>
              <Text size="small" weight="500">
                <time dateTime="2019-09-12">12/09/2019</time>
              </Text>
              <br />
              <Text size="micro" className="k-u-hidden@m-down" lineHeight="1">
                #88888888
              </Text>
              <Text size="micro" className="k-u-hidden@l-up" lineHeight="1">
                Prénom NOM
              </Text>
              <br />
              <Text
                size="micro"
                weight="500"
                lineHeight="1"
                as="a"
                href="#"
                className="k-u-link k-u-link-primary1"
              >
                Détails
              </Text>
            </div>
          </ListTable.Col>

          <ListTable.Col className="customCol_3">
            <div>
              <Text weight="700">Prénom Nom</Text>
              <br />
              <Text size="micro" weight="400">
                Prenom-Nom
              </Text>
            </div>
          </ListTable.Col>

          <ListTable.Col className="customCol_4">
            <Text size="small" weight="500">
              72&nbsp;€
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_5">
            <StatusWithBullet statusType="success">Valid</StatusWithBullet>
          </ListTable.Col>

          <ListTable.Col className="customCol_6">
            <Text size="small" weight="500">
              Livraison
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_7">
            <DropdownSelect
              id="DropdownSelect_1"
              hideLabel
              labelText="Sélectionnez le statut de livraison"
              options={[
                { label: 'À expédier', value: 1 },
                { label: 'Expédié', value: 2 },
              ]}
            />
          </ListTable.Col>
        </ListTable.Row>

        <ListTable.Row
          className="customRowClass"
          listProps={{ className: 'customListClass' }}
        >
          <ListTable.Col className="customCol_1">
            <VisuallyHidden>
              <h2>Contribution #44654 par Prénom NOM le 12 septembre 2019</h2>
              <button>Voir plus d'informations sur cette contribution</button>
            </VisuallyHidden>
            <Checkbox aria-label="Sélectionner toutes les contributions de la liste" />
          </ListTable.Col>

          <ListTable.Col className="customCol_2">
            <div>
              <Text size="small" weight="500">
                <time dateTime="2019-09-12">12/09/2019</time>
              </Text>
              <br />
              <Text size="micro" className="k-u-hidden@m-down" lineHeight="1">
                #44654
              </Text>
              <Text size="micro" className="k-u-hidden@l-up" lineHeight="1">
                Prénom NOM
              </Text>
              <br />
              <Text
                size="micro"
                weight="500"
                lineHeight="1"
                as="a"
                href="#"
                className="k-u-link k-u-link-primary1"
              >
                Détails
              </Text>
            </div>
          </ListTable.Col>

          <ListTable.Col className="customCol_3">
            <div>
              <Text weight="700">Prénom Nom</Text>
              <br />
              <Text size="micro">Prenom-Nom</Text>
            </div>
          </ListTable.Col>

          <ListTable.Col className="customCol_4">
            <Text size="small" weight="500">
              72&nbsp;€
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_5">
            <StatusWithBullet statusType="warning">Invalid</StatusWithBullet>
          </ListTable.Col>

          <ListTable.Col className="customCol_6">
            <Text size="small" weight="500">
              Livraison
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_7">
            <DropdownSelect
              id="DropdownSelect_2"
              hideLabel
              labelText="Sélectionnez le statut de livraison"
              options={[
                { label: 'À expédier', value: 1 },
                { label: 'Expédié', value: 2 },
              ]}
            />
          </ListTable.Col>
        </ListTable.Row>
      </ListTable.Body>
    </ListTable>
  </>
)

export const Toggleable = () => <ToggleableStory />

Toggleable.decorators = [
  story => <div className="story-Container">{story()}</div>,
]
