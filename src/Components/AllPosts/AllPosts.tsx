
import React from 'react'
import Post from '../Post/Post'

interface IAllPosts {

}

const AllPosts = (props: any) => {
  if (props.allPosts.allPosts.posts.length > 1) {
    const postData = props.allPosts.allPosts.posts.map((post: {}) => {
      console.log(post)
    })
  }

  return (
    <section>
      {/* {postData} */}
    </section>
  )
}

export default AllPosts