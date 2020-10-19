import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { Button } from '../../../../components/buttons/button/button'
import COLORS from '../../../../constants/colors-config'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Checkbox } from '../../../../components/form/checkbox'

const StyledSummary = styled((props) => <div {...props} />)`
  border-style: solid;
  border-color: ${COLORS.line1};
  border-radius: ${pxToRem(8)};
  border-width: ${pxToRem(2)};
  padding: ${pxToRem(40)} ${pxToRem(30)} ${pxToRem(30)};

  .k-Summary__subSummary {
    display: flex;
    justify-content: space-between;
  }

  .k-Summary__horizontalStroke {
    background-color: ${COLORS.line1};
    width: 100%;
    margin: ${pxToRem(20)} 0;
  }
`

const Summary = () => {
  return (
    <StyledSummary className="k-Summary">
      <div className="k-Summary__subSummary k-u-margin-bottom-single">
        <Text color="font1" size="tiny">
          Sous-Total
        </Text>
        <Text color="font1" size="tiny">
          70€
        </Text>
      </div>
      <div className="k-Summary__subSummary">
        <Text color="font1" size="tiny">
          Livraison en France
        </Text>
        <Text color="font1" size="tiny">
          0€
        </Text>
      </div>
      <HorizontalStroke size="tiny" className="k-Summary__horizontalStroke" />
      <div className="k-Summary__subSummary k-u-margin-bottom-double">
        <Text color="font1" size="tiny" weight="bold">
          Total à payer
        </Text>
        <Text color="font1" size="huge" weight="bold" fontStyle="italic">
          80€
        </Text>
      </div>
      <Checkbox className="k-u-margin-bottom-quadruple">
        <Text color="font1" size="tiny">Contribuer de manière anonyme</Text>
      </Checkbox>
      <Button modifier="helium" fluid>
        Valider
      </Button>
    </StyledSummary>
  )
}

export default Summary
