
import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import AllPosts from '../AllPosts/AllPosts'
import Nav from '../Nav/Nav'
import './MainPage.scss'

interface IMainPage {
  // allPosts: any
  allPosts: any
  // posts: any[];
}

const MainPage = ({allPosts}: IMainPage) => {
  return (
    <section className='main-page'>
      <Searchbar />
      <AllPosts allPosts={allPosts.posts} />
      {/* <Nav /> */}
    </section>
  )
}

export default MainPage