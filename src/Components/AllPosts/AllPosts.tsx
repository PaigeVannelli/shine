
import React from 'react'
import Post from '../Post/Post'

interface IAllPosts {

}

const AllPosts = (props: any) => {
  let postData 
  if (props.allPosts.allPosts.posts) {
    postData = props.allPosts.allPosts.posts.map((post: any) => {
      console.log(post)
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