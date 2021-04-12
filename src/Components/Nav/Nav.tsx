
import React from 'react'
import NewPostForm from '../NewPostForm/NewPostForm'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <button><img src='../../assets/filter.svg'/></button>
      <button><img src='../../assets/filter.svg'/></button>
      {/* <Link> */}
        <button><img src='../../assets/filter.svg'/></button>
      {/* </Link> */}
      <button><img src='../../assets/filter.svg'/></button>
      <button><img src='../../assets/filter.svg'/></button>
    </nav>
  )
}

export default Nav