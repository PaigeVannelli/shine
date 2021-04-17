//map over all replies and generate Reply components 
// funcational component 
import React from 'react'
import Reply from '../Reply/Reply'


interface IReply {
  key?: number;
  author: string;
  timestamp: number;
  body?: string;
  cid: number;
  uid: number
}
interface IAllReplies {
  allReplies: Array<any>
}

interface IPost {
  key: number;
  author: string;
  timestamp: number;
  body: string;
  cid: number;
  uid: number
}

const AllReplies = ({allReplies}: IAllReplies) => {
   const replyData = allReplies.map((reply: IPost) => {
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