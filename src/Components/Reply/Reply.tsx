import { IReply } from '../../types'

const Reply = ({key, author, timestamp, body, cid, uid}: IReply) => {
  let fDate = new Date(timestamp)
  let timeString = fDate.toLocaleTimeString('en-US')
  const formattedDate = new Date(fDate).toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})

  return (
    <article>
      <h1>{author}</h1>
        <h5>{formattedDate}, {timeString}</h5>
      <p>{body}</p>
    </article>
  )
}

export default Reply
