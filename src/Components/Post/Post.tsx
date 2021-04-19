
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
  // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }
  let fDate = new Date(timestamp)
  let timeString = fDate.toLocaleTimeString('en-US')

  const formattedDate = new Date(fDate).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <article className='post'>
      <header className='post-header'>
        <div className='user-info-container'>
          <img src={userPhoto1} alt='user profile pic' className='user-info__photo' />
          <div className='user-info'>
            <h1 className='name user-info__name'>{author}</h1>
            <p className='date user-info__date'>{formattedDate}, {timeString}</p>
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
          <img src={heartIcon} alt='favorite' className='icon' />
        </button>
        <Link to={`/${pid}`}>
          <button className='footer__button'>
            <img src={commentsIcon} alt='comment' className='icon' data-cy='expanded-view-button' />
          </button>
        </Link>
        <button className='footer__button'>
          <img src={shareIcon} alt='send content' className='icon' />
        </button>
      </footer>
    </article >
  )
}

export default Post
