import defaultProps from 'kitten/hoc/default-props'
import React from 'react'
import Dropdown from 'kitten/components/dropdowns/dropdown'
import ExternalRichLink from 'kitten/components/links/external-rich-link'

// KarlSimpleDropdown
const karlSimpleDropdownProps = {
  buttonClassName: 'karl-Dropdown--default__button',
  dropdownListClassName: 'karl-Dropdown--default',
  dropdownList: [
    <a href="#" className="karl-Dropdown--default__item">Cute</a>,
    <a href="#" className="karl-Dropdown--default__item">and lovely</a>,
    <a href="#" className="karl-Dropdown--default__item">kitten</a>,
  ],
}

const KarlSimpleDropdown = defaultProps(Dropdown, karlSimpleDropdownProps)

// KarlPlatformSwitch
const karlPlatformSwitchButtonContent = (<svg className="k-ButtonIcon__svg" viewBox="0 0 10 7" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 6.243L3.586 4.828 7.828.586 9.243 2z"/>
  <path d="M5 6.243L.757 2 2.172.586l4.242 4.242z"/>
</svg>)

const karlPlatformSwitchProps = {
  positionedWith: 'parent',
  positionedWithBorder: false,

  buttonId: 'k-PlatformSwitch',
  buttonClassName: 'k-ButtonIcon k-ButtonIcon--tiny',
  buttonContentOnExpanded: karlPlatformSwitchButtonContent,
  buttonContentOnCollapsed: karlPlatformSwitchButtonContent,

  dropdownListClassName: 'k-PlatformSwitch',
  dropdownList: [
    <ExternalRichLink className="k-PlatformSwitch__item">
      <img src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44" alt="LOGO" />
    </ExternalRichLink>,
    <ExternalRichLink className="k-PlatformSwitch__item">
      <img src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44" alt="LOGO" />
    </ExternalRichLink>,
    <ExternalRichLink className="k-PlatformSwitch__item">
      <img src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44" alt="LOGO" />
    </ExternalRichLink>
  ]
}

const KarlPlatformSwitch = defaultProps(Dropdown, karlPlatformSwitchProps)

// KarlUserMenuDropdown
const karlUserMenuDropdownButton = ([
  <span className="k-ButtonImage" title="Profil">
    <img className="k-ButtonImage__img"
         src="https://placekitten.com/g/40/40"
         width="40"
         height="40"
         alt="" />
  </span>,
  <p className="k-ButtonImageWithText__text">Firstname</p>
])

const karlUserMenuDropdownProps = {
  positionedWith: 'parent',
  positionedWithBorder: false,
  positionedOn: 'right',

  buttonId: 'k-UserMenu',
  buttonClassName: 'k-ButtonImageWithText',
  buttonContentOnExpanded: karlUserMenuDropdownButton,
  buttonContentOnCollapsed: karlUserMenuDropdownButton,

  dropdownListClassName: 'k-UserMenu',
  dropdownList: [
    <a className="k-UserMenu__item" href="#">Mon profil</a>,
    <a className="k-UserMenu__item" href="#">Mes projets</a>,
    <a className="k-UserMenu__item" href="#">Mes contributions</a>,
    <a className="k-UserMenu__item" href="#">Mes messages</a>,
    <a className="k-UserMenu__item k-UserMenu__separation" href="#">
      Profil
    </a>,
    <a className="k-UserMenu__item" href="#">Réglages</a>,
    <a className="k-UserMenu__item" href="#">Déconnexion</a>
  ]
}

const KarlUserMenuDropdown = defaultProps(Dropdown, karlUserMenuDropdownProps)

export { KarlSimpleDropdown, KarlPlatformSwitch, KarlUserMenuDropdown }
