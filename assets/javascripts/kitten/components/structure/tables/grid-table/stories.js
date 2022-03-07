import React from 'react'
import styled from 'styled-components'
import { GridTable } from './index'
import {
  mq,
  VisuallyHidden,
  pxToRem,
  StatusWithBullet,
  Text,
  Checkbox,
  DropdownSelect,
} from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Structure/Tables/GridTable',
  component: GridTable,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="GridTable" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
}

const StyledGridTable = styled(GridTable)`
  width: 100%;

  .k-GridTable {
    @media ${mq.mobile} {
      grid-template-columns: ${pxToRem(50)} repeat(3, auto);
    }
    @media ${mq.tablet} {
      grid-template-columns: ${pxToRem(50)} repeat(4, auto);
    }
    @media ${mq.desktop} {
      grid-template-columns:
        ${pxToRem(60)}
        2fr
        3fr
        repeat(calc(var(--col-number) - 3), 1fr);
    }
  }

  .customCol_0 {
    width: ${pxToRem(60)};
    display: flex;
    justify-content: center;

    .k-Form-Checkbox__input {
      margin: 0;
    }
  }

  .customCol_1,
  .customCol_2,
  .customCol_3,
  .customCol_4,
  .customCol_5,
  .customCol_6,
  .customCol_7 {
    padding-left: ${pxToRem(15)};
    padding-right: ${pxToRem(15)};
  }

  .customCol_1 {
    padding-left: 0;
  }

  .customCol_2 {
    @media ${mq.mobileAndTablet} {
      display: none;
    }
  }

  .customCol_3 {
  }

  .customCol_4 {
    @media ${mq.mobile} {
      padding-right: ${pxToRem(20)};

      .k-StatusWithBullet__bullet {
        margin: 0;
      }
      .k-StatusWithBullet__status {
        clip: rect(0 0 0 0);
        clip-path: inset(100%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }
    }
  }

  .customCol_5 {
    @media ${mq.tablet} {
      padding-right: ${pxToRem(40)};
    }

    @media ${mq.mobile} {
      display: none;
    }
  }

  .customCol_6 {
    @media ${mq.mobileAndTablet} {
      display: none;
    }
  }

  .customCol_7 {
    padding-right: ${pxToRem(40)};
    min-width: 1200px;

    @media ${mq.mobileAndTablet} {
      display: none;
    }
  }
`

export const Default = () => (
  <>
    <StyledGridTable id="CustomGridTable" scrollable>
      <GridTable.Header
        className="customHeaderClass k-u-weight-regular"
        listProps={{ className: 'customListClass' }}
      >
        <GridTable.Col className="customCol_1">
          <VisuallyHidden>Sélection</VisuallyHidden>
          <Checkbox aria-label="Sélectionner toutes les contributions de la liste" />
        </GridTable.Col>

        <GridTable.Col className="customCol_2">
          <Text
            weight="regular"
            size="tiny"
            className="k-u-hidden@s-down k-u-hidden@m"
          >
            Date
          </Text>
          <Text weight="regular" size="tiny" className="k-u-hidden@l-up">
            Contributeur
          </Text>
        </GridTable.Col>

        <GridTable.Col className="customCol_3">
          <Text weight="regular" size="tiny">
            Contributeur
          </Text>
        </GridTable.Col>

        <GridTable.Col className="customCol_4">
          <Text weight="regular" size="tiny">
            Montant
          </Text>
        </GridTable.Col>

        <GridTable.Col className="customCol_5">
          <Text weight="regular" size="tiny">
            Statut
          </Text>
        </GridTable.Col>

        <GridTable.Col className="customCol_6">
          <Text weight="regular" size="tiny">
            Mode de livraison
          </Text>
        </GridTable.Col>

        <GridTable.Col className="customCol_7">
          <Text weight="regular" size="tiny">
            Statut livraison
          </Text>
        </GridTable.Col>
      </GridTable.Header>

      <GridTable.Body>
        <GridTable.Row isHighlighted>
          <GridTable.Col className="customCol_1">
            <VisuallyHidden>
              <h2>Contribution #888888 par Prénom NOM le 12 septembre 2019</h2>
              <button>Voir plus d'informations sur cette contribution</button>
            </VisuallyHidden>
            <Checkbox aria-label="Sélectionner toutes les contributions de la liste" />
          </GridTable.Col>

          <GridTable.Col className="customCol_2">
            <div>
              <Text size="tiny" weight="regular">
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
                weight="regular"
                lineHeight="1"
                as="a"
                href="#"
                className="k-u-link k-u-link-primary1"
              >
                Détails
              </Text>
            </div>
          </GridTable.Col>

          <GridTable.Col className="customCol_3">
            <div>
              <Text weight="bold">Prénom Nom</Text>
              <br />
              <Text size="micro" weight="light">
                Prenom-Nom
              </Text>
            </div>
          </GridTable.Col>

          <GridTable.Col className="customCol_4">
            <Text size="tiny" weight="regular">
              72&nbsp;€
            </Text>
          </GridTable.Col>

          <GridTable.Col className="customCol_5">
            <StatusWithBullet statusType="success">Valid</StatusWithBullet>
          </GridTable.Col>

          <GridTable.Col className="customCol_6">
            <Text size="tiny" weight="regular">
              Livraison
            </Text>
          </GridTable.Col>

          <GridTable.Col className="customCol_7">
            <DropdownSelect
              size="micro"
              id="DropdownSelect_1"
              hideLabel
              labelText="Sélectionnez le statut de livraison"
              options={[
                { label: 'À expédier', value: 1 },
                { label: 'Expédié', value: 2 },
              ]}
            />
          </GridTable.Col>
        </GridTable.Row>

        <GridTable.Row
          className="customRowClass"
          listProps={{ className: 'customListClass' }}
        >
          <GridTable.Col className="customCol_1">
            <VisuallyHidden>
              <h2>Contribution #44654 par Prénom NOM le 12 septembre 2019</h2>
              <button>Voir plus d'informations sur cette contribution</button>
            </VisuallyHidden>
            <Checkbox aria-label="Sélectionner toutes les contributions de la liste" />
          </GridTable.Col>

          <GridTable.Col className="customCol_2">
            <div>
              <Text size="tiny" weight="regular">
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
                weight="regular"
                lineHeight="1"
                as="a"
                href="#"
                className="k-u-link k-u-link-primary1"
              >
                Détails
              </Text>
            </div>
          </GridTable.Col>

          <GridTable.Col className="customCol_3">
            <div>
              <Text weight="bold">Prénom Nom</Text>
              <br />
              <Text size="micro">Prenom-Nom</Text>
            </div>
          </GridTable.Col>

          <GridTable.Col className="customCol_4">
            <Text size="tiny" weight="regular">
              72&nbsp;€
            </Text>
          </GridTable.Col>

          <GridTable.Col className="customCol_5">
            <StatusWithBullet statusType="warning">Invalid</StatusWithBullet>
          </GridTable.Col>

          <GridTable.Col className="customCol_6">
            <Text size="tiny" weight="regular">
              Livraison
            </Text>
          </GridTable.Col>

          <GridTable.Col className="customCol_7">
            <DropdownSelect
              size="micro"
              id="DropdownSelect_2"
              hideLabel
              labelText="Sélectionnez le statut de livraison"
              options={[
                { label: 'À expédier', value: 1 },
                { label: 'Expédié', value: 2 },
              ]}
            />
          </GridTable.Col>
        </GridTable.Row>
      </GridTable.Body>
    </StyledGridTable>
  </>
)
