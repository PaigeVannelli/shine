import React, { Component } from 'react';
import './ExpandedPost.scss';
import Post from '../Post/Post'
import AllReplies from '../AllReplies/AllReplies'
import ReplyForm from '../ReplyForm/ReplyForm'
import { IPost } from '../../types'
// import AllReplies from '../AllReplies/AllReplies'

interface IExpandedPost {
  replies: Array<any>
  currentPost: IPost
}

interface ICurrentPost {

}
class ExpandedPost extends Component<{}, IExpandedPost> {
  constructor(props: {}) {
    super(props)
    this.state = {
      replies: [],
      currentPost: {}
    }
  };

  render() {
    return (
      <section>
        <Post />
        <AllReplies />
        <ReplyForm />
      </section>
    )
  }
}

export default ExpandedPost