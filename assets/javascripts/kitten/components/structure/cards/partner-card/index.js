import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import classNames from 'classnames'
import { Tag } from '../../../information/tag'

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;

  border-radius: var(--border-radius-m);
  color: var(--color-grey-900);
  transition: box-shadow var(--transition);
  box-shadow: var(--box-shadow-m);
  background-color: var(--color-grey-000);

  &[href]:focus-visible {
    outline: var(--outline);
  }

  .k-PartnerCard__image {
    position: relative;
    overflow: hidden;
    flex: 0 0 auto;
    border-top-left-radius: calc(var(--border-radius-m) - 1px);
    border-top-right-radius: calc(var(--border-radius-m) - 1px);

    .k-PartnerCard__image__image {
      display: block;
      width: 100%;
      object-fit: cover;
      object-position: center;
      @supports (aspect-ratio: 16 / 10) {
        aspect-ratio: 16 / 10;
      }
    }

    @supports not (aspect-ratio: 16 / 10) {
      height: 0;
      padding-bottom: calc((10 / 16) * 100%);

      .k-PartnerCard__image__image {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }

  .k-PartnerCard__content {
    flex: 1 0 auto;
    position: relative;
    text-align: center;
  }

  .k-PartnerCard__avatar {
    position: absolute;
    width: ${pxToRem(130)};
    height: ${pxToRem(75)};
    padding-block: ${pxToRem(24)};
    box-sizing: border-box;
    left: calc(50% - ${pxToRem(130)} /2);
    top: -${pxToRem(37)};
    background-color: var(--color-grey-000);
    border-radius: var(--border-radius-rounded);
    padding: ${pxToRem(10)};
    box-shadow: 0px 0px ${pxToRem(20)} rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .k-PartnerCard__line {
    padding: ${pxToRem(60)} ${pxToRem(20)} ${pxToRem(20)};
    flex: 0 0 auto;
  }
`

export const PartnerCard = ({
  children,
  className,
  href,
  imageProps: {alt, imageClassName, ...otherImageProps },
  ...props
}) => {
  return (
    <StyledCard
      as={href ? 'a' : 'div'}
      href={href}
      {...props}
    >
      <div className="k-PartnerCard__image">
          <img
            {...otherImageProps}
            alt={alt || ''}
            className={classNames(
              'k-PartnerCard__image__image',
              imageClassName,
            )}
          />
      </div>
      <div className="k-PartnerCard__content">
        {children}
      </div>
    </StyledCard>
  )
}

PartnerCard.defaultProps = {
  imageProps: {
    src: '',
    alt: '',
  },
}

PartnerCard.Line = ({ className, ...props }) => {
  return (
    <div className="k-PartnerCard__line" {...props} />
  )
}

PartnerCard.Avatar = ({ className, imageProps, ...props }) => {
  return (
    <div className={classNames('k-PartnerCard__avatar', className)} {...props}>
      <img alt="" {...imageProps} />
    </div>
  )
}

PartnerCard.Sticker = ({ className, ...props }) => {
  return (
    <div className={classNames('k-PartnerCard__sticker', className)} {...props}>
      <Tag
        type="disabled"
        className={classNames(
          'k-u-margin-bottom-double',
          'k-u-margin-top-double',
          'k-u-ellipsis',
          className
        )}
        {...props}
      />
    </div>
  )
}
