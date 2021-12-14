import React from 'react'
import { DropdownSelect, Text } from 'kitten'

export const Legal = props => {
  return (
    <div className="k-Footer__legal" {...props}>
      <DropdownSelect
        hideLabel
        size="tiny"
        modifier="boron"
        className="k-Footer__legal--select"
        placeholder="Français"
        options={[
          { value: 'français', label: 'Français' },
          { value: 'english', label: 'English' },
        ]}
      />
      <ul className="k-Footer__legal--list">
        <li>
          <a href="#" className="k-Footer__linkList--item">Conditions générales</a>
        </li>
        <li>
          <a href="#" className="k-Footer__linkList--item">Mentions légales</a>
        </li>
        <li>
          <a href="#" className="k-Footer__linkList--item">Données personnelles</a>
        </li>
        <li>
          <a href="#" className="k-Footer__linkList--item">Cookies</a>
        </li>
        <li>
          <a href="#" className="k-Footer__linkList--item">Réclamations</a>
        </li>
      </ul>
      <Text size="tiny" cssColor="var(--color-grey-600)">
        © 2021 KissKissBankBank & Co
      </Text>
    </div>
  )
}
