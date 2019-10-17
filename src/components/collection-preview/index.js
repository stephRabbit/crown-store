import React from 'react'

import CollectionItem from '../collection-item'

import './collection-preview.scss'

function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {/* TODO: Performance concern - array chain called everytime component get rendered  */}
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
