
import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import AllPosts from '../AllPosts/AllPosts'
import Nav from '../Nav/Nav'

// interface IMainPage {
//   props: any
// }

const MainPage = (props: any) => {
  return (
    <section>
      <Searchbar />
      <AllPosts allPosts={props} />
      <Nav />
    </section>
  )
}

export default MainPage