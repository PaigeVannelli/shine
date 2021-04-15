import React, { Component } from 'react';
import './NewPostForm.scss';
import { Link } from 'react-router-dom';
import { IPost } from '../../types'
import closeIcon from '../../assets/close.svg';
import sendIcon from '../../assets/send.svg';

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
    console.log(newPost)
    this.props.addNewPost(newPost);
    window.location.assign('/');
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ title: '', content: '' });
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
        {/* <Link */}
        {/* to='/' */}
        {/* style={{ textDecoration: 'none' }} */}
        {/* onClick={() => this.submitPost}> */}
        <button className='share' onClick={this.submitPost}>
          <img className='icon' src={sendIcon} alt="send icon" />
          <span>Share</span>
        </button>
        {/* </Link> */}
      </form >
    )
  }
}

export default NewPostForm;
