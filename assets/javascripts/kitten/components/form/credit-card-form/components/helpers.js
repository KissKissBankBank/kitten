import React from 'react'
import isEmpty from 'lodash/fp/isEmpty'
import max from 'lodash/fp/max'
import creditCardType, { types } from 'credit-card-type'
import { renderToStaticMarkup } from 'react-dom/server'
import { CbIcon } from '../../../icons/cb-icon'
import { VisaIcon } from '../../../icons/visa-icon'
import { MasterCardIcon } from '../../../icons/mastercard-icon'
import { MaestroIcon } from '../../../icons/maestro-icon'
import { BancontactIcon } from '../../../icons/bancontact-icon'

creditCardType.addCard({
  niceType: 'Bancontact',
  type: 'bcmc',
  patterns: [6703],
  gaps: [4, 8, 12],
  lengths: [16],
  code: null,
})

const creditCardTypes = { ...types, BANCONTACT: 'bcmc' }

export const getCreditCardType = number => {
  const types = creditCardType(number)

  return isEmpty(types) ? {} : types[0]
}

export const getIconSvgStringByType = type => {
  let svg

  switch (type) {
    case creditCardTypes.VISA:
      svg = <VisaIcon height="15" />
      break
    case creditCardTypes.MASTERCARD:
      svg = <MasterCardIcon height="15" />
      break
    case creditCardTypes.MAESTRO:
      svg = <MaestroIcon height="15" />
      break
    case creditCardTypes.BANCONTACT:
      svg = <BancontactIcon height="15" />
      break
    default:
      svg = <CbIcon height="15" />
      break
  }

  return encodeURIComponent(renderToStaticMarkup(svg))
}

export const getCreditCardFormat = type => {
  const maxLength = max(type.lengths) || 0

  if (!maxLength) return '#### #### #### ####'

  return Array(maxLength)
    .fill('#')
    .map((v, i) => (type.gaps.includes(i + 1) ? `${v} ` : v))
    .join('')
}

export const withCode = number => {
  const type = getCreditCardType(number)

  return number ? !isEmpty(type.code) : true
}

export const getCodeFormat = number => {
  const type = getCreditCardType(number)

  return number ? Array(type.code.size).fill('#').join('') : '###'
}
