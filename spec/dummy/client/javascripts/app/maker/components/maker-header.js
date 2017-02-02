import React from 'react'
import classNames from 'classnames'
import { Header,
         HeaderItems,
         HeaderItem } from 'kitten/components/headers/header'
import { HeaderLogo } from 'kitten/components/headers/header-logo'
import { HeaderTitles } from 'kitten/components/headers/header-titles'
import { Button } from 'kitten/components/buttons/button'

export class KarlMakerHeader extends React.Component {
  render() {
    return (
      <Header>
        <HeaderItems>
          <HeaderItem fixedSize={ true }>
            <HeaderLogo lightOnM={ true } { ...this.props.logo } />
          </HeaderItem>

          <HeaderTitles { ...this.props.titles  }
                        className="k-Header__item--centered" />
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
