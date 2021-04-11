
import React from 'react'
import Post from '../Post/Post'

const AllPosts = () => {

  const postData = allPosts.map(post => {
    return (
      <h1>posts!</h1>
    )
  })

  return (
    <section>
      {postData}
    </section>
  )
}

export default AllPosts