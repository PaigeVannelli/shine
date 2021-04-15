
import React from 'react'
import Post from '../Post/Post'
import './AllPosts.scss'
import { IPost, IAllPosts} from '../../types'

const AllPosts = ({allPosts}: IAllPosts) => {
  let postData 
  if (allPosts) {
    postData = allPosts.map((post: IPost) => {
      return <Post title={post.title} content={post.content} key={post.pid}/>
    })
  }

  return (
    <section className='all-posts-section'>
      {postData}
    </section>
  )
}

export default AllPosts