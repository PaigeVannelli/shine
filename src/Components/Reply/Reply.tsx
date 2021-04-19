import { IReply } from '../../types'
import './Reply.scss';

const Reply = ({ key, author, timestamp, body, cid, uid }: IReply) => {
  return (
    <article className='reply'>
      <h1 className='reply__replier'>{author}</h1>
      <p className='reply__comment'>{body}</p>
    </article>
  )
}

export default Reply