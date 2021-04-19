import { IReply } from '../../types'

const Reply = ({key, author, timestamp, body, cid, uid}: IReply) => {
  return (
    <article>
      <h1>{author}</h1>
      <p>{body}</p>
    </article>
  )
}

export default Reply