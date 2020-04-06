import React from 'react'
import classNames from 'classnames'
import { Alert } from '../../components/notifications/alert'
import { Button } from '../../components/buttons/button'
import Markdown from 'react-markdown'

// TODO: make helper to manage class.
const markdownRenderers = {
  Paragraph: props => {
    return <p className="k-Alert__paragraph">{props.children}</p>
  },
  Strong: props => {
    return <strong className="k-Alert__strong">{props.children}</strong>
  },
  Link: props => {
    return (
      <a
        className={classNames('k-Alert__link', 'k-Alert__strong')}
        href={props.href}
      >
        {props.children}
      </a>
    )
  },
  List: props => {
    return <ul className="k-Alert__list">{props.children}</ul>
  },
}

const markdownExample =
  "It's very easy to make some words **bold** and " +
  'other words *italic* with Markdown.\n\nYou can even ' +
  '[link to components!](#)\n\n' +
  'Sometimes you want numbered lists:\n\n' +
  '1. One\n2. Two\n3. Three\n\nSometimes you want bullet points:\n\n' +
  '* Start a line with a star\n* Profit!\n\nAlternatively,\n\n' +
  '- Dashes work just as well\n- And if you have sub points, put two spaces ' +
  'before the dash or star:\n\t- Like this\n\t- And this'

export const KarlAlert = props => {
  return (
    <Alert {...props}>
      <Markdown
        renderers={markdownRenderers}
        source="Lorem ipsum dolor sit amet,
               [consectetuer adipiscing](#) elit."
      />
    </Alert>
  )
}

export const KarlAlertWithButton = props => {
  return (
    <Alert {...props}>
      <Markdown
        renderers={markdownRenderers}
        source="Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo."
      />
      <Button modifier="carbon" className="k-u-margin-top-double">
        Button
      </Button>
    </Alert>
  )
}

export const KarlAlertWithMarkdown = () => {
  return (
    <Alert>
      <Markdown renderers={markdownRenderers} source={markdownExample} />
    </Alert>
  )
}
