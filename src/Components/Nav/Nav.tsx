
import React from 'react'
import NewPostForm from '../NewPostForm/NewPostForm'
import { Link } from 'react-router-dom'
import filterIcon from '../../assets/filter.svg'

const Nav = () => {
  return (
    <nav>
      <button><img src='../../assets/filter.svg'/></button>
      <button><img src='../../assets/filter.svg'/></button>
      {/* <Link> */}
        <button><img src='../../assets/filter.svg'/></button>
      {/* </Link> */}
      <button><img src='../../assets/filter.svg'/></button>
      {/* <button><img src={filterIcon}/></button> */}
    </nav>
  )
}

export default Nav