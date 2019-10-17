import React, { useState } from 'react'

import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preview'

import './shop.scss'

function Shop() {
  const [collections] = useState(SHOP_DATA)
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  )
}

export default Shop
