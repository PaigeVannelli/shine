import React, { Component } from 'react';
import './ExpandedPost.scss';
import AllReplies from '../AllReplies/AllReplies';
import ReplyForm from '../ReplyForm/ReplyForm';
import Post from '../Post/Post';

interface IExpandedPosts {
  replies: Array<string>
}

class ExpandedPosts extends Component<{}, IExpandedPosts> {
  constructor(props: {}) {
    super(props)
    this.state = {
      replies: [],
    }
  }

  addReply = (newReply: string): void => {
    let totalReplies = this.state.replies.concat(newReply)
    this.setState({ replies: totalReplies })
  }

  render() {
    return (
      <>
      // <Post />
      <AllReplies />
      < ReplyForm addReply = { this.addReply } />
        < />
    )
  }
}

export default ExpandedPosts;