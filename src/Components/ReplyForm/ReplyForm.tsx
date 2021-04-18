import React, { Component } from 'react';
import './ReplyForm.scss';
import sendIcon from '../../assets/send.svg';

interface IProps {
  addReply: (newPost: IReply) => void;
  pid: number;
  replyCount: Array<any>;
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
  cid: string,
  uid: number,
}

class ReplyForm extends Component<IProps, IReplyForm> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      reply: {
        key: 0,
        author: 'Lara',
        timestamp: Date.now(),
        body: '',
        cid: `${this.props.pid}-${this.props.replyCount.length + 1}`,
        uid: 0,
      },
      disabled: true,
    }
  }

  handleChange = (event: { target: { name: string; value: string; }; }) => {
    this.setState(prevState => ({
      reply: {
        ...prevState.reply,
        [event.target.name]: event.target.value
      }
    })
    )
  }

  toggleButton = () => {
    if (this.state.reply.body !== '') {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  submitReply = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    this.assignTimestamp();
    this.props.addReply(this.state.reply);
    this.clearInput();
  }

  assignTimestamp = () => {
    this.setState(prevState => ({
      reply: {
        ...prevState.reply,
        timestamp: Date.now()
      }
    })
    )
  }

  clearInput = () => {
    this.setState(prevState => ({
      reply: {
        ...prevState.reply,
        body: '',
        cid: `${this.props.pid}-${this.props.replyCount.length + 1}`,
      }
    })
    )
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Add a comment'
          name='body'
          value={this.state.reply.body}
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
