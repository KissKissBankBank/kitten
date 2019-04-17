import React, { PureComponent } from 'react'
import { Header } from './components/header'
import { Content } from './components/content'
import { Footer } from './components/footer'

export class RewardEdition extends PureComponent {
  static Header = Header
  static Content = Content
  static Footer = Footer
}
