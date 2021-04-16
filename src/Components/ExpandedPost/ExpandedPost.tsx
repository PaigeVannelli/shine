import React, { Component } from 'react';
import './ExpandedPost.scss';
import Post from '../Post/Post'
// import AllReplies from '../AllReplies/AllReplies'
// import ReplyForm from '../ReplyForm/ReplyForm'
import { IPost } from '../../types'
import { getPost } from '../../apiCalls';
// import AllReplies from '../AllReplies/AllReplies'

interface IExpandedPost {
  replies: Array<any>
  currentPost: IPost
}

interface IExpandedPostProps {
  match?: any
}
class ExpandedPost extends Component<IExpandedPostProps, IExpandedPost> {
  constructor(props: IExpandedPostProps) {
    super(props)
    this.state = {
      replies: [],
      currentPost: {}
    }
  };
  
  componentDidMount = () => {
    getPost(this.props.match.params.id)
  }

  render() {
    return (
      <section>
        <Post />
        {/* <AllReplies />
        <ReplyForm /> */}
      </section>
    )
  }
}

export default ExpandedPost