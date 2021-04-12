
import React from 'react'
import './Post.scss'
import {IPosts} from '../../types'

const Post = ({title, content}: IPosts) => {
  return (
    <article className='post'>
      {/* <PostHeader /> */}
        <h1>{title}</h1>
        <p>{content}</p>
      {/* <PostNav /> */}
      {/* should be each post from allposts */}
    </article>
  )
}

export default Post