import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import './ExpandedPost.scss';
import Post from '../Post/Post'
// import AllReplies from '../AllReplies/AllReplies'
import ReplyForm from '../ReplyForm/ReplyForm'
import { IPost } from '../../types'
import { getPost } from '../../apiCalls';
import Loading from '../Loading/Loading'
import AllReplies from '../AllReplies/AllReplies'

interface ICurrentPost {
  pid: number;
  uid: number;
  author: string;
  timestamp: number;
  title: string;
  content: string;
  comments: Array<IReply | undefined>
  replies: Array<IReply>
}

interface IExpandedPost {
  // replies: Array<any>;
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
  match: string
}

// type TParams = { 
//   pid: string, 
//   histroy: any, 
//   location: any
// }

class ExpandedPost extends Component<IExpandedPostProps, IExpandedPost> {
  constructor(props: IExpandedPostProps) {
    super(props)
    this.state = {
      // replies: [],
      currentPost: {}
    }
  };
  
  componentDidMount = () => {
    getPost(this.props.match)
    .then(post => this.setState(prevState => ({
      ...prevState,
      currentPost: post,
      // replies: post.replies
    })))
  }

  renderPost = () => {
    if (this.state.currentPost.message) {
      return (
        <section>
          <Post 
              title={this.state.currentPost.post.title}
              content={this.state.currentPost.post.content}
              author={this.state.currentPost.post.author}
              timestamp={this.state.currentPost.post.timestamp}
              pid={this.state.currentPost.post.pid}
            /> 
          <AllReplies allReplies={this.state.currentPost.post.replies}/>
        </section>
      )
    } else {
      return (
        <Loading />
      )
    }
  }

  addReply = (newReply: string): void => {
    // let totalReplies = this.state.replies.concat(newReply)
    this.setState(prevState => ({
      ...prevState,
      replies: this.state.currentPost.replies
    }))
  }

  render() {
    return (
      <section>
        {this.renderPost()}
        {/* <AllReplies allReplies={this.state.currentPost.post.replies}/> */}
        <ReplyForm addReply={this.addReply} />
      </section>
    )
  }
}

export default ExpandedPost
