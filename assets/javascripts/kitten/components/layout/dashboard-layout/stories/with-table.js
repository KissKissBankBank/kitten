import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Title,
  Button,
  DashboardLayout,
  FlexWrapper,
  Text,
  VisuallyHidden,
  pxToRem,
  COLORS,
  TYPOGRAPHY,
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
  StatusWithBullet,
  Checkbox,
  DropdownSelect,
  ListTable,
  MOBILE_HEADER_HEIGHT,
  mq,
} from 'kitten'

const StyledListTable = styled(ListTable)`
  /* variableWidth is the available content to be divided by variable columns
  /* Content Width (100%) minus fixed width columns (in pixels or in var()) */
  --ContributionsTable-variableWidth: calc(
    100% - ${pxToRem(160 + 100 + 130 + 5 * 40)} -
      var(--DashboardLayout-main-margin) * 2
  );

  ${TYPOGRAPHY.fontStyles.light}

  .k-ListTable__Header {
    z-index: 50;
    position: sticky;
    background-color: ${COLORS.background3};
    color: ${COLORS.font1};
    top: ${pxToRem(MOBILE_HEADER_HEIGHT)};

    @media ${mq.mobileAndTablet} {
      top: 0;
    }
  }

  .k-ListTable__HeaderList {
    height: ${pxToRem(50)};
  }

  .k-ListTable__Body {
    position: relative;
    opacity: 1;
    transition: opacity 2s ease;
  }

  .k-ListTable__HeaderList,
  .k-ListTable__RowList {
    overflow-x: hidden;
    max-width: initial;
    padding: 0;

    @media ${mq.mobile} {
      padding: 0 ${pxToRem(CONTAINER_PADDING_THIN)};
    }
  }

  .customCol_0 {
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: flex-end;
    padding-right: ${pxToRem(10)};

    @media ${mq.mobileAndTablet} {
      flex-basis: ${pxToRem(20 + 20)};
      width: ${pxToRem(20 + 20)};
    }
    @media ${mq.tablet} {
      margin-left: var(--DashboardLayout-main-margin);
    }
    @media ${mq.desktop} {
      flex-basis: var(--DashboardLayout-main-margin);
      width: var(--DashboardLayout-main-margin);
    }
  }

  .customCol_1 {
    flex-grow: 1;
    flex-shrink: 0;
    position: relative;
    padding-left: 0;

    @media ${mq.desktop} {
      flex-basis: calc(var(--ContributionsTable-variableWidth) * 0.3);
      width: calc(var(--ContributionsTable-variableWidth) * 0.3);
    }
  }

  .customCol_2 {
    flex-grow: 1;
    flex-shrink: 0;
    position: relative;
    @media ${mq.mobileAndTablet} {
      display: none;
    }
    @media ${mq.desktop} {
      flex-basis: calc(var(--ContributionsTable-variableWidth) * 0.5);
      width: calc(var(--ContributionsTable-variableWidth) * 0.5);
    }
  }

  .customCol_3 {
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-end;

    flex-basis: ${pxToRem(60 + 20)};
    width: ${pxToRem(60 + 20)};
    min-width: ${pxToRem(60 + 20)};

    @media ${mq.tablet} {
      flex-basis: ${pxToRem(90)};
      width: ${pxToRem(90)};
    }
    @media ${mq.desktop} {
      flex-basis: calc(var(--ContributionsTable-variableWidth) * 0.2);
      width: calc(var(--ContributionsTable-variableWidth) * 0.2);
    }
  }

  .customCol_4 {
    flex-grow: 0;
    flex-shrink: 0;
    @media ${mq.mobile} {
      flex-basis: ${pxToRem(40 + 20)};
      width: ${pxToRem(40 + 20)};

      &.k-ListTable__Col {
        justify-content: center;
      }

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
    @media ${mq.tabletAndDesktop} {
      white-space: nowrap;
      flex-basis: ${pxToRem(100 + 40)};
      width: ${pxToRem(100 + 40)};
    }
  }

  .customCol_5 {
    flex-grow: 0;
    flex-shrink: 0;
    @media ${mq.mobile} {
      display: none;
    }
    @media ${mq.tablet} {
      white-space: nowrap;
      flex-basis: ${pxToRem(120 + 40)};
      width: ${pxToRem(120 + 40)};
      margin-right: ${pxToRem(CONTAINER_PADDING)};
    }
    @media ${mq.desktop} {
      white-space: nowrap;
      flex-basis: ${pxToRem(160 + 40)};
      width: ${pxToRem(160 + 40)};
    }
  }

  .customCol_6 {
    flex-grow: 0;
    flex-shrink: 0;
    @media ${mq.mobileAndTablet} {
      display: none;
    }
    @media ${mq.desktop} {
      margin-right: var(--DashboardLayout-main-margin);
      flex-basis: ${pxToRem(130 + 40)};
      width: ${pxToRem(130 + 40)};

      .k-Form-Dropdown {
        min-width: ${pxToRem(130)};
      }
    }
  }
`

const Row = () => {
  const [isHighlighted, setHighlight] = useState(false)

  return (
    <ListTable.Row isHighlighted={isHighlighted}>
      <ListTable.Col className="customCol_0">
        <VisuallyHidden>
          <h2>Contribution #888888 par Prénom NOM le 12 septembre 2019</h2>
          <button>Voir plus d'informations sur cette contribution</button>
        </VisuallyHidden>
        <Checkbox
          onChange={e => setHighlight(e.target.checked)}
          aria-label="Sélectionner toutes les contributions de la liste"
        />
      </ListTable.Col>

      <ListTable.Col className="customCol_1">
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
      </ListTable.Col>

      <ListTable.Col className="customCol_2">
        <div>
          <Text weight="bold">Prénom Nom</Text>
          <br />
          <Text size="micro" weight="light">
            Prenom-Nom
          </Text>
        </div>
      </ListTable.Col>

      <ListTable.Col className="customCol_3">
        <Text size="tiny" weight="regular">
          72&nbsp;€
        </Text>
      </ListTable.Col>

      <ListTable.Col className="customCol_4">
        <StatusWithBullet statusType="success">Valid</StatusWithBullet>
      </ListTable.Col>

      <ListTable.Col className="customCol_5">
        <Text size="tiny" weight="regular">
          Livraison
        </Text>
      </ListTable.Col>

      <ListTable.Col className="customCol_6">
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
  )
}

export const StoryWithTable = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="k-u-background-color-background3">
        <Title
          modifier="quinary"
          className="k-u-margin-none k-u-margin-bottom-triple"
        >
          Curabitur blandit tempus porttitor.
          <Button onClick={() => setOpen(!isOpen)}>Toggle Toaster</Button>
        </Title>
      </div>

      <StyledListTable
        id="CustomListTable"
        className="k-DashboardLayout__fullWidth"
      >
        <ListTable.Header className="k-u-weight-regular">
          <ListTable.Col className="customCol_0">
            <VisuallyHidden>Sélection</VisuallyHidden>
            <Checkbox aria-label="Sélectionner toutes les contributions de la liste" />
          </ListTable.Col>

          <ListTable.Col className="customCol_1">
            <Text weight="regular" color="font1" size="tiny">
              Date
              <br className="k-u-hidden@l-up" />
              <Text
                weight="regular"
                color="font1"
                size="tiny"
                className="k-u-hidden@l-up"
              >
                et Contributeur
              </Text>
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_2">
            <Text weight="regular" color="font1" size="tiny">
              Contributeur
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_3">
            <Text weight="regular" color="font1" size="tiny">
              Montant
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_4">
            <Text weight="regular" color="font1" size="tiny">
              Statut
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_5">
            <Text weight="regular" color="font1" size="tiny">
              Mode de livraison
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_6">
            <Text weight="regular" color="font1" size="tiny">
              Statut livraison
            </Text>
          </ListTable.Col>
        </ListTable.Header>

        <ListTable.Body>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </ListTable.Body>
      </StyledListTable>

      <DashboardLayout.Toaster isOpen={isOpen}>
        <FlexWrapper
          gap={10}
          direction="row"
          className="k-u-flex-alignItems-center"
        >
          <div style={{ flex: '1 0 auto' }} className="k-u-hidden@xs-down">
            <Text color="background1" size="tiny" weight="regular">
              Text
            </Text>
          </div>
          <Button modifier="boron" size="tiny" className="k-u-hidden@m-down">
            Hello
          </Button>
          <Button modifier="helium" size="tiny">
            Hello
          </Button>
        </FlexWrapper>
      </DashboardLayout.Toaster>
    </>
  )
}
