import React from 'react'
import './Loading.scss';
import logo from '../../assets/logo.png';


const Loading = () => {
  return (
    <section className='logo__container'>
      <img className='logo' src={logo} alt="close icon" />
      <div className='slogan__container'>
        <span>SHE</span><h1> in Engineering</h1>
      </div>
    </section>
  )
}

export default Loading