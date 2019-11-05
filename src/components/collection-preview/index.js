import React from 'react'

import CollectionItem from '../collection-item'

import './collection-preview.scss'

function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='items'>
        {/* TODO: Performance concern - array chain called everytime component get rendered  */}
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
