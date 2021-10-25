import React from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import {
  RewardSummaryCard,
  useRewardSummaryCardResizeObserver,
  FlexWrapper,
  Title,
  DropdownMenu,
  COLORS,
  EllipsisIcon,
  DragAndDropList,
  DRAG_AND_DROP_LIST_BUTTON_SHIFT,
  mq,
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
  <RewardSummaryCard id={id} {...props}>
    <RewardSummaryCard.Image>
      <img alt="" {...imageProps} />
    </RewardSummaryCard.Image>
    <div style={{ display: 'grid' }}>
      <RewardSummaryCard.Title aria-describedby="RewardSummaryList-title">
        {title}
      </RewardSummaryCard.Title>
      {!!star &&
        <RewardSummaryCard.TitleTag text="Contrepartie star" />
      }
    </div>
    <RewardSummaryCard.Amount aria-describedby="RewardSummaryList-amount">
      {amount}
    </RewardSummaryCard.Amount>
    <RewardSummaryCard.Contribution aria-describedby="RewardSummaryList-contribution">
      {contribution}
    </RewardSummaryCard.Contribution>
    <RewardSummaryCard.Availability aria-describedby="RewardSummaryList-availability">
      {availability}
    </RewardSummaryCard.Availability>
    <RewardSummaryCard.Options>
      <DropdownMenu
        button={() => <EllipsisIcon color={COLORS.font1} />}
        menuPosition="left"
      >
        <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
        <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
        <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
        <DropdownMenu.Link>Supprimer</DropdownMenu.Link>
      </DropdownMenu>
    </RewardSummaryCard.Options>
  </RewardSummaryCard>
)

export const StoryWithReward = () => {
  const { ref, size } = useRewardSummaryCardResizeObserver()

  return (
    <div ref={ref}>
      <Title
        modifier="quinary"
        className="k-u-margin-none k-u-margin-bottom-triple"
      >
        Curabitur blandit tempus porttitor.
      </Title>

      <p id="container_label_element" className="k-u-hidden@xs-down k-u-a11y-visuallyHidden">
        Cette liste peut être réorganisée à l'aide des boutons.
      </p>

      <p id="description_element" className="k-u-hidden@xs-down k-u-a11y-visuallyHidden">
        Cliquez pour attraper/lâcher l'élément. Une fois attrapé, l'élément peut
        être déplacé à l'aide des flèches haut/bas du clavier.
      </p>

      <RewardSummaryCard.TitleBar
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
          cancel: 'Réorganisation annulée.'
        }}
      >
        <RewardCardComponent
          size={size}
          href='#'
          imageProps={{ src: '/kitten.jpg' }}
          title='Aliquip aliqua excepteur quis eu laborum do dolore veniam ullamco anim fugiat aliquip consequat aliquip voluptate cupidatat consectetur.'
          amount="10 000€"
          contribution="1 468 000"
          star
          availability="Illimitée"
          id="911c90cc-311e-478f-9730-872c468bb9e0"
          simpleName="Aliquip aliqua excepteur quis"
        />
        <RewardCardComponent
          size={size}
          href='#'
          imageProps={{ src: '/kitten.jpg' }}
          title='Eiusmod enim officia sed ut dolor elit ea aute.'
          amount="10 000€"
          contribution="1 468 000"
          availability="Illimitée"
          id="ad9eb082-1d78-47cb-af56-8a7e9659cf03"
          simpleName="Eiusmod enim officia sed"
        />
        <RewardCardComponent
          size={size}
          href='#'
          imageProps={{ src: '/kitten.jpg' }}
          title='Anim enim deserunt ut mollit cupidatat culpa id consequat ut sit sint culpa qui anim fugiat deserunt laborum.'
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
