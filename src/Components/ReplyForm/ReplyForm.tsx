import React, { Component } from 'react';
import './ReplyForm.scss';
import sendIcon from '../../assets/send.svg';

interface IProps {
  addReply: (newPost: string) => void;
}

interface IReply {
  reply: string;
  disabled: boolean;
}

class ReplyForm extends Component<IProps, IReply> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      reply: '',
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
    if (this.state.reply !== '') {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  submitReply = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    this.props.addReply(this.state.reply);
    this.clearInput();
  }

  clearInput = () => {
    this.setState({ reply: '' });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Add a comment'
          name='reply'
          value={this.state.reply}
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
