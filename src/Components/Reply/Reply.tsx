import { IReply } from '../../types'
import './Reply.scss';
import '../Post/Post.scss'
import userPhoto1 from '../../assets/people-1.svg'
import userPhoto2 from '../../assets/people-2.svg'
import userPhoto3 from '../../assets/people-3.svg'
import userPhoto4 from '../../assets/people-4.svg'
import userPhoto5 from '../../assets/people-5.svg'
import userPhoto6 from '../../assets/people-6.svg'
import React from "react";

const Reply = ({ key, author, timestamp, body, cid, uid }: IReply) => {
  let fDate = new Date(timestamp)
  let timeString = fDate.toLocaleTimeString('en-US')
  const formattedDate = new Date(fDate).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  let userPhotoSrc;

  if (author === 'Leia Organa') {
    userPhotoSrc = userPhoto1
  } else if (author === 'Padmé Amidala') {
    userPhotoSrc = userPhoto2
  } else if (author === 'Princess Bubblegum') {
    userPhotoSrc = userPhoto3
  } else if (author === 'Marceline') {
    userPhotoSrc = userPhoto4
  } else if (author === 'Lara') {
    userPhotoSrc = userPhoto5
  } else if (author === 'Ada Lovelace') {
    userPhotoSrc = userPhoto6
  }

  return (
    <article className='reply-container'>
      <section className='reply-info'>
        <img src={userPhotoSrc} alt='replier' className='icon reply-info__image' />
        <div className='reply-info__user-container'>
          <h1 className='reply-info__replier-name'>{author}</h1>
          <p className='reply-info__date'>{formattedDate}, {timeString}</p>
        </div>
      </section>
      <p className='reply__comment'>{body}</p>
    </article>
  )
}

export default Reply
