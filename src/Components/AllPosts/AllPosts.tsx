
import React from 'react'
import Post from '../Post/Post'
import './AllPosts.scss'

interface Post {
  pid: number;
  uid: number;
  title: string;
  content: string;
}
interface IAllPosts {
  allPosts: Array<Post>
}

const AllPosts = ({allPosts}: IAllPosts) => {
  let postData 
  if (allPosts) {
    postData = allPosts.map((post: Post) => {
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