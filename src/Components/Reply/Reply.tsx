import { IReply } from '../../types'
import '../Post/Post.scss'
import userPhoto1 from '../../assets/people-1.svg'
import userPhoto2 from '../../assets/people-2.svg'
import userPhoto3 from '../../assets/people-3.svg'
import userPhoto4 from '../../assets/people-4.svg'
import userPhoto5 from '../../assets/people-5.svg'
import userPhoto6 from '../../assets/people-6.svg'
import bookmarkIcon from "../../assets/bookmark.svg";
import React from "react";

const Reply = ({key, author, timestamp, body, cid, uid}: IReply) => {
    let fDate = new Date(timestamp)
    let timeString = fDate.toLocaleTimeString('en-US')
    const formattedDate = new Date(fDate).toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
    let userPhotoSrc;

    if (author === 'Leia Organa') {
      userPhotoSrc = userPhoto1
    } else if (author === 'Padmé Amidala') {
        userPhotoSrc = userPhoto2
    } else if (author === 'Pat') {
        userPhotoSrc = userPhoto3
    } else if (author === 'Marceline') {
      userPhotoSrc = userPhoto4
    } else if (author === 'Lara') {
        userPhotoSrc = userPhoto5
    } else if (author === 'Ada Lovelace') {
        userPhotoSrc = userPhoto6
    }

  return (
    <article>
      <header className='post-header'>
        <div className='post-user-info'>
            <img src={userPhotoSrc} alt='user-profile' className='user-photo' />
            <div className='user-info'>
                <h1 className='name'>{author}</h1>
                <p className='date'>{formattedDate}, {timeString}</p>
                <p>{body}</p>
            </div>
        </div>
      </header>
    </article>
  )
}

export default Reply
