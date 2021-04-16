import React, { Component } from 'react';
import './ExpandedPost.scss';
import Post from '../Post/Post'
import AllReplies from '../AllReplies/AllReplies'

interface IExpandedPosts {
  replies: Array<IReplies>
}

class ExpandedPosts extends Component<{}, IExpandedPosts> {
  constructor(props: {}) {
    super(props)
    this.state = {
      replies: []
    }
  }



  render() {
    return (
      <>
      <Post />
      < AllReplies />
      <Form />
      < />
    )
  }
}