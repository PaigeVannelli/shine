
import React from 'react'
import { Link } from 'react-router-dom'
import './Post.scss'
import { IPost } from '../../types'
import userPhoto1 from '../../assets/people-1.svg'
import bookmarkIcon from '../../assets/bookmark.svg'
import heartIcon from '../../assets/heart.svg'
import commentsIcon from '../../assets/comment.svg'
import shareIcon from '../../assets/three.svg'


const Post = ({ title, content, author, timestamp, pid, replies }: IPost) => {
  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = new Date(timestamp).toLocaleDateString('en-GB', { timeZone: 'UTC' })

  return (
    <article className='post'>
      <header className='post-header'>
        <div className='post-user-info'>
          <img src={userPhoto1} alt='user profile pic' className='user-photo' />
          <div className='user-info'>
            <h1 className='user-info__name'>{author}</h1>
            <p className='user-info__date'>{formattedDate}</p>
          </div>
        </div>
        <button className='bookmark'>
          <img src={bookmarkIcon} alt='bookmark__icon' className='bookmark' />
        </button>
      </header>
      <h1 className='post-title'>{title}</h1>
      <p className='post-content'>{content}</p>
      <footer className='post-footer'>
        <button className='footer__button'>
          <img src={heartIcon} alt='share-icon' className='icon' />
        </button>
        <Link to={`/${pid}`}>
          <button className='footer__button'>
            <img src={commentsIcon} alt='share-icon' className='comments icon' />
          </button>
        </Link>
        <button className='footer__button'>
          <img src={shareIcon} alt='share-icon' className='share icon' />
        </button>
      </footer>
    </article>
  )
}

export default Post
