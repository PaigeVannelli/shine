
import React from 'react'
interface IPost {
  title: string;
  content: string;
}

const Post = ({title, content}: IPost) => {
  return (
    <article>
      {/* <PostHeader /> */}
        <h1>{title}</h1>
        <p>{content}</p>
      {/* <PostNav /> */}
      {/* should be each post from allposts */}
    </article>
  )
}

export default Post