
import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import AllPosts from '../AllPosts/AllPosts'
import Nav from '../Nav/Nav'

const MainPage = () => {
  return (
    <section>
      <Searchbar />
      <AllPosts />
      <Nav />
    </section>
  )
}

export default MainPage