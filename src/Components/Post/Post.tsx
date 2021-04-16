
import React from 'react'
import { Link } from 'react-router-dom'
import './Post.scss'
import { IPost } from '../../types'
import userPhoto1 from '../../assets/people-1.svg'
import bookmarkIcon from '../../assets/bookmark.svg'
import shareIcon from '../../assets/share.svg'
import heartIcon from '../../assets/heart.svg'
import commentsIcon from '../../assets/send.svg'

const Post = ({title, content, author, timestamp, pid}: IPost) => {
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
      <footer>
        <img src={heartIcon} alt='heart-icon' className='heart'/>
        <Link to={`/${pid}`}>
          <img src={commentsIcon} alt='share-icon' className='comments'/>
        </Link>
        <img src={shareIcon} alt='share-icon' className='share'/>
      </footer>
    </article>
  )
}

export default Post