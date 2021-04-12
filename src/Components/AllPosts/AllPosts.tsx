
import React from 'react'
import Post from '../Post/Post'
import './AllPosts.scss'
import {IPosts, IAllPosts} from '../../types'

const AllPosts = ({allPosts}: IAllPosts) => {
  let postData 
  if (allPosts) {
    postData = allPosts.map((post: IPosts) => {
      return <Post title={post.title} content={post.content}/>
    })
  }

  return (
    <section className='all-posts-section'>
      {postData}
    </section>
  )
}

export default AllPosts