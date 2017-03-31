import React from 'react'
import classNames from 'classnames'
import { KisskissIcon } from 'kitten/components/icons/kisskiss-icon'
import { InformationButton } from 'kitten/components/buttons/information-button'

export const KarlHeader = () => {
  return (
    <div className="karl-Menu__header">
      <KisskissIcon className="karl-Menu__header__logo" />
      <h3 className="karl-Menu__header__title">Styleguide</h3>
      <InformationButton className="karl-Menu__header__about" />
    </div>
  )
}
