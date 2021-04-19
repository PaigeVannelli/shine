import React from 'react'
import Post from '../Post/Post'
import './AllPosts.scss'
import { IPost, IAllPosts } from '../../types'


const AllPosts = ({ allPosts }: IAllPosts) => {
  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const postData = allPosts.map((post: IPost) => {
    return (
      <Post
        key={post.pid}
        pid={post.pid}
        title={post.title}
        content={post.content}
        author={post.author}
        timestamp={post.timestamp}
        replies={[]}
      />
    )
  })

  return (
    <section className='all-posts-section' data-cy='all-posts-section'>
      {postData}
    </section>
  )
}

export default AllPosts