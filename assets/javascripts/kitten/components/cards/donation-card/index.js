import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Title } from '../../../components/typography/title'
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke'
import COLORS from '../../../constants/colors-config'
import { mediaQueries } from '../../../hoc/media-queries'
import { TextInputWithUnitForm } from '../../../components/form/text-input-with-unit-form'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

const StyledCard = styled.div`
  border-width: ${pxToRem(2)};
  border-style: solid;
  border-color: ${COLORS.line1};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      filter: grayscale(1) opacity(0.4);
      cursor: not-allowed;
    `}
`

const StyledGrid = styled(Grid)`
  padding: 0 ${pxToRem(20)};
`

export class DonationCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    donationForm: PropTypes.object.isRequired,
    version: PropTypes.oneOf(['default', 'tiny']),
    textInputWithUnitFormProps: PropTypes.shape({
      buttonLabel: PropTypes.string,
      isDisabled: PropTypes.bool,
    }),
  }

  static defaultProps = {
    titleTag: 'h2',
    version: 'default',
    textInputWithUnitFormProps: {
      buttonLabel: 'Choose',
      isDisabled: false,
    },
  }

  render() {
    const {
      isDisabled,
      title,
      titleTag,
      version,
      donationForm,
      textInputWithUnitFormProps,
      ...others
    } = this.props

    const isTinyVersion = version === 'tiny' || viewportIsSOrLess

    const gridColProps = isTinyVersion
      ? {}
      : { 'col-m': 10, 'offset-m': 1, 'col-l': 8, 'offset-l': 2 }

    return (
      <StyledCard>
        <Marger bottom={isTinyVersion ? 3 : 4} top={isTinyVersion ? 3 : 4}>
          <StyledGrid>
            <GridCol {...gridColProps}>
              <Marger bottom="2">
                <Title
                  modifier={isTinyVersion ? 'quinary' : 'quaternary'}
                  margin={false}
                  tag={titleTag}
                  style={styles.text}
                >
                  {title}
                </Title>
              </Marger>

              <Marger top="2" bottom="3">
                <HorizontalStroke size="big" style={styles.horizontalStroke} />
              </Marger>

              <TextInputWithUnitForm
                {...textInputWithUnitFormProps}
                {...donationForm}
                align="center"
                formIsDisabled={isDisabled}
                version={version}
              />
            </GridCol>
          </StyledGrid>
        </Marger>
      </StyledCard>
    )
  }
}

const styles = {
  card: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLORS.line1,

    content: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    isDisabled: {
      filter: 'grayscale(1) opacity(.4)',
      cursor: 'not-allowed',
    },
  },

  text: {
    color: COLORS.font1,
    textAlign: 'center',
  },

  horizontalStroke: {
    margin: '0 auto',
  },
}
