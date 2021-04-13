import React, { Component } from 'react';
import './NewPostForm.scss';
import { Link } from 'react-router-dom';
import { IPost } from '../../types'

interface IProps {
  addNewPost: (newPost: IPost) => void;
}

class NewPostForm extends Component<IProps, IPost> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  handleChange = (event: { target: { name: string; value: string; }; }) => {
    this.setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  submitPost = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const newPost = {
      pid: Date.now(),
      uid: 42005,
      ...this.state
    }
    this.props.addNewPost(newPost)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ title: '', content: '' });
  }

  render() {
    return (
      <form>
        <div className='title-container'>
          <h1>New Post</h1>
        </div>
        <input className='input__title'
          type='text'
          placeholder='Title of your post*'
          name='title'
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />
        <textarea className='input__body'
          placeholder='Body of your post*'
          name='content'
          value={this.state.content}
          onChange={event => this.handleChange(event)}
        />
        <Link to='/' onClick={() => this.submitPost}>
          <button>Share</button>
        </Link>

        {/* <Link to='/' >
          <button onClick={() => this.submitPost}>Share</button>
        </Link> */}
      </form >
    )
  }
}

export default NewPostForm;
