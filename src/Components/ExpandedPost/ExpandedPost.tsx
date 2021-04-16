import React, { Component } from 'react';
import './ExpandedPost.scss';
import Post from '../Post/Post'
// import AllReplies from '../AllReplies/AllReplies'
// import ReplyForm from '../ReplyForm/ReplyForm'
import { IPost } from '../../types'
import { getPost } from '../../apiCalls';
// import AllReplies from '../AllReplies/AllReplies'


interface ICurrentPost {
  pid: number
  uid: number
  author: string
  timestamp: number
  title: string
  content: string 
  comments: Array<IReply | undefined>
}

interface IExpandedPost {
  replies: Array<any>;
  currentPost: {
    [key: string]: ICurrentPost,
  };
};

interface IReply {
  cid: number;
  uid: number;
  author: string;
  timestamp: number;
  comment: string;
}

interface IExpandedPostProps {
  match?: any;
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
    .then(post => this.setState(prevState => ({
      ...prevState,
      currentPost: post.post
    })))
  }

  render() {
    return (
      <section>
        <Post 
          title={this.state.currentPost.post.title}
          content={this.state.currentPost.post.content}
          author={this.state.currentPost.post.author}
          timestamp={this.state.currentPost.post.timestamp}
          pid={this.state.currentPost.post.pid}
        />
        {/* <AllReplies />
        <ReplyForm /> */}
      </section>
    )
  }
}

export default ExpandedPost