//map over all replies and generate Reply components 
// funcational component 
import React from 'react'
import Reply from '../Reply/Reply'

interface IAllReplies {
  allReplies: Array<IReply>
}

interface IReply {
  key: number,
  author: string,
  timestamp: number,
  body: string,
  cid: number,
  uid: number
}

const AllReplies = ({allReplies}: IAllReplies) => {
  const replyData = allReplies.map((reply: IReply) => {
    return (
      <Reply
        key={reply.cid}
        author={reply.author}
        timestamp={reply.timestamp}
        body={reply.body}
        cid={reply.cid}
        uid={reply.uid}
      />
    )
  })

  return (
    <section>
      { replyData }
    </section>
  )
}

export default AllReplies