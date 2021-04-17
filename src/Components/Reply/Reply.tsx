interface IReply {
  key: number,
  author: string,
  timestamp: number,
  body: string,
  cid: number,
  uid: number
}

const Reply = ({key, author, timestamp, body, cid, uid}: IReply) => {
  return (
    <h1>{author}</h1>
  )
}

export default Reply