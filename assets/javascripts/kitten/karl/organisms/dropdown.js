import defaultProps from 'kitten/hoc/default-props'
import React from 'react'
import Dropdown from 'kitten/components/dropdowns/dropdown'
import ExternalRichLink from 'kitten/components/links/external-rich-link'

// KarlSimpleDropdown
const KarlSimpleDropdown = defaultProps(Dropdown, {
  buttonClassName: 'karl-Dropdown--default__button',
  dropdownListClassName: 'karl-Dropdown--default',
  dropdownList: [
    <a href="#" className="karl-Dropdown--default__item">Cute</a>,
    <a href="#" className="karl-Dropdown--default__item">and lovely</a>,
    <a href="#" className="karl-Dropdown--default__item">kitten</a>,
  ],
})

// KarlPlatformSwitch
const karlPlatformSwitchButtonContent = (<svg
    className="k-ButtonIcon__svg"
    viewBox="0 0 10 7"
    xmlns="http://www.w3.org/2000/svg">
  <path className="k-Dropdown__button__svgPath"
        d="M5 6.243L.757 2 2.172.586l4.242 4.242z"/>
  <path className="k-Dropdown__button__svgPath k-Dropdown__button__svgPathRight"
        d="M5 6.243L3.586 4.828 7.828.586 9.243 2z"/>
</svg>)

const KarlPlatformSwitch = defaultProps(Dropdown, {
  positionedWith: () => document.getElementById('k-PlatformSwitchDropdown'),
  positionedWithBorder: false,

  buttonId: 'k-PlatformSwitch',
  buttonClassName: 'k-ButtonIcon k-ButtonIcon--default k-ButtonIcon--tiny',
  buttonContentOnExpanded: karlPlatformSwitchButtonContent,
  buttonContentOnCollapsed: karlPlatformSwitchButtonContent,

  dropdownListClassName: 'k-PlatformSwitch',
  dropdownList: [
    <ExternalRichLink className="k-PlatformSwitch__item">
      <img src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44"
           alt="LOGO" />
    </ExternalRichLink>,
    <ExternalRichLink className="k-PlatformSwitch__item">
      <img src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44"
           alt="LOGO" />
    </ExternalRichLink>,
    <ExternalRichLink className="k-PlatformSwitch__item">
      <img src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44"
           alt="LOGO" />
    </ExternalRichLink>
  ],
})

// KarlUserMenuDropdown
const KarlUserMenuDropdown = defaultProps(Dropdown, {
  positionedWith: () => document.getElementById('k-UserMenuDropdown'),
  positionedWithBorder: false,
  positionedOn: 'right',

  notifications: 42,
  spaceAroundGrid: 20,
  buttonId: 'k-UserMenu',
  buttonTemplate: 'ButtonImageWithTextAndBadge',
  srcImg: 'https://placekitten.com/g/100/100',
  widthImg: 100,
  heightImg: 100,
  altImg: 'Alt Firstname',
  text: 'Firstname Lastname',
  title: 'Profil',
  textClassName: 'k-Header__text--withEllipsis',

  dropdownListClassName: 'k-UserMenu',
  dropdownListArrow: (<span className="k-UserMenu__arrow" />),
  dropdownList: [
    <a className="k-UserMenu__item" href="#">Mon profil</a>,
    <a className="k-UserMenu__item" href="#">Mes projets</a>,
    <a className="k-UserMenu__item" href="#">Mes contributions</a>,
    <a className="k-UserMenu__item" href="#">Mes messages</a>,
    <a className="k-UserMenu__item
                  k-UserMenu__item--secondary
                  k-UserMenu__separation"
       href="#">
      Admin
    </a>,
    <a className="k-UserMenu__item k-UserMenu__item--secondary" href="#">
      Rapports
    </a>,
    <a className="k-UserMenu__item k-UserMenu__separation" href="#">
      Profil
    </a>,
    <a className="k-UserMenu__item" href="#">Réglages</a>,
    <a className="k-UserMenu__item" href="#">Déconnexion</a>
  ],
})

export { KarlSimpleDropdown, KarlPlatformSwitch, KarlUserMenuDropdown }
