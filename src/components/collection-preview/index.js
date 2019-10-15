import React from 'react'

import './collection-preview.scss'

import CollectionItem from '../collection-item'

function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...rest }) => (
            <CollectionItem key={id} {...rest} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
