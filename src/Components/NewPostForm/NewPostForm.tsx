import React, { Component } from 'react';
import './NewPostForm.scss';
// import React from 'react'

interface IAppState {
  title: string;
  content: string;
}

class NewPostForm extends Component {
  constructor(props: IAppState) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  handleChange = (event: { target: { name: string; value: string; }; }) => {
    this.setState({ [event.target.name]: event.target.value })
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
        <button onClick={event => this.submitPost(event)}>Share</button>
      </form>
    )
  }
}

export default NewPostForm;
