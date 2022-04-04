import React from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import {
  SummaryCard,
  useSummaryCardResizeObserver,
  Title,
  DropdownMenu,
  COLORS,
  EllipsisIcon,
  DragAndDropList,
  DRAG_AND_DROP_LIST_BUTTON_SHIFT,
  mq,
  useWindowWidth,
  ScreenConfig,
  Text,
} from 'kitten'

const StyledDragAndDropList = styled(DragAndDropList)`
  @media ${mq.tabletAndDesktop} {
    margin-left: -${DRAG_AND_DROP_LIST_BUTTON_SHIFT};
  }

  @media ${mq.mobile} {
    .k-DragAndDropList__item__button {
      display: none;
    }
    .k-DragAndDropList__item__child {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
`

const RewardCardComponent = ({
  imageProps,
  title,
  amount,
  contribution,
  availability,
  star,
  id,
  ...props
}) => (
  <SummaryCard id={id} {...props} type="ownerContribution">
    <SummaryCard.Image>
      <img alt="" {...imageProps} />
    </SummaryCard.Image>
    <SummaryCard.Cell name="title" aria-describedby="RewardSummaryList-title">
      <Text weight="bold" size="small">
        {title}
      </Text>
      {!!star && <SummaryCard.TitleTag text="Contrepartie star" />}
    </SummaryCard.Cell>
    <SummaryCard.Cell
      name="amount"
      aria-describedby="SummaryList-ownerContribution-amount"
    >
      <Text size="small">{amount}</Text>
    </SummaryCard.Cell>
    <SummaryCard.Cell
      name="contribution"
      aria-describedby="SummaryList-ownerContribution-contribution"
    >
      <Text size="small">{contribution}</Text>
    </SummaryCard.Cell>
    <SummaryCard.Cell
      className="k-u-hidden@xs-down"
      name="availability"
      aria-describedby="SummaryList-ownerContribution-availability"
    >
      <Text size="small">{availability}</Text>
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

export const StoryWithReward = () => {
  const { ref, size } = useSummaryCardResizeObserver()

  // on KissKiss, use `viewportIsSOrLess` from `useMediaQuery()`
  const windowWidth = useWindowWidth()

  return (
    <div ref={ref}>
      <Title
        modifier="quinary"
        className="k-u-margin-none k-u-margin-bottom-triple"
      >
        Curabitur blandit tempus porttitor.
      </Title>

      <p
        id="container_label_element"
        className="k-u-hidden@xs-down k-u-a11y-visuallyHidden"
      >
        Cette liste peut être réorganisée à l'aide des boutons.
      </p>

      <p
        id="description_element"
        className="k-u-hidden@xs-down k-u-a11y-visuallyHidden"
      >
        Cliquez pour attraper/lâcher l'élément. Une fois attrapé, l'élément peut
        être déplacé à l'aide des flèches haut/bas du clavier.
      </p>

      <SummaryCard.TitleBar
        values={{
          image: 'Visuel de la contrepartie',
          title: 'Titre de la contrepartie',
          amount: 'Montant',
          contributions: 'Contributions',
          availability: 'Disponibilités',
        }}
        className="k-u-hidden@xs-down k-u-margin-bottom-double"
        id="RewardSummaryList"
        size={size}
        type="ownerContribution"
      />

      <StyledDragAndDropList
        onChange={action('onChange')}
        a11yButtonDescElement="description_element"
        a11yContainerLabelElement="container_label_element"
        a11yButtonLabel="Réorganiser"
        a11yAnnouncement={{
          grabbed: name => `${name} attrapé`,
          dropped: name => `${name} relâché`,
          reorder: (name, position, length) => {
            return `L’ordre a été changé, ${name} est maintenant en position ${position} sur ${length}`
          },
          cancel: 'Réorganisation annulée.',
        }}
        showHandle={windowWidth >= ScreenConfig.S.min}
      >
        <RewardCardComponent
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
        />
        <RewardCardComponent
          size={size}
          href="#"
          imageProps={{ src: '/kitten.jpg' }}
          title="Eiusmod enim officia sed ut dolor elit ea aute."
          amount="10 000€"
          contribution="1 468 000"
          availability="Illimitée"
          id="ad9eb082-1d78-47cb-af56-8a7e9659cf03"
          simpleName="Eiusmod enim officia sed"
        />
        <RewardCardComponent
          size={size}
          href="#"
          imageProps={{ src: '/kitten.jpg' }}
          title="Anim enim deserunt ut mollit cupidatat culpa id consequat ut sit sint culpa qui anim fugiat deserunt laborum."
          amount="10 000€"
          contribution="1 468 000"
          availability="5"
          id="72ce89ff-6592-4b9a-9e5f-7f7b3ddd7b26"
          simpleName="Anim enim deserunt ut mollit"
        />
      </StyledDragAndDropList>
    </div>
  )
}
