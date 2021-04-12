
import React from 'react'
import Post from '../Post/Post'
import './AllPosts.scss'

interface Posts {
  pid: number;
  uid: number;
  title: string;
  content: string;
}
interface IAllPosts {
  allPosts: Array<Posts>
}
// interface IAllPosts {
//   allPosts: any[];
// }

const AllPosts = ({allPosts}: IAllPosts) => {
  let postData 
  if (allPosts) {
    postData = allPosts.map((post: {title: string; content: string}) => {
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