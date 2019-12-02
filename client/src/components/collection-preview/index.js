import React from 'react'

import CollectionItem from '../collection-item'

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './styles'

function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title}</TitleContainer>
      <PreviewContainer className='items'>
        {/* TODO: Performance concern - array chain called everytime component get rendered  */}
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
