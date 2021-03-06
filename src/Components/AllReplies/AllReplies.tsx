import { IReply } from '../../types'
import React from 'react'
import Reply from '../Reply/Reply'
import './AllReplies.scss';

interface IAllReplies {
  allReplies: Array<IReply>
}

const AllReplies = ({ allReplies }: IAllReplies) => {
  const replyData = allReplies.map((reply: IReply) => {
    return (
      <Reply
        key={reply.cid}
        author={reply.author}
        timestamp={reply.timestamp}
        body={reply.body!}
        cid={reply.cid}
        uid={reply.uid}
      />
    )
  })

  return (
    <section className='replies-container' data-cy='replies-section'>
      { replyData}
    </section>
  )
}

export default AllReplies