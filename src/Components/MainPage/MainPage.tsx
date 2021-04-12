
import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import AllPosts from '../AllPosts/AllPosts'
import Nav from '../Nav/Nav'
import './MainPage.scss'

interface Posts {
  pid: number;
  uid: number;
  title: string;
  content: string;
}
interface IMainPage {
  allPosts: Array<Posts>
}

const MainPage = ({allPosts}: IMainPage) => {
  return (
    <section className='main-page'>
      <Searchbar />
      <AllPosts allPosts={allPosts} />
      {/* <Nav /> */}
    </section>
  )
}

export default MainPage