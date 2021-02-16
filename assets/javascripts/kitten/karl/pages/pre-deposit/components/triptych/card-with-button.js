import React from 'react'
import { Marger } from '../../../../../components/layout/marger'
import { Title } from '../../../../../components/typography/title'
import { Text } from '../../../../../components/typography/text'
import { Paragraph } from '../../../../../components/typography/next/paragraph'
import { parseHtml } from '../../../../../helpers/utils/parser'
import { HorizontalStroke } from '../../../../../components/layout/horizontal-stroke'
import COLORS from '../../../../../constants/colors-config'

export const CardWithButton = ({
  imageProps,
  titleProps,
  title,
  paragraph,
  notice,
  horizontalStroke,
  marginBetweenImgAndContent,
}) => (
  <div className="PreDeposit__triptych__card">
    <Marger
      bottom={marginBetweenImgAndContent}
      className="k-Card__imageContainer"
    >
      <img
        {...imageProps}
        className="k-Card__image PreDeposit__triptych__card__image"
      />
    </Marger>
    <Marger top={marginBetweenImgAndContent} bottom={horizontalStroke ? 2 : 1}>
      <Title
        {...titleProps}
        tag="h3"
        margin={false}
        modifier="senary"
        style={{ color: COLORS.font1 }}
      >
        {parseHtml(title)}
      </Title>
    </Marger>

    {horizontalStroke && (
      <Marger top="2" bottom="3">
        <HorizontalStroke style={{ color: COLORS.font1 }} />
      </Marger>
    )}
    <Marger top={horizontalStroke ? 3 : 1} bottom={notice ? 1.5 : 3}>
      <Paragraph
        modifier="tertiary"
        margin={false}
        style={{ color: COLORS.font1 }}
      >
        {parseHtml(paragraph)}
      </Paragraph>
    </Marger>

    {notice && (
      <Marger top="1.5" bottom="4">
        <Paragraph
          margin={false}
          className="PreDeposit__triptych__card__notice"
        >
          <Text lineHeight="normal" size="micro" weight="regular" color="font1">
            {parseHtml(notice)}
          </Text>
        </Paragraph>
      </Marger>
    )}
  </div>
)

CardWithButton.defaultProps = {
  imageProps: {},
  marginTop: '3',
  marginBottom: '0',
  marginBetweenImgAndContent: '2',
}
