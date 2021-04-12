
import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import AllPosts from '../AllPosts/AllPosts'
import Nav from '../Nav/Nav'
import './MainPage.scss'
import { IAllPosts } from '../../types'

const MainPage = ({ allPosts }: IAllPosts) => {
  return (
    <section className='main-page'>
      <Searchbar />
      <AllPosts allPosts={allPosts} />
      <Nav />
    </section>
  )
}

export default MainPage