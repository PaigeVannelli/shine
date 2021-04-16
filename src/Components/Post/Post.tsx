
import React from 'react'
import './Post.scss'
import { IPost } from '../../types'
import userPhoto1 from '../../assets/people-1.svg'
import bookmarkIcon from '../../assets/bookmark.svg'

const Post = ({title, content, author, timestamp}: IPost) => {
  return (
    <article className='post'>
      {/* <PostHeader /> */}
      <header className='post-header'> 
        <div className='post-user-info'>
          <img src={userPhoto1} alt='user-profile-photo' className='user-photo'/>
          <div className='user-info'>
            <h1 className='name'>{author}</h1>
            <p className='date'>{timestamp}</p>
          </div>
        </div>
        <button className='bookmark-button'>
          <img src={bookmarkIcon} alt='bookmark-icon' className='bookmark'/>
        </button>
      </header>
        <h1 className='post-title'>{title}</h1>
        <p className='post-content'>{content}</p>
      {/* should be each post from allposts */}
    </article>
  )
}

export default Post