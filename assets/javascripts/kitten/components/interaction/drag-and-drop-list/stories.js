import React from 'react'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'
import { DragAndDropList } from './index'
import {
  SummaryCard,
  useSummaryCardResizeObserver,
  DropdownMenu,
  EllipsisIcon,
  COLORS,
  useWindowWidth,
  ScreenConfig,
  Text,
} from 'kitten'

export default {
  title: 'Interaction/DragAndDropList',
  component: DragAndDropList,
  decorators: [story => <div className="story-Container">{story()}</div>],
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          importString="DragAndDropList, DRAG_AND_DROP_LIST_BUTTON_SHIFT"
        />
      ),
    },
  },
}

const CardComponent = ({
  imageProps,
  title,
  amount,
  contribution,
  availability,
  star,
  id,
  ...props
}) => (
  <SummaryCard id={id} {...props}>
    <SummaryCard.Image>
      <img alt="" {...imageProps} />
    </SummaryCard.Image>
    <SummaryCard.Cell name="title" aria-describedby="SummaryList-title">
      <Text weight="bold" size="tiny">
        {title}
      </Text>
      {!!star && <SummaryCard.TitleTag text="Contrepartie star" />}
    </SummaryCard.Cell>
    <SummaryCard.Cell name="amount" aria-describedby="SummaryList-amount">
      <Text size="tiny">{amount}</Text>
    </SummaryCard.Cell>
    <SummaryCard.Cell
      name="contribution"
      aria-describedby="SummaryList-contribution"
    >
      <Text size="tiny">{contribution}</Text>
    </SummaryCard.Cell>
    <SummaryCard.Cell
      name="availability"
      aria-describedby="SummaryList-availability"
    >
      <Text size="tiny">{availability}</Text>
    </SummaryCard.Cell>
    <SummaryCard.Cell name="last-stretch">
      <DropdownMenu
        button={() => <EllipsisIcon color={COLORS.font1} />}
        menuPosition="left"
      >
        <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
        <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
        <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
        <DropdownMenu.Link>Supprimer</DropdownMenu.Link>
      </DropdownMenu>
    </SummaryCard.Cell>
  </SummaryCard>
)

export const Default = () => {
  const { ref, size } = useSummaryCardResizeObserver()

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <div ref={ref}>
      <p
        id="container_label_element"
        className="k-u-weight-light k-u-margin-bottom-double"
      >
        Cette liste peut être réorganisée à l'aide des boutons.
      </p>

      <DragAndDropList
        onChange={action('onChange')}
        a11yInstructions={`Pour attraper un élément déplaçable, pressez Espace ou Entrée.
          Pendant le déplacement, utilisez les flèches haut/bas.
          Pressez Entrée ou Espace à nouveau pour relâcher l’élément
          dans sa nouvelle position ou Echap pour annuler le déplaacement.`}
        a11yContainerLabelElement="container_label_element"
        a11yButtonLabel="Réorganiser"
        a11yAnnouncement={{
          onDragStart: (name, position, length) =>
            `${name} a été attrapé à la position ${position} sur ${length}`,
          onDragOver: (name, position, length) => {
            return `${name} a été déplacé à la position ${position} sur ${length}`
          },
          onDragEnd: (name, position, length) => {
            return `${name} a été relâché à la position ${position} sur ${length}`
          },
          cancel: 'Réorganisation annulée.',
        }}
        showHandle={windowWidth >= ScreenConfig.S.min}
      >
        <CardComponent
          size={size}
          href="#"
          imageProps={{ src: '/kitten.jpg' }}
          title="Aliquip aliqua excepteur quis eu laborum do dolore veniam ullamco anim fugiat aliquip consequat aliquip voluptate cupidatat consectetur."
          amount="10 000€"
          contribution="1 468 000"
          star
          availability="Illimitée"
          id="911c90cc-311e-478f-9730-872c468bb9e0"
          simpleName="Aliquip aliqua excepteur quis"
          actionProps={{
            as: 'button',
            type: 'button',
            onClick: action('911c90cc-311e-478f-9730-872c468bb9e0 clicked'),
            className: 'k-u-reset-button',
          }}
        />
        <CardComponent
          size={size}
          href="#"
          imageProps={{ src: '/kitten.jpg' }}
          title="Eiusmod enim officia sed ut dolor elit ea aute."
          amount="10 000€"
          contribution="1 468 000"
          availability="Illimitée"
          id="ad9eb082-1d78-47cb-af56-8a7e9659cf03"
          simpleName="Eiusmod enim officia sed"
          actionProps={{
            as: 'button',
            type: 'button',
            onClick: action('ad9eb082-1d78-47cb-af56-8a7e9659cf03 clicked'),
            className: 'k-u-reset-button',
          }}
        />
        <CardComponent
          size={size}
          href="#"
          imageProps={{ src: '/kitten.jpg' }}
          title="Anim enim deserunt ut mollit cupidatat culpa id consequat ut sit sint culpa qui anim fugiat deserunt laborum."
          amount="10 000€"
          contribution="1 468 000"
          availability="5"
          id="72ce89ff-6592-4b9a-9e5f-7f7b3ddd7b26"
          simpleName="Anim enim deserunt ut mollit"
          actionProps={{
            as: 'button',
            type: 'button',
            onClick: action('72ce89ff-6592-4b9a-9e5f-7f7b3ddd7b26 clicked'),
            className: 'k-u-reset-button',
          }}
        />
      </DragAndDropList>
    </div>
  )
}

export const Simple = () => {
  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <>
      <p
        id="container_label_element"
        className="k-u-weight-light k-u-margin-bottom-double"
      >
        Cette liste peut être réorganisée à l'aide des boutons.
      </p>

      <DragAndDropList
        onChange={action('onChange')}
        a11yInstructions={`Pour attraper un élément déplaçable, pressez Espace ou Entrée.
          Pendant le déplacement, utilisez les flèches haut/bas.
          Pressez Entrée ou Espace à nouveau pour relâcher l’élément
          dans sa nouvelle position ou Echap pour annuler le déplaacement.`}
        a11yContainerLabelElement="container_label_element"
        a11yButtonLabel="Réorganiser"
        a11yAnnouncement={{
          onDragStart: (name, position, length) =>
            `${name} a été attrapé à la position ${position} sur ${length}`,
          onDragOver: (name, position, length) => {
            return `${name} a été déplacé à la position ${position} sur ${length}`
          },
          onDragEnd: (name, position, length) => {
            return `${name} a été relâché à la position ${position} sur ${length}`
          },
          cancel: 'Réorganisation annulée.',
        }}
        showHandle={windowWidth >= ScreenConfig.S.min}
      >
        <div id="el_1" simpleName="Element 1">
          Element 1
        </div>
        <div id="el_2" simpleName="Element 2">
          Element 2
        </div>
        <div id="el_3" simpleName="Element 3">
          Element 3
        </div>
        <div id="el_4" simpleName="Element 4">
          Element 4
        </div>
        <div id="el_5" simpleName="Element 5">
          Element 5
        </div>
        <div id="el_6" simpleName="Element 6">
          Element 6
        </div>
      </DragAndDropList>
    </>
  )
}
