//map over all replies and generate Reply components 
// funcational component 
import React from 'react'
import Reply from '../Reply/Reply'

interface IAllReplies {
  allReplies: Array<any>
}

const AllReplies = ({allReplies}: IAllReplies) => {
  const replyData = allReplies.map(reply => {
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
    <h1>Replies</h1>
  )
}

export default AllReplies