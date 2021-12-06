import React from 'react'
import { 
  Text,
  HorizontalStroke,
} from 'kitten'

export const ListItems = () => {
  return (
    <div className="k-Footer__listWrapper">
    {/* 1 */}
      <div className="k-u-margin-left-double@m-up">
        <Text
          size="big"
          weight="bold"
          cssColor="var(--color-grey-000)"
        >
          Financer un projet
        </Text>
        <HorizontalStroke className="k-Footer__stroke" color="var(--color-grey-000)" customSize={{ width: 5, height: 2 }} />
          <ul className="k-Footer__linkList">
            <li>
              <a 
                className="k-Footer__linkList--item"
                href="#"
              >
                Réussir sa collecte
              </a>
            </li>
          </ul>
      </div>

      {/* 2 */}
      <div className="k-u-margin-left-double@m-up">
        <Text
          size="big"
          weight="bold"
          cssColor="var(--color-grey-000)"
        >
          Financer un projet
        </Text>
        <HorizontalStroke className="k-Footer__stroke" color="var(--color-grey-000)" customSize={{ width: 5, height: 2 }} />
        <ul className="k-Footer__linkList">
          <li>
            <a href="#" className="k-Footer__linkList--item">
              Réussir sa collecte
            </a>
          </li>
        </ul>
      </div>

      {/* 3 */}
      <div className="k-u-margin-left-double@m-up">
        <Text
          size="big"
          weight="bold"
          cssColor="var(--color-grey-000)"
        >
          Financer un projet
        </Text>
        <HorizontalStroke className="k-Footer__stroke" color="var(--color-grey-000)" customSize={{ width: 5, height: 2 }} />
        <ul className="k-Footer__linkList">
          <li>
            <a href="#" className="k-Footer__linkList--item">
              Réussir sa collecte
            </a>
          </li>
        </ul>
      </div>

      {/* 4 */}
      <div className="k-u-margin-left-double@m-up">
        <Text
          size="big"
          weight="bold"
          cssColor="var(--color-grey-000)"
        >
          Financer un projet
        </Text>
        <HorizontalStroke className="k-Footer__stroke" color="var(--color-grey-000)" customSize={{ width: 5, height: 2 }} />
        <ul className="k-Footer__linkList">
          <li>
            <a href="#" className="k-Footer__linkList--item">
              Réussir sa collecte
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
