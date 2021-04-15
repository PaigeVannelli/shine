
import React from 'react'
import Post from '../Post/Post'
import './AllPosts.scss'
import { IPost, IAllPosts} from '../../types'

const AllPosts = ({allPosts}: IAllPosts) => {
  let postData 
  if (allPosts) {
    postData = allPosts.map((post: IPost) => {
      return (
        <Post 
          key={post.pid}
          title={post.title} 
          content={post.content}
          author={post.author}
          timestamp={post.timestamp}
        />
      )
    })
  }

  return (
    <section className='all-posts-section'>
      {postData}
    </section>
  )
}

export default AllPosts