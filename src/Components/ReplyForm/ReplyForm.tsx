import React, { Component } from 'react';
import './ReplyForm.scss';
import sendIcon from '../../assets/send.svg';

interface IProps {
  addReply: (newPost: string) => void;
  pid: number;
}

interface IReplyForm {
  reply: IReply,
  disabled: boolean,
}

interface IReply {
  key: number,
  author: string,
  timestamp: number,
  body: string,
  cid: number,
  uid: number,
}

class ReplyForm extends Component<IProps, IReplyForm> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      reply: {
        key: 0,
        author: 'Lara',
        timestamp: 0,
        body: '',
        cid: 0,
        uid: 0,
      },
      disabled: true,
    }
  }

  handleChange = (event: { target: { name: string; value: string; }; }) => {
    this.setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  toggleButton = () => {
    if (this.state.body !== '') {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  submitReply = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    this.props.addReply(this.state.body);
    this.clearInput();
  }

  clearInput = () => {
    this.setState({ body: '' });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Add a comment'
          name='body'
          value={this.state.body}
          onChange={event => this.handleChange(event)}
          onKeyUp={this.toggleButton}
        />
        <button
          disabled={this.state.disabled}
          className='share'
          onClick={this.submitReply}>
          <img className='icon' src={sendIcon} alt="send icon" />
        </button>
      </form >
    )
  }
}

export default ReplyForm;
