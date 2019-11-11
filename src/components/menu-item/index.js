import React from 'react'
import { withRouter } from 'react-router-dom'

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './styles'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  const linkTo = () => history.push(`${match.url}${linkUrl}`)

  return (
    <MenuItemContainer size={size} onClick={linkTo}>
      <BackgroundImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>Shop Now</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem)
