import React from 'react'
import classNames from 'classnames'
import { Header,
         HeaderItems,
         HeaderItem } from 'kitten/components/headers/header'
import { HeaderLogo } from 'kitten/components/headers/header-logo'
import { Button } from 'kitten/components/buttons/button'

export class MakerHeader extends React.Component {
  render() {
    return (
      <Header>
        <HeaderItems>
          <HeaderItem fixedSize={ true }>
            <HeaderLogo lightOnM={ true } { ...this.props.logo } />
          </HeaderItem>

          <HeaderItem className="k-Header__titles">
            <div>
              <p className="k-Header__title">{ this.props.titles.title }</p>
              <p className="k-Header__subtitle">
                { this.props.titles.subtitle }
              </p>
            </div>
          </HeaderItem>
        </HeaderItems>

        <HeaderItems fixedSize={ true }>
          <HeaderItem>
            <Button tag="a"
                    modifier="lithium"
                    href={ this.props.button.href }>
              { this.props.button.text }
            </Button>
          </HeaderItem>
        </HeaderItems>
      </Header>
    )
  }
}
