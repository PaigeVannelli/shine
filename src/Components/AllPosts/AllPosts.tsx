
import React from 'react'
import Post from '../Post/Post'

interface IAllPosts {
  allPosts: any[];
}

const AllPosts = ({allPosts}: IAllPosts) => {
  let postData 
  if (allPosts) {
    postData = allPosts.map((post: {title: string; content: string}) => {
      return <Post title={post.title} content={post.content}/>
    })
  }

  return (
    <section>
      {postData}
    </section>
  )
}

export default AllPosts