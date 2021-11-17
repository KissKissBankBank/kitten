import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import {
  COLORS,
  ListTable,
  pxToRem,
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
  ScreenConfig,
  TYPOGRAPHY,
  stepToRem,
  ArrowIcon,
} from 'kitten'

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
  border-bottom:  ${pxToRem(1)} solid var(--color-grey-400);
  padding-left: ${pxToRem(CONTAINER_PADDING_THIN / 2)};
  padding-right: ${pxToRem(CONTAINER_PADDING_THIN / 2)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
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

  @media (min-width: ${pxToRem(ScreenConfig.XS.min)}) {
    width: ${({ width }) => (width ? width.fromXs : '50%')};
  }

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    width: ${({ width }) => (width ? width.fromS : '20%')};

    ${({ align }) =>
      align === 'right' &&
      css`
        justify-content: flex-end;
      `}
  }

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    width: ${({ width }) => (width ? width.fromM : '20%')};
    padding-left: ${pxToRem(CONTAINER_PADDING / 2)} !important;
    padding-right: ${pxToRem(CONTAINER_PADDING / 2)} !important;
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
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

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
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
  border: ${pxToRem(1)} solid var(--color-grey-400);
  border-bottom: 0;

  ul {
    height: auto;
    flex-wrap: wrap;
  }
`

export const ToggleableStory = () => {
  const [displayed, setDisplayState] = useState(false)
  return (
    <ToggleableTable id="CustomToggleableTable">
      <HeaderRow
        className="customHeaderClass"
        listProps={{ className: 'customListClass' }}
      >
        <Col width={defaultHeaderColWidth}>
          <CellWithLabelValue thead label="Projets" value="4" />
        </Col>
        <Col width={defaultHeaderColWidth}>
          <CellWithLabelValue thead label="Montant investi" value="1 000 €" />
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
            <ArrowIcon direction={displayed ? 'top' : 'bottom'} />
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
  )
}
