import React, { useState } from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number, select } from '@storybook/addon-knobs'
import { ListTable } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { ScreenConfig } from '../../../constants/screen-config'
import { VisuallyHidden } from '../../accessibility/visually-hidden'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ArrowIcon } from '../../icons/arrow-icon'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import {
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

const listTableInfo = {
  text: `
    # ListTable
    &nbsp;

    ## Import
    ~~~js
    import { ListTable } from '@kisskissbankbank/kitten/src/components/tables/list-table'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <ListTable id="…">
      <ListTable.Header
        {...props}
        listProps={{…}}
      >
        <ListTable.Col>
          …
        </ListTable.Col>
      </ListTable.Header>

      <ListTable.Body>
        <ListTable.Row isHighlighted>
          <ListTable.Col>
            …
          </ListTable.Col>
        </ListTable.Row>
        <ListTable.Row
          {...props}
          listProps={{…}}
        >
          <ListTable.Col>
            …
          </ListTable.Col>
        </ListTable.Row>
      </ListTable.Body>
    </ListTable>
    ~~~

  `,
  header: false,
  propTables: false,
}

const toggleableListTableInfo = {
  text: `
    # ListTable
    &nbsp;

    ## Import
    ~~~js
    import { ListTable } from '@kisskissbankbank/kitten/src/components/tables/list-table'
    ~~~

    ## Usage
    &nbsp;

    #### Toggleable
    ~~~js
    <ListTable id="…">
      <ListTable.Header
        {...props}
        listProps={{…}}
      >
        <ListTable.Col>
          <button
            type="button"
            onClick={() => setDisplayState(!displayed)}
            aria-expanded={displayed}
            aria-controls="toggleableListTable"
          >
            Voir les détails
          </button>
        </ListTable.Col>
      </ListTable.Header>
      { displayed && (
        <ListTable.Body id="toggleableListTable">
          <ListTable.Row isHighlighted>
            <ListTable.Col>
              …
            </ListTable.Col>
          </ListTable.Row>
          <ListTable.Row
            {...props}
            listProps={{…}}
          >
            <ListTable.Col>
              …
            </ListTable.Col>
          </ListTable.Row>
        </ListTable.Body>
      )
    </ListTable>
    ~~~

  `,
  header: false,
  propTables: false,
}

const ListTableStyles = createGlobalStyle`
  .customCol_1 {
    text-align: center;

    @media (max-width: ${ScreenConfig.S.max}px) {
      flex-basis: ${pxToRem(40)};
    }
    @media (min-width: ${ScreenConfig.M.min}px) {
      flex-basis: ${pxToRem(60)};
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: ${pxToRem(90)};
    }
  }

  .customCol_2 {
    @media (max-width: ${ScreenConfig.S.max}px) {
      flex-basis: calc(90% - 150px);
    }
    @media (min-width: ${ScreenConfig.M.min}px) {
      flex-basis: calc(50% - 170px);
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: 15%;
    }
  }

  .customCol_3 {
    @media (max-width: ${ScreenConfig.M.max}px) {
      display: none;
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: 25%;
    }
  }

  .customCol_4 {
    text-align: right;

    @media (max-width: ${ScreenConfig.S.max}px) {
      flex-basis: 110px;
    }
    @media (min-width: ${ScreenConfig.M.min}px) {
      flex-basis: 110px;
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: 8%;
    }
  }
  .customCol_5 {
    @media (max-width: ${ScreenConfig.S.max}px) {
      display: none;
    }
    @media (min-width: ${ScreenConfig.M.min}px) {
      flex-basis: 20%;
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: 15%;
    }
  }
  .customCol_6 {
    @media (max-width: ${ScreenConfig.M.max}px) {
      display: none;
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: calc(33% - 200px);
    }
  }
  .customCol_7 {
    @media (max-width: ${ScreenConfig.S.max}px) {
      display: none;
    }
    @media (min-width: ${ScreenConfig.M.min}px) {
      flex-basis: 20%;
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: 12%;
    }
  }
  .customCol_8 {
    @media (min-width: ${ScreenConfig.L.min}px) {
      display: none;
    }
  }
`

// Toggleable
const linkclassNames = [
  'k-u-color-primary1',
  'k-u-decoration-none',
  'k-u-size-tiny k-u-weight-regular',
].join(' ')

const defaultHeaderColWidth = {
  default: '100%',
  fromXs: '50%',
  fromS: '25%',
  fromL: '20%',
}
const defaultColWidth = {
  default: '100%',
  fromXs: '50%',
  fromM: '25%',
  fromL: '20%',
}
const defaultActionColWidth = { default: '100%', fromM: '50%', fromL: '20%' }

const HeaderRow = styled(ListTable.Header)`
  background-color: ${COLORS.background1};
  color: ${COLORS.font1};
  border-bottom: solid 2px ${COLORS.line1};
  padding-left: ${pxToRem(CONTAINER_PADDING_THIN / 2)};
  padding-right: ${pxToRem(CONTAINER_PADDING_THIN / 2)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    padding-left: ${pxToRem(CONTAINER_PADDING / 2)};
    padding-right: ${pxToRem(CONTAINER_PADDING / 2)};
  }

  ul {
    padding: 0;
  }
`

const Col = styled(({ align, width, ...props }) => (
  <ListTable.Col {...props} />
))`
  min-height: ${pxToRem(90)};
  flex-basis: auto;
  flex-grow: 1;
  width: ${({ width }) => (width ? width.default : '50%')};
  font-size: ${stepToRem(-1)};

  padding-left: ${pxToRem(CONTAINER_PADDING_THIN / 2)} !important;
  padding-right: ${pxToRem(CONTAINER_PADDING_THIN / 2)} !important;

  @media (min-width: ${ScreenConfig.XS.min}px) {
    width: ${({ width }) => (width ? width.fromXs : '50%')};
  }

  @media (min-width: ${ScreenConfig.S.min}px) {
    width: ${({ width }) => (width ? width.fromS : '20%')};

    ${({ align }) =>
      align === 'right' &&
      css`
        justify-content: flex-end;
      `}
  }

  @media (min-width: ${ScreenConfig.M.min}px) {
    width: ${({ width }) => (width ? width.fromM : '20%')};
    padding-left: ${pxToRem(CONTAINER_PADDING / 2)} !important;
    padding-right: ${pxToRem(CONTAINER_PADDING / 2)} !important;
  }

  @media (min-width: ${ScreenConfig.L.min}px) {
    width: ${({ width }) => (width ? width.fromL : '20%')};
  }

  .nowrap {
    white-space: nowrap;
  }
`

const Row = styled(ListTable.Row)`
  background-color: ${COLORS.background3};
  padding-left: ${pxToRem(CONTAINER_PADDING_THIN / 2)};
  padding-right: ${pxToRem(CONTAINER_PADDING_THIN / 2)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    padding-left: ${pxToRem(CONTAINER_PADDING / 2)};
    padding-right: ${pxToRem(CONTAINER_PADDING / 2)};
  }

  &:nth-of-type(even) {
    background-color: ${COLORS.background2};
  }

  &:last {
    border-bottom: 0;
  }

  ul {
    padding: 0;
  }
`

const ToggleButton = styled.button`
  border: 0;
  white-space: nowrap;
  display: flex;
  align-items: center;
  ${TYPOGRAPHY.fontStyles.regular}
  font-size: ${stepToRem(-1)};

  svg {
    margin-left: ${pxToRem(5)};
  }
`

const CellWithLabelValue = styled(({ label, value, thead, ...props }) => (
  <p {...props}>
    <strong>{value}</strong>
    <br />
    <span>{label}</span>
  </p>
))`
  strong {
    font-size: ${({ thead }) => (thead ? stepToRem(2) : stepToRem(0))};
  }

  span {
    font-size: ${stepToRem(-1)};
  }
`

const ToggleableTable = styled(ListTable)`
  border: solid 2px ${COLORS.line1};
  border-bottom: 0;

  ul {
    height: auto;
    flex-wrap: wrap;
  }
`

storiesOf('Tables/ListTable', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <div className="k-u-margin-top-quintuple k-u-margin-bottom-quintuple">
          <ListTableStyles />
          <ListTable id="CustomListTable">
            <ListTable.Header
              className="customHeaderClass"
              listProps={{ className: 'customListClass' }}
            >
              <ListTable.Col className="customCol_1">
                <VisuallyHidden>Sélection</VisuallyHidden>
                <input
                  type="checkbox"
                  aria-label="Sélectionner toutes les contributions de la liste"
                />
              </ListTable.Col>

              <ListTable.Col className="customCol_2">
                <span className="k-u-hidden@s-down k-u-hidden@m">
                  Date contribution
                </span>
                <span className="k-u-hidden@l-up">Contributeur</span>
              </ListTable.Col>

              <ListTable.Col className="customCol_3">
                Contributeur
              </ListTable.Col>

              <ListTable.Col className="customCol_4">Montant</ListTable.Col>

              <ListTable.Col className="customCol_5">
                Statut de paiement
              </ListTable.Col>

              <ListTable.Col className="customCol_6">
                Mode de livraison
              </ListTable.Col>

              <ListTable.Col className="customCol_7">
                Statut de livraison
              </ListTable.Col>

              <ListTable.Col className="customCol_8"></ListTable.Col>
            </ListTable.Header>

            <ListTable.Body>
              <ListTable.Row isHighlighted>
                <ListTable.Col className="customCol_1">
                  <VisuallyHidden>
                    <h2>
                      Contribution #888888 par Prénom NOM le 12 septembre 2019
                    </h2>
                    <button>
                      Voir plus d'informations sur cette contribution
                    </button>
                  </VisuallyHidden>
                  <input
                    type="checkbox"
                    aria-label="Sélectionner toutes les contributions de la liste"
                  />
                </ListTable.Col>

                <ListTable.Col className="customCol_2">
                  <p>
                    <strong>
                      <time dateTime="2019-09-12">12/09/2019</time>
                    </strong>
                    <br />
                    <span className="k-u-hidden@m-down">#88888888</span>
                    <span className="k-u-hidden@l-up">Prénom NOM</span>
                  </p>
                  <a
                    href="#"
                    className="lien_message k-u-hidden@l-up"
                    title="2 messages"
                  >
                    2
                  </a>
                </ListTable.Col>

                <ListTable.Col className="customCol_3">
                  <p>
                    <strong>Prénom NOM</strong>
                    <br />
                    Prenom-Nom
                  </p>
                  <a
                    href="#"
                    className="lien_message k-u-hidden@s-down k-u-hidden@m"
                    title="2 messages"
                  >
                    2
                  </a>
                </ListTable.Col>

                <ListTable.Col className="customCol_4">72&nbsp;€</ListTable.Col>

                <ListTable.Col className="customCol_5">● Validé</ListTable.Col>

                <ListTable.Col className="customCol_6">Livraison</ListTable.Col>

                <ListTable.Col className="customCol_7">
                  <select name="" id="">
                    <option value="">À expédier</option>
                  </select>
                </ListTable.Col>

                <ListTable.Col className="customCol_8">&gt;</ListTable.Col>
              </ListTable.Row>

              <ListTable.Row
                className="customRowClass"
                listProps={{ className: 'customListClass' }}
              >
                <ListTable.Col className="customCol_1">
                  <VisuallyHidden>
                    <h2>
                      Contribution #44654 par Prénom NOM le 12 septembre 2019
                    </h2>
                    <button>
                      Voir plus d'informations sur cette contribution
                    </button>
                  </VisuallyHidden>
                  <input
                    type="checkbox"
                    aria-label="Sélectionner toutes les contributions de la liste"
                  />
                </ListTable.Col>

                <ListTable.Col className="customCol_2">
                  <p>
                    <strong>
                      <time dateTime="2019-09-12">12/09/2019</time>
                    </strong>
                    <br />
                    <span className="k-u-hidden@m-down">#44654</span>
                    <span className="k-u-hidden@l-up">Prénom NOM</span>
                  </p>
                  <a
                    href="#"
                    className="lien_message k-u-hidden@l-up"
                    title="2 messages"
                  >
                    2
                  </a>
                </ListTable.Col>

                <ListTable.Col className="customCol_3">
                  <p>
                    <strong>Prénom NOM</strong>
                    <br />
                    Prenom-Nom
                  </p>
                  <a
                    href="#"
                    className="lien_message k-u-hidden@s-down k-u-hidden@m"
                    title="2 messages"
                  >
                    2
                  </a>
                </ListTable.Col>

                <ListTable.Col className="customCol_4">72&nbsp;€</ListTable.Col>

                <ListTable.Col className="customCol_5">● Validé</ListTable.Col>

                <ListTable.Col className="customCol_6">Livraison</ListTable.Col>

                <ListTable.Col className="customCol_7">
                  <select name="" id="">
                    <option value="">À expédier</option>
                  </select>
                </ListTable.Col>

                <ListTable.Col className="customCol_8">&gt;</ListTable.Col>
              </ListTable.Row>
            </ListTable.Body>
          </ListTable>
        </div>
      )
    },
    { listTableInfo },
  )
  .add(
    'toggleable',
    () => {
      const [displayed, setDisplayState] = useState(false)
      return (
        <StoryContainer>
          <ToggleableTable id="CustomToggleableTable">
            <HeaderRow
              className="customHeaderClass"
              listProps={{ className: 'customListClass' }}
            >
              <Col width={defaultHeaderColWidth}>
                <CellWithLabelValue thead label="Projets" value="4" />
              </Col>
              <Col width={defaultHeaderColWidth}>
                <CellWithLabelValue
                  thead
                  label="Montant investi"
                  value="1 000 €"
                />
              </Col>
              <Col width={defaultHeaderColWidth}>
                <CellWithLabelValue thead label="TRI cible" value="3 %" />
              </Col>
              <Col
                align="right"
                width={{
                  default: '100%',
                  fromXs: '50%',
                  fromS: '25%',
                  fromL: '40%',
                }}
              >
                <ToggleButton
                  type="button"
                  onClick={() => setDisplayState(!displayed)}
                  aria-expanded={displayed}
                  aria-controls="toggleableListTable"
                >
                  Voir les détails
                  <ArrowIcon
                    direction={displayed ? 'top' : 'bottom'}
                    version="solid"
                  />
                </ToggleButton>
              </Col>
            </HeaderRow>
            {displayed && (
              <ListTable.Body id="toggleableListTable">
                <Row>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Photosol Invest 2"
                      value="Centrale solaire Parc du Petit Prince"
                    />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="Montant investi" value="200 €" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="TRI cible" value="3 %" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Horizon d'investissement"
                      value="5 ans"
                    />
                  </Col>
                  <Col width={defaultActionColWidth}>
                    <p className="nowrap">
                      <a className={linkclassNames} href="#">
                        Page projet
                      </a>
                      <br />
                      <a className={linkclassNames} href="#">
                        Attestation de propriété
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Urba 133"
                      value="Centrale solaire Urbasolar Istres"
                    />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="Montant investi" value="300 €" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="TRI cible" value="3 %" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Horizon d'investissement"
                      value="5 ans"
                    />
                  </Col>
                  <Col width={defaultActionColWidth}>
                    <p className="nowrap">
                      <a className={linkclassNames} href="#">
                        Page projet
                      </a>
                      <br />
                      <a className={linkclassNames} href="#">
                        Attestation de propriété
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Photosol Invest 2"
                      value="Centrale solaire Parc du Petit Prince"
                    />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="Montant investi" value="200 €" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="TRI cible" value="3 %" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Horizon d'investissement"
                      value="5 ans"
                    />
                  </Col>
                  <Col width={defaultActionColWidth}>
                    <p className="nowrap">
                      <a className={linkclassNames} href="#">
                        Page projet
                      </a>
                      <br />
                      <a className={linkclassNames} href="#">
                        Attestation de propriété
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Urba 133"
                      value="Centrale solaire Urbasolar Istres"
                    />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="Montant investi" value="300 €" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="TRI cible" value="3 %" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Horizon d'investissement"
                      value="5 ans"
                    />
                  </Col>
                  <Col width={defaultActionColWidth}>
                    <p className="nowrap">
                      <a className={linkclassNames} href="#">
                        Page projet
                      </a>
                      <br />
                      <a className={linkclassNames} href="#">
                        Attestation de propriété
                      </a>
                    </p>
                  </Col>
                </Row>
              </ListTable.Body>
            )}
          </ToggleableTable>
        </StoryContainer>
      )
    },
    { toggleableListTableInfo },
  )
