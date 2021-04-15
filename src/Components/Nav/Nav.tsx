
import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../../assets/home.svg'
import bellIcon from '../../assets/bell.svg'
import plusIcon from '../../assets/plus.svg'
import starIcon from '../../assets/star.svg'
import userIcon from '../../assets/user.svg'
import './Nav.scss'

const Nav = () => {
  return (
    <footer className='nav-bar'>
      <button className='nav-button'>
        <img src={homeIcon} alt='home-icon' className='nav-button-image' />
      </button>
      <button className='nav-button'>
        <img src={bellIcon} alt='bell-icon' className='nav-button-image' />
      </button>
      <Link to='/new-post'>
        <button className='nav-button'>
          <img src={plusIcon} alt='plus-icon' className='nav-button-image' />
        </button>
      </Link>
      <button className='nav-button'>
        <img src={starIcon} alt='star-icon' className='nav-button-image' />
      </button>
      <button className='nav-button'>
        <img src={userIcon} alt='user-icon' className='nav-button-image' />
      </button>
    </footer>
  )
}

export default Nav