import React, { Component } from 'react';
import './NewPostForm.scss';
import { Link } from 'react-router-dom';
// import { IPost } from '../../types'
import closeIcon from '../../assets/close.svg';
import sendIcon from '../../assets/send.svg';

interface IProps {
  addNewPost: (newPost: IPost) => void;
}

interface IForm {
  title: string;
  content: string;
  disabled: boolean;
}

// class NewPostForm extends Component<IProps, IPost> {
class NewPostForm extends Component<IProps, IForm> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      title: '',
      content: '',
      disabled: true
    }
  }

  handleChange = (event: { target: { name: string; value: string; }; }) => {
    this.setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
    if (this.state.title !== '' && this.state.content !== '') {
      this.setState({ disabled: false });
    }
  }

  submitPost = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (this.state.title !== '' && this.state.content !== '') {
      const newPost = {
        pid: Date.now(),
        uid: 42005,
        ...this.state
      }
      // this.setState({ disabled: false });
      this.props.addNewPost(newPost);
      window.location.assign('/');
      this.clearInputs();
    } else {
      console.log('woops')
      // this.props.stateChange('error', 'Please fill out both fields')
    }
  }

  clearInputs = () => {
    this.setState({ title: '', content: '', disabled: true });
  }

  render() {
    return (
      <form>
        <section className='header'>
          <h1 className='header__title'>New Post</h1>
          <Link to='/'>
            <img className='icon' src={closeIcon} alt="close icon" />
          </Link>
        </section>
        <input
          type='text'
          placeholder='Title of your post*'
          name='title'
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />
        <textarea
          placeholder='Body of your post*'
          cols={30}
          rows={15}
          name='content'
          value={this.state.content}
          onChange={event => this.handleChange(event)}
        />
        <button
          disabled={this.state.disabled}
          className='share'
          onClick={this.submitPost}>
          <img className='icon' src={sendIcon} alt="send icon" />
          <span>Share</span>
        </button>
      </form >
    )
  }
}

export default NewPostForm;
