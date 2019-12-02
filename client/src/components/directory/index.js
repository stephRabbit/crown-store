import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../store/ducks/directory/selectors'

import MenuItem from '../menu-item'

import { DirectoryMenuContainer } from './styles'

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections &&
        sections.map(({ id, ...rest }) => <MenuItem key={id} {...rest} />)}
    </DirectoryMenuContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
