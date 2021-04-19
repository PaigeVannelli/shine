import React, { Component } from 'react';
import './ExpandedPost.scss';
import Post from '../Post/Post'
// import AllReplies from '../AllReplies/AllReplies'
import ReplyForm from '../ReplyForm/ReplyForm'
import { IReply, ICurrentPost } from '../../types'
import { getPost, addReplyCall } from '../../apiCalls';
import Loading from '../Loading/Loading'
import AllReplies from '../AllReplies/AllReplies'
import backIcon from '../../assets/arrow.svg'

interface IExpandedPost {
  currentPost: {
    [key: string]: ICurrentPost,
  };
  error: string
};

interface IExpandedPostProps {
  match: string
}

class ExpandedPost extends Component<IExpandedPostProps, IExpandedPost> {
  constructor(props: IExpandedPostProps) {
    super(props)
    this.state = {
      currentPost: {},
      error: ''
    }
  };

  componentDidMount = () => {
    getPost(this.props.match)
      .then(post => this.setState(prevState => ({
        ...prevState,
        currentPost: post,
      })))
      .catch(error => this.setState({ error: error.message }))
  }

  returnHome = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    window.location.href = '/'
  }

  renderExpandedPost = () => {
    if (this.state.currentPost.message) {
      return (
        <section>
          <section className='post-details-header'>
            <button
              data-cy='expanded-post-back-button'
              className='back-btn'
              onClick={this.returnHome}
            >
              <img className='icon' src={backIcon} alt="back icon" />
            </button>
            <h1 className='post-details-header__title'>Post Details</h1>
          </section>
          <Post
            title={this.state.currentPost.post.title}
            content={this.state.currentPost.post.content}
            author={this.state.currentPost.post.author}
            timestamp={this.state.currentPost.post.timestamp}
            pid={this.state.currentPost.post.pid}
            replies={this.state.currentPost.post.replies}
          />
          {this.checkForReplies()}
          <ReplyForm
            pid={this.state.currentPost.post.pid}
            replyCount={this.state.currentPost.post.replies}
            addReply={this.addReply}
          />
        </section>
      )
    } else if (this.state.error) {
      return (
        <h1>{this.state.error}</h1>
      )
    } else {
      return (
        <Loading />
      )
    }
  }

  checkForReplies = () => {
    if (this.state.currentPost.post.replies.length > 0) {
      return (
        <AllReplies allReplies={this.state.currentPost.post.replies} />
      )
    } else {
      return (
        <h1>Add a comment below!</h1>
      )
    }
  }

  addReply = (newReply: IReply): void => {
    let updatedCurrentPost = this.state.currentPost
    updatedCurrentPost.post.replies.push(newReply)
    this.setState({ currentPost: updatedCurrentPost })
    addReplyCall(this.state.currentPost.post);
  }

  render() {
    return (
      <section>
        {this.renderExpandedPost()}
      </section>
    )
  }
}

export default ExpandedPost
