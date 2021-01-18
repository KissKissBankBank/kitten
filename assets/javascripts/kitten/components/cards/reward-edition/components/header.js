import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { Button } from '../../../../components/buttons/button'
import { GarbageIcon } from '../../../../components/icons/garbage-icon'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

const StyledHeader = styled.div`
  border-bottom-width: ${borderWidth};
  border-bottom-style: solid;
  border-bottom-color: ${borderColor};
  padding: ${pxToRem(15)};
  background-color: ${COLORS.background3};
  display: flex;

  .k-RewardEdition__Header__Amount {
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .k-RewardEdition__Header__Button {
    align-self: flex-end;
  }
`

export const Header = ({
  children,
  onClick,
  garbageButton,
  garbageButtonA11yText,
}) => (
  <StyledHeader>
    <Text className="k-RewardEdition__Header__Amount">{children}</Text>
    {garbageButton && (
      <Button
        onClick={onClick}
        type="button"
        aria-label={garbageButtonA11yText}
        modifier="hydrogen"
        size="micro"
        icon
        className="k-RewardEdition__Header__Button"
      >
        <GarbageIcon aria-hidden />
      </Button>
    )}
  </StyledHeader>
)

Header.propTypes = {
  garbageButton: PropTypes.bool,
  garbageButtonA11yText: PropTypes.string,
}

Header.defaultProps = {
  garbageButton: true,
  garbageButtonA11yText: 'Delete',
}
