import React, { Component } from 'react';
import './ExpandedPost.scss';
import Post from '../Post/Post'
import AllReplies from '../AllReplies/AllReplies'
import ReplyForm from '../ReplyForm/ReplyForm'
// import AllReplies from '../AllReplies/AllReplies'

interface IExpandedPosts {
  replies: any[]
}
class ExpandedPosts extends Component<{}, IExpandedPosts> {
  constructor(props: {}) {
    super(props)
    this.state = {
      replies: []
    }
  };


  render() {
    return (
        <section>
        <Post />
        <AllReplies />
        <Form />
      </section>
    )
  }
}