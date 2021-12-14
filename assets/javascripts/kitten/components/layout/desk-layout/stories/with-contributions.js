import React from 'react'
import {
  FlexWrapper,
  Title,
  Text,
  RewardSummaryCard,
  useRewardSummaryCardResizeObserver,
} from 'kitten'

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
      {!!star && <RewardSummaryCard.TitleTag text="Contrepartie star" />}
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
      <Text className="k-u-link k-u-link-primary1">Gérer</Text>
    </RewardSummaryCard.Options>
  </RewardSummaryCard>
)

export const WithContributions = () => {
  const { ref, size } = useRewardSummaryCardResizeObserver()

  return (
    <div ref={ref}>
      <Title
        modifier="senary"
        className="k-u-margin-bottom-tripleHalf"
        noMargin
      >
        Abonnements et dons récurrents
      </Title>
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
      <FlexWrapper gap={10}>
        <RewardCardComponent
          size={size}
          href="#"
          imageProps={{ src: `/kitten-${Math.floor(Math.random() * 10)}.jpg` }}
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
          imageProps={{ src: `/kitten-${Math.floor(Math.random() * 10)}.jpg` }}
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
          imageProps={{ src: `/kitten-${Math.floor(Math.random() * 10)}.jpg` }}
          title="Anim enim deserunt ut mollit cupidatat culpa id consequat ut sit sint culpa qui anim fugiat deserunt laborum."
          amount="10 000€"
          contribution="1 468 000"
          availability="5"
          id="72ce89ff-6592-4b9a-9e5f-7f7b3ddd7b26"
          simpleName="Anim enim deserunt ut mollit"
        />
      </FlexWrapper>

      <Title
        modifier="senary"
        className="k-u-margin-top-sextuple k-u-margin-bottom-tripleHalf"
      >
        Contributions à des campagnes
      </Title>
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
      <FlexWrapper gap={10}>
        <RewardCardComponent
          size={size}
          href="#"
          imageProps={{ src: `/kitten-${Math.floor(Math.random() * 10)}.jpg` }}
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
          imageProps={{ src: `/kitten-${Math.floor(Math.random() * 10)}.jpg` }}
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
          imageProps={{ src: `/kitten-${Math.floor(Math.random() * 10)}.jpg` }}
          title="Anim enim deserunt ut mollit cupidatat culpa id consequat ut sit sint culpa qui anim fugiat deserunt laborum."
          amount="10 000€"
          contribution="1 468 000"
          availability="5"
          id="72ce89ff-6592-4b9a-9e5f-7f7b3ddd7b26"
          simpleName="Anim enim deserunt ut mollit"
        />
      </FlexWrapper>
    </div>
  )
}
