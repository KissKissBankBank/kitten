import React from 'react'
import { Text, List } from 'kitten'
import concat from 'lodash/concat'

const GH_PREFIX = 'https://github.com/KissKissBankBank/kitten/blob/master/'

export const FileUrl = ({filepath, filenames = 'index.js'}) => {
  const pathAsArray = filepath.split('/').slice(1, -1)

  const ghUrl = `${GH_PREFIX}${pathAsArray.join('/')}/`
  const shortUrl = `${pathAsArray.slice(2).join('/')}/`

  const files = concat(filenames)

  return (
    <List className="k-u-margin-top-singleHalf k-u-margin-bottom-doubleHalf">
      {files.map((item, index) => (
        <Text
          key={`${item}_${index}`}
          tag="a"
          href={`${ghUrl}${item}`}
          weight="regular"
          className="k-u-link k-u-link-primary1 k-u-decoration-underline"
          target="_blank"
        >
          {`${shortUrl}${item}`}
        </Text>
        )
      )}
    </List>
  )
}
