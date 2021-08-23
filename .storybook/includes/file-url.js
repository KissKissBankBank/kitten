import React from 'react'
import { Text, List } from 'kitten'

const GH_PREFIX = 'https://github.com/KissKissBankBank/kitten/blob/master/'

export const FileUrl = ({filepath, filenames = 'index.js'}) => {
  const pathAsArray = filepath.split('/').slice(1, -1)

  const ghUrl = `${GH_PREFIX}${pathAsArray.join('/')}/`
  const shortUrl = `${pathAsArray.slice(2).join('/')}/`

  const files = []

  if (typeof(filenames) === 'string') {
    files.push(filenames)
  } else if (typeof(filenames) === 'object' && Array.isArray(filenames)) {
    files.push(...filenames)
  }

  return (
    <List className="k-u-margin-top-singleHalf k-u-margin-bottom-quadruple">
      {files.map((item, index) => (
        <Text
          key={`${item}_${index}`}
          tag="a"
          href={`${ghUrl}${item}`}
          weight="regular"
          className="k-u-link k-u-link-primary1 k-u-decoration-underline"
        >
          {shortUrl}{item}
        </Text>
        )
      )}
    </List>
  )
}
