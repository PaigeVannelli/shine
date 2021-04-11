import React, { Component } from 'react';
import './NewPostForm.scss';
// import React from 'react'
class NewPostForm extends Component {
  constructor() {
    super();
    this.state = {
      header = '',
      body = ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitPost = event => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      ...this.state
    }
    this.props.addNewPost(newPost)
    // not sure if we want this new post adding method here
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ header: '', body: '' });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title of your post*'
          name='title'
          value={this.state.header}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Body of your post*'
          name='body'
          value={this.state.body}
          onChange={event => this.handleChange(event)}
        />
      </form>
    )
  }
}

export default NewPostForm;
