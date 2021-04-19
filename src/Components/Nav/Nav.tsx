
import React from 'react'
import { NavLink } from 'react-router-dom'
import homeIcon from '../../assets/home.svg'
import bellIcon from '../../assets/bell.svg'
import plusIcon from '../../assets/plus.svg'
import starIcon from '../../assets/star.svg'
import userIcon from '../../assets/user.svg'
import './Nav.scss'

type NavProps = {
  resetFoundPosts: () => void;
}

const Nav: React.FC<NavProps> = (props) => {
  return (
    <footer className='nav-bar' data-cy='nav-bar'>
      <NavLink
        to='/'
        onClick={props.resetFoundPosts}
        activeClassName='activated-nav'
      >
        <img src={homeIcon} alt='home-icon' className='nav-button-image' />
      </NavLink>
      <img src={bellIcon} alt='bell-icon' className='nav-button-image' />
      <NavLink
        to='/new-post'
        activeClassName='activated-nav'
        data-cy='add-post-button'
      >
        <img src={plusIcon} alt='plus-icon' className='nav-button-image add-icon' />
      </NavLink>
      <img src={starIcon} alt='star-icon' className='nav-button-image' />
      <img src={userIcon} alt='user-icon' className='nav-button-image' />
    </footer>
  )
}

export default Nav
