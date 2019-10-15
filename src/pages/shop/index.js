import React, { useState } from 'react'

import './shop.scss'
import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preview'

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
