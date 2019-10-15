import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  const linkTo = () => history.push(`${match.url}${linkUrl}`)

  return (
    <div className={`${size} menu-item`} onClick={linkTo}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='background-image'></div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
