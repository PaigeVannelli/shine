import React, { Component } from 'react';
import './NewPostForm.scss';
import { Link } from 'react-router-dom';

interface INewPostFormState {
  title: string;
  content: string;
}

class NewPostForm extends Component<{ addNewPost: any }, INewPostFormState> {
  constructor({ addNewPost }: any) {
    super({ addNewPost });
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
        <input
          type='text'
          placeholder='Title of your post*'
          name='title'
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Body of your post*'
          name='content'
          value={this.state.content}
          onChange={event => this.handleChange(event)}
        />
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <button onClick={event => this.submitPost(event)}>Share</button>
        </Link >
      </form >
    )
  }
}

export default NewPostForm;
