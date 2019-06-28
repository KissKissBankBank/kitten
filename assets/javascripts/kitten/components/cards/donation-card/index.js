import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Title as KittenTitle } from '../../../components/typography/title'
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke'
import COLORS from '../../../constants/colors-config'
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

const StyledTitle = styled(({ version, ...others }) => (
  <KittenTitle {...others} />
))`
  color: ${COLORS.font1};
  text-align: center;
  line-height: 1.2;
  font-size: ${stepToRem(5)};

  ${({ version }) =>
    version === 'tiny' &&
    css`
      font-size: ${stepToRem(4)};
    `}
`

const StyledHorizontalStroke = styled(HorizontalStroke)`
  margin: 0 auto;
`

export class DonationCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    donationForm: PropTypes.object.isRequired,
    version: PropTypes.oneOf(['default', 'tiny']),
    isDisabled: PropTypes.bool,
  }

  static defaultProps = {
    titleTag: 'h2',
    version: 'default',
  }

  render() {
    const {
      isDisabled,
      title,
      titleTag,
      version,
      donationForm,
      ...others
    } = this.props

    return (
      <StyledCard>
        <Marger
          bottom={version === 'tiny' ? 3 : 4}
          top={version === 'tiny' ? 3 : 4}
        >
          <StyledGrid>
            <GridCol
              col-m={version === 'tiny' ? 0 : 10}
              offset-m={version === 'tiny' ? 0 : 1}
              col-l={version === 'tiny' ? 0 : 8}
              offset-l={version === 'tiny' ? 0 : 2}
            >
              <Marger bottom="2">
                <StyledTitle margin={false} tag={titleTag}>
                  {title}
                </StyledTitle>
              </Marger>

              <Marger top="2" bottom="3">
                <StyledHorizontalStroke size="big" />
              </Marger>

              <TextInputWithUnitForm
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
