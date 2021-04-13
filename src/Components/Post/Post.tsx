
import React from 'react'
import './Post.scss'
import { IPost } from '../../types'
import userPhoto1 from '../../assets/people-1.svg'
import bookmarkIcon from '../../assets/bookmark.svg'

const Post = ({title, content}: IPost) => {
  return (
    <article className='post'>
      {/* <PostHeader /> */}
      <header className='post-header'> 
        <img src={userPhoto1} alt='user-profile-photo' className='user-photo'/>
        <div>
          <h1>NAME</h1>
          <p>DATE</p>
        </div>
        <button className='bookmark-button'>
          <img src={bookmarkIcon} alt='bookmark-icon' className='bookmark'/>
        </button>
      </header>
        <h1>{title}</h1>
      {/* <PostNav /> */}
        <p>{content}</p>
      {/* should be each post from allposts */}
    </article>
  )
}

export default Post