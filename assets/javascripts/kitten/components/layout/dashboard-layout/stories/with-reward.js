import React from 'react'
import {
  RewardSummaryCard,
  useRewardSummaryCardResizeObserver,
  FlexWrapper,
  Title,
  DropdownMenu,
  COLORS,
  EllipsisIcon,
} from 'kitten'

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

      <FlexWrapper gap={15}>
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

        <RewardSummaryCard size={size}>
          <RewardSummaryCard.Image>
            <img alt="" src="/kitten.jpg" />
          </RewardSummaryCard.Image>
          <div style={{ display: 'grid' }}>
            <RewardSummaryCard.Title aria-describedby="RewardSummaryList-title">
              Stickers Free Boobs Club Stickers Free Boobs Club Stickers Free
              Boobs Club.
            </RewardSummaryCard.Title>
            <RewardSummaryCard.TitleTag text="Contrepartie star" />
          </div>
          <RewardSummaryCard.Amount aria-describedby="RewardSummaryList-amount">
            10 000€
          </RewardSummaryCard.Amount>
          <RewardSummaryCard.Contribution aria-describedby="RewardSummaryList-contribution">
            1 468 000
          </RewardSummaryCard.Contribution>
          <RewardSummaryCard.Availability aria-describedby="RewardSummaryList-availability">
            Illimitée
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

        <RewardSummaryCard size={size}>
          <div style={{ display: 'grid' }}>
            <RewardSummaryCard.Title aria-describedby="RewardSummaryList-title">
              Stickers Free Boobs Club
            </RewardSummaryCard.Title>
            <RewardSummaryCard.TitleTag text="Contrepartie" />
          </div>
          <RewardSummaryCard.Amount aria-describedby="RewardSummaryList-amount">
            10 000€
          </RewardSummaryCard.Amount>
          <RewardSummaryCard.Contribution aria-describedby="RewardSummaryList-contribution">
            1 468 000
          </RewardSummaryCard.Contribution>
          <RewardSummaryCard.Availability aria-describedby="RewardSummaryList-availability">
            Illimitée
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

        <RewardSummaryCard size={size}>
          <RewardSummaryCard.Image>
            <img alt="" src="/kitten.jpg" />
          </RewardSummaryCard.Image>
          <div style={{ display: 'grid' }}>
            <RewardSummaryCard.Title aria-describedby="RewardSummaryList-title">
              Stickers Free Boobs Club
            </RewardSummaryCard.Title>
            <RewardSummaryCard.TitleTag text="Contrepartie star" />
          </div>
          <RewardSummaryCard.Amount aria-describedby="RewardSummaryList-amount">
            10 000€
          </RewardSummaryCard.Amount>
          <RewardSummaryCard.Contribution aria-describedby="RewardSummaryList-contribution">
            1 468 000
          </RewardSummaryCard.Contribution>
          <RewardSummaryCard.Availability aria-describedby="RewardSummaryList-availability">
            Illimitée
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
        <RewardSummaryCard size={size}>
          <div style={{ display: 'grid' }}>
            <RewardSummaryCard.Title aria-describedby="RewardSummaryList-title">
              Stickers Free Boobs Club
            </RewardSummaryCard.Title>
          </div>
          <RewardSummaryCard.Amount aria-describedby="RewardSummaryList-amount">
            10 000€
          </RewardSummaryCard.Amount>
          <RewardSummaryCard.Contribution aria-describedby="RewardSummaryList-contribution">
            1 468 000
          </RewardSummaryCard.Contribution>
          <RewardSummaryCard.Availability aria-describedby="RewardSummaryList-availability">
            Illimitée
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
      </FlexWrapper>
    </div>
  )
}
