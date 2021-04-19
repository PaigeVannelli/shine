import React, { Component } from 'react';
import './NewPostForm.scss';
import { Link } from 'react-router-dom';
import { IPost } from '../../types'
import closeIcon from '../../assets/close.svg';
import sendIcon from '../../assets/send.svg';

interface IProps {
  addNewPost: (newPost: IPost) => void;
}

interface IForm {
  title: string;
  content: string;
  author: string;
  disabled: boolean;
}

class NewPostForm extends Component<IProps, IForm> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: '',
      content: '',
      author: '',
      disabled: true
    }
  }

  handleChange = (event: { target: { name: string; value: string; }; }) => {
    this.setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  toggleButton = () => {
    if (this.state.title !== '' && this.state.content !== '') {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  submitPost = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const newPost = {
      timestamp: Date.now(),
      pid: Date.now(),
      uid: 42001,
      title: this.state.title,
      content: this.state.content,
      //Edited merge conflict on 58 and 59
      replies: [],
      author: 'Princess Bubblegum'
    }
    this.props.addNewPost(newPost)
        // .then(data => window.location.assign('/'));
    this.clearInputs();
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
          onKeyUp={this.toggleButton}
        />
        <textarea
          placeholder='Body of your post*'
          cols={30}
          rows={15}
          name='content'
          value={this.state.content}
          onChange={event => this.handleChange(event)}
          onKeyUp={this.toggleButton}
        />
        <button
          data-cy='form-submit-button'
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
