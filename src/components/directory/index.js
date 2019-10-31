import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../store/ducks/directory/selectors'

import MenuItem from '../menu-item'

import './directory.scss'

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections &&
        sections.map(({ id, ...rest }) => <MenuItem key={id} {...rest} />)}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
