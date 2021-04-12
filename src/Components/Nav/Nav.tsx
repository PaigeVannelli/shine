
import React from 'react'
import NewPostForm from '../NewPostForm/NewPostForm'
import { Link } from 'react-router-dom'
import filterIcon from '../../assets/filter.svg'
import './Nav.scss'

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <button className='nav-button'>
        <img src={filterIcon} className='nav-button-image'/>
      </button>
      <button className='nav-button'>
        <img src={filterIcon} className='nav-button-image'/>
      </button>
      <button className='nav-button'>
        <img src={filterIcon} className='nav-button-image'/>
      </button>
      <button className='nav-button'>
        <img src={filterIcon} className='nav-button-image'/>
      </button>
      <button className='nav-button'>
        <img src={filterIcon} className='nav-button-image'/>
      </button>
    </nav>
  )
}

export default Nav