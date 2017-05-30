import React from 'react'
import { withTooltip } from 'kitten/hoc/with-tooltip'
import { ButtonInfoIcon } from 'kitten/components/buttons/button-info-icon'
import { Line } from 'kitten/components/layout/line'

export const InfoWithTooltipButtonIcon = withTooltip(ButtonInfoIcon, {})
