
import React from 'react'
import NewPostForm from '../NewPostForm/NewPostForm'

const Nav = () => {
  return (
    <button>
      {/* 4 buttons not connected to anything */}
      {/* <link to new form> link to form addnewpost */}
      <NewPostForm children />
    </button>
  )
}

export default Nav