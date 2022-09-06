import React from 'react'
import { Tag, Text, Button, Toggletip, StatusIconNext } from 'kitten'
import { StyledWrapper } from './styles'

const PricingTable = () => (
  <StyledWrapper
    className="k-u-margin-top-nonuple kiss-Pricing__table"
    style={{ '--rows-count': 1 + 1 + 2 + 1 + 2 }}
    /* 1     + 1        +    2           + 1        +    2           */
    /* Title + Category + ...Features... + Category + ...Features... */
  >
    <div
      className="kiss-Pricing__table__col_features"
      style={{ '--current-col': 1 }}
    >
      <div
        className="kiss-Pricing__table__cell_title"
        style={{ '--current-row': 1 }}
      >
        <h2 className="k-u-a11y-visuallyHidden k-u-hidden@m-down">
          Liste des fonctionnalités
        </h2>
      </div>
      <div
        className="kiss-Pricing__table__cell_category"
        style={{ '--current-row': 2 }}
      >
        <Text
          className="k-u-letter-spacing-10 k-u-margin-none"
          transform="uppercase"
          weight="700"
          size="small"
          tag="h3"
        >
          Financement participatif
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 3 }}
      >
        <Text size="small" id="campagne">
          Campagne
        </Text>
        <Toggletip actionLabel="Donec ullamcorper nulla non metus auctor fringilla.">
          Donec ullamcorper nulla non metus auctor fringilla.
        </Toggletip>
      </div>

      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 4 }}
      >
        <Text size="small" id="objectif-flexible">
          Objectif flexible
          <Tag size="small" className="k-u-margin-left-noneHalf">
            Bientôt
          </Tag>
        </Text>
        <Toggletip actionLabel="Donec ullamcorper nulla non metus auctor fringilla.">
          Donec ullamcorper nulla non metus auctor fringilla.
        </Toggletip>
      </div>
      <div
        className="kiss-Pricing__table__cell_category"
        style={{ '--current-row': 5 }}
      >
        <Text
          className="k-u-letter-spacing-10 k-u-margin-none"
          transform="uppercase"
          weight="700"
          size="small"
          tag="h3"
        >
          Accompagnement
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 6 }}
      >
        <Text size="small" id="centre-d-aide-et-blog">
          Centre d’aide et blog
        </Text>
        <Toggletip actionLabel="Donec ullamcorper nulla non metus auctor fringilla.">
          Donec ullamcorper nulla non metus auctor fringilla.
        </Toggletip>
      </div>

      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 7 }}
      >
        <Text size="small" id="service-client-prioritaire">
          Service client prioritaire
          <Tag size="small" className="k-u-margin-left-noneHalf">
            Bientôt
          </Tag>
        </Text>
        <Toggletip actionLabel="Donec ullamcorper nulla non metus auctor fringilla.">
          Donec ullamcorper nulla non metus auctor fringilla.
        </Toggletip>
      </div>
    </div>

    <div
      className="kiss-Pricing__table__col_plan"
      style={{ '--current-col': 2 }}
    >
      <div
        className="kiss-Pricing__table__cell_title"
        style={{ '--current-row': 1 }}
      >
        <Text
          className="k-u-letter-spacing-10"
          className="kiss-Pricing__table__title"
          transform="uppercase"
          weight="700"
          size="large"
        >
          Starter
        </Text>
        <Text
          className="kiss-Pricing__table__rate"
          color="primary1"
          weight="700"
        >
          0%
        </Text>
        <Text className="kiss-Pricing__table__description" size="small">
          Vestibulum id ligula porta felis euismod semper.
        </Text>
        <Button
          size="small"
          modifier="helium"
          fit="fluid"
          className="k-u-hidden@m-down"
        >
          Créer mon projet
        </Button>
      </div>
      <div
        className="kiss-Pricing__table__cell_category"
        style={{ '--current-row': 2 }}
      >
        <Text
          className="k-u-letter-spacing-10 k-u-a11y-visuallyHidden@l-up k-u-margin-none"
          transform="uppercase"
          weight="700"
          size="small"
          tag="h3"
        >
          Financement Participatif
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 3 }}
      >
        <StatusIconNext
          aria-hidden
          status="success"
          width="12"
          height="12"
          color="var(--color-primary-500)"
        />
        <div className="k-u-a11y-visuallyHidden k-u-hidden@m-down">
          Le plan Starter comprend la feature : <a href="#campagne">Campagne</a>
        </div>
        <Text size="small" weight="500" className="k-u-hidden@l-up">
          Campagne
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature  k-u-hidden@m-down"
        style={{ '--current-row': 4 }}
      >
        <div className="k-u-a11y-visuallyHidden">
          Le plan Starter ne comprend pas la feature :{' '}
          <a href="#objectif-flexible">Objectif flexible</a>
        </div>
      </div>

      <div
        className="kiss-Pricing__table__cell_category"
        style={{ '--current-row': 5 }}
      >
        <Text
          className="k-u-letter-spacing-10 k-u-a11y-visuallyHidden@l-up k-u-margin-none"
          transform="uppercase"
          weight="700"
          size="small"
          tag="h3"
        >
          Accompagnement
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 6 }}
      >
        <StatusIconNext
          aria-hidden
          status="success"
          width="12"
          height="12"
          color="var(--color-primary-500)"
        />
        <div className="k-u-a11y-visuallyHidden k-u-hidden@m-down">
          Le plan Starter comprend la feature :{' '}
          <a href="#centre-d-aide-et-blog">Centre d'aide et blog</a>
        </div>
        <Text size="small" weight="500" className="k-u-hidden@l-up">
          Centre d'aide et blog
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature  k-u-hidden@m-down"
        style={{ '--current-row': 7 }}
      >
        <div className="k-u-a11y-visuallyHidden">
          Le plan Starter ne comprend pas la feature :{' '}
          <a href="#service-client-prioritaire">Service client prioritaire</a>
        </div>
      </div>
      <div className="kiss-Pricing__table__cell__bottom k-u-hidden@l-up">
        <Button size="small" modifier="helium" fit="fluid">
          Créer mon projet
        </Button>
      </div>
    </div>

    <div
      className="kiss-Pricing__table__col_plan kiss-Pricing__table__col_plan--main"
      style={{ '--current-col': 3 }}
    >
      <div
        className="kiss-Pricing__table__cell_title"
        style={{ '--current-row': 1 }}
      >
        <Text
          className="k-u-letter-spacing-10"
          className="kiss-Pricing__table__title"
          transform="uppercase"
          weight="700"
          size="large"
        >
          Pro
        </Text>
        <Text
          className="kiss-Pricing__table__rate"
          color="primary1"
          weight="700"
        >
          5%
        </Text>
        <Text className="kiss-Pricing__table__description" size="small">
          Aenean lacinia bibendum nulla sed consectetur.
        </Text>
        <Button
          size="small"
          modifier="helium"
          fit="fluid"
          className="k-u-hidden@m-down"
        >
          Créer mon projet
        </Button>
      </div>
      <div
        className="kiss-Pricing__table__cell_category"
        style={{ '--current-row': 2 }}
      >
        <Text
          className="k-u-letter-spacing-10 k-u-a11y-visuallyHidden@l-up k-u-margin-none"
          transform="uppercase"
          weight="700"
          size="small"
          tag="h3"
        >
          Financement Participatif
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 3 }}
      >
        <StatusIconNext
          aria-hidden
          status="success"
          width="12"
          height="12"
          color="var(--color-primary-500)"
        />
        <div className="k-u-a11y-visuallyHidden k-u-hidden@m-down">
          Le plan Starter comprend la feature : <a href="#campagne">Campagne</a>
        </div>
        <Text size="small" weight="500" className="k-u-hidden@l-up">
          Campagne
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 4 }}
      >
        <StatusIconNext
          aria-hidden
          status="success"
          width="12"
          height="12"
          color="var(--color-primary-500)"
        />
        <div className="k-u-a11y-visuallyHidden k-u-hidden@m-down">
          Le plan Starter comprend la feature :{' '}
          <a href="#objectif-flexible">Objectif flexible</a>
        </div>
        <Text size="small" weight="500" className="k-u-hidden@l-up">
          Objectif flexible
        </Text>
      </div>

      <div
        className="kiss-Pricing__table__cell_category"
        style={{ '--current-row': 5 }}
      >
        <Text
          className="k-u-letter-spacing-10 k-u-a11y-visuallyHidden@l-up k-u-margin-none"
          transform="uppercase"
          weight="700"
          size="small"
          tag="h3"
        >
          Accompagnement
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 6 }}
      >
        <StatusIconNext
          aria-hidden
          status="success"
          width="12"
          height="12"
          color="var(--color-primary-500)"
        />
        <div className="k-u-a11y-visuallyHidden k-u-hidden@m-down">
          Le plan Starter comprend la feature :{' '}
          <a href="#centre-d-aide-et-blog">Centre d'aide et blog</a>
        </div>
        <Text size="small" weight="500" className="k-u-hidden@l-up">
          Centre d'aide et blog
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 7 }}
      >
        <StatusIconNext
          aria-hidden
          status="success"
          width="12"
          height="12"
          color="var(--color-primary-500)"
        />
        <div className="k-u-a11y-visuallyHidden k-u-hidden@m-down">
          Le plan Starter comprend la feature :{' '}
          <a href="#service-client-prioritaire">Service client prioritaire</a>
        </div>
        <Text size="small" weight="500" className="k-u-hidden@l-up">
          Service client prioritaire
        </Text>
      </div>
      <div className="kiss-Pricing__table__cell__bottom k-u-hidden@l-up">
        <Button size="small" modifier="helium" fit="fluid">
          Créer mon projet
        </Button>
      </div>
    </div>

    <div
      className="kiss-Pricing__table__col_plan"
      style={{ '--current-col': 4 }}
    >
      <div
        className="kiss-Pricing__table__cell_title"
        style={{ '--current-row': 1 }}
      >
        <Text
          className="k-u-letter-spacing-10"
          className="kiss-Pricing__table__title"
          transform="uppercase"
          weight="700"
          size="large"
        >
          Expert
        </Text>
        <Text
          className="kiss-Pricing__table__rate"
          color="primary1"
          weight="700"
        >
          10%
        </Text>
        <Text className="kiss-Pricing__table__description" size="small">
          Maecenas sed diam eget risus varius blandit sit amet non magna.
        </Text>
        <Button
          size="small"
          modifier="helium"
          fit="fluid"
          className="k-u-hidden@m-down"
        >
          Créer mon projet
        </Button>
      </div>
      <div
        className="kiss-Pricing__table__cell_category"
        style={{ '--current-row': 2 }}
      >
        <Text
          className="k-u-letter-spacing-10 k-u-a11y-visuallyHidden@l-up k-u-margin-none"
          transform="uppercase"
          weight="700"
          size="small"
          tag="h3"
        >
          Financement Participatif
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 3 }}
      >
        <StatusIconNext
          aria-hidden
          status="success"
          width="12"
          height="12"
          color="var(--color-primary-500)"
        />
        <div className="k-u-a11y-visuallyHidden k-u-hidden@m-down">
          Le plan Starter comprend la feature : <a href="#campagne">Campagne</a>
        </div>
        <Text size="small" weight="500" className="k-u-hidden@l-up">
          Campagne
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 4 }}
      >
        <StatusIconNext
          aria-hidden
          status="success"
          width="12"
          height="12"
          color="var(--color-primary-500)"
        />
        <div className="k-u-a11y-visuallyHidden k-u-hidden@m-down">
          Le plan Starter comprend la feature :{' '}
          <a href="#objectif-flexible">Objectif flexible</a>
        </div>
        <Text size="small" weight="500" className="k-u-hidden@l-up">
          Objectif flexible
        </Text>
      </div>

      <div
        className="kiss-Pricing__table__cell_category"
        style={{ '--current-row': 5 }}
      >
        <Text
          className="k-u-letter-spacing-10 k-u-a11y-visuallyHidden@l-up k-u-margin-none"
          transform="uppercase"
          weight="700"
          size="small"
          tag="h3"
        >
          Accompagnement
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 6 }}
      >
        <StatusIconNext
          aria-hidden
          status="success"
          width="12"
          height="12"
          color="var(--color-primary-500)"
        />
        <div className="k-u-a11y-visuallyHidden k-u-hidden@m-down">
          Le plan Starter comprend la feature :{' '}
          <a href="#centre-d-aide-et-blog">Centre d'aide et blog</a>
        </div>
        <Text size="small" weight="500" className="k-u-hidden@l-up">
          Centre d'aide et blog
        </Text>
      </div>
      <div
        className="kiss-Pricing__table__cell_feature"
        style={{ '--current-row': 7 }}
      >
        <StatusIconNext
          aria-hidden
          status="success"
          width="12"
          height="12"
          color="var(--color-primary-500)"
        />
        <div className="k-u-a11y-visuallyHidden k-u-hidden@m-down">
          Le plan Starter comprend la feature :{' '}
          <a href="#service-client-prioritaire">Service client prioritaire</a>
        </div>
        <Text size="small" weight="500" className="k-u-hidden@l-up">
          Service client prioritaire
        </Text>
      </div>
      <div className="kiss-Pricing__table__cell__bottom k-u-hidden@l-up">
        <Button size="small" modifier="helium" fit="fluid">
          Créer mon projet
        </Button>
      </div>
    </div>
  </StyledWrapper>
)

export default PricingTable
